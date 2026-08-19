import Link from "next/link";
import PageHero from "@/components/pages/PageHero";
import Container from "@/components/layout/Container";
import { articles } from "@/data/articles";
import { makeMetadata } from "@/lib/metadata";
export const metadata = makeMetadata(
  "Conteúdos e notícias",
  "Conteúdos informativos sobre contabilidade, tributos, trabalho e gestão empresarial.",
  "/conteudos",
);
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Conteúdos"
        title="Informação para acompanhar o universo empresarial."
        text="Artigos sobre contabilidade, fiscal e tributário, trabalho, gestão, reforma tributária, obrigações e prazos."
      />
      <section className="section bg-surface">
        <Container>
          <div className="flex flex-wrap gap-2">
            {[
              "Contabilidade",
              "Fiscal e tributário",
              "Trabalhista",
              "Gestão empresarial",
              "Reforma tributária",
              "Obrigações e prazos",
            ].map((x) => (
              <span
                key={x}
                className="rounded-full border border-border bg-white px-4 py-2 text-sm"
              >
                {x}
              </span>
            ))}
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {articles.map((a) => (
              <Link
                href={`/conteudos/${a.slug}`}
                key={a.slug}
                data-cursor="Ler artigo"
                className="rounded-3xl border border-border bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {a.category}
                </span>
                <h2 className="mt-10 text-2xl font-semibold">{a.title}</h2>
                <p className="mt-3 leading-7 text-muted">{a.excerpt}</p>
                <p className="mt-8 text-xs text-muted">
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(`${a.date}T12:00:00`),
                  )}{" "}
                  · {a.readTime}
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
