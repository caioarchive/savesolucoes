"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

function Word({ children, progress, range, reduceMotion }) {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <>
      <motion.span
        className="inline sm:inline-block"
        style={reduceMotion ? { opacity: 1 } : { opacity }}
      >
        {children}
      </motion.span>{" "}
    </>
  );
}

export default function ScrollReadText({
  children,
  className = "",
  as: Tag = "p",
}) {
  const textRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const text = typeof children === "string" ? children : "";
  const words = text.trim().split(/\s+/);

  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 85%", "end 35%"],
  });

  return (
    <Tag
      ref={textRef}
      className={`text-wrap leading-[1.15] tracking-[-0.035em] sm:text-balance ${className}`}
    >
      {words.map((word, index) => {
        const start = index / words.length;
        const end = (index + 1) / words.length;

        return (
          <Word
            key={`${word}-${index}`}
            progress={scrollYProgress}
            range={[start, end]}
            reduceMotion={reduceMotion}
          >
            {word}
          </Word>
        );
      })}
    </Tag>
  );
}
