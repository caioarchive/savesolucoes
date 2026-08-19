"use client";

import { useRef } from "react";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { BarChart3, CheckCircle2, FileCheck2, ShieldCheck } from "lucide-react";

import { parallaxSpring, smoothEase, staggerVariants } from "@/lib/motion";

const chartValues = [40, 64, 52, 78, 62, 88, 76];

export default function HeroDashboard() {
  const dashboardRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: dashboardRef,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, parallaxSpring);
  const y = useTransform(
    smoothProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [24, -12],
  );

  const dashboardClasses = [
    "relative overflow-hidden rounded-[24px]",
    "border border-border bg-white p-3 sm:p-5",
    "shadow-[0_24px_70px_rgba(0,0,0,0.06)]",
  ].join(" ");

  return (
    <motion.div
      ref={dashboardRef}
      style={{ y }}
      className="relative mx-auto w-full"
    >
      <motion.div
        initial={{ opacity: 1, translateY: shouldReduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0.2 : 0.7,
          delay: shouldReduceMotion ? 0 : 0.45,
          ease: smoothEase,
        }}
        className={dashboardClasses}
      >
        <div className="flex items-center justify-between border-b border-border px-2 pb-5 sm:px-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              Visão empresarial
            </p>
            <h2 className="mt-2 text-xl text-ink">Sua empresa, organizada</h2>
          </div>
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-surface text-black">
            <BarChart3 />
          </span>
        </div>

        <motion.div
          initial={false}
          animate="visible"
          variants={staggerVariants}
          className="grid gap-3 pt-5 md:grid-cols-[0.7fr_0.7fr_1.6fr]"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0 },
            }}
            className="rounded-[18px] bg-surface p-5"
          >
            <p className="text-xs text-muted">Obrigações</p>
            <p className="mt-3 text-lg font-medium text-ink">Acompanhadas</p>
            <CheckCircle2 className="mt-10 text-black" size={20} />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0 },
            }}
            className="rounded-[18px] bg-surface-secondary p-5"
          >
            <p className="text-xs text-muted">Informações</p>
            <p className="mt-3 text-lg font-medium text-ink">Mais clareza</p>
            <ShieldCheck className="mt-10 text-black" size={20} />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0 },
            }}
            className="rounded-[18px] border border-border p-5"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-2 text-sm font-medium">
                <FileCheck2 size={17} />
                Rotina contábil
              </span>
              <span className="text-xs text-muted">Organizada</span>
            </div>

            <div className="mt-6 flex h-24 items-end gap-2">
              {chartValues.map((height, index) => (
                <motion.span
                  key={height + index}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : 0.35 + index * 0.06,
                    duration: shouldReduceMotion ? 0.15 : 0.55,
                  }}
                  className="flex-1 rounded-t-sm bg-neutral-900"
                />
              ))}
            </div>
            <motion.span
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0.1 : 0.75,
                delay: shouldReduceMotion ? 0 : 0.62,
                ease: smoothEase,
              }}
              className="mt-3 block h-px origin-left bg-neutral-300"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
