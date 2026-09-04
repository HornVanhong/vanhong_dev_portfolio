<div align="center">

# 🛡️ Horn Vanhong — Developer Portfolio

**Full-Stack Developer & Cybersecurity Enthusiast**

Building modern, resilient web applications, exploring AI/RAG integrations, and developing practical cybersecurity solutions.

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

[Live Portfolio](https://vanhong-dev.vercel.app) • [GitHub Profile](https://github.com/HornVanhong) • [LinkedIn](https://linkedin.com/in/horn-vanhong-45366324a) • [Telegram](https://t.me/vanhongVH)

</div>

---

## 📖 Overview

This repository houses the personal developer portfolio for **Horn Vanhong**, crafted with high performance, cybersecurity-inspired aesthetic, and smooth micro-interactions in mind. Designed with a modern glassmorphism UI, terminal HUD elements, and responsive mobile architecture.

---

## ✨ Key Features

- **Cybersecurity & Terminal Aesthetic**: Futuristic HUD brackets, neon scan lines, status indicator pulses, and interactive terminal-styled snippets.
- **Glassmorphic Navigation**:
  - Desktop floating pill navbar with active section detection via `IntersectionObserver`.
  - Responsive mobile drawer with opaque backdrop blur (`backdrop-blur-2xl`), scroll locking, touch-friendly section icons, and quick-action buttons.
- **Dark & Light Mode**: Seamless theme switching with system preference detection, persistent local storage, and zero flash on load.
- **Interactive Projects Showcase**: Filterable showcase across Full-Stack, AI, and Cybersecurity projects with live demo and GitHub repository links.
- **Cybersecurity Labs**: Dedicated showcase of security laboratory experiments (network analysis, recon, Wireshark, Nmap, and Linux security tools).
- **Skills Matrix**: Categorized proficiency grid covering Frontend, Backend, Databases, AI/LLM, and Cybersecurity tooling.
- **Education & Experience Timeline**: Interactive chronological milestones detailing academic background and professional growth.
- **GitHub Activity Simulation**: Visual contribution activity grid reflecting commit consistency.
- **Resume / CV Integration**: Direct preview and downloadable PDF resume.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.react.dev/) & Custom Brand SVGs |
| **Typography** | Inter & JetBrains Mono (via `next/font`) |

---

## 📂 Project Structure

```text
vanhong-dev-portfolio/
├── public/
│   ├── Horn_Vanhong_CV.pdf     # Downloadable resume
│   └── Image/
│       └── vanhong_profile.jpg  # Profile photo
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css          # Design tokens, custom animations, theme vars
│   │   ├── layout.tsx           # Root layout, fonts, theme initialization script
│   │   └── page.tsx             # Main single-page portfolio layout
│   ├── components/
│   │   ├── ui/                  # Reusable UI primitives (Button, Badge, Reveal, etc.)
│   │   ├── icons/               # Custom brand icons (GitHub, LinkedIn)
│   │   ├── Navbar.tsx           # Responsive header & mobile navigation drawer
│   │   ├── Hero.tsx             # Terminal HUD hero section with profile frame
│   │   ├── About.tsx            # Personal background & key technical highlights
│   │   ├── Skills.tsx           # Interactive skill cards & category pills
│   │   ├── Projects.tsx         # Filterable portfolio project grid
│   │   ├── Cybersecurity.tsx    # Security labs, tools & certifications
│   │   ├── Timeline.tsx         # Career & education milestones
│   │   ├── GitHubActivity.tsx   # Contribution graph simulation
│   │   ├── Resume.tsx           # Resume preview & PDF download
│   │   ├── Contact.tsx          # Direct contact form & communication channels
│   │   ├── Footer.tsx           # Footer with copyright and back-to-top link
│   │   └── ThemeToggle.tsx      # Dark/Light mode toggle component
│   ├── data/
│   │   ├── site.ts              # Global metadata, navigation links, and socials
│   │   ├── projects.ts          # Project entries, descriptions, and URLs
│   │   ├── skills.ts            # Tech stack categories and skills
│   │   ├── labs.ts              # Cybersecurity experiments and toolsets
│   │   ├── timeline.ts          # Milestones and career history
│   │   └── resume.ts            # Experience, education, and credentials
│   └── lib/
│       └── utils.ts             # Tailwind class merger (`cn`)
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or higher
- **npm**, **pnpm**, or **yarn**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/HornVanhong/vanhong_dev_portfolio.git
   cd vanhong_dev_portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) (or the port specified in terminal).

---

## ⚙️ Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Runs the Next.js development server with Turbopack |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Runs the built production server |
| `npm run lint` | Checks code formatting and linter rules with ESLint |

---

## ✏️ Customization

All portfolio data is separated into clean, typed configuration files under `src/data/`:

- **Site & Socials**: Edit [`src/data/site.ts`](src/data/site.ts) to update your name, title, bio, email, and social profiles.
- **Projects**: Edit [`src/data/projects.ts`](src/data/projects.ts) to add or modify projects and repository links.
- **Skills**: Edit [`src/data/skills.ts`](src/data/skills.ts) to adjust tech skills and proficiency categories.
- **Cybersecurity Labs**: Edit [`src/data/labs.ts`](src/data/labs.ts) for hands-on security projects.
- **Experience Timeline**: Edit [`src/data/timeline.ts`](src/data/timeline.ts) for job and study milestones.

---

## 🌐 Deployment

The project is optimized for zero-config deployment on [Vercel](https://vercel.com/):

1. Push your repository to GitHub.
2. Import the project in your Vercel Dashboard.
3. Deploy — Next.js will automatically detect the configuration and build the application.

---

## 📬 Contact & Connect

- **Name**: Horn Vanhong
- **Email**: [vanhonghorn37@gmail.com](mailto:vanhonghorn37@gmail.com)
- **LinkedIn**: [Horn Vanhong](https://linkedin.com/in/horn-vanhong-45366324a)
- **Telegram**: [@vanhongVH](https://t.me/vanhongVH)
- **GitHub**: [@HornVanhong](https://github.com/HornVanhong)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

