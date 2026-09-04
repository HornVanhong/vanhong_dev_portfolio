import { skillCategories } from "@/data/skills";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Badge } from "./ui/Badge";

export function Skills() {
  return (
    <section id="skills" className="section relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit for building and securing software"
          description="Technologies I use to design, ship, and protect real applications."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={(i % 3) * 0.08}>
              <div className="glass glass-hover group h-full rounded-2xl p-6">
                <div
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${category.accent} text-[#03101c]`}
                >
                  <category.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted">{category.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="text-foreground transition-colors group-hover:border-accent-cyan/30"
                    >
                      {skill}
                    </Badge>
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
