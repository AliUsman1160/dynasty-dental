import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "teal" | "ghost" | "light";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-navy-dark shadow-soft",
  teal: "bg-teal text-white hover:bg-teal-dark shadow-soft",
  secondary: "border border-navy/20 bg-white text-navy hover:border-navy hover:bg-mist",
  ghost: "text-navy hover:bg-mist",
  light: "bg-white text-navy hover:bg-mist shadow-soft",
};

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-all duration-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60";

interface Props {
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}

export function Button({
  href,
  variant = "primary",
  arrow = false,
  className,
  children,
  ...rest
}: Props & ({ href: string } & Omit<ComponentProps<typeof Link>, "href" | "className">)) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...rest}>
      {children}
      {arrow && <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />}
    </Link>
  );
}

export function ButtonEl({
  variant = "primary",
  arrow = false,
  className,
  children,
  ...rest
}: Props & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
      {arrow && <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />}
    </button>
  );
}
