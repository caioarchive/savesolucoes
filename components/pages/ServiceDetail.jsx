import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import Container from "@/components/layout/Container";
import LeadForm from "@/components/forms/LeadForm";
import FadeUp from "@/components/motion/FadeUp";
import RelatedServices from "@/components/sections/RelatedServices";
import ServiceFaq from "@/components/sections/ServiceFaq";
import Button from "@/components/ui/Button";

function ServiceContentLayout({ children, form }) {
  return (
    <div className="bg-surface py-20 sm:py-24 lg:py-28">
      <Container className="grid min-w-0 gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(22.5rem,25rem)] lg:items-start lg:gap-12 xl:gap-16">
        <div className="min-w-0">{children}</div>
        <aside
          aria-label="Formulário de contato"
          className="min-w-0 lg:self-start [@media(min-width:1280px)_and_(min-height:900px)]:sticky [@media(min-width:1280px)_and_(min-height:900px)]:top-28"
        >
          <LeadForm
            variant="sidebar"
            title={form?.title}
            description={form?.description}
            initialSubject={form?.initialSubject}
          />
        </aside>
      </Container>
    </div>
  );
}

function ServiceEditorial({ editorial }) {
  return (
    <div className="min-w-0">
      <section aria-labelledby="service-editorial-intro">
        <p className="text-xs font-semibold tracking-[0.16em] text-muted">
          {editorial.eyebrow}
        </p>
        <h2
          id="service-editorial-intro"
          className="mt-6 max-w-[23ch] text-balance text-3xl leading-tight tracking-[-0.035em] text-foreground sm:text-4xl"
        >
          {editorial.title}
        </h2>
        <div className="mt-8 max-w-[65ch] space-y-5 text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8">
          {editorial.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <figure className="mt-16 sm:mt-20">
        <div className="overflow-hidden rounded-[20px] border border-border bg-white">
          <Image
            src={editorial.image.src}
            alt={editorial.image.alt}
            width={1600}
            height={1000}
            sizes="(min-width: 1024px) 60vw, (min-width: 768px) 90vw, 100vw"
            className="h-auto w-full"
          />
        </div>
        <figcaption className="mt-3 text-sm leading-6 text-muted">
          {editorial.image.caption}
        </figcaption>
      </figure>

      <section
        aria-labelledby="service-editorial-approach"
        className="mt-20 sm:mt-24"
      >
        <p className="text-xs font-semibold tracking-[0.16em] text-muted">
          {editorial.approach.eyebrow}
        </p>
        <h2
          id="service-editorial-approach"
          className="mt-6 max-w-[24ch] text-balance text-3xl leading-tight tracking-[-0.035em] text-foreground sm:text-4xl"
        >
          {editorial.approach.title}
        </h2>
        <p className="mt-6 max-w-[65ch] text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8">
          {editorial.approach.intro}
        </p>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {editorial.chapters.map((chapter, index) => (
            <article
              key={chapter.title}
              className="grid gap-3 py-8 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-6 sm:py-10"
            >
              <span
                className="pt-1 text-sm tabular-nums text-neutral-500"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="max-w-[22ch] text-2xl leading-tight tracking-[-0.03em] text-foreground">
                  {chapter.title}
                </h3>
                <p className="mt-4 max-w-[58ch] text-base leading-7 text-neutral-700">
                  {chapter.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function ServiceDetail({ service }) {
  return (
    <main>
      <header className="relative isolate overflow-hidden border-b border-neutral-800 bg-neutral-950 pb-14 pt-32 text-white sm:pb-20 sm:pt-36 lg:pb-20">
        <Image
          src="/images/save-values-waves-light.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center grayscale brightness-[0.55]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/80 to-neutral-950/45"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-neutral-950/65 via-transparent to-neutral-950/20"
        />
        <Container className="relative z-10">
          <nav aria-label="Navegação de serviços">
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Todos os serviços
            </Link>
          </nav>

          <FadeUp className="mt-14 sm:mt-16 lg:mt-20">
            <div>
              <h1 className="max-w-full text-[clamp(2.7rem,5vw,4.75rem)] leading-[1.12] tracking-[-0.045em] text-white">
                {service.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-200">
                {service.short}
              </p>
              <Button
                href="/contato"
                variant="light"
                className="mt-8 focus-visible:outline-white"
              >
                Falar com a Save
                <ArrowUpRight size={17} aria-hidden="true" />
              </Button>
            </div>
          </FadeUp>
        </Container>
      </header>

      <ServiceContentLayout form={service.sidebarForm}>
        <ServiceEditorial editorial={service.editorial} />
      </ServiceContentLayout>

      {service.faqs?.length ? (
        <ServiceFaq {...service.faqSection} faqs={service.faqs} />
      ) : null}

      {service.relatedServices?.length ? (
        <RelatedServices
          section={service.relatedSection}
          slugs={service.relatedServices}
        />
      ) : null}
    </main>
  );
}
