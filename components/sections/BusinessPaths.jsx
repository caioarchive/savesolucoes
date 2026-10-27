import Link from "next/link";

import { ArrowRight, Building2, RefreshCcw } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Container from "@/components/layout/Container";
import FadeUp from "@/components/motion/FadeUp";

const paths = [
  {
    icon: Building2,
    title: "Quero abrir uma empresa",
    text: "Conte com a Save para cuidar das etapas de constituição, enquadramento e legalização do seu negócio.",
    label: "Iniciar abertura",
    href: "/abrir-empresa",
  },
  {
    icon: RefreshCcw,
    title: "Quero mudar de contador",
    text: "Migre sua contabilidade com acompanhamento, organização das informações e uma transição mais tranquila.",
    label: "Migrar para a Save",
    href: "/migrar-contabilidade",
  },
];

const pathClasses = [
  "group flex h-full gap-5 rounded-[24px] border border-border-strong bg-white p-6 sm:gap-6 sm:p-8 lg:p-9",
  "transition-[transform,opacity] duration-200 ease-out",
  "hover:-translate-y-0.5 active:scale-[0.98]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset",
  "motion-reduce:transform-none motion-reduce:transition-none",
].join(" ");

export default function BusinessPaths() {
  return (
    <section className="bg-neutral-100 py-12 sm:py-14 lg:py-16">
      <Container>
        <FadeUp className="text-left md:text-center">
          <div className="mb-4 md:flex md:justify-center">
            <Badge>Próximo passo</Badge>
          </div>
          <h2 className="text-balance text-3xl tracking-[-0.035em] text-foreground sm:text-4xl md:mx-auto md:max-w-3xl">
            Vai abrir uma empresa ou mudar de contador?
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted sm:text-lg md:mx-auto">
            Escolha o caminho e conheça como a Save pode acompanhar esse
            processo.
          </p>
        </FadeUp>

        <div className="mt-8 grid auto-rows-fr gap-5 lg:grid-cols-2 lg:gap-6">
          {paths.map((path, index) => {
            const Icon = path.icon;

            return (
              <FadeUp
                key={path.title}
                className="h-full text-foreground"
                delay={index * 0.08}
              >
                <Link
                  href={path.href}
                  data-cursor="Ver"
                  className={`${pathClasses} focus-visible:ring-black`}
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-border bg-surface text-black sm:size-14">
                    <Icon size={22} strokeWidth={1.7} />
                  </span>

                  <div className="flex min-w-0 flex-1 flex-col items-start">
                    <h3 className="text-2xl tracking-[-0.025em] sm:text-[1.75rem]">
                      {path.title}
                    </h3>
                    <p className="mt-3 max-w-lg leading-7 text-muted">
                      {path.text}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                      {path.label}
                      <ArrowRight
                        size={18}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
