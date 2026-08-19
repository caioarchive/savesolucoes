"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedText({ children, className = "" }) {
  const shouldReduceMotion = useReducedMotion();
  const text = String(children);
  const words = text.split(" ");

  return (
    <motion.h1 aria-label={text} className={className}>
      {words.map((word, index) => (
        <motion.span
          aria-hidden="true"
          key={`${word}-${index}`}
          className="inline-block"
          initial={{
            opacity: 1,
            y: shouldReduceMotion ? 0 : 12,
            filter: shouldReduceMotion ? "blur(0px)" : "blur(2px)",
          }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: shouldReduceMotion ? 0.15 : 0.55,
            delay: shouldReduceMotion ? 0 : index * 0.035,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.h1>
  );
}
