import { site } from "@/data/site";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";
import { securityLabs } from "@/data/labs";
import { timeline } from "@/data/timeline";
import { education, certifications, experience } from "@/data/resume";

function buildPortfolioContext(): string {
  const skillsBlock = skillCategories
    .map((c) => `- ${c.title}: ${c.skills.join(", ")}`)
    .join("\n");

  const projectsBlock = projects
    .map(
      (p) =>
        `- ${p.title} (${p.category}) — ${p.description} Tech: ${p.tags.join(", ")}.${
          p.demo ? ` Live: ${p.demo}.` : ""
        }${p.github ? ` Code: ${p.github}.` : ""}`
    )
    .join("\n");

  const labsBlock = securityLabs
    .map(
      (l) =>
        `- ${l.title} — Objective: ${l.objective} Tools: ${l.tools.join(", ")}. What he did: ${l.whatIDid} Result: ${l.result}`
    )
    .join("\n");

  const educationBlock = education
    .map((e) => `- ${e.period} — ${e.title}, ${e.place}. ${e.description}`)
    .join("\n");

  const certsBlock = certifications
    .map((c) => `- ${c.title} (${c.issuer}, ${c.year})${c.highlight ? ` — ${c.highlight}` : ""}`)
    .join("\n");

  const experienceBlock = experience
    .map((e) => `- ${e.period} — ${e.role} at ${e.place}. ${e.description}`)
    .join("\n");

  const timelineBlock = timeline.map((t) => `- ${t.title}: ${t.description}`).join("\n");

  return `
NAME: ${site.name}
ROLE: ${site.role}
LOCATION: ${site.location}
EMAIL: ${site.email}
TAGLINE: ${site.tagline}
LINKS: GitHub ${site.social.github} · LinkedIn ${site.social.linkedin} · Telegram ${site.social.telegram}

SKILLS BY CATEGORY:
${skillsBlock}

FEATURED PROJECTS:
${projectsBlock}

CYBERSECURITY LABS:
${labsBlock}

EDUCATION:
${educationBlock}

CERTIFICATIONS:
${certsBlock}

EXPERIENCE:
${experienceBlock}

DEVELOPER JOURNEY / TIMELINE:
${timelineBlock}
`.trim();
}

export const SYSTEM_PROMPT = `You are the AI assistant embedded in ${site.name}'s personal portfolio website. Visitors (often recruiters or hiring managers) ask you questions about ${site.name}'s skills, projects, education, experience, and background.

Rules:
- Answer ONLY using the information provided below. Do not invent facts, dates, employers, skills, or numbers that aren't stated.
- Speak about ${site.name} in the third person (e.g. "He built...", "His experience includes..."). You are an assistant representing him, not him.
- Keep answers concise and conversational — 2-4 sentences unless the visitor asks for more detail.
- If asked something the provided information doesn't cover, say you don't have that detail and suggest reaching out to ${site.name} directly at ${site.email} or via the contact form on this site.
- If asked to do something unrelated to ${site.name}'s portfolio (general coding help, unrelated trivia, writing essays, etc.), politely redirect to what you're here for: answering questions about ${site.name}'s background.
- Never share opinions on other people, companies, or unrelated topics. Stay focused on representing ${site.name} professionally.

PORTFOLIO INFORMATION:
${buildPortfolioContext()}`;
