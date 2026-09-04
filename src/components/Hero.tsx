"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Send, ShieldCheck, Terminal } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "./ui/Button";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

const socials = [
  { icon: GithubIcon, href: site.social.github, label: "GitHub" },
  { icon: LinkedinIcon, href: site.social.linkedin, label: "LinkedIn" },
  { icon: Send, href: site.social.telegram, label: "Telegram" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="section relative flex min-h-screen items-center overflow-hidden pt-32"
    >
      <div className="glow-blob left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 bg-accent-blue/20" />
      <div className="glow-blob -left-40 top-1/3 h-[380px] w-[380px] bg-accent-cyan/10" />
      <div className="glow-blob -right-40 bottom-0 h-[420px] w-[420px] bg-accent-indigo/15" />
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 font-mono text-xs text-accent-cyan">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Available for opportunities
          </span>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            {site.name.split(" ")[0]}{" "}
            <span className="text-gradient">{site.name.split(" ").slice(1).join(" ")}</span>
          </h1>

          <p className="mt-4 font-mono text-lg text-accent-cyan sm:text-xl">
            {site.role}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {site.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#projects" icon={<ArrowRight size={16} />}>
              View Projects
            </Button>
            <Button href={site.resumeUrl} variant="secondary" external icon={<Download size={16} />}>
              Download CV
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="glass glass-hover flex h-11 w-11 items-center justify-center rounded-xl text-muted hover:text-accent-cyan"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="animate-float">
            {/* Gradient-bordered photo frame */}
            <div className="relative rounded-[2rem] bg-gradient-to-br from-accent-cyan via-accent-blue to-accent-indigo p-[2px] shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-2px)] bg-surface">
                <Image
                  src="/Image/vanhong_profile.jpg"
                  alt={site.name}
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 420px, 560px"
                  className="object-cover"
                  style={{ objectPosition: "58% 8%" }}
                />

                {/* Bottom vignette for caption legibility only */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />

                {/* Scan line */}
                <div className="pointer-events-none absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-accent-cyan/15 to-transparent animate-scan" />

                {/* HUD corner brackets */}
                <span className="absolute left-3 top-3 h-6 w-6 rounded-tl-lg border-l-2 border-t-2 border-accent-cyan/70" />
                <span className="absolute right-3 top-3 h-6 w-6 rounded-tr-lg border-r-2 border-t-2 border-accent-cyan/70" />
                <span className="absolute bottom-3 left-3 h-6 w-6 rounded-bl-lg border-b-2 border-l-2 border-accent-cyan/70" />
                <span className="absolute bottom-3 right-3 h-6 w-6 rounded-br-lg border-b-2 border-r-2 border-accent-cyan/70" />

                {/* Caption bar */}
                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 backdrop-blur-sm">
                  <span className="font-mono text-xs text-white/90">
                    <span className="text-accent-cyan">$</span> whoami
                  </span>
                  <span className="font-mono text-xs text-emerald-300">
                    horn_vanhong
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="glass absolute -left-4 -top-5 flex items-center gap-2 rounded-xl px-3.5 py-2.5 shadow-xl sm:-left-8">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span className="font-mono text-xs text-foreground">Security-minded</span>
            </div>

            {/* Floating mini terminal snippet */}
            <div className="glass absolute -bottom-8 -right-3 w-52 overflow-hidden rounded-xl shadow-xl sm:-right-8 sm:w-60">
              <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
                <Terminal size={11} className="text-muted" />
                <span className="font-mono text-[10px] text-muted">stack.ts</span>
              </div>
              <div className="space-y-1 p-3 font-mono text-[10.5px] leading-relaxed sm:text-[11px]">
                <p><span className="text-purple-400">const</span> <span className="text-cyan-300">focus</span> = [</p>
                <p className="pl-3 text-emerald-300">&quot;AI / RAG&quot;,</p>
                <p className="pl-3 text-emerald-300">&quot;Cybersecurity&quot;,</p>
                <p>];</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
