import Image from "next/image";
import { cn } from "@/lib/utils";

export function LogoBadge({
  src,
  alt,
  photo = false,
  className,
}: {
  src: string;
  alt: string;
  photo?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-border bg-white shadow-sm",
        className
      )}
    >
      <span className={cn("absolute", photo ? "inset-0" : "inset-1.5")}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="44px"
          className={photo ? "object-cover" : "object-contain"}
        />
      </span>
    </span>
  );
}
