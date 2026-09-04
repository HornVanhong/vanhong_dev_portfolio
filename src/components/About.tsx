import {
  Layers,
  Server,
  BrainCircuit,
  Database,
  ShieldCheck,
  TerminalSquare,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Badge } from "./ui/Badge";

const highlights = [
  { icon: Layers, label: "Full-stack development" },
  { icon: Server, label: "Backend development" },
  { icon: BrainCircuit, label: "AI / LLM / RAG" },
  { icon: Database, label: "Database technologies" },
  { icon: ShieldCheck, label: "Cybersecurity & network security" },
  { icon: TerminalSquare, label: "Linux & security laboratories" },
];

const currentlyLearning = [
  "Network security architecture",
  "Vulnerability assessment",
  "Linux system hardening",
];

export function About() {
  return (
    <section id="about" className="section relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Full-stack builder with a security-first mindset"
          description="A snapshot of how I work, what I focus on, and what I'm learning right now."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="glass rounded-2xl p-7 sm:p-9">
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                I&apos;m a Computer Science graduate (Cyber Security specialization,
                Royal University of Phnom Penh) with 3+ years of hands-on IT experience
                across 30+ personal and academic projects. I enjoy turning ideas into
                working products — from a database schema and API, all the way to a
                polished interface — and I&apos;m building practical skills in
                artificial intelligence, working with LLMs and retrieval-augmented
                generation to make applications smarter and more useful.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                I also treat cybersecurity as a core part of how I build, not an
                afterthought. Through the ANT Technology Training Center cyber
                security program and my own Linux-based labs, I practice network
                scanning, traffic analysis, and web application testing — so I
                understand how the systems I build can be attacked, and how to
                defend them.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl border border-border bg-surface/40 px-4 py-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20 text-accent-cyan">
                      <item.icon size={16} />
                    </span>
                    <span className="text-sm text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="glass glass-hover flex h-full flex-col rounded-2xl p-7 sm:p-9">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-cyan to-accent-blue text-[#03101c]">
                <Sparkles size={18} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                Currently Learning
              </h3>
              <p className="mt-2 text-sm text-muted">
                A rolling list of what&apos;s on my desk right now.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {currentlyLearning.map((item) => (
                  <Badge key={item} className="text-foreground">
                    {item}
                  </Badge>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <div className="flex items-center justify-between border-t border-border pt-5 text-sm">
                  <span className="text-muted">Approach</span>
                  <span className="font-mono text-accent-cyan">build → secure → innovate</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
