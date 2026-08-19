import Link from "next/link";

import { ArrowRight, Building2, RefreshCcw } from "lucide-react";

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

const cardClasses = [
  "group flex h-full flex-col gap-8",
  "rounded-[22px] border border-border bg-white p-8",
  "transition duration-300 hover:-translate-y-1 hover:scale-[1.01]",
  "hover:border-border-strong hover:shadow-[0_18px_55px_rgba(0,0,0,0.05)]",
  "sm:flex-row sm:items-start",
].join(" ");

export default function BusinessPaths() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid gap-5 lg:grid-cols-2">
          {paths.map((path, index) => {
            const Icon = path.icon;

            return (
              <FadeUp key={path.title} delay={index * 0.08}>
                <Link
                  href={path.href}
                  data-cursor="Ver"
                  className={cardClasses}
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-surface text-black">
                    <Icon size={22} strokeWidth={1.7} />
                  </span>

                  <div>
                    <h2 className="text-2xl tracking-[-0.025em]">
                      {path.title}
                    </h2>
                    <p className="mt-3 max-w-lg leading-7 text-muted">
                      {path.text}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                      {path.label}
                      <ArrowRight
                        className="transition-transform duration-200 group-hover:translate-x-1"
                        size={16}
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
