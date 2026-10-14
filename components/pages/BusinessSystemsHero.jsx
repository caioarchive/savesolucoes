import Container from "@/components/layout/Container";

export default function BusinessSystemsHero({ page }) {
  const { hero } = page;

  return (
    <section className="border-b border-border bg-white pb-20 pt-32 sm:pb-24 lg:pb-28 lg:pt-36">
      <Container>
        <div className="border-t border-border pt-8 sm:pt-10 lg:pt-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.5fr)] lg:items-end lg:gap-16 xl:gap-24">
            <h1 className="max-w-[20ch] text-balance text-[clamp(2rem,5vw,4rem)] leading-[1.04] tracking-[-0.04em] text-foreground">
              {hero.title}
            </h1>

            <p className="max-w-md text-base leading-7 text-muted sm:text-lg sm:leading-8 lg:pb-1">
              {hero.description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
