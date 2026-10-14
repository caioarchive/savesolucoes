import Image from "next/image";

import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";

export default function CommerceHero({ page }) {
  const { hero } = page;
  const hasMedia = Boolean(hero.media?.src);

  return (
    <section className="border-b border-border bg-white pb-20 pt-32 lg:pb-24 lg:pt-36">
      <Container>
        <div
          className={
            hasMedia
              ? "grid items-center gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.95fr)] lg:gap-16 xl:gap-20"
              : "max-w-4xl"
          }
        >
          <div className="max-w-2xl">
            <Badge>{hero.eyebrow}</Badge>

            <h1 className="mt-7 text-balance text-[clamp(2.65rem,4.25vw,4rem)] leading-[1.04] tracking-[-0.045em] text-foreground">
              {hero.title}
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
              {hero.description}
            </p>
          </div>

          {hasMedia && (
            <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-surface-secondary sm:aspect-[16/9] lg:aspect-[4/3]">
              <Image
                src={hero.media.src}
                alt={hero.media.alt}
                fill
                priority
                sizes="(min-width: 1280px) 480px, (min-width: 1024px) 42vw, calc(100vw - 40px)"
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
