export type Repo = {
  name: string;
  description: string;
  language: string;
  url: string;
};

export const repos: Repo[] = [
  {
    name: "CyberLab",
    description: "Cybersecurity laboratory and network analysis toolkit.",
    language: "TypeScript",
    url: "https://cyber-lab-roan.vercel.app",
  },
  {
    name: "SmartCV",
    description: "CV and resume builder with a clean editing flow.",
    language: "TypeScript",
    url: "https://smart-cv-two.vercel.app",
  },
  {
    name: "DramTranslatorApp",
    description: "Cross-platform mobile app for translating drama subtitles.",
    language: "Dart",
    url: "https://github.com/HornVanhong/DramTranslatorApp",
  },
  {
    name: "Quiz-for-Android-Developer",
    description: "Self-assessment quiz app for Android developers.",
    language: "Kotlin",
    url: "https://github.com/HornVanhong/Quiz-for-Android-Developer",
  },
  {
    name: "Smart_App",
    description: "Mobile app UI project (SmartNas).",
    language: "JavaScript",
    url: "https://github.com/HornVanhong/Smart_App",
  },
  {
    name: "JongNham Restaurant",
    description: "Restaurant menu and ordering interface.",
    language: "HTML",
    url: "https://jong-nham-resturant.vercel.app",
  },
];

export const coreLanguages = [
  { name: "TypeScript", color: "#22d3ee" },
  { name: "JavaScript", color: "#3b82f6" },
  { name: "Java", color: "#6366f1" },
  { name: "Kotlin", color: "#a855f7" },
  { name: "Dart", color: "#10b981" },
  { name: "HTML", color: "#f97316" },
];
