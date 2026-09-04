import type { LucideIcon } from "lucide-react";
import {
  Network,
  FileText,
  Languages,
  GraduationCap,
  MessageCircle,
  Mic,
  ScanText,
  Smartphone,
} from "lucide-react";

export type ProjectCategory = "coding" | "ai" | "cybersecurity";

export type Project = {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  icon: LucideIcon;
  gradient: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "cyberlab",
    title: "CyberLab",
    description:
      "A cybersecurity laboratory and network analysis toolkit for practicing reconnaissance and traffic inspection.",
    category: "cybersecurity",
    tags: ["TypeScript", "Network Security"],
    icon: Network,
    gradient: "from-emerald-500/20 via-cyan-500/10 to-transparent",
    demo: "https://cyber-lab-roan.vercel.app",
  },
  {
    id: "smartcv-v2",
    title: "SmartCV V2",
    description:
      "A next-generation CV and resume builder with live editing and PDF generation.",
    category: "coding",
    tags: ["TypeScript", "Next.js", "PDF Generation"],
    icon: FileText,
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    demo: "https://smart-cvv-2.vercel.app",
  },
  {
    id: "korea-learn",
    title: "Korea-Learn",
    description:
      "An interactive platform for practicing Korean vocabulary and grammar.",
    category: "coding",
    tags: ["TypeScript", "Next.js"],
    icon: Languages,
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    demo: "https://korea-learn.vercel.app",
  },
  {
    id: "english-learn",
    title: "English-Learn",
    description:
      "An interactive English language learning platform with practice exercises.",
    category: "coding",
    tags: ["TypeScript", "Next.js"],
    icon: GraduationCap,
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
    demo: "https://english-learn-zeta-taupe.vercel.app",
  },
  {
    id: "confessly",
    title: "Confessly",
    description:
      "An anonymous confession social platform for sharing posts without revealing identity.",
    category: "coding",
    tags: ["TypeScript", "Next.js"],
    icon: MessageCircle,
    gradient: "from-purple-500/20 via-fuchsia-500/10 to-transparent",
    demo: "https://confessly-m4nn.vercel.app",
  },
  {
    id: "audioscribe",
    title: "AudioScribe",
    description:
      "A speech-to-text web app that transcribes spoken audio into text.",
    category: "ai",
    tags: ["TypeScript", "Speech-to-Text"],
    icon: Mic,
    gradient: "from-fuchsia-500/20 via-purple-500/10 to-transparent",
    demo: "https://audio-scribe-delta.vercel.app",
  },
  {
    id: "textsnap",
    title: "TextSnap",
    description:
      "An image-to-text OCR web app for extracting text straight from photos.",
    category: "ai",
    tags: ["TypeScript", "OCR"],
    icon: ScanText,
    gradient: "from-cyan-500/20 via-fuchsia-500/10 to-transparent",
    demo: "https://text-snap-navy.vercel.app",
  },
  {
    id: "dram-translator",
    title: "DramTranslatorApp",
    description:
      "A cross-platform mobile app for translating drama subtitles on the go.",
    category: "coding",
    tags: ["Flutter", "Dart"],
    icon: Smartphone,
    gradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
    github: "https://github.com/HornVanhong/DramTranslatorApp",
  },
];

export const projectFilters: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Coding", value: "coding" },
  { label: "AI", value: "ai" },
  { label: "Cybersecurity", value: "cybersecurity" },
];
