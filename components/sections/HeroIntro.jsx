"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

import Button from "@/components/ui/Button";
import { smoothEase } from "@/lib/motion";

import styles from "./Hero.module.css";

export default function HeroIntro() {
  const shouldReduceMotion = useReducedMotion();
  const titleEnter = shouldReduceMotion
    ? { opacity: 0, transform: "translateY(0%)", filter: "blur(0px)" }
    : {
        opacity: 0,
        transform: "translateY(100%)",
        filter: "blur(8px)",
      };
  const titleVisible = {
    opacity: 1,
    transform: "translateY(0%)",
    filter: "blur(0px)",
  };
  const visible = { opacity: 1, transform: "translateY(0%)" };
  const supportingEnter = shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, transform: "translateY(12px)" };

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex flex-1 flex-col items-center justify-center pb-32 pt-4 text-center sm:pb-28">
        <h1 className="max-w-[1180px] text-balance text-[clamp(2.25rem,4.5vw,4.375rem)] leading-[1.1] tracking-[-0.045em] text-neutral-950">
          <span className={styles.titleMask}>
            <motion.span
              className="block"
              initial={titleEnter}
              animate={titleVisible}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.55,
                ease: smoothEase,
              }}
            >
              Contabilidade que organiza o
            </motion.span>
          </span>{" "}
          <span className={styles.titleMask}>
            <motion.span
              className="block"
              initial={titleEnter}
              animate={titleVisible}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.55,
                delay: shouldReduceMotion ? 0 : 0.08,
                ease: smoothEase,
              }}
            >
              presente e prepara o{" "}
              <strong className="font-semibold">próximo passo.</strong>
            </motion.span>
          </span>
        </h1>
        <motion.p
          className="mt-6 max-w-[680px] text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8"
          initial={supportingEnter}
          animate={visible}
          transition={{
            duration: shouldReduceMotion ? 0.2 : 0.45,
            delay: shouldReduceMotion ? 0 : 0.24,
            ease: smoothEase,
          }}
        >
          A Save acompanha as rotinas contábeis, fiscais e trabalhistas para sua{" "}
          <strong className="font-semibold">
            {" "}
            empresa decidir com mais clareza.
          </strong>
        </motion.p>
        <motion.div
          className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          initial={supportingEnter}
          animate={visible}
          transition={{
            duration: shouldReduceMotion ? 0.2 : 0.45,
            delay: shouldReduceMotion ? 0 : 0.32,
            ease: smoothEase,
          }}
        >
          <Button external href="https://wa.me/558234351890" variant="primary">
            Falar com a Save <MessageCircle size={18} aria-hidden="true" />
          </Button>
          <Link
            href="/servicos"
            className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-neutral-300 bg-white px-6 text-sm font-medium text-neutral-900 transition-colors duration-200 hover:border-neutral-400 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 motion-reduce:duration-0"
          >
            Conhecer os serviços <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
