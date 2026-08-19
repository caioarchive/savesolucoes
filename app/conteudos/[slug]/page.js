import { notFound } from "next/navigation";
import PageHero from "@/components/pages/PageHero";
import Container from "@/components/layout/Container";
import { articles } from "@/data/articles";
import { makeMetadata } from "@/lib/metadata";
export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  return a ? makeMetadata(a.title, a.excerpt, `/conteudos/${slug}`) : {};
}
export default async function Page({ params }) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();
  return (
    <>
      <PageHero eyebrow={a.category} title={a.title} text={a.excerpt} />
      <article className="section">
        <Container className="max-w-3xl">
          <p className="text-sm text-muted">Leitura de {a.readTime}</p>
          {a.content.map((p) => (
            <p key={p} className="mt-6 text-lg leading-8 text-muted">
              {p}
            </p>
          ))}
          <aside className="mt-10 rounded-2xl bg-surface p-5 text-sm leading-6 text-muted">
            Os conteúdos possuem caráter informativo e não substituem uma
            análise específica da situação da empresa.
          </aside>
        </Container>
      </article>
    </>
  );
}
