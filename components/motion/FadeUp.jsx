"use client";

import { motion, useReducedMotion } from "framer-motion";

import { fadeUpVariants, smoothEase, viewportOnce } from "@/lib/motion";

export default function FadeUp({ children, className = "", delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.2, delay },
        },
      }
    : {
        ...fadeUpVariants,
        visible: {
          ...fadeUpVariants.visible,
          transition: {
            ...fadeUpVariants.visible.transition,
            delay,
            ease: smoothEase,
          },
        },
      };

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
