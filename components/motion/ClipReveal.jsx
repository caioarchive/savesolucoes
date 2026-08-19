"use client";

import { motion, useReducedMotion } from "framer-motion";

import { smoothEase, viewportOnce } from "@/lib/motion";

export default function ClipReveal({ children, className = "" }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        clipPath: shouldReduceMotion
          ? "inset(0% 0% 0% 0%)"
          : "inset(8% 0% 8% 0% round 28px)",
      }}
      whileInView={{
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0% round 0px)",
      }}
      viewport={viewportOnce}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.7,
        ease: smoothEase,
      }}
    >
      {children}
    </motion.div>
  );
}
