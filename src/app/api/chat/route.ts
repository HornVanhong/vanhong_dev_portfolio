import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import { NextRequest } from "next/server";
import { SYSTEM_PROMPT } from "@/lib/assistant-context";

export const runtime = "nodejs";

const MODEL = "gemini-flash-lite-latest";
const MAX_MESSAGE_LENGTH = 1500;
const MAX_HISTORY = 12;

const RATE_LIMIT = 20; // requests
const RATE_WINDOW_MS = 10 * 60 * 1000; // per 10 minutes per IP

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = buckets.get(ip);
  if (!bucket || now > bucket.resetAt) {
    buckets.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (bucket.count >= RATE_LIMIT) return false;
  bucket.count += 1;
  return true;
}

type ChatMessage = { role: "user" | "assistant"; content: string };

function isValidHistory(value: unknown): value is ChatMessage[] {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.every(
      (m) =>
        m &&
        typeof m === "object" &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.length > 0 &&
        m.content.length <= MAX_MESSAGE_LENGTH
    )
  );
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "The AI assistant isn't configured yet. Missing GEMINI_API_KEY." }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!checkRateLimit(ip)) {
    return new Response(
      JSON.stringify({ error: "You've hit the message limit for now — please try again later." }),
      { status: 429, headers: { "Content-Type": "application/json" } }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request body." }), { status: 400 });
  }

  const messages = (body as { messages?: unknown })?.messages;
  if (!isValidHistory(messages)) {
    return new Response(JSON.stringify({ error: "Invalid message history." }), { status: 400 });
  }
  if (messages[messages.length - 1].role !== "user") {
    return new Response(JSON.stringify({ error: "Last message must be from the user." }), {
      status: 400,
    });
  }

  const trimmedHistory = messages.slice(-MAX_HISTORY);
  const contents = trimmedHistory.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  const ai = new GoogleGenAI({ apiKey });

  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        const response = await ai.models.generateContentStream({
          model: MODEL,
          contents,
          config: {
            systemInstruction: SYSTEM_PROMPT,
            thinkingConfig: { thinkingLevel: ThinkingLevel.MINIMAL },
            maxOutputTokens: 500,
          },
        });

        for await (const chunk of response) {
          if (chunk.text) controller.enqueue(encoder.encode(chunk.text));
        }
        controller.close();
      } catch (err) {
        const message = err instanceof Error ? err.message : "The assistant hit an unexpected error.";
        controller.enqueue(encoder.encode(`\n\n[error: ${message}]`));
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
