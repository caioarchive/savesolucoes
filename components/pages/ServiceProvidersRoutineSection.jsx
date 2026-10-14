"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import { smoothEase } from "@/lib/motion";

import styles from "./ServiceProvidersRoutineSection.module.css";

function getActiveIndex(progress) {
  if (progress < 1 / 3) return 0;
  if (progress < 2 / 3) return 1;
  return 2;
}

function MediaFrame({ media, sizes, priority = false }) {
  return (
    <Image
      src={media.src}
      alt={media.alt}
      fill
      priority={priority}
      sizes={sizes}
      className={styles.image}
      style={{ objectPosition: media.objectPosition }}
    />
  );
}

function RoutineMoment({ moment, index, activeIndex, reduceMotion }) {
  const momentRef = useRef(null);
  const isInView = useInView(momentRef, {
    once: true,
    amount: 0.32,
    margin: "0px 0px -8% 0px",
  });
  const isActive = index === activeIndex;
  const isVisible = reduceMotion || isInView;

  return (
    <li
      ref={momentRef}
      className={styles.moment}
      data-active={isActive}
      aria-current={isActive ? "step" : undefined}
    >
      <span className={styles.node} aria-hidden="true" />

      {moment.media?.src && (
        <motion.div
          className={styles.inlineMedia}
          initial={
            reduceMotion
              ? false
              : { opacity: 0, clipPath: "inset(10% 0% 10% 0% round 16px)" }
          }
          animate={{
            opacity: isVisible ? 1 : 0,
            clipPath: isVisible
              ? "inset(0% 0% 0% 0% round 16px)"
              : "inset(10% 0% 10% 0% round 16px)",
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            ease: smoothEase,
          }}
        >
          <MediaFrame
            media={moment.media}
            priority={index === 0}
            sizes="(max-width: 639px) calc(100vw - 72px), (max-width: 1023px) calc(100vw - 104px), 1px"
          />
        </motion.div>
      )}

      <motion.div
        className={styles.momentReveal}
        initial={
          reduceMotion ? false : { opacity: 0, transform: "translateY(18px)" }
        }
        animate={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0px)" : "translateY(18px)",
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.52,
          delay: reduceMotion ? 0 : 0.06,
          ease: smoothEase,
        }}
      >
        <span className={styles.index}>{moment.index}</span>
        <h3>{moment.title}</h3>
        <p>{moment.description}</p>
      </motion.div>
    </li>
  );
}

export default function ServiceProvidersRoutineSection({ page, id }) {
  const { narrative: routine } = page;
  const hasMedia = routine.moments.some((moment) => Boolean(moment.media?.src));
  const journeyRef = useRef(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start 66%", "end 40%"],
  });
  const railTransform = useTransform(
    scrollYProgress,
    [0.04, 0.96],
    ["scaleY(0)", "scaleY(1)"],
  );

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
          <Badge>{routine.eyebrow}</Badge>
          <h2 id={id}>{routine.title}</h2>
        </header>

        <div
          ref={journeyRef}
          className={styles.journey}
          data-has-media={hasMedia}
        >
          {hasMedia && (
            <div className={styles.visualColumn}>
              <figure className={styles.stage}>
                {routine.moments.map((moment, index) => {
                  const isActive = index === activeIndex;
                  const displayedMoment = moment.media?.src
                    ? moment
                    : (routine.moments.findLast(
                        (item, itemIndex) =>
                          itemIndex <= index && item.media?.src,
                      ) ?? routine.moments.find((item) => item.media?.src));

                  if (!displayedMoment) return null;

                  return (
                    <motion.div
                      key={moment.title}
                      className={styles.mediaLayer}
                      aria-hidden={!isActive}
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? "scale(1)" : "scale(1.018)",
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.45,
                        ease: smoothEase,
                      }}
                    >
                      <MediaFrame
                        media={displayedMoment.media}
                        priority={index === 0}
                        sizes="(min-width: 1280px) 650px, (min-width: 1024px) 52vw, 1px"
                      />
                    </motion.div>
                  );
                })}
              </figure>
            </div>
          )}

          <div className={styles.storyColumn}>
            <span className={styles.rail} aria-hidden="true">
              <motion.span
                className={styles.railFill}
                style={{ transform: railTransform }}
              />
            </span>

            <ol className={styles.moments}>
              {routine.moments.map((moment, index) => (
                <RoutineMoment
                  key={moment.title}
                  moment={moment}
                  index={index}
                  activeIndex={activeIndex}
                  reduceMotion={reduceMotion}
                />
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
