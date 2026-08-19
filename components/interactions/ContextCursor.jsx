"use client";

import { useEffect, useRef, useState } from "react";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

import { cursorSpring } from "@/lib/motion";

export default function ContextCursor() {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);
  const x = useSpring(pointerX, cursorSpring);
  const y = useSpring(pointerY, cursorSpring);
  const activeTargetRef = useRef(null);
  const [label, setLabel] = useState("");
  const [isPressed, setIsPressed] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(min-width: 1024px) and (hover: hover) and (pointer: fine)",
    );
    const updatePointerMode = () => setIsFinePointer(mediaQuery.matches);

    updatePointerMode();
    mediaQuery.addEventListener("change", updatePointerMode);

    return () => mediaQuery.removeEventListener("change", updatePointerMode);
  }, []);

  useEffect(() => {
    if (!isFinePointer || shouldReduceMotion) {
      return undefined;
    }

    const handlePointerMove = (event) => {
      pointerX.set(event.clientX - 32);
      pointerY.set(event.clientY - 32);

      const target = event.target.closest("[data-cursor]");

      if (target !== activeTargetRef.current) {
        activeTargetRef.current = target;
        setLabel(target?.dataset.cursor || "");
      }
    };
    const handlePointerDown = () => setIsPressed(true);
    const handlePointerUp = () => setIsPressed(false);
    const handlePointerLeave = () => setLabel("");

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave,
      );
    };
  }, [isFinePointer, pointerX, pointerY, shouldReduceMotion]);

  if (!isFinePointer || shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] grid h-16 w-16 place-items-center rounded-full bg-black px-2 text-center text-[10px] font-medium leading-tight text-white"
      style={{ x, y }}
      animate={{
        opacity: label ? 1 : 0,
        scale: label ? (isPressed ? 0.9 : 1) : 0.7,
      }}
      transition={{ duration: 0.18 }}
    >
      {label}
    </motion.div>
  );
}
