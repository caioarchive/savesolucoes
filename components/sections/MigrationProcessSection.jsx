import Image from "next/image";

import SectionEyebrow from "@/components/about/SectionEyebrow";
import Container from "@/components/layout/Container";

const steps = [
  {
    index: "01",
    title: "Entender o cenário",
    description:
      "Conhecemos a rotina atual, as necessidades e os pontos que merecem atenção.",
  },
  {
    index: "02",
    title: "Organizar a transição",
    description:
      "Alinhamos as informações necessárias e definimos os próximos passos da mudança.",
  },
  {
    index: "03",
    title: "Iniciar o acompanhamento",
    description:
      "Estruturamos a nova rotina contábil e orientamos sua empresa nessa etapa.",
  },
];

export default function MigrationProcessSection() {
  return (
    <section
      id="como-acontece-a-mudanca"
      className="border-t border-border bg-surface py-20 sm:py-24 lg:py-28"
      aria-labelledby="migration-process-title"
    >
      <Container className="max-sm:px-4">
        <div className="grid items-end gap-7 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <SectionEyebrow>TRANSIÇÃO ACOMPANHADA</SectionEyebrow>
            <h2
              id="migration-process-title"
              className="mt-6 max-w-3xl text-balance text-3xl leading-[1.1] tracking-[-0.035em] text-foreground sm:text-5xl"
            >
              Uma mudança organizada, do primeiro contato à nova rotina.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8 lg:col-span-4 lg:col-start-9 lg:pb-1">
            A troca começa com o entendimento da sua empresa. A partir daí, a
            Save orienta as informações necessárias e acompanha os próximos
            passos.
          </p>
        </div>

        <div className="relative mt-12 aspect-[4/3] overflow-hidden rounded-[24px] border border-border bg-surface-secondary sm:aspect-[16/9] lg:mt-14 lg:aspect-[16/7]">
          <Image
            src="/images/foto/IMG_0747.JPG.jpeg"
            alt="Equipe da Save durante a rotina de trabalho no escritório"
            fill
            sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1280px) calc(100vw - 64px), 1280px"
            className="object-cover object-center"
          />
        </div>

        <ol className="relative mt-12 grid gap-10 before:absolute before:bottom-[18px] before:left-[18px] before:top-[18px] before:w-px before:bg-border-strong md:grid-cols-3 md:gap-0 md:before:bottom-auto md:before:left-[18px] md:before:right-[18px] md:before:top-[18px] md:before:h-px md:before:w-auto lg:mt-14">
          {steps.map((step) => (
            <li
              key={step.index}
              className="relative min-w-0 pl-14 md:px-6 md:first:pl-0 md:last:pr-0"
            >
              <span className="absolute left-0 top-0 z-[1] grid size-9 place-items-center rounded-full border border-border-strong bg-surface text-[11px] font-medium tracking-[0.08em] text-neutral-700 md:static">
                {step.index}
              </span>
              <div className="md:mt-7">
                <h3 className="text-xl tracking-[-0.025em] text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
