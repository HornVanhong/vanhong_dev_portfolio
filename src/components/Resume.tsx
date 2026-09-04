import { Download, GraduationCap, Award, Briefcase, FolderGit2, Trophy, ExternalLink } from "lucide-react";
import { site } from "@/data/site";
import { education, certifications, experience } from "@/data/resume";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { LogoBadge } from "./ui/LogoBadge";

export function Resume() {
  return (
    <section id="resume" className="section relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Resume"
          title="A summary of my background"
          description="Education, skills, projects, certifications, and experience — all in one place."
        />

        <Reveal className="mb-10 flex justify-center">
          <Button href={site.resumeUrl} external icon={<Download size={16} />} className="text-base">
            Download Full CV (PDF)
          </Button>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass glass-hover h-full rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-cyan/15 text-accent-cyan">
                  <GraduationCap size={17} />
                </span>
                <h3 className="text-base font-semibold text-foreground">Education</h3>
              </div>
              <div className="mt-5 space-y-4">
                {education.map((item) => (
                  <div key={item.title} className="flex gap-3.5">
                    <LogoBadge src={item.logo} alt={item.place} photo={item.photo} />
                    <div className="min-w-0 flex-1 border-l-2 border-accent-cyan/30 pl-4">
                      <p className="font-mono text-xs text-accent-cyan">{item.period}</p>
                      <p className="mt-1 text-sm font-medium text-foreground">{item.title}</p>
                      <p className="text-xs text-muted">{item.place}</p>
                      <p className="mt-1 text-sm text-muted">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="glass glass-hover h-full rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-blue/15 text-accent-blue">
                  <Briefcase size={17} />
                </span>
                <h3 className="text-base font-semibold text-foreground">Experience</h3>
              </div>
              <div className="mt-5 space-y-4">
                {experience.map((item) => (
                  <div key={item.role} className="flex gap-3.5">
                    <LogoBadge src={item.logo} alt={item.place} photo={item.photo} />
                    <div className="min-w-0 flex-1 border-l-2 border-accent-blue/30 pl-4">
                      <p className="font-mono text-xs text-accent-blue">{item.period}</p>
                      <p className="mt-1 text-sm font-medium text-foreground">{item.role}</p>
                      <p className="text-xs text-muted">{item.place}</p>
                      <p className="mt-1 text-sm text-muted">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass glass-hover h-full rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-indigo/15 text-accent-indigo">
                  <FolderGit2 size={17} />
                </span>
                <h3 className="text-base font-semibold text-foreground">Technical Skills</h3>
              </div>
              <div className="mt-5 space-y-4">
                {skillCategories.map((cat) => (
                  <div key={cat.title}>
                    <p className="text-xs font-medium text-muted">{cat.title}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {cat.skills.map((s) => (
                        <Badge key={s}>{s}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass glass-hover h-full rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                  <Award size={17} />
                </span>
                <h3 className="text-base font-semibold text-foreground">Certifications</h3>
              </div>
              <div className="mt-5 space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.title} className="border-l-2 border-emerald-500/30 pl-4">
                    <div className="flex items-center gap-2">
                      <p className="font-mono text-xs text-emerald-400">{cert.year}</p>
                      {cert.highlight && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2 py-0.5 font-mono text-[10px] text-amber-400">
                          <Trophy size={10} /> {cert.highlight}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm font-medium text-foreground">{cert.title}</p>
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs text-muted">{cert.issuer}</p>
                      {cert.file && (
                        <a
                          href={cert.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex shrink-0 items-center gap-1 text-xs text-accent-cyan hover:underline"
                        >
                          View <ExternalLink size={11} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-border pt-5">
                <p className="text-xs font-medium text-muted">Selected Projects</p>
                <div className="mt-2 space-y-1.5">
                  {projects.slice(0, 4).map((p) => (
                    <p key={p.id} className="text-sm text-foreground">
                      • {p.title}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
