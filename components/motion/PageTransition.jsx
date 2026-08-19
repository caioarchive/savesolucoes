"use client";
import { motion, useReducedMotion } from "framer-motion";
export default function PageTransition({ children }) {
  const reduce = useReducedMotion();
  return (
    <motion.main
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0.15 : 0.4 }}
    >
      {children}
    </motion.main>
  );
}
