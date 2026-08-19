"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

import MagneticButton from "@/components/interactions/MagneticButton";
import AnimatedText from "@/components/ui/AnimatedText";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import { smoothEase } from "@/lib/motion";

export default function HeroIntro() {
  const shouldReduceMotion = useReducedMotion();
  const offset = shouldReduceMotion ? 0 : 12;
  const duration = shouldReduceMotion ? 0.2 : 0.6;

  return (
    <div className="mx-auto max-w-4xl text-center">
      <motion.div
        initial={{
          opacity: 1,
          y: offset,
          filter: shouldReduceMotion ? "blur(0px)" : "blur(2px)",
        }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration, ease: smoothEase }}
      >
        <Badge>Soluções contábeis e empresariais</Badge>
      </motion.div>

      <AnimatedText className="mx-auto mt-7 max-w-[900px] text-balance text-[clamp(2.75rem,6vw,4rem)] leading-[1.02] tracking-[-0.045em] text-foreground">
        Contabilidade completa para sua empresa crescer com organização e
        segurança.
      </AnimatedText>

      <motion.p
        initial={{ opacity: 1, y: offset }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration, delay: shouldReduceMotion ? 0 : 0.28 }}
        className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted"
      >
        A Save reúne experiência contábil, conhecimento tributário e tecnologia
        para cuidar das obrigações da sua empresa e apoiar decisões mais
        seguras.
      </motion.p>

      <motion.div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
        <motion.div
          initial={{ opacity: 1, y: offset }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration,
            delay: shouldReduceMotion ? 0 : 0.42,
            ease: smoothEase,
          }}
        >
          <MagneticButton>
            <Button external href="https://wa.me/558234351890" cursor="↗">
              Falar com a Save <MessageCircle size={18} />
            </Button>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: offset }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration,
            delay: shouldReduceMotion ? 0 : 0.5,
            ease: smoothEase,
          }}
        >
          <Button href="/servicos" variant="secondary">
            Conhecer os serviços <ArrowRight size={18} />
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 1, y: shouldReduceMotion ? 0 : 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration, delay: shouldReduceMotion ? 0 : 0.56 }}
        className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-muted"
      >
        <span>Atendimento nacional</span>
        <span aria-hidden="true">·</span>
        <span>Tecnologia e proximidade</span>
        <span aria-hidden="true">·</span>
        <span>Informação clara</span>
      </motion.div>
    </div>
  );
}
