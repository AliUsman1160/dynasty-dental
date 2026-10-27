"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import { imageUrl } from "@/lib/images";
import type { GalleryImage } from "@/types";

interface Props {
  images: GalleryImage[];
  /** Index into `images`, or null when closed. */
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}

const iconBtn =
  "grid size-12 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/25 focus-visible:outline-white";

export function Lightbox({ images, index, onClose, onChange }: Props) {
  const open = index !== null;
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return;
      onChange((index + dir + images.length) % images.length);
    },
    [index, images.length, onChange],
  );

  // Scroll lock, focus handling and restoring focus to the trigger.
  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "Tab") {
        // Keep keyboard focus inside the dialog.
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>("button");
        if (!focusables?.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose, go]);

  const current = index !== null ? images[index] : null;

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex flex-col bg-navy-dark/95 p-4 sm:p-8"
          onClick={onClose}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          }}
        >
          <div className="flex items-center justify-between text-white" onClick={(e) => e.stopPropagation()}>
            <p aria-live="polite" className="text-sm font-semibold">
              {index! + 1} / {images.length}
            </p>
            <button ref={closeRef} type="button" onClick={onClose} aria-label="Close image viewer" className={iconBtn}>
              <X aria-hidden className="size-6" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center gap-2 sm:gap-4">
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              className={`${iconBtn} absolute left-0 z-10 sm:static`}
            >
              <ChevronLeft aria-hidden className="size-6" />
            </button>

            <motion.figure
              key={current.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="flex h-full max-w-4xl flex-1 flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative min-h-0 w-full flex-1">
                <Image
                  src={imageUrl(current.image, 1800)}
                  alt={current.alt}
                  fill
                  sizes="(min-width: 1024px) 896px, 100vw"
                  className="rounded-xl object-contain"
                />
              </div>
              <figcaption className="mt-4 max-w-2xl text-center text-sm text-white/85">{current.caption}</figcaption>
            </motion.figure>

            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              className={`${iconBtn} absolute right-0 z-10 sm:static`}
            >
              <ChevronRight aria-hidden className="size-6" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
