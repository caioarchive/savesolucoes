import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Container from "@/components/layout/Container";
import { makeMetadata } from "@/lib/metadata";

export const metadata = makeMetadata(
  "Utilitários contábeis",
  "Consultas cadastrais, certidões, tributos e indicadores para sua empresa.",
  "/ferramentas/utilitarios",
);

const groups = [
  {
    title: "Cadastros e consultas",
    description: "Informações cadastrais em fontes oficiais.",
    links: [
      [
        "CPF — Receita Federal",
        "https://www.gov.br/receitafederal/pt-br/assuntos/meu-cpf",
      ],
      [
        "Consultar CNPJ",
        "https://solucoes.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva_solicitacao.asp",
      ],
    ],
  },
  {
    title: "Certidões",
    description: "Emissão e consulta de regularidade.",
    links: [
      [
        "Emitir certidão — Receita Federal",
        "https://www.gov.br/pt-br/servicos/emitir-certidao-de-regularidade-fiscal",
      ],
      [
        "Regularidade do empregador — FGTS",
        "https://consulta-crf.caixa.gov.br/consultacrf/pages/consultaEmpregador.jsf",
      ],
    ],
  },
  {
    title: "Tributos e contribuições",
    description: "Portais e cálculos para obrigações da empresa.",
    links: [
      [
        "Simples Nacional",
        "https://www8.receita.fazenda.gov.br/SimplesNacional/",
      ],
      [
        "Cálculo de contribuições em atraso",
        "https://sal.rfb.gov.br/PortalSalInternet/faces/pages/index.xhtml",
      ],
      [
        "PER/DCOMP",
        "https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/restituicao-ressarcimento-reembolso-e-compensacao/perdcomp",
      ],
    ],
  },
  {
    title: "Índices e tabelas",
    description: "Dados de referência publicados por terceiros.",
    links: [
      ["Índice IGP-M", "http://idealsoftwares.com.br/indices/igp_m.html"],
      ["Tabelas práticas", "http://idealsoftwares.com.br/tabelas/"],
    ],
  },
];

export default function UtilitariosPage() {
  return (
    <>
      <section className="border-b border-border bg-white pb-16 pt-32 sm:pb-20 lg:pt-40">
        <Container>
          <Link
            href="/ferramentas"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border-strong px-4 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 motion-reduce:transition-none"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Todas as ferramentas
          </Link>
          <h1 className="mt-8 max-w-4xl text-balance text-[clamp(2.65rem,5vw,4.5rem)] leading-[1.03] tracking-[-0.045em] text-foreground">
            Utilitários contábeis
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Encontre consultas e referências organizadas por assunto para a
            rotina da sua empresa.
          </p>
        </Container>
      </section>
      <section
        className="bg-surface py-14 sm:py-20"
        aria-label="Links de utilitários"
      >
        <Container>
          <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-2">
            {groups.map((group, index) => (
              <section
                key={group.title}
                className="rounded-[24px] border border-border-strong bg-white p-6 shadow-[0_8px_30px_rgba(20,20,20,0.035)] sm:p-7"
                aria-label={group.title}
              >
                <span className="text-xs font-medium tracking-[0.16em] text-neutral-500">
                  {String(index + 1).padStart(2, "0")} / 04
                </span>
                <h2 className="mt-4 text-[1.35rem] tracking-[-0.02em] text-foreground">
                  {group.title}
                </h2>
                <p className="mt-1 text-sm leading-6 text-neutral-600">
                  {group.description}
                </p>
                <ul className="mt-6 grid gap-2">
                  {group.links.map(([label, href]) => (
                    <li key={href}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-12 items-center justify-between gap-4 rounded-xl border border-border bg-surface px-4 py-2 text-sm font-medium leading-6 text-foreground transition-[border-color,background-color] duration-200 hover:border-neutral-400 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 motion-reduce:transition-none"
                      >
                        {label}
                        <ExternalLink
                          size={15}
                          className="shrink-0"
                          aria-hidden="true"
                        />
                        <span className="sr-only">
                          (site externo, abre em nova aba)
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-5xl text-sm leading-6 text-neutral-600">
            Os links abrem sites externos. Confira a fonte e a data das
            informações antes de utilizá-las.
          </p>
        </Container>
      </section>
    </>
  );
}
