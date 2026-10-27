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
import { smoothEase } from "@/lib/motion";

import styles from "./CommerceRoutineSection.module.css";

function getActiveIndex(progress) {
  if (progress < 1 / 3) return 0;
  if (progress < 2 / 3) return 1;
  return 2;
}

function RoutineStep({ topic, index, activeIndex, reduceMotion }) {
  const stepRef = useRef(null);
  const isInView = useInView(stepRef, {
    once: true,
    amount: 0.28,
    margin: "0px 0px -10% 0px",
  });
  const isActive = index === activeIndex;
  const isVisible = reduceMotion || isInView;

  return (
    <li
      ref={stepRef}
      className={styles.step}
      data-active={isActive}
      aria-current={isActive ? "step" : undefined}
    >
      <span className={styles.node} aria-hidden="true" />

      {topic.media?.src && (
        <motion.div
          className={styles.inlineImage}
          initial={
            reduceMotion
              ? false
              : { opacity: 0, clipPath: "inset(14% 0% 14% 0% round 16px)" }
          }
          animate={{
            opacity: isVisible ? 1 : 0,
            clipPath: isVisible
              ? "inset(0% 0% 0% 0% round 16px)"
              : "inset(14% 0% 14% 0% round 16px)",
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.72,
            ease: smoothEase,
          }}
        >
          <Image
            src={topic.media.src}
            alt={topic.media.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), 1px"
            className={styles.image}
            style={{ objectPosition: topic.media.objectPosition }}
          />
        </motion.div>
      )}

      <motion.div
        className={styles.stepReveal}
        initial={
          reduceMotion ? false : { opacity: 0, transform: "translateY(20px)" }
        }
        animate={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0px)" : "translateY(20px)",
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.56,
          delay: reduceMotion ? 0 : 0.08,
          ease: smoothEase,
        }}
      >
        <div className={styles.stepBody}>
          <span className={styles.index}>{topic.index}</span>
          <h3>{topic.title}</h3>
          <p>{topic.description}</p>
        </div>
      </motion.div>
    </li>
  );
}

export default function CommerceRoutineSection({ page, id }) {
  const { narrative } = page;
  const routineTopics = narrative.moments;
  const hasMedia = routineTopics.some((topic) => Boolean(topic.media?.src));
  const headerRef = useRef(null);
  const journeyRef = useRef(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const headerInView = useInView(headerRef, { once: true, amount: 0.5 });
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start 64%", "end 42%"],
  });
  const lineTransform = useTransform(
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
        <motion.header
          ref={headerRef}
          className={styles.header}
          initial={
            reduceMotion ? false : { opacity: 0, transform: "translateY(18px)" }
          }
          animate={{
            opacity: reduceMotion || headerInView ? 1 : 0,
            transform:
              reduceMotion || headerInView
                ? "translateY(0px)"
                : "translateY(18px)",
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.62,
            ease: smoothEase,
          }}
        >
          <h2 id={id}>{narrative.title}</h2>
        </motion.header>

        <div
          ref={journeyRef}
          className={styles.journey}
          data-has-media={hasMedia}
        >
          {hasMedia && (
            <div className={styles.visualColumn}>
              <figure className={styles.stage}>
                {routineTopics.map((topic, index) => {
                  const isActive = index === activeIndex;
                  const displayedTopic = topic.media?.src
                    ? topic
                    : (routineTopics.findLast(
                        (item, itemIndex) =>
                          itemIndex <= index && item.media?.src,
                      ) ?? routineTopics.find((item) => item.media?.src));

                  if (!displayedTopic) return null;

                  return (
                    <motion.div
                      key={topic.title}
                      className={styles.imageLayer}
                      aria-hidden={!isActive}
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? "scale(1)" : "scale(1.025)",
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.55,
                        ease: smoothEase,
                      }}
                    >
                      <Image
                        src={displayedTopic.media.src}
                        alt={isActive ? displayedTopic.media.alt : ""}
                        fill
                        priority={index === 0}
                        sizes="(min-width: 1280px) 690px, (min-width: 1024px) 54vw, 1px"
                        className={styles.image}
                        style={{
                          objectPosition: displayedTopic.media.objectPosition,
                        }}
                      />
                    </motion.div>
                  );
                })}

                <span className={styles.stageShade} aria-hidden="true" />
                <figcaption className={styles.caption}>
                  <span>{routineTopics[activeIndex].index}</span>
                  <span>{routineTopics[activeIndex].title}</span>
                </figcaption>
              </figure>
            </div>
          )}

          <div className={styles.storyColumn}>
            <span className={styles.rail} aria-hidden="true">
              <motion.span
                className={styles.railFill}
                style={{ transform: lineTransform }}
              />
            </span>

            <ol className={styles.steps}>
              {routineTopics.map((topic, index) => (
                <RoutineStep
                  key={topic.title}
                  topic={topic}
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
