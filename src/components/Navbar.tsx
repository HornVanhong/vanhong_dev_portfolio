"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ShieldCheck,
  Home,
  User,
  Code2,
  FolderGit2,
  ShieldAlert,
  FileText,
  Mail,
  Download,
  Send,
  ChevronRight,
} from "lucide-react";
import { site } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { cn } from "@/lib/utils";

const navIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "#home": Home,
  "#about": User,
  "#skills": Code2,
  "#projects": FolderGit2,
  "#cybersecurity": ShieldAlert,
  "#resume": FileText,
  "#contact": Mail,
};

const socials = [
  { icon: GithubIcon, href: site.social.github, label: "GitHub" },
  { icon: LinkedinIcon, href: site.social.linkedin, label: "LinkedIn" },
  { icon: Send, href: site.social.telegram, label: "Telegram" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = site.nav
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [open]);

  // Handle escape key and auto-close on resize to desktop
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Close when clicking outside header
  useEffect(() => {
    function handleClickOutside(e: MouseEvent | TouchEvent) {
      if (open && headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "py-2" : "py-3 sm:py-4"
        )}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div
            className={cn(
              "flex items-center justify-between rounded-2xl border px-3.5 py-2.5 backdrop-blur-xl transition-all duration-300 sm:px-4",
              scrolled
                ? "border-border/90 bg-surface/90 shadow-[0_10px_40px_-20px_rgba(34,211,238,0.25)]"
                : "border-border/70 bg-surface/75 shadow-lg shadow-black/10"
            )}
          >
            {/* Logo */}
            <Link
              href="#home"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight transition-opacity hover:opacity-90"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue text-[#03101c] shadow-sm">
                <ShieldCheck size={17} />
              </span>
              <span className="font-semibold text-foreground">
                {site.initials}
                <span className="text-accent-cyan">.dev</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 md:flex">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-1.5 font-mono text-sm transition-colors",
                    active === item.href
                      ? "bg-accent-cyan/10 text-accent-cyan"
                      : "text-muted hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right actions: ThemeToggle + Hamburger on mobile */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setOpen((v) => !v)}
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg border transition-all md:hidden",
                  open
                    ? "border-accent-cyan/50 bg-accent-cyan/15 text-accent-cyan shadow-[0_0_12px_-2px_rgba(34,211,238,0.3)]"
                    : "border-border bg-surface/60 text-muted hover:text-foreground"
                )}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown Card */}
          <AnimatePresence>
            {open && (
              <motion.div
                key="mobile-nav-panel"
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="mobile-nav-panel mt-2 flex max-h-[calc(100vh-5.5rem)] flex-col overflow-y-auto rounded-2xl p-3 sm:p-4 shadow-2xl md:hidden"
              >
                {/* Nav Links */}
                <div className="flex flex-col gap-1">
                  {site.nav.map((item) => {
                    const Icon = navIcons[item.href] || ChevronRight;
                    const isActive = active === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150",
                          isActive
                            ? "border border-accent-cyan/30 bg-accent-cyan/15 text-accent-cyan shadow-[0_0_15px_-3px_rgba(34,211,238,0.2)]"
                            : "text-muted hover:bg-white/5 hover:text-foreground active:scale-[0.99]"
                        )}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={cn(
                              "flex h-8 w-8 items-center justify-center rounded-lg transition-colors",
                              isActive
                                ? "bg-accent-cyan/25 text-accent-cyan"
                                : "bg-surface/80 text-muted group-hover:text-accent-cyan"
                            )}
                          >
                            <Icon size={16} />
                          </span>
                          <span className="font-mono text-sm tracking-tight">{item.label}</span>
                        </span>
                        {isActive ? (
                          <span className="h-2 w-2 rounded-full bg-accent-cyan shadow-[0_0_8px_#22d3ee]" />
                        ) : (
                          <ChevronRight
                            size={15}
                            className="text-muted/40 transition-transform group-hover:translate-x-0.5 group-hover:text-muted"
                          />
                        )}
                      </Link>
                    );
                  })}
                </div>

                {/* Quick Actions */}
                <div className="mt-2.5 grid grid-cols-2 gap-2 border-t border-border/80 pt-3">
                  <a
                    href={site.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-surface/60 px-3 py-2.5 font-mono text-xs font-medium text-foreground transition-all hover:border-accent-cyan/40 hover:text-accent-cyan active:scale-[0.98]"
                  >
                    <Download size={14} />
                    <span>Resume CV</span>
                  </a>
                  <Link
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue px-3 py-2.5 font-mono text-xs font-semibold text-[#03101c] shadow-sm transition-all hover:brightness-110 active:scale-[0.98]"
                  >
                    <Send size={14} />
                    <span>Contact Me</span>
                  </Link>
                </div>

                {/* Socials & Available status */}
                <div className="mt-3 flex items-center justify-between border-t border-border/80 pt-3">
                  <div className="flex items-center gap-2">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/80 bg-surface/60 text-muted transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
                      >
                        <s.icon size={15} />
                      </a>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available for hire
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Dimmed Backdrop Overlay for Mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}
