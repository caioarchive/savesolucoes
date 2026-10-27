import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import Container from "@/components/layout/Container";
import FadeUp from "@/components/motion/FadeUp";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";

import { segments } from "@/data/segments";

import styles from "./SegmentsSection.module.css";

const listingCardClasses = [
  "group flex h-full flex-col rounded-[16px]",
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground",
].join(" ");

const homeCardClasses = [
  "group grid overflow-hidden rounded-[24px] border border-border bg-white",
  "transition-[transform,border-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]",
  "hover:-translate-y-0.5 hover:border-border-strong",
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground",
  "motion-reduce:transform-none motion-reduce:transition-none",
  "lg:min-h-[340px] lg:grid-cols-[minmax(0,1.27fr)_minmax(0,1fr)]",
].join(" ");

const featuredSegments = segments.filter((segment) => segment.home);

const segmentsIntro = {
  eyebrow: "Segmentos",
  title: "Experiência para atender diferentes atividades empresariais.",
  text: "A Save adapta o acompanhamento contábil, fiscal e trabalhista às particularidades de cada atividade.",
};

function SectionIntro() {
  return (
    <SectionHeader
      eyebrow={segmentsIntro.eyebrow}
      title={segmentsIntro.title}
      text={segmentsIntro.text}
    />
  );
}

function EditorialVisual({ home, title }) {
  return (
    <div
      className={`relative min-h-56 overflow-hidden border-t border-border bg-surface-secondary lg:min-h-full lg:border-l lg:border-t-0 ${
        home.image ? styles.imageVisual : ""
      }`}
    >
      {home.image ? (
        <Image
          src={home.image}
          alt={home.imageAlt}
          fill
          sizes="(min-width: 1024px) 38vw, 100vw"
          className={`${styles.segmentImage} object-cover`}
        />
      ) : (
        <div
          className="flex h-full min-h-56 flex-col justify-between p-6 sm:p-8 lg:min-h-full"
          aria-hidden="true"
        >
          <span className="text-[clamp(4.5rem,9vw,8rem)] leading-none tracking-[-0.08em] text-neutral-300">
            {home.index}
          </span>
          <div className="border-t border-border pt-5">
            <span className="max-w-56 text-sm font-medium leading-5 text-foreground">
              {title}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function HomeSegments() {
  return (
    <section className="section bg-white">
      <Container>
        <SectionIntro />

        <ol className="mt-16 grid gap-5 lg:gap-6">
          {featuredSegments.map((segment, index) => (
            <li
              key={segment.slug}
              className={styles.stackItem}
              style={{
                "--stack-top": `${128 + index * 12}px`,
                "--stack-layer": index + 1,
              }}
            >
              <FadeUp delay={index * 0.02} className={styles.reveal}>
                <article>
                  <Link
                    href={`/segmentos/${segment.slug}`}
                    className={`${homeCardClasses} ${styles.homeCard}`}
                    data-segment-card={segment.slug}
                  >
                    <div className="flex min-h-[320px] flex-col p-6 sm:p-8 lg:min-h-0 lg:p-10">
                      <div className="flex items-center justify-between gap-6 text-xs uppercase tracking-[0.16em] text-muted">
                        <span>{segment.home.eyebrow}</span>
                        <span>{segment.home.index}</span>
                      </div>

                      <div className="mt-12 flex flex-1 flex-col justify-end lg:mt-10">
                        <h3 className="max-w-xl text-3xl tracking-[-0.035em] text-foreground sm:text-4xl">
                          {segment.title}
                        </h3>
                        <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                          {segment.home.description}
                        </p>
                        <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                          {segment.home.cta}
                          <ArrowRight
                            aria-hidden="true"
                            size={16}
                            className="transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
                          />
                        </span>
                      </div>
                    </div>

                    <EditorialVisual
                      home={segment.home}
                      title={segment.title}
                    />
                  </Link>
                </article>
              </FadeUp>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex justify-end">
          <Link
            href="/segmentos"
            className="group inline-flex items-center gap-2 rounded-sm text-sm font-medium text-muted underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
          >
            Ver todos os segmentos
            <ArrowRight
              aria-hidden="true"
              size={16}
              className="transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}

function ListingVisual({ index, listing }) {
  return (
    <div
      className={`${styles.listingMedia} relative overflow-hidden rounded-[16px] bg-surface-secondary`}
    >
      <Image
        src={listing.image}
        alt={listing.imageAlt}
        fill
        priority={index === "01"}
        sizes="(min-width: 1280px) 280px, (min-width: 768px) 46vw, calc(100vw - 40px)"
        className={`${styles.listingImage} object-cover`}
      />
    </div>
  );
}

export default function SegmentsSection({ variant = "all" }) {
  if (variant === "home") {
    return <HomeSegments />;
  }

  return (
    <section
      aria-labelledby="segments-page-title"
      className="bg-white pb-20 pt-32 sm:pb-24 lg:pb-32 lg:pt-40"
    >
      <Container>
        <div className="xl:grid xl:grid-cols-[minmax(0,2fr)_minmax(18rem,1fr)] xl:items-end xl:gap-16">
          <div>
            <Badge>{segmentsIntro.eyebrow}</Badge>
            <h1
              id="segments-page-title"
              className="mt-7 max-w-4xl text-balance text-4xl leading-[1.08] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[3.5rem] xl:text-6xl"
            >
              {segmentsIntro.title}
            </h1>
          </div>

          <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8 xl:mt-0 xl:max-w-sm xl:justify-self-end xl:pb-1">
            {segmentsIntro.text}
          </p>
        </div>

        <ol className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 xl:mt-16 xl:grid-cols-4 xl:gap-6">
          {segments.map((segment, index) => (
            <li
              key={segment.slug}
              className="h-full border-t border-border pt-5 md:pt-6 xl:pt-5"
            >
              <FadeUp
                className="h-full"
                distance={20}
                blur={3}
                instantOnReducedMotion
                viewportAmount={0.15}
              >
                <article className="h-full">
                  <Link
                    href={`/segmentos/${segment.slug}`}
                    className={`${listingCardClasses} ${styles.listingCard}`}
                  >
                    <ListingVisual
                      index={String(index + 1).padStart(2, "0")}
                      listing={segment.listing}
                    />

                    <div className="flex flex-1 flex-col px-1 pb-1 pt-5 sm:pt-6 xl:px-0 xl:pt-5">
                      <div className="flex items-center justify-between gap-6">
                        <span className="text-xs font-medium tracking-[0.16em] text-muted">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <ArrowRight
                          aria-hidden="true"
                          size={19}
                          strokeWidth={1.75}
                          className={styles.listingArrow}
                        />
                      </div>

                      <h2 className="mt-5 text-xl font-medium leading-[1.2] tracking-[-0.025em] text-foreground sm:text-[1.375rem]">
                        {segment.title}
                      </h2>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
                        {segment.listing.description}
                      </p>
                    </div>
                  </Link>
                </article>
              </FadeUp>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
