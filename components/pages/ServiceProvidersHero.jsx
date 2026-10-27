import Image from "next/image";

import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";

export default function ServiceProvidersHero({ page }) {
  const { hero } = page;
  const hasMedia = Boolean(hero.media?.src);

  return (
    <section className="border-b border-border bg-white pb-20 pt-32 lg:pb-24 lg:pt-36">
      <Container>
        <div
          className={
            hasMedia
              ? "grid items-center gap-12 lg:grid-cols-[minmax(0,1.18fr)_minmax(20rem,0.82fr)] lg:gap-16 xl:gap-24"
              : "max-w-4xl"
          }
        >
          <div className="max-w-3xl">
            <Badge>{hero.eyebrow}</Badge>

            <h1 className="mt-7 max-w-[18ch] text-balance text-[clamp(2.65rem,4.4vw,4.25rem)] leading-[1.04] tracking-[-0.04em] text-foreground">
              {hero.title}
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
              {hero.description}
            </p>
          </div>

          {hasMedia && (
            <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] border border-border bg-surface-secondary lg:aspect-[4/3]">
              <Image
                src={hero.media.src}
                alt={hero.media.alt}
                fill
                priority
                sizes="(min-width: 1280px) 430px, (min-width: 1024px) 38vw, calc(100vw - 40px)"
                className="object-cover"
                style={{ objectPosition: hero.media.objectPosition }}
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
