import Link from "next/link";

import { ArrowRight } from "lucide-react";

import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";

import { articles } from "@/data/articles";

const articleClasses = [
  "group overflow-hidden rounded-[22px] border border-border bg-white p-8",
  "transition duration-300 hover:-translate-y-1 hover:scale-[1.01]",
  "hover:border-border-strong hover:shadow-[0_18px_55px_rgba(0,0,0,0.05)]",
].join(" ");

export default function LatestArticles() {
  return (
    <section className="section bg-surface">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Conteúdos"
            title="Informação para uma gestão mais consciente."
          />
          <Link
            href="/conteudos"
            className="flex items-center gap-2 text-sm font-medium text-foreground"
          >
            Ver todos <ArrowRight size={17} />
          </Link>
        </div>
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <Link
              href={`/conteudos/${article.slug}`}
              key={article.slug}
              data-cursor="Ler artigo"
              className={articleClasses}
            >
              <div className="mb-8 h-1 overflow-hidden rounded-full bg-surface-secondary">
                <span className="block h-full w-1/3 origin-left bg-neutral-900 transition-transform duration-500 group-hover:scale-x-[2.8]" />
              </div>
              <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider text-foreground">
                <span>{article.category}</span>
                <span className="text-muted">{article.readTime}</span>
              </div>
              <h3 className="mt-14 text-2xl tracking-[-0.025em]">
                {article.title}
              </h3>
              <p className="mt-3 leading-7 text-muted">{article.excerpt}</p>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-sm leading-6 text-muted">
          Os conteúdos possuem caráter informativo e não substituem uma análise
          específica da situação da empresa.
        </p>
      </Container>
    </section>
  );
}
