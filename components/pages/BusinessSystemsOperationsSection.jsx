"use client";

import { useRef, useState } from "react";
import {
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";

import Container from "@/components/layout/Container";

import styles from "./BusinessSystemsOperationsSection.module.css";

function getActiveIndex(progress) {
  if (progress < 1 / 3) return 0;
  if (progress < 2 / 3) return 1;
  return 2;
}

export default function BusinessSystemsOperationsSection({ page, id }) {
  const { narrative } = page;
  const operationPoints = narrative.moments;
  const journeyRef = useRef(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start 64%", "end 38%"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const nextIndex = getActiveIndex(progress);

    if (nextIndex !== activeIndexRef.current) {
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
    }
  });

  return (
    <section
      className={styles.section}
      aria-labelledby={id}
      data-tone={page.tone}
      data-reduced-motion={reduceMotion ? "true" : "false"}
    >
      <Container>
        <header className={styles.header}>
          <h2 id={id}>{narrative.title}</h2>
        </header>

        <div ref={journeyRef} className={styles.journey}>
          <div className={styles.mapColumn}>
            <div className={styles.map} aria-hidden="true">
              <div className={styles.mapOrigin}>
                <span>{narrative.origin.kicker}</span>
                <strong>{narrative.origin.label}</strong>
              </div>

              <div className={styles.mapBranches}>
                {operationPoints.map((point, index) => {
                  const isActive = reduceMotion || index === activeIndex;

                  return (
                    <div
                      key={point.title}
                      className={styles.mapBranch}
                      data-active={isActive}
                    >
                      <span className={styles.branchLine} />
                      <span className={styles.branchNode} />
                      <div className={styles.branchLabel}>
                        <span>{point.mapKicker}</span>
                        <strong>{point.mapLabel}</strong>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={styles.storyColumn}>
            <ol className={styles.points}>
              {operationPoints.map((point, index) => {
                const isActive = index === activeIndex;

                return (
                  <li
                    key={point.title}
                    className={styles.point}
                    data-active={isActive}
                    aria-current={isActive ? "step" : undefined}
                  >
                    <span className={styles.mobileNode} aria-hidden="true" />
                    <div className={styles.pointBody}>
                      <span className={styles.index}>{point.index}</span>
                      <h3>{point.title}</h3>
                      <p>{point.description}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
