"use client";

import Image from "next/image";
import { useState } from "react";
import { imageUrl } from "@/lib/images";
import { cn } from "@/lib/utils";
import { ToothMark } from "./Logo";

interface Props {
  /** Key from IMAGES (src/lib/images.ts). */
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** Classes for the wrapper; give it an aspect ratio or fixed height. */
  wrapperClassName?: string;
  width?: number;
  /** CSS aspect-ratio value such as "4 / 5" (alternative to a Tailwind aspect class). */
  ratio?: string;
}

/** next/image wrapper (fill mode) with a branded fallback if the image fails to load. */
export function SafeImage({ src, alt, sizes, priority, className, wrapperClassName, width = 1200, ratio }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div style={ratio ? { aspectRatio: ratio } : undefined} className={cn("relative overflow-hidden bg-mist", wrapperClassName)}>
      {failed ? (
        <div role="img" aria-label={alt} className="absolute inset-0 grid place-items-center text-teal/60">
          <ToothMark className="size-1/4 min-w-10" />
        </div>
      ) : (
        <Image
          src={imageUrl(src, width)}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
          className={cn("object-cover", className)}
        />
      )}
    </div>
  );
}
