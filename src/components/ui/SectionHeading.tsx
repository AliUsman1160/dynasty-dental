import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  as?: "h1" | "h2";
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "left", invert, as: Tag = "h2", className }: Props) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em]",
            align === "center" && "justify-center",
            invert ? "text-teal" : "text-teal-dark",
          )}
        >
          <span aria-hidden className="h-px w-8 bg-current" />
          {eyebrow}
        </p>
      )}
      <Tag className={cn("text-3xl font-extrabold sm:text-4xl lg:text-[2.7rem]", invert && "!text-white")}>{title}</Tag>
      {description && (
        <p className={cn("mt-4 max-w-[60ch] text-base sm:text-lg", align === "center" && "mx-auto", invert && "text-white/80")}>
          {description}
        </p>
      )}
    </div>
  );
}
