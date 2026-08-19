"use client";

import { useRef } from "react";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { parallaxSpring } from "@/lib/motion";

export default function HeroMotion({ children, className = "" }) {
  const heroRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, parallaxSpring);
  const opacity = useTransform(
    smoothProgress,
    [0, 0.85],
    shouldReduceMotion ? [1, 1] : [1, 0.92],
  );

  return (
    <motion.section ref={heroRef} className={className} style={{ opacity }}>
      {children}
    </motion.section>
  );
}
