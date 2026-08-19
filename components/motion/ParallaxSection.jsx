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

export default function ParallaxSection({
  children,
  className = "",
  distance = 24,
}) {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, parallaxSpring);
  const y = useTransform(
    smoothProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [distance, -distance],
  );

  return (
    <motion.div ref={sectionRef} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
