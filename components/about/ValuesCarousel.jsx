"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import styles from "./ValuesCarousel.module.css";

function ValueCard({ title, text, hidden = false }) {
  return (
    <article
      className={`${styles.card} rounded-[20px] border border-white/15 bg-white/[0.08] p-6 sm:p-7`}
      aria-hidden={hidden || undefined}
    >
      <span
        className="h-0.5 w-10 rounded-full bg-brand-green"
        aria-hidden="true"
      />
      <span className="mt-5 text-xs font-medium uppercase tracking-[0.12em] text-white/65">
        Valor institucional
      </span>
      <h3 className="mt-auto pt-10 text-xl font-semibold tracking-[-0.02em] text-white">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-white/75">{text}</p>
    </article>
  );
}

function SideFades() {
  return (
    <>
      <span
        className={`${styles.fade} ${styles.fadeStart}`}
        aria-hidden="true"
      />
      <span className={`${styles.fade} ${styles.fadeEnd}`} aria-hidden="true" />
    </>
  );
}

export default function ValuesCarousel({ items }) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const resumeTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  const pauseInteraction = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    setIsInteracting(true);
  };

  const resumeInteraction = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setIsInteracting(false), 500);
  };

  if (shouldReduceMotion) {
    return (
      <div className={`${styles.viewport} ${styles.manualViewport}`}>
        <div className={styles.manualTrack} role="list">
          {items.map((item) => (
            <div key={item.title} role="listitem">
              <ValueCard {...item} />
            </div>
          ))}
        </div>
        <SideFades />
      </div>
    );
  }

  const isPaused = isHovered || isInteracting;

  return (
    <div className={styles.viewport}>
      <motion.div
        className={styles.dragLayer}
        drag="x"
        dragConstraints={{ left: -180, right: 180 }}
        dragElastic={0.06}
        dragMomentum={false}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 26 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onFocus={pauseInteraction}
        onBlur={resumeInteraction}
        onPointerDown={pauseInteraction}
        onPointerUp={resumeInteraction}
        onPointerCancel={resumeInteraction}
        onDragStart={pauseInteraction}
        onDragEnd={resumeInteraction}
        tabIndex={0}
        aria-label="Valores institucionais da Save"
      >
        <div
          className={`${styles.track} ${isPaused ? styles.paused : ""}`}
          role="list"
        >
          {[0, 1].map((copy) =>
            items.map((item) => (
              <div
                key={`${copy}-${item.title}`}
                role={copy === 0 ? "listitem" : undefined}
              >
                <ValueCard {...item} hidden={copy === 1} />
              </div>
            )),
          )}
        </div>
      </motion.div>
      <SideFades />
    </div>
  );
}
