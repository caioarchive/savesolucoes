"use client";

import { motion, useReducedMotion } from "framer-motion";

import { fadeUpVariants } from "@/lib/motion";

export default function StaggerItem({ children, className = "" }) {
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.2 },
        },
      }
    : fadeUpVariants;

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
