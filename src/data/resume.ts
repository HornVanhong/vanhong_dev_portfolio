export const education = [
  {
    period: "Secondary Education",
    title: "High School Diploma",
    place: "Vathanak Chumnolem High School",
    description: "Completed secondary education before pursuing computer science.",
    logo: "/Image/logo/HighSchool.webp",
    photo: true,
  },
  {
    period: "2022 — 2025",
    title: "Bachelor of Computer Science, Cyber Security",
    place: "Royal University of Phnom Penh (RUPP) · MPTC Scholarship",
    description:
      "Specialized in cyber security within a computer science degree, awarded on an MPTC scholarship.",
    logo: "/Image/logo/Rupp_logo.webp",
    photo: false,
  },
  {
    period: "Completed",
    title: "Cyber Security Program",
    place: "ANT Technology Training Center",
    description:
      "Network security architecture, vulnerability assessment, and Linux system configuration.",
    logo: "/Image/logo/ANT.png",
    photo: false,
  },
  {
    period: "Feb — Jul 2026",
    title: "Software Experts Training Program (14th Basic Course)",
    place: "Korea Software HRD Center (KSHRD)",
    description:
      "810 hours of full-time, intensive training in Java, Spring Boot, and React Native — lectures, lab research, testing, and group projects.",
    logo: "/Image/logo/KSHRD.webp",
    photo: false,
  },
  {
    period: "2022 — 2023",
    title: "Flutter & Networking Fundamentals",
    place: "Instinct Institute · Cisco Networking Academy",
    description: "Flutter 3 mobile development and core networking fundamentals.",
    logo: "/Image/logo/Instinct.jpeg",
    photo: false,
  },
];

type Certification = {
  title: string;
  issuer: string;
  year: string;
  file?: string;
  highlight?: string;
};

export const certifications: Certification[] = [
  {
    title: "Certificate of Excellence — Coding Challenge 2026",
    issuer: "Korea Software HRD Center · KSGA",
    year: "May 2026",
    file: "/certificate/HRD/Coding2.jpg",
    highlight: "Top 1 Award",
  },
  {
    title: "Certificate of Participation — Coding Challenge 2026",
    issuer: "Korea Software HRD Center · KSGA",
    year: "May 2026",
    file: "/certificate/HRD/Coding1.jpeg",
  },
  {
    title: "Certificate of Training — Software Experts Program",
    issuer: "Korea Software HRD Center · KSGA",
    year: "Jul 2026",
    file: "/certificate/HRD/HRD_Basic_Certificate.png",
  },
  {
    title: "Cyber Security Specialist Certificate",
    issuer: "ANT Technology Training Center",
    year: "Completed",
    file: "/certificate/cyber.pdf",
  },
  {
    title: "Cyber Security Training Certificate (Full Program)",
    issuer: "ANT Technology Training Center",
    year: "Completed",
    file: "/certificate/FullCertificate.pdf",
  },
];

export const experience = [
  {
    period: "2023 — 2024",
    role: "Intern — Digital Banking",
    place: "RHB Bank Cambodia",
    description:
      "Built React Native features for the mobile banking app, improved frontend stability, collaborated on UX/UI, and reviewed pull requests.",
    logo: "/Image/logo/RHB.webp",
    photo: false,
  },
  {
    period: "2022 — 2023",
    role: "Data Labeler",
    place: "Digital Data Divide (DDD)",
    description:
      "Tagged, classified, and annotated data for machine learning pipelines.",
    logo: "/Image/logo/DDD.png",
    photo: false,
  },
];
