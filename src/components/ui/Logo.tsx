import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

/** Abstract tooth mark used in the logo and as a decorative icon. */
export function ToothMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className={className}>
      <path
        d="M24 9c-3-3.2-9.5-3.6-12.6 1.2-2.6 4-1 9.6.9 13.6 1.5 3.2 1.7 8.2 2.8 12.4.5 1.9 3 1.9 3.6 0l1.8-6.4c.4-1.4 1.4-2.2 3.5-2.2s3.1.8 3.5 2.2l1.8 6.4c.6 1.9 3.1 1.9 3.6 0 1.1-4.2 1.3-9.2 2.8-12.4 1.9-4 3.5-9.6.9-13.6C33.500 5.400 27 5.800 24 9Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Text-based placeholder logo. To use a supplied brand asset, set `logoSrc`
 * in src/lib/config.ts (e.g. "/logo.svg") — it replaces this component's artwork.
 */
export function Logo({ className, invert }: { className?: string; invert?: boolean }) {
  return (
    <Link href="/" aria-label={`${siteConfig.name} — home`} className={cn("inline-flex items-center gap-3", className)}>
      {siteConfig.logoSrc ? (
        <Image src={siteConfig.logoSrc} alt={siteConfig.name} width={180} height={48} className="h-11 w-auto" priority />
      ) : (
        <>
          <span
            className={cn(
              "grid size-11 shrink-0 place-items-center rounded-xl",
              invert ? "bg-white text-navy" : "bg-navy text-white",
            )}
          >
            <ToothMark className={cn("size-7", invert ? "text-navy" : "text-white")} />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "font-heading text-xl font-extrabold tracking-[0.14em]",
                invert ? "text-white" : "text-navy",
              )}
            >
              DYNASTY
            </span>
            <span className="mt-1 text-[0.62rem] font-bold tracking-[0.3em] text-teal">DENTAL SOLUTIONS</span>
          </span>
        </>
      )}
    </Link>
  );
}
