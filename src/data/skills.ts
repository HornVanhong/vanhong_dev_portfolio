import type { LucideIcon } from "lucide-react";
import {
  Code2,
  LayoutTemplate,
  Server,
  Database,
  BrainCircuit,
  ShieldCheck,
} from "lucide-react";

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  description: string;
  skills: string[];
  accent: string;
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: Code2,
    description: "Core languages I write and reason in daily.",
    skills: ["Java", "Python", "PHP", "JavaScript", "TypeScript", "Dart"],
    accent: "from-cyan-400 to-blue-500",
  },
  {
    title: "Frontend",
    icon: LayoutTemplate,
    description: "Building fast, accessible, and polished interfaces.",
    skills: ["Next.js", "React", "Tailwind CSS", "Flutter"],
    accent: "from-blue-400 to-indigo-500",
  },
  {
    title: "Backend",
    icon: Server,
    description: "Designing reliable APIs and server-side systems.",
    skills: ["Spring Boot", "Laravel", "REST API"],
    accent: "from-indigo-400 to-purple-500",
  },
  {
    title: "Database",
    icon: Database,
    description: "Relational and vector data storage for real products.",
    skills: ["PostgreSQL", "MySQL", "ChromaDB", "Qdrant", "pgvector"],
    accent: "from-cyan-400 to-teal-500",
  },
  {
    title: "AI / LLM",
    icon: BrainCircuit,
    description: "Applying LLMs to practical retrieval-augmented systems.",
    skills: ["RAG", "Embeddings", "Vector Database", "LLM", "Ollama"],
    accent: "from-fuchsia-400 to-blue-500",
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    description: "Hands-on offensive and defensive security practice.",
    skills: ["Kali Linux", "Nmap", "Wireshark", "Burp Suite", "OWASP", "Network Security"],
    accent: "from-emerald-400 to-cyan-500",
  },
];
