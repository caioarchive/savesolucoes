"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

import { parallaxSpring } from "@/lib/motion";

export default function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, parallaxSpring);

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 hidden h-px origin-left bg-black sm:block"
      style={{ scaleX }}
    />
  );
}
