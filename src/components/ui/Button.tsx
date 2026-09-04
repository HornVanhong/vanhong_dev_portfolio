import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  icon?: ReactNode;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
  icon,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-all duration-300 whitespace-nowrap";

  const styles = {
    primary:
      "bg-gradient-to-r from-accent-cyan to-accent-blue text-[#03101c] btn-glow hover:brightness-110 hover:-translate-y-0.5",
    secondary:
      "glass glass-hover text-foreground hover:text-accent-cyan",
    ghost:
      "text-muted hover:text-accent-cyan",
  };

  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={cn(base, styles[variant], className)} {...props}>
      {icon}
      {children}
    </Link>
  );
}
