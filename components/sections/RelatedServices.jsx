import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, FileText, UsersRound } from "lucide-react";

import Container from "@/components/layout/Container";
import { services } from "@/data/services";

const iconsBySlug = {
  "fiscal-tributario": FileText,
  "departamento-pessoal": UsersRound,
  "servicos-societarios": Building2,
};

export default function RelatedServices({ section, slugs = [] }) {
  const related = slugs
    .map((slug) => services.find((item) => item.slug === slug))
    .filter(Boolean)
    .slice(0, 3);

  if (!related.length) return null;

  return (
    <section
      aria-labelledby="related-services-title"
      className="border-t border-border bg-surface py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-neutral-600">
              {section.eyebrow}
            </p>
            <h2
              id="related-services-title"
              className="mt-6 max-w-[22ch] text-3xl leading-tight tracking-[-0.035em] text-neutral-950 sm:text-4xl"
            >
              {section.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-700">
              {section.text}
            </p>
          </div>
          <Link
            href={section.ctaHref}
            className="inline-flex shrink-0 items-center gap-2 self-start text-sm font-medium text-neutral-800 underline-offset-4 transition-colors duration-200 hover:text-neutral-950 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 md:mb-1 md:self-auto motion-reduce:transition-none"
          >
            {section.ctaLabel}
            <ArrowUpRight size={17} strokeWidth={1.7} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {related.map((service) => {
            const Icon = iconsBySlug[service.slug] ?? FileText;
            const image = service.relatedImage;

            return (
              <Link
                key={service.slug}
                href={`/servicos/${service.slug}`}
                className="group flex min-w-0 flex-col overflow-hidden rounded-[20px] border border-border bg-white transition-[border-color,box-shadow] duration-200 hover:border-border-strong hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 motion-reduce:transition-none"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-neutral-100">
                  {image?.src ? (
                    <Image
                      src={image.src}
                      alt={image.alt ?? ""}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div
                      className="relative flex h-full items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="absolute inset-x-7 top-7 h-px bg-neutral-300" />
                      <span className="absolute bottom-7 left-7 h-px w-24 bg-neutral-300" />
                      <span className="flex size-16 items-center justify-center rounded-2xl border border-neutral-300 bg-white text-neutral-800">
                        <Icon size={30} strokeWidth={1.4} />
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-xl leading-snug tracking-[-0.025em] text-neutral-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-base leading-7 text-neutral-700">
                    {service.short}
                  </p>
                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.6}
                    className="mt-7 self-end text-neutral-700 transition-colors duration-200 group-hover:text-neutral-950 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
