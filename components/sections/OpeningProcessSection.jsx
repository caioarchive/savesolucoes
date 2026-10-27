"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";

import SectionEyebrow from "@/components/about/SectionEyebrow";
import Container from "@/components/layout/Container";
import { durations, smoothEase, viewportOnce } from "@/lib/motion";

import styles from "./OpeningProcessSection.module.css";

const steps = [
  {
    title: "Entender o negócio",
    description:
      "Conversamos sobre a atividade, os objetivos e a forma de operação.",
  },
  {
    title: "Definir a estrutura",
    description:
      "Orientamos as escolhas iniciais e o enquadramento mais adequado.",
  },
  {
    title: "Cuidar dos registros",
    description: "Acompanhamos a documentação e os processos de formalização.",
  },
  {
    title: "Preparar o início",
    description:
      "Você recebe orientação para começar a rotina da empresa organizada.",
  },
];

const revealTransition = {
  duration: durations.normal,
  ease: smoothEase,
};

function Reveal({ children, className = "", distance, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: viewportOnce.amount,
    margin: "0px 0px -8% 0px",
  });
  const reduceMotion = useReducedMotion();
  const hidden = { opacity: 0, transform: `translateY(${distance}px)` };
  const visible = { opacity: 1, transform: "translateY(0px)" };

  return (
    <motion.div
      ref={ref}
      className={`${styles.reveal} ${className}`}
      initial={reduceMotion ? false : hidden}
      animate={reduceMotion || isInView ? visible : hidden}
      transition={{
        ...revealTransition,
        duration: reduceMotion ? 0 : revealTransition.duration,
        delay: reduceMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}

function PhotoReveal({ children, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: viewportOnce.amount,
    margin: "0px 0px -8% 0px",
  });
  const reduceMotion = useReducedMotion();

  return (
    <div
      ref={ref}
      data-visible={reduceMotion || isInView}
      className={`${styles.photoReveal} ${className}`}
    >
      {children}
    </div>
  );
}

function ProcessStep({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
    margin: "0px 0px -22% 0px",
  });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 78%", "end 78%"],
  });
  const lineTransform = useTransform(
    scrollYProgress,
    (progress) => `scaleY(${progress})`,
  );
  const [nodeReached, setNodeReached] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setNodeReached(progress > 0);
  });
  const reduceMotion = useReducedMotion();
  const show = reduceMotion || isInView;
  const nodeActive = reduceMotion || nodeReached;

  return (
    <li
      ref={ref}
      className="relative pb-10 pl-10 before:absolute before:-left-px before:-bottom-4 before:top-4 before:w-px before:bg-border-strong last:pb-0 last:before:hidden sm:pb-12 sm:pl-12"
    >
      {index < steps.length - 1 && (
        <motion.span
          aria-hidden="true"
          className={`${styles.lineFill} absolute -bottom-4 -left-px top-4 w-px origin-top bg-black`}
          style={{ transform: lineTransform }}
        />
      )}
      <span
        aria-hidden="true"
        data-active={nodeActive}
        className={`${styles.stepNode} absolute -left-4 top-0 grid size-8 place-items-center rounded-full border border-border-strong bg-white text-[11px] font-medium tabular-nums text-neutral-700`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <motion.div
        className={styles.stepContent}
        initial={
          reduceMotion ? false : { opacity: 0, transform: "translateY(20px)" }
        }
        animate={{
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0px)" : "translateY(20px)",
        }}
        transition={{
          ...revealTransition,
          duration: reduceMotion ? 0 : revealTransition.duration,
        }}
      >
        <h3 className="pt-0.5 text-xl leading-snug tracking-[-0.025em] text-foreground sm:text-2xl">
          {step.title}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
          {step.description}
        </p>
      </motion.div>
    </li>
  );
}

export default function OpeningProcessSection() {
  return (
    <section
      aria-labelledby="como-funciona-abertura-title"
      className="border-t border-border bg-surface py-20 sm:py-24 lg:py-28"
    >
      <Container className="max-sm:px-4">
        <Reveal className="max-w-3xl" distance={16}>
          <SectionEyebrow>Como funciona</SectionEyebrow>
          <h2
            id="como-funciona-abertura-title"
            className="mt-6 text-balance text-3xl leading-[1.12] tracking-[-0.035em] text-foreground sm:text-4xl lg:text-5xl"
          >
            Da ideia aos primeiros passos da sua empresa.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
            A Save ajuda a organizar as decisões e os registros necessários para
            começar com clareza.
          </p>
        </Reveal>

        <div className="mt-12 grid min-w-0 gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-stretch lg:gap-16">
          <PhotoReveal className="relative aspect-[4/5] min-w-0 overflow-hidden rounded-[24px] border border-border sm:aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
            <Image
              src="/images/foto/IMG_0735.JPEG"
              alt="Profissionais da Save trabalhando em computadores no escritório"
              fill
              sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 64px), 560px"
              className="object-cover object-[50%_40%]"
            />
          </PhotoReveal>

          <ol className="relative ml-4 self-center lg:ml-5">
            {steps.map((step, index) => (
              <ProcessStep key={step.title} step={step} index={index} />
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
