"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Send, X, Loader2, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type ChatMessage = { role: "user" | "assistant"; content: string };

const STARTERS = [
  "What are Horn's top skills?",
  "Tell me about the CyberLab project",
  "What's his education background?",
  "Is he open to internships?",
];

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClickOutside(e: MouseEvent) {
      if (open && panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => null);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: data?.error || "Something went wrong. Please try again in a moment.",
          },
        ]);
        setLoading(false);
        return;
      }

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          const last = updated[updated.length - 1];
          updated[updated.length - 1] = { ...last, content: last.content + chunk };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Connection error — please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        className={cn(
          "fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent-cyan to-accent-blue text-[#03101c] shadow-2xl transition-transform duration-300 btn-glow hover:scale-105 sm:bottom-6 sm:right-6",
          open && "scale-95"
        )}
      >
        {!open && (
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-accent-cyan/40" />
        )}
        {open ? <X size={22} /> : <Bot size={24} />}
      </button>

      {open && (
        <div
          ref={panelRef}
          className="mobile-nav-panel fixed bottom-24 right-5 z-50 flex h-[min(600px,75vh)] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl shadow-2xl sm:right-6"
        >
          <div className="flex items-center gap-2.5 border-b border-border px-4 py-3.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue text-[#03101c]">
              <Sparkles size={15} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-foreground">AI Assistant</p>
              <p className="truncate text-[11px] text-muted">
                Ask me about {site.name}&apos;s work
              </p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.length === 0 && (
              <div className="space-y-3">
                <p className="text-xs leading-relaxed text-muted">
                  Hi! I&apos;m an AI assistant trained on {site.name}&apos;s portfolio. Ask me
                  about his skills, projects, or background.
                </p>
                <div className="flex flex-col gap-2">
                  {STARTERS.map((s) => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="rounded-lg border border-border bg-surface/60 px-3 py-2 text-left text-xs text-foreground transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}
              >
                <div
                  className={cn(
                    "max-w-[85%] whitespace-pre-wrap rounded-xl px-3.5 py-2.5 text-sm leading-relaxed",
                    m.role === "user"
                      ? "bg-gradient-to-r from-accent-cyan to-accent-blue text-[#03101c]"
                      : "border border-border bg-surface/60 text-foreground"
                  )}
                >
                  {m.content || (
                    <Loader2 size={14} className="animate-spin text-muted" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="flex items-center gap-2 border-t border-border p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              maxLength={1500}
              disabled={loading}
              className="w-full flex-1 rounded-lg border border-border bg-surface/60 px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent-cyan/50 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-accent-cyan to-accent-blue text-[#03101c] transition-opacity disabled:opacity-50"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
