import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Container from "@/components/layout/Container";
import PageHero from "@/components/pages/PageHero";
import { makeMetadata } from "@/lib/metadata";

export const metadata = makeMetadata(
  "Ferramentas contábeis",
  "Acesse downloads, consultas e referências úteis para a rotina da sua empresa.",
  "/ferramentas",
);

const resources = [
  [
    "Utilitários contábeis",
    "Consultas, certidões, impostos e indicadores reunidos por assunto.",
    "Ver utilitários",
    "/ferramentas/utilitarios",
  ],
  [
    "Links úteis",
    "Referências para a rotina contábil e administrativa em um portal externo.",
    "Abrir links úteis",
    "http://idealsoftwares.com.br/links/links.html",
  ],
  [
    "Downloads",
    "Modelos trabalhistas previstos. Os arquivos serão adicionados quando estiverem disponíveis.",
    "Ver downloads",
    "/downloads",
  ],
  [
    "Agenda tributária",
    "Consulte os compromissos tributários e confirme os prazos aplicáveis à sua empresa.",
    "Abrir agenda",
    "http://www.idealsoftwares.com.br/agendas/index-.php",
  ],
  [
    "Manual empresarial",
    "Acesse o manual empresarial em PDF publicado externamente.",
    "Abrir manual",
    "http://idealsoftwares.com.br/links/manual_empresarial/Manual_empresarial.pdf",
  ],
  [
    "Tabelas práticas",
    "Referências contábeis para consulta. Confira a data e a fonte antes de usar.",
    "Abrir tabelas",
    "http://idealsoftwares.com.br/tabelas/",
  ],
];

const cardClass =
  "group flex h-full min-h-64 flex-col rounded-[24px] border border-border-strong bg-white p-7 shadow-[0_8px_30px_rgba(20,20,20,0.035)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-[0_18px_40px_rgba(20,20,20,0.08)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 motion-reduce:transform-none motion-reduce:transition-none sm:p-8";

export default function FerramentasPage() {
  return (
    <>
      <PageHero
        eyebrow="Para sua rotina"
        title="Ferramentas contábeis em um só lugar."
        text="Encontre consultas, referências e modelos para apoiar o dia a dia da sua empresa."
      />
      <section
        className="bg-surface py-14 sm:py-20"
        aria-label="Recursos contábeis"
      >
        <Container>
          <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {resources.map(([title, description, action, href], index) => {
              const external = !href.startsWith("/");
              const content = (
                <>
                  <span className="text-xs font-medium tracking-[0.16em] text-neutral-500">
                    {String(index + 1).padStart(2, "0")} / 06
                  </span>
                  <h2 className="mt-8 text-[1.4rem] leading-tight tracking-[-0.02em] text-foreground">
                    {title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-9 text-sm font-semibold text-foreground">
                    {action}
                    {external ? (
                      <ExternalLink size={16} aria-hidden="true" />
                    ) : (
                      <ArrowUpRight size={16} aria-hidden="true" />
                    )}
                    {external && (
                      <span className="sr-only">
                        (site externo, abre em nova aba)
                      </span>
                    )}
                  </span>
                </>
              );
              return (
                <li key={title}>
                  {external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cardClass}
                    >
                      {content}
                    </a>
                  ) : (
                    <Link href={href} className={cardClass}>
                      {content}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="mt-8 max-w-2xl text-sm leading-6 text-neutral-600">
            Agenda, manual, tabelas e links úteis são publicados por terceiros.
            Confira as informações na fonte antes de tomar decisões.
          </p>
        </Container>
      </section>
    </>
  );
}
