"use client";

import { useState, type FormEvent } from "react";
import { Mail, Send, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

const contactLinks = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: GithubIcon, label: "GitHub", value: "@HornVanhong", href: site.social.github },
  { icon: LinkedinIcon, label: "LinkedIn", value: "in/horn-vanhong-45366324a", href: site.social.linkedin },
  { icon: Send, label: "Telegram", value: "@vanhongVH", href: site.social.telegram },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="glow-blob left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 bg-accent-blue/15" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Together."
          description="Have a project, an opportunity, or just want to talk tech and security? Reach out."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="glass h-full rounded-2xl p-6 sm:p-7">
              <div className="space-y-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="glass-hover flex items-center gap-3 rounded-xl border border-border bg-surface/40 px-4 py-3.5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-cyan/10 text-accent-cyan">
                      <link.icon size={17} />
                    </span>
                    <span className="flex-1">
                      <span className="block text-xs text-muted">{link.label}</span>
                      <span className="block text-sm text-foreground">{link.value}</span>
                    </span>
                    <ArrowUpRight size={14} className="text-muted" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass h-full rounded-2xl p-6 sm:p-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs text-muted">Name</label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-border bg-surface/60 px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent-cyan/50"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs text-muted">Email</label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-border bg-surface/60 px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent-cyan/50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-xs text-muted">Message</label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full resize-none rounded-lg border border-border bg-surface/60 px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent-cyan/50"
                />
              </div>
              <button
                type="submit"
                className="btn-glow mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-blue px-5 py-3 text-sm font-medium text-[#03101c] transition-all hover:brightness-110 sm:w-auto"
              >
                <Send size={15} /> Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
