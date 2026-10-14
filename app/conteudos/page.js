import Link from "next/link";
import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import { articles } from "@/data/articles";
import { makeMetadata } from "@/lib/metadata";

export const metadata = {
  ...makeMetadata(
    "Conteúdos e notícias",
    "Conteúdos informativos sobre contabilidade, tributos, trabalho e gestão empresarial.",
    "/conteudos",
  ),
  robots: { index: false, follow: false },
};
export default function Page() {
  return (
    <>
      <section className="border-b border-border bg-white pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pt-36">
        <Container>
          <div className="lg:grid lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
            <div>
              <Badge>Conteúdos</Badge>
              <h1 className="mt-7 max-w-[17ch] text-balance text-4xl leading-[1.08] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[3.75rem] xl:text-[4rem]">
                Conteúdo para a rotina da sua empresa.
              </h1>
            </div>
            <p className="mt-7 max-w-[29rem] text-base leading-7 text-muted sm:text-lg sm:leading-8 lg:mt-0 lg:pb-1">
              Artigos sobre contabilidade, tributos, trabalho e gestão, com
              informações úteis para acompanhar as decisões e obrigações da
              rotina empresarial.
            </p>
          </div>
        </Container>
      </section>
      <section aria-label="Artigos" className="section bg-surface">
        <Container>
          <div className="flex flex-wrap gap-2">
            {[
              "Contabilidade",
              "Fiscal e tributário",
              "Trabalhista",
              "Gestão empresarial",
              "Reforma tributária",
              "Obrigações e prazos",
            ].map((category) => (
              <span
                key={category}
                className="rounded-full border border-border bg-white px-4 py-2 text-sm"
              >
                {category}
              </span>
            ))}
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                href={`/conteudos/${article.slug}`}
                key={article.slug}
                data-cursor="Ler artigo"
                className="rounded-3xl border border-border bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {article.category}
                </span>
                <h2 className="mt-10 text-2xl font-semibold">
                  {article.title}
                </h2>
                <p className="mt-3 leading-7 text-muted">{article.excerpt}</p>
                <p className="mt-8 text-xs text-muted">
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(`${article.date}T12:00:00`),
                  )}{" "}
                  · {article.readTime}
                </p>
              </Link>
            ))}
          </div>
          <p className="mt-8 rounded-2xl bg-white p-5 text-sm leading-6 text-muted">
            Os conteúdos possuem caráter informativo e não substituem uma
            análise específica da situação da empresa.
          </p>
        </Container>
      </section>
    </>
  );
}
