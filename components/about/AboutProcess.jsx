"use client";

import { useRef, useState } from "react";
import {
  ChartNoAxesCombined,
  ClipboardCheck,
  MessagesSquare,
  Search,
} from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import Container from "@/components/layout/Container";
import SectionEyebrow from "@/components/about/SectionEyebrow";
import { smoothEase } from "@/lib/motion";

import styles from "./AboutProcess.module.css";

const processSteps = [
  {
    index: "01",
    title: "Entender o cenário",
    description:
      "Conhecemos a operação, as responsabilidades e o momento atual da empresa.",
    icon: Search,
    side: "right",
    nodePosition: "center",
  },
  {
    index: "02",
    title: "Organizar a rotina",
    description:
      "Estruturamos documentos, obrigações, prazos e responsabilidades com clareza.",
    icon: ClipboardCheck,
    side: "left",
    nodePosition: "left",
  },
  {
    index: "03",
    title: "Acompanhar em conjunto",
    description:
      "Mantemos uma troca próxima para orientar demandas e evitar que informações se percam.",
    icon: MessagesSquare,
    side: "right",
    nodePosition: "right",
  },
  {
    index: "04",
    title: "Apoiar as decisões",
    description:
      "Transformamos dados e resultados em informações mais úteis para os próximos passos.",
    icon: ChartNoAxesCombined,
    side: "left",
    nodePosition: "soft-left",
  },
];

// Each step occupies one quarter of the journey. Switch when the next
// step's center reaches the center of the viewport.
const activeStepThresholds = [3 / 8, 5 / 8, 7 / 8];

function getActiveStepIndex(progress) {
  if (progress < activeStepThresholds[0]) return 0;
  if (progress < activeStepThresholds[1]) return 1;
  if (progress < activeStepThresholds[2]) return 2;
  return 3;
}

const stepVariants = {
  hidden: {
    opacity: 0,
    transform: "translateY(22px)",
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    transform: "translateY(0px)",
    filter: "blur(0px)",
    transition: {
      duration: 0.62,
      ease: smoothEase,
      delayChildren: 0.08,
      staggerChildren: 0.055,
    },
  },
};

const detailVariants = {
  hidden: {
    opacity: 0,
    transform: "translateY(8px)",
  },
  visible: {
    opacity: 1,
    transform: "translateY(0px)",
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
};

const reducedVariants = {
  hidden: {},
  visible: {
    opacity: 1,
    transform: "translateY(0px)",
    filter: "blur(0px)",
    transition: { duration: 0 },
  },
};

function ProcessPath({ progress, mobile = false }) {
  const path = mobile
    ? "M24 110 L24 770"
    : "M60 110 C60 190 24 220 24 330 C24 420 96 460 96 550 C96 640 36 680 36 770";

  return (
    <svg
      className={mobile ? styles.mobilePath : styles.desktopPath}
      viewBox={mobile ? "0 0 48 880" : "0 0 120 880"}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={path}
        fill="none"
        stroke="var(--border)"
        strokeWidth={mobile ? 10 : 12}
        strokeLinecap="round"
      />
      <motion.path
        className={styles.progressPath}
        d={path}
        fill="none"
        stroke="#171717"
        strokeWidth={mobile ? 2 : 2.5}
        strokeLinecap="round"
        style={{ pathLength: progress }}
      />
      <path
        className={styles.reducedPath}
        d={path}
        fill="none"
        stroke="#171717"
        strokeWidth={mobile ? 2 : 2.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProcessStep({ step, isActive, reducedMotion }) {
  const Icon = step.icon;
  const variants = reducedMotion ? reducedVariants : stepVariants;
  const contentVariants = reducedMotion ? reducedVariants : detailVariants;

  return (
    <li
      className={`${styles.step} ${styles[`step-${step.side}`]}`}
      aria-current={isActive ? "step" : undefined}
    >
      <span
        className={`${styles.node} ${styles[`node-${step.nodePosition}`]} ${
          isActive ? styles.nodeActive : ""
        }`}
        style={
          !isActive
            ? { borderColor: "#d7d7d2", backgroundColor: "#fafafa" }
            : undefined
        }
        aria-hidden="true"
      />

      <motion.article
        className={`${styles.stepContent} ${isActive ? styles.stepActive : ""} motion-reduce:opacity-100! motion-reduce:transform-none! motion-reduce:blur-none!`}
        initial={reducedMotion ? false : "hidden"}
        animate={reducedMotion ? "visible" : undefined}
        whileInView={reducedMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.28 }}
        variants={variants}
      >
        <motion.div className={styles.stepMeta} variants={contentVariants}>
          <span className={styles.icon} aria-hidden="true">
            <Icon size={22} strokeWidth={1.7} />
          </span>
          <span className={styles.index}>{step.index}</span>
        </motion.div>
        <motion.h3 className={styles.stepTitle} variants={contentVariants}>
          {step.title}
        </motion.h3>
        <motion.p className={styles.stepDescription} variants={contentVariants}>
          {step.description}
        </motion.p>
      </motion.article>
    </li>
  );
}

export default function AboutProcess() {
  const journeyRef = useRef(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start 68%", "end 38%"],
  });
  const pathProgress = useTransform(scrollYProgress, [0, 0.94], [0, 1]);
  const { scrollYProgress: activeStepProgress } = useScroll({
    target: journeyRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(activeStepProgress, "change", (progress) => {
    const nextIndex = getActiveStepIndex(progress);
    if (nextIndex !== activeIndexRef.current) {
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
    }
  });

  return (
    <section className="bg-neutral-900 py-10 sm:py-12 lg:py-16">
      <Container className="!px-4 sm:!px-8">
        <div className="overflow-hidden rounded-[24px] bg-neutral-50 px-5 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <header className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Como trabalhamos</SectionEyebrow>
            <h2 className="mt-7 text-balance text-3xl leading-[1.1] tracking-[-0.035em] text-foreground sm:text-5xl">
              Um acompanhamento que começa pela realidade da empresa.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              Da primeira conversa ao acompanhamento contínuo, cada etapa
              aproxima informações, rotina e decisões.
            </p>
          </header>

          <div ref={journeyRef} className={styles.journey}>
            <ProcessPath progress={pathProgress} />
            <ProcessPath progress={pathProgress} mobile />

            <ol className={styles.steps}>
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={step.index}
                  step={step}
                  isActive={activeIndex === index}
                  reducedMotion={reducedMotion}
                />
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
