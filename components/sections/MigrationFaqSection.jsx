"use client";

import { useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";

import SectionEyebrow from "@/components/about/SectionEyebrow";
import Container from "@/components/layout/Container";
import { smoothEase } from "@/lib/motion";

const questions = [
  {
    question: "Preciso enviar documentos ao preencher o formulário?",
    answer:
      "Não. O formulário solicita somente informações iniciais sobre a empresa. Nenhum documento sensível é pedido nesta etapa.",
  },
  {
    question: "Quais informações a Save precisa para entender minha empresa?",
    answer:
      "Razão social, CNPJ, tipo de empresa, telefone, e-mail e uma mensagem sobre a necessidade atual ajudam a equipe a entender o primeiro contato.",
  },
  {
    question: "Como são definidos os próximos passos da mudança?",
    answer:
      "Depois de conhecer a rotina e as necessidades da empresa, a Save alinha as informações necessárias e orienta os próximos passos da transição.",
  },
  {
    question: "Posso conversar com a Save antes de decidir?",
    answer:
      "Sim. O canal de WhatsApp disponível nesta página permite iniciar uma conversa com a equipe antes de preencher o formulário.",
  },
  {
    question: "O que acontece depois que envio o formulário?",
    answer:
      "A equipe da Save recebe as informações e entra em contato pelos dados informados para entender o cenário e orientar os próximos passos.",
  },
];

export default function MigrationFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const id = useId();
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="migrar-contabilidade-faq-title"
      className="border-t border-border bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container className="grid min-w-0 gap-12 max-sm:px-4 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start lg:gap-20">
        <div className="max-w-lg">
          <SectionEyebrow>DÚVIDAS FREQUENTES</SectionEyebrow>
          <h2
            id="migrar-contabilidade-faq-title"
            className="mt-6 max-w-[17ch] text-balance text-3xl leading-[1.12] tracking-[-0.035em] text-foreground sm:text-4xl lg:text-5xl"
          >
            Perguntas sobre mudar de contabilidade.
          </h2>
          <p className="mt-5 max-w-sm text-base leading-7 text-neutral-700">
            Informações para entender o primeiro contato e os próximos passos da
            transição.
          </p>
        </div>

        <div className="min-w-0 border-t border-border">
          {questions.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            const buttonId = `${id}-question-${index}`;
            const panelId = `${id}-answer-${index}`;

            return (
              <div key={question} className="border-b border-border">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 py-6 text-left text-base font-semibold leading-7 tracking-[-0.02em] text-foreground focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 sm:min-h-20 sm:text-lg"
                  >
                    <span className="min-w-0">{question}</span>
                    <Plus
                      size={20}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className={`shrink-0 text-neutral-600 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                </h3>
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.2,
                    ease: smoothEase,
                  }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[65ch] pb-6 pr-10 text-sm leading-7 text-neutral-700 sm:text-base">
                    {answer}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
