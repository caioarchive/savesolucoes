"use client";

import { motion, useReducedMotion } from "framer-motion";

import { staggerVariants, viewportOnce } from "@/lib/motion";

export default function StaggerContainer({ children, className = "" }) {
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion
    ? {
        hidden: {},
        visible: { transition: { staggerChildren: 0 } },
      }
    : staggerVariants;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
