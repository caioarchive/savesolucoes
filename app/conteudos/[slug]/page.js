import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import { articles } from "@/data/articles";
import { makeMetadata } from "@/lib/metadata";

const dateFormatter = new Intl.DateTimeFormat("pt-BR");

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  return a
    ? {
        ...makeMetadata(a.title, a.excerpt, `/conteudos/${slug}`),
        robots: { index: false, follow: false },
      }
    : {};
}

export default async function Page({ params }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  const relatedArticles = articles.filter((item) => item.slug !== slug);

  return (
    <article>
      <header className="border-b border-border bg-white pb-12 pt-28 sm:pb-14 sm:pt-32 lg:pb-16 lg:pt-36">
        <Container>
          <div className="max-w-4xl">
            <Badge>{article.category}</Badge>
            <h1 className="mt-7 text-balance text-4xl leading-[1.08] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[3.75rem]">
              {article.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {article.excerpt}
            </p>
            <time
              dateTime={article.date}
              className="mt-7 block text-sm text-muted"
            >
              {dateFormatter.format(new Date(`${article.date}T12:00:00`))}
            </time>
          </div>
        </Container>
      </header>

      <div className="bg-white py-12 sm:py-14 lg:py-16">
        <Container className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,19rem)] lg:gap-16 xl:gap-24">
          <div className="min-w-0">
            <div className="max-w-[70ch] space-y-6 text-[1.0625rem] leading-8 text-foreground/80">
              {article.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-10 max-w-[70ch] border-t border-border pt-5 text-sm leading-6 text-muted">
              Os conteúdos possuem caráter informativo e não substituem uma
              análise específica da situação da empresa.
            </p>
            <Link
              href="/conteudos"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-border-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
            >
              <ArrowLeft aria-hidden="true" size={16} />
              Voltar para conteúdos
            </Link>
          </div>

          <aside
            aria-labelledby="continue-lendo-title"
            className="border-t border-border pt-6 lg:border-t-0 lg:pt-0"
          >
            <h2
              id="continue-lendo-title"
              className="text-xl text-foreground sm:text-2xl"
            >
              Continue lendo
            </h2>
            <ul className="mt-6 border-b border-border">
              {relatedArticles.map((related) => (
                <li key={related.slug} className="border-t border-border">
                  <Link
                    href={`/conteudos/${related.slug}`}
                    className="group block rounded-sm py-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      {related.category}
                    </span>
                    <h3 className="mt-3 text-lg leading-6 text-foreground group-hover:underline group-hover:underline-offset-4">
                      {related.title}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </div>
    </article>
  );
}
