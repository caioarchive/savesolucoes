"use client";

import { motion, useReducedMotion } from "framer-motion";

import { fadeUpVariants, smoothEase, viewportOnce } from "@/lib/motion";

export default function FadeUp({
  children,
  className = "",
  delay = 0,
  distance = 26,
  blur = 0,
  instantOnReducedMotion = false,
  viewportAmount = viewportOnce.amount,
}) {
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion
    ? {
        hidden: {
          opacity: instantOnReducedMotion ? 1 : 0,
          y: 0,
          ...(blur > 0 ? { filter: "blur(0px)" } : {}),
        },
        visible: {
          opacity: 1,
          y: 0,
          ...(blur > 0 ? { filter: "blur(0px)" } : {}),
          transition: {
            duration: instantOnReducedMotion ? 0 : 0.2,
            delay: instantOnReducedMotion ? 0 : delay,
          },
        },
      }
    : {
        ...fadeUpVariants,
        hidden: {
          ...fadeUpVariants.hidden,
          y: distance,
          ...(blur > 0 ? { filter: `blur(${blur}px)` } : {}),
        },
        visible: {
          ...fadeUpVariants.visible,
          ...(blur > 0 ? { filter: "blur(0px)" } : {}),
          transition: {
            ...fadeUpVariants.visible.transition,
            delay,
            ease: smoothEase,
          },
        },
      };

  return (
    <motion.div
      initial={shouldReduceMotion && instantOnReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ ...viewportOnce, amount: viewportAmount }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
