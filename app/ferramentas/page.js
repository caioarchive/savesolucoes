import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Container from "@/components/layout/Container";
import { makeMetadata } from "@/lib/metadata";

export const metadata = makeMetadata(
  "Ferramentas contábeis",
  "Acesse downloads, consultas e referências úteis para a rotina da sua empresa.",
  "/ferramentas",
);

const resources = [
  {
    title: "Utilitários contábeis",
    description: "Consultas oficiais de CPF, CNPJ e Simples Nacional.",
    links: [
      {
        label: "Consultar CPF",
        href: "https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/cadastros/cpf",
      },
      {
        label: "Consultar CNPJ",
        href: "https://solucoes.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva_solicitacao.asp",
      },
      {
        label: "Simples Nacional",
        href: "https://www8.receita.fazenda.gov.br/SimplesNacional/",
      },
    ],
  },
  {
    title: "Links úteis",
    description:
      "Lista de referências para a rotina contábil e administrativa, mantida por um fornecedor externo.",
    links: [
      {
        label: "Abrir links úteis",
        href: "http://idealsoftwares.com.br/links/links.html",
      },
    ],
  },
  {
    title: "Downloads",
    description:
      "Consulte os modelos trabalhistas previstos; os arquivos serão adicionados quando estiverem disponíveis.",
    links: [{ label: "Ver downloads", href: "/downloads" }],
  },
  {
    title: "Agenda tributária",
    description:
      "Consulte a agenda publicada por um fornecedor externo e confirme os prazos aplicáveis à sua empresa.",
    links: [
      {
        label: "Abrir agenda",
        href: "http://www.idealsoftwares.com.br/agendas/index-.php",
      },
    ],
  },
  {
    title: "Manual empresarial",
    description: "Manual em PDF publicado por um fornecedor externo.",
    links: [
      {
        label: "Abrir manual",
        href: "http://idealsoftwares.com.br/links/manual_empresarial/Manual_empresarial.pdf",
      },
    ],
  },
  {
    title: "Tabelas práticas",
    description:
      "Tabelas de referência publicadas por um fornecedor externo; confira a data e a fonte antes de usar.",
    links: [
      { label: "Abrir tabelas", href: "http://idealsoftwares.com.br/tabelas/" },
    ],
  },
];

export default function FerramentasPage() {
  return (
    <>
      <section className="border-b border-border bg-white pb-16 pt-32 sm:pb-20 lg:pt-40">
        <Container>
          <h1 className="max-w-4xl text-balance text-4xl leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
            Ferramentas contábeis
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
            Acessos para consultas, referências e modelos usados na rotina da
            empresa.
          </p>
        </Container>
      </section>
      <section
        className="bg-surface py-14 sm:py-20"
        aria-label="Recursos contábeis"
      >
        <Container>
          <ul className="max-w-4xl border-t border-border-strong">
            {resources.map((resource) => (
              <li
                key={resource.title}
                className="grid gap-4 border-b border-border-strong py-7 sm:grid-cols-[1fr_auto] sm:gap-8"
              >
                <div>
                  <h2 className="text-xl text-foreground">{resource.title}</h2>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-600">
                    {resource.description}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-1 sm:max-w-60 sm:flex-col sm:items-end sm:justify-center">
                  {resource.links.map((link) =>
                    link.href.startsWith("/") ? (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="inline-flex min-h-11 items-center text-sm font-medium text-foreground underline underline-offset-4 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-foreground underline underline-offset-4 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
                      >
                        {link.label}
                        <ExternalLink size={14} aria-hidden="true" />
                        <span className="sr-only">(abre em nova aba)</span>
                      </a>
                    ),
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
