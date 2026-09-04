import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { repos, coreLanguages } from "@/data/github";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { GithubIcon } from "./icons/BrandIcons";

const WEEKS = 42;
const DAYS = 7;

function pseudoRandom(i: number) {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

const levelClasses = [
  "bg-white/[0.05]",
  "bg-accent-cyan/25",
  "bg-accent-cyan/45",
  "bg-accent-cyan/65",
  "bg-accent-cyan/90",
];

export function GitHubActivity() {
  const cells = Array.from({ length: WEEKS * DAYS }, (_, i) => {
    const r = pseudoRandom(i + 7);
    const level = r > 0.82 ? 4 : r > 0.65 ? 3 : r > 0.45 ? 2 : r > 0.25 ? 1 : 0;
    return level;
  });

  return (
    <section className="section relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="GitHub"
          title="Open-source activity"
          description="A look at how I ship — repositories, languages, and recent contributions."
        />

        <Reveal>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-foreground">
                  <GithubIcon size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    github.com/HornVanhong
                  </p>
                  <p className="text-xs text-muted">30+ repositories &amp; counting</p>
                </div>
              </div>
              <Button href={site.social.github} variant="secondary" external className="text-sm">
                View Profile <ArrowUpRight size={14} />
              </Button>
            </div>

            <div className="mt-7 overflow-x-auto pb-2">
              <div
                className="grid grid-flow-col gap-[3px]"
                style={{ gridTemplateRows: `repeat(${DAYS}, 11px)` }}
              >
                {cells.map((level, i) => (
                  <span
                    key={i}
                    className={`contrib-cell ${levelClasses[level]}`}
                    title="contribution"
                  />
                ))}
              </div>
              <div className="mt-3 flex items-center justify-end gap-1.5 text-[11px] text-muted">
                Less
                {levelClasses.map((c) => (
                  <span key={c} className={`contrib-cell ${c}`} />
                ))}
                More
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <Reveal delay={0.05} className="lg:col-span-3">
            <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2">
              {repos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-hover flex flex-col rounded-xl p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-foreground">{repo.name}</span>
                    <ArrowUpRight size={14} className="text-muted" />
                  </div>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-muted">
                    {repo.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-muted">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent-cyan" />
                    {repo.language}
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="glass h-full rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-foreground">Core Languages</h3>
              <p className="mt-1 text-xs text-muted">
                The languages I reach for most across projects.
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {coreLanguages.map((lang) => (
                  <span
                    key={lang.name}
                    className="flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-3 py-2 text-sm text-foreground"
                  >
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                    {lang.name}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-2 border-t border-border pt-5 text-sm text-muted">
                <p>Web Development · <span className="text-foreground">76% focus</span></p>
                <p>3+ years of hands-on IT experience</p>
                <p>Graduating 2025 · Royal University of Phnom Penh</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
