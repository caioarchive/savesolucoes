"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

import MagneticButton from "@/components/interactions/MagneticButton";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { smoothEase } from "@/lib/motion";

export default function HeroIntro() {
  const shouldReduceMotion = useReducedMotion();
  const contentEnter = shouldReduceMotion ? false : { y: 12 };
  const contentVisible = { y: 0 };
  const titleEnter = shouldReduceMotion
    ? false
    : { y: 12, filter: "blur(2px)" };

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex flex-1 flex-col items-center justify-center pb-16 pt-4 text-center sm:pb-24 lg:pb-24">
        <motion.div
          className="mb-7 [&>span]:text-sm [&>span]:font-semibold sm:[&>span]:text-base"
          initial={titleEnter}
          animate={
            shouldReduceMotion ? undefined : { y: 0, filter: "blur(0px)" }
          }
          transition={{
            duration: shouldReduceMotion ? 0 : 0.55,
            ease: smoothEase,
          }}
        >
          <Badge>Soluções contábeis e empresariais</Badge>
        </motion.div>
        <motion.h1
          className="max-w-[900px] text-balance text-[clamp(2.25rem,6vw,4rem)] font-medium leading-[1.02] tracking-[-0.045em] text-neutral-950"
          style={{ fontWeight: 500 }}
          initial={titleEnter}
          animate={{ y: 0, filter: "blur(0px)" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.55,
            ease: smoothEase,
          }}
        >
          Contabilidade completa para crescer com segurança.
        </motion.h1>
        <motion.p
          className="mt-6 max-w-[760px] text-pretty text-[17px] font-medium leading-7 text-neutral-600 sm:text-lg sm:leading-8 lg:text-xl"
          initial={contentEnter}
          animate={contentVisible}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.55,
            delay: shouldReduceMotion ? 0 : 0.1,
            ease: smoothEase,
          }}
        >
          A Save reúne experiência contábil, conhecimento tributário e
          tecnologia para cuidar das obrigações da sua empresa e apoiar decisões
          mais seguras.
        </motion.p>
        <motion.div
          className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          initial={contentEnter}
          animate={contentVisible}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.55,
            delay: shouldReduceMotion ? 0 : 0.2,
            ease: smoothEase,
          }}
        >
          <MagneticButton>
            <Button
              external
              href="https://wa.me/558234351890"
              variant="primary"
              cursor="↗"
              className="min-h-14 px-7 text-base! font-semibold"
            >
              Falar com a Save <MessageCircle size={18} aria-hidden="true" />
            </Button>
          </MagneticButton>
          <Link
            href="/servicos"
            className="inline-flex min-h-14 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-neutral-300 bg-white px-7 text-base font-semibold text-neutral-900 transition-colors duration-200 hover:border-neutral-400 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 motion-reduce:duration-0"
          >
            Conhecer os serviços <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
