import { ShieldCheck } from "lucide-react";
import { securityLabs } from "@/data/labs";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Badge } from "./ui/Badge";

const rows: { key: "objective" | "whatIDid" | "result"; label: string }[] = [
  { key: "objective", label: "Objective" },
  { key: "whatIDid", label: "What I Did" },
  { key: "result", label: "Result" },
];

export function Cybersecurity() {
  return (
    <section id="cybersecurity" className="section relative overflow-hidden">
      <div className="glow-blob left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-emerald-500/10" />
      <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_5%,transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Cybersecurity Labs"
          title="Hands-on security practice"
          description="Practical exercises where I attack, analyze, and defend systems in isolated lab environments."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {securityLabs.map((lab, i) => (
            <Reveal key={lab.title} delay={(i % 2) * 0.1}>
              <div className="glass glass-hover h-full overflow-hidden rounded-2xl border-emerald-500/10">
                <div className="flex items-center gap-3 border-b border-border bg-emerald-500/[0.04] px-5 py-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                    <lab.icon size={18} />
                  </span>
                  <h3 className="font-mono text-sm font-semibold text-foreground sm:text-base">
                    {lab.title}
                  </h3>
                  <ShieldCheck size={14} className="ml-auto text-emerald-500/50" />
                </div>

                <div className="space-y-4 p-5">
                  <div className="flex flex-wrap gap-2">
                    {lab.tools.map((tool) => (
                      <Badge key={tool} className="border-emerald-500/20 text-emerald-300">
                        {tool}
                      </Badge>
                    ))}
                  </div>

                  {rows.map((row) => (
                    <div key={row.key} className="flex gap-3 text-sm">
                      <span className="w-24 shrink-0 font-mono text-xs uppercase tracking-wide text-emerald-400/80">
                        {row.label}
                      </span>
                      <span className="text-muted">{lab[row.key]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
