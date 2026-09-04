"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects, projectFilters, type ProjectCategory } from "@/data/projects";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Badge } from "./ui/Badge";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./icons/BrandIcons";

export function Projects() {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Things I've built"
          description="A mix of full-stack applications, AI experiments, and cybersecurity work."
        />

        <Reveal className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {projectFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                filter === f.value
                  ? "border-accent-cyan/50 bg-accent-cyan/10 text-accent-cyan"
                  : "border-border bg-surface/50 text-muted hover:text-foreground"
              )}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="glass glass-hover flex h-full flex-col overflow-hidden rounded-2xl">
                  <div
                    className={cn(
                      "relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br",
                      project.gradient
                    )}
                  >
                    <div className="bg-grid absolute inset-0 opacity-40" />
                    <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-accent-cyan backdrop-blur-sm">
                      <project.icon size={28} />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-surface/60 px-3 py-2.5 text-sm text-foreground transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
                        >
                          <GithubIcon size={15} /> Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-blue px-3 py-2.5 text-sm font-medium text-[#03101c] transition-all hover:brightness-110"
                        >
                          <ExternalLink size={15} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
