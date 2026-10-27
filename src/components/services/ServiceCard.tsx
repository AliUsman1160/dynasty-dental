"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SafeImage } from "@/components/ui/SafeImage";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";
import { ServiceIcon } from "./ServiceIcon";

interface Props {
  service: Service;
  /** "feature" is image-led; "compact" is a smaller icon card. */
  variant?: "feature" | "compact";
  className?: string;
}

export function ServiceCard({ service, variant = "feature", className }: Props) {
  const href = `/services/${service.slug}`;

  if (variant === "compact") {
    return (
      <motion.article whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className={cn("group relative h-full", className)}>
        <Link
          href={href}
          className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-shadow group-hover:shadow-lift"
        >
          <span className="grid size-12 place-items-center rounded-xl bg-mist text-teal-dark transition-colors group-hover:bg-teal group-hover:text-white">
            <ServiceIcon name={service.icon} className="size-6" />
          </span>
          <h3 className="mt-5 text-lg font-bold">{service.name}</h3>
          <p className="mt-2 text-[0.95rem]">{service.summary}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-teal-dark">
            Learn More <span className="sr-only">about {service.name}</span>
            <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className={cn("group h-full", className)}>
      <Link
        href={href}
        className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition-shadow group-hover:shadow-lift"
      >
        <SafeImage
          src={service.image}
          alt={`${service.name} — illustrative stock photo`}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          width={900}
          className="transition-transform duration-500 group-hover:scale-105"
          wrapperClassName="aspect-[16/10]"
        />
        <div className="flex flex-1 flex-col p-6">
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-dark">
            <ServiceIcon name={service.icon} className="size-4" />
            {service.category}
          </span>
          <h3 className="mt-3 text-xl font-bold">{service.name}</h3>
          <p className="mt-2 text-[0.95rem]">{service.summary}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-navy">
            Learn More <span className="sr-only">about {service.name}</span>
            <ArrowUpRight aria-hidden className="size-4 text-teal transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
