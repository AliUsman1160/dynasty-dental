import type { Metadata } from "next";
import { siteConfig } from "./config";

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
}

/** Builds per-page metadata. Canonical URLs are only emitted once a site URL is configured. */
export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  return {
    title,
    description,
    ...(siteConfig.url ? { alternates: { canonical: path } } : {}),
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      siteName: siteConfig.name,
      type: "website",
      ...(siteConfig.url ? { url: path } : {}),
    },
  };
}
