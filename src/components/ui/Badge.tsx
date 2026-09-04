import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-surface/70 px-2.5 py-1 font-mono text-xs text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
