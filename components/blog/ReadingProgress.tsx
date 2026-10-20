"use client";

import { motion, useScroll } from "motion/react";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: scrollYProgress }}
      className="fixed inset-x-0 top-16 z-40 h-0.5 origin-left bg-brand-cyan"
    />
  );
}
