import Image from "next/image";

import SectionEyebrow from "@/components/about/SectionEyebrow";
import Container from "@/components/layout/Container";
import FadeUp from "@/components/motion/FadeUp";
import ScrollReadText from "@/components/motion/ScrollReadText";

const supportBlocks = [
  {
    title: "Atendimento próximo",
    text: "Orientações claras e acompanhamento alinhado à realidade de cada empresa.",
    className:
      "col-span-2 row-start-1 lg:col-span-4 lg:col-start-1 lg:row-start-1",
  },
  {
    title: "Conhecimento especializado",
    text: "Experiência nas áreas contábil, fiscal, tributária e trabalhista para apoiar cada etapa do negócio.",
    className:
      "col-span-1 col-start-1 row-start-2 lg:col-span-5 lg:col-start-5 lg:row-start-1",
  },
  {
    title: "Processos mais simples",
    text: "Tecnologia aplicada para organizar documentos, informações e rotinas do dia a dia.",
    className:
      "col-span-2 row-start-3 lg:col-span-5 lg:col-start-3 lg:row-start-2",
  },
  {
    title: "Visão empresarial",
    text: "Informações organizadas para apoiar decisões e contribuir com o crescimento da empresa.",
    className:
      "col-span-1 col-start-2 row-start-4 lg:col-span-5 lg:col-start-8 lg:row-start-2",
  },
];

const supportImages = [
  {
    src: "/images/foto/IMG_0747.JPG.jpeg",
    alt: "Pessoas trabalhando em computadores em um escritório",
    className:
      "col-span-1 col-start-1 row-start-4 lg:col-span-3 lg:col-start-10 lg:row-start-1",
    imageClassName:
      "object-[38%_center] sm:object-center lg:object-[center_55%]",
    sizes: "(max-width: 767px) 52vw, (max-width: 1023px) 50vw, 25vw",
  },
  {
    src: "/images/foto/IMG_0735.JPEG",
    alt: "Pessoas concentradas em estações de trabalho em um escritório",
    className:
      "col-span-1 col-start-2 row-start-2 lg:col-span-2 lg:col-start-1 lg:row-start-2",
    imageClassName:
      "object-[44%_center] sm:object-[50%_48%] lg:object-[50%_42%]",
    sizes: "(max-width: 767px) 43vw, (max-width: 1023px) 50vw, 17vw",
  },
];

function SupportCard({ title, text, className, delay }) {
  return (
    <FadeUp
      className={`${className} h-full !opacity-100 motion-reduce:!transform-none`}
      delay={delay}
      distance={10}
      instantOnReducedMotion
    >
      <article className="flex h-full flex-col justify-center rounded-[18px] border border-white/10 bg-neutral-100 p-4 text-neutral-950 sm:rounded-[20px] sm:p-6 lg:min-h-[180px] lg:p-7">
        <h3 className="text-lg font-semibold tracking-[-0.025em] sm:text-xl">
          {title}
        </h3>

        <p className="mt-3 max-w-lg text-[0.8125rem] leading-5 text-neutral-600 sm:text-sm sm:leading-6">
          {text}
        </p>
      </article>
    </FadeUp>
  );
}

function SupportImage({ src, alt, className, imageClassName, sizes, delay }) {
  return (
    <FadeUp
      className={`${className} h-full !opacity-100 motion-reduce:!transform-none`}
      delay={delay}
      distance={10}
      instantOnReducedMotion
    >
      <div className="relative h-full min-h-56 overflow-hidden rounded-[18px] border border-white/10 bg-neutral-900 sm:rounded-[20px] lg:min-h-[180px]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={`object-cover ${imageClassName}`}
        />
      </div>
    </FadeUp>
  );
}

export default function AccountingSupportSection() {
  return (
    //bg-gradient-to-l from-zinc-800 via-zinc-900 to-zinc-800
    <section className="overflow-hidden bg-gradient-to-l from-zinc-800 via-zinc-900 to-zinc-800 py-20 text-white [&_p_span]:!opacity-100 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-6">
          <FadeUp
            className="!opacity-100 motion-reduce:!transform-none lg:col-span-7"
            distance={10}
            instantOnReducedMotion
          >
            <SectionEyebrow dark>Como apoiamos sua empresa</SectionEyebrow>
            <h2 className="mt-7 max-w-3xl text-balance text-3xl tracking-[-0.035em] text-white sm:text-5xl">
              Contabilidade organizada para decisões mais seguras.
            </h2>
          </FadeUp>

          <FadeUp
            className="!opacity-100 motion-reduce:!transform-none lg:col-span-4 lg:col-start-9"
            delay={0.08}
            distance={10}
            instantOnReducedMotion
          >
            <div className="max-w-xl text-base leading-relaxed text-neutral-300">
              <ScrollReadText>
                A Save combina experiência contábil, conhecimento tributário e
                tecnologia para acompanhar as rotinas da sua empresa com clareza
                e proximidade.
              </ScrollReadText>
            </div>
          </FadeUp>
        </div>

        <div className="mt-10 grid grid-cols-[minmax(0,1.16fr)_minmax(0,0.84fr)] gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12">
          <SupportCard {...supportBlocks[0]} delay={0} />
          <SupportCard {...supportBlocks[1]} delay={0.06} />
          <SupportImage {...supportImages[0]} delay={0.12} />
          <SupportImage {...supportImages[1]} delay={0} />
          <SupportCard {...supportBlocks[2]} delay={0.06} />
          <SupportCard {...supportBlocks[3]} delay={0.12} />
        </div>
      </Container>
    </section>
  );
}
