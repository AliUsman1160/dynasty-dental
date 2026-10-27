import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Container({ className, ...rest }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10", className)} {...rest} />;
}

export function Section({
  className,
  tone = "default",
  ...rest
}: ComponentProps<"section"> & { tone?: "default" | "mist" | "white" | "navy" }) {
  const tones = {
    default: "",
    white: "bg-white",
    mist: "bg-mist",
    navy: "bg-navy text-white",
  };
  return <section className={cn("py-16 sm:py-20 lg:py-24", tones[tone], className)} {...rest} />;
}
