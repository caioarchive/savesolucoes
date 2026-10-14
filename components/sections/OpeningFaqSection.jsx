"use client";

import { useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";

import SectionEyebrow from "@/components/about/SectionEyebrow";
import Container from "@/components/layout/Container";
import { smoothEase } from "@/lib/motion";

const questions = [
  {
    question: "Preciso ter tudo definido antes de falar com a Save?",
    answer:
      "Não. Podemos começar com uma conversa sobre sua atividade, seus objetivos e o que já está definido. A partir daí, orientamos os próximos passos.",
  },
  {
    question: "A Save orienta a escolha da estrutura e do enquadramento?",
    answer:
      "Sim. A Save orienta as decisões iniciais sobre a estrutura da empresa e o enquadramento tributário, considerando as informações da sua operação.",
  },
  {
    question: "Posso receber atendimento se estiver em outra cidade?",
    answer:
      "Sim. A Save atende empresas em diferentes cidades e pode organizar as conversas e a troca de informações por canais digitais.",
  },
  {
    question: "Quanto tempo leva para abrir uma empresa?",
    answer:
      "O prazo varia conforme a atividade, a localidade e a documentação necessária. Após entender seu caso, a equipe orienta as etapas e acompanha o andamento.",
  },
  {
    question: "O que acontece depois que envio o formulário?",
    answer:
      "A equipe da Save analisa as informações enviadas e entra em contato para entender seu projeto e orientar os próximos passos.",
  },
];

export default function OpeningFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const id = useId();
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="abrir-empresa-faq-title"
      className="border-t border-border bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container className="grid min-w-0 gap-12 max-sm:px-4 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start lg:gap-20">
        <div className="max-w-lg">
          <SectionEyebrow>DÚVIDAS FREQUENTES</SectionEyebrow>
          <h2
            id="abrir-empresa-faq-title"
            className="mt-6 max-w-[17ch] text-balance text-3xl leading-[1.12] tracking-[-0.035em] text-foreground sm:text-4xl lg:text-5xl"
          >
            O que você precisa saber para começar.
          </h2>
          <p className="mt-5 max-w-sm text-base leading-7 text-neutral-700">
            Entenda as primeiras decisões e como a Save acompanha a abertura da
            sua empresa.
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
