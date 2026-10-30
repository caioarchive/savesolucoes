import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Container from "@/components/layout/Container";
import PageHero from "@/components/pages/PageHero";
import { makeMetadata } from "@/lib/metadata";

export const metadata = makeMetadata(
  "Utilitários contábeis",
  "Consultas cadastrais, certidões, tributos e indicadores para sua empresa.",
  "/ferramentas/utilitarios",
);

const groups = [
  {
    title: "Cadastros e consultas",
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
    links: [
      ["Índice IGP-M", "http://idealsoftwares.com.br/indices/igp_m.html"],
      ["Tabelas práticas", "http://idealsoftwares.com.br/tabelas/"],
    ],
  },
];

export default function UtilitariosPage() {
  return (
    <>
      <PageHero
        eyebrow="Ferramentas / Utilitários"
        title="Consultas para cada rotina."
        text="Acesse fontes de referência para cadastros, certidões, tributos e indicadores."
      />
      <section
        className="bg-surface py-14 sm:py-20"
        aria-label="Links de utilitários"
      >
        <Container>
          <Link
            href="/ferramentas"
            className="text-sm font-medium text-foreground underline underline-offset-4 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
          >
            ← Voltar às ferramentas
          </Link>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {groups.map((group) => (
              <section
                key={group.title}
                className="rounded-[24px] border border-border-strong bg-white p-7 sm:p-8"
                aria-label={group.title}
              >
                <h2 className="text-xl tracking-[-0.02em] text-foreground">
                  {group.title}
                </h2>
                <ul className="mt-6 divide-y divide-border">
                  {group.links.map(([label, href]) => (
                    <li key={href}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-12 items-center justify-between gap-4 py-2 text-sm font-medium leading-6 text-foreground hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
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
          <p className="mt-8 max-w-2xl text-sm leading-6 text-neutral-600">
            Os links abrem sites externos. Confira a fonte e a data das
            informações antes de utilizá-las.
          </p>
        </Container>
      </section>
    </>
  );
}
