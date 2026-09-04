import type { LucideIcon } from "lucide-react";
import {
  GraduationCap,
  Code2,
  Globe,
  Server,
  BrainCircuit,
  ShieldCheck,
  Rocket,
} from "lucide-react";

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const timeline: TimelineItem[] = [
  {
    year: "2022 — 2025",
    title: "Computer Science at RUPP",
    description:
      "Bachelor of Computer Science with a Cyber Security specialization at the Royal University of Phnom Penh, on an MPTC Scholarship.",
    icon: GraduationCap,
  },
  {
    year: "Step 1",
    title: "Programming Journey Begins",
    description:
      "Started with core programming fundamentals in Java and Python, learning logic before frameworks.",
    icon: Code2,
  },
  {
    year: "Step 2",
    title: "Web Development",
    description:
      "Moved into building real interfaces and full pages with JavaScript, TypeScript, React, and Next.js.",
    icon: Globe,
  },
  {
    year: "Step 3",
    title: "Backend Development",
    description:
      "Learned to design APIs and services with Spring Boot and Laravel, backed by PostgreSQL and MySQL.",
    icon: Server,
  },
  {
    year: "Step 4",
    title: "AI & LLM Exploration",
    description:
      "Started building retrieval-augmented generation systems using embeddings, vector databases, and local LLMs.",
    icon: BrainCircuit,
  },
  {
    year: "Step 5",
    title: "Cybersecurity Practice",
    description:
      "Set up home labs with Kali Linux to practice scanning, packet analysis, and web application security testing.",
    icon: ShieldCheck,
  },
  {
    year: "What's Next",
    title: "Future Goals",
    description:
      "Deepen offensive security skills toward a recognized certification, and ship production-grade AI-powered applications.",
    icon: Rocket,
  },
];
