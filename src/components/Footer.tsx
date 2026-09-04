import { Send, ShieldCheck } from "lucide-react";
import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

const socials = [
  { icon: GithubIcon, href: site.social.github, label: "GitHub" },
  { icon: LinkedinIcon, href: site.social.linkedin, label: "LinkedIn" },
  { icon: Send, href: site.social.telegram, label: "Telegram" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-10 sm:flex-row sm:justify-between sm:px-6">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue text-[#03101c]">
            <ShieldCheck size={15} />
          </span>
          <p className="text-sm text-muted">
            © 2026 {site.name}. Built with Next.js &amp; TypeScript.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:text-accent-cyan"
            >
              <s.icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
