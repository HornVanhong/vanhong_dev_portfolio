import { timeline } from "@/data/timeline";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Timeline() {
  return (
    <section className="section relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Developer Journey"
          title="How I got here"
          description="From first lines of code to building AI-powered, security-conscious applications."
        />

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute top-1 bottom-1 left-[15px] w-px bg-gradient-to-b from-accent-cyan via-accent-blue to-transparent sm:left-[19px]" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06} className="relative">
                <span className="absolute -left-8 top-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-accent-cyan/30 bg-background text-accent-cyan sm:-left-10 sm:h-9 sm:w-9">
                  <item.icon size={15} />
                </span>
                <div className="glass glass-hover rounded-2xl p-5 sm:p-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
                    {item.year}
                  </span>
                  <h3 className="mt-1.5 text-base font-semibold text-foreground sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
