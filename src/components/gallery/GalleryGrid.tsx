"use client";

import { ZoomIn } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { SafeImage } from "@/components/ui/SafeImage";
import { galleryCategories, galleryImages } from "@/data/gallery";
import { cn } from "@/lib/utils";
import type { GalleryCategory } from "@/types";
import { Lightbox } from "./Lightbox";

export function GalleryGrid() {
  const [category, setCategory] = useState<"All" | GalleryCategory>("All");
  const [active, setActive] = useState<number | null>(null);

  const visible = useMemo(
    () => (category === "All" ? galleryImages : galleryImages.filter((g) => g.category === category)),
    [category],
  );
  const close = useCallback(() => setActive(null), []);

  return (
    <div>
      <div role="group" aria-label="Filter gallery by category" className="flex flex-wrap gap-2">
        {(["All", ...galleryCategories] as const).map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={category === c}
            onClick={() => setCategory(c)}
            className={cn(
              "min-h-11 rounded-full border px-5 text-sm font-semibold transition-colors",
              category === c ? "border-navy bg-navy text-white" : "border-line bg-white text-navy hover:border-navy/40",
            )}
          >
            {c}
          </button>
        ))}
      </div>
      <p role="status" aria-live="polite" className="mt-5 text-sm font-semibold text-navy">
        {visible.length} {visible.length === 1 ? "image" : "images"}
      </p>

      <ul className="mt-6 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {visible.map((img, i) => (
          <li key={img.id} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Open image: ${img.caption}`}
              className="group relative block w-full overflow-hidden rounded-2xl text-left"
            >
              <SafeImage
                src={img.image}
                alt={img.alt}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                width={900}
                className="transition-transform duration-700 group-hover:scale-105"
                ratio={img.ratio}
                wrapperClassName="w-full"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-navy-dark/80 to-transparent p-4 pt-12 text-sm font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 max-sm:opacity-100">
                <span>{img.caption}</span>
                <ZoomIn aria-hidden className="size-5 shrink-0" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-sm">
        Images are illustrative stock photography and do not show the actual clinic or its patients.
      </p>

      <Lightbox images={visible} index={active} onClose={close} onChange={setActive} />
    </div>
  );
}
