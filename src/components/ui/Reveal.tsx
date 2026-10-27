"use client";

import { motion, MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** Wraps the app so all Framer Motion animations honour prefers-reduced-motion. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  /** Animate on mount rather than when scrolled into view. */
  immediate?: boolean;
}

export function Reveal({ children, delay = 0, y = 20, className, immediate }: RevealProps) {
  const animation = { opacity: 1, y: 0 };
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      {...(immediate
        ? { animate: animation }
        : { whileInView: animation, viewport: { once: true, margin: "-60px" } })}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
