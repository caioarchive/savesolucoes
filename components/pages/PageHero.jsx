import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";

export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="border-b border-border bg-white pb-20 pt-32 lg:pb-28 lg:pt-40">
      <Container>
        <Badge>{eyebrow}</Badge>

        <h1 className="mt-7 max-w-4xl text-balance text-[clamp(2.65rem,5vw,4.5rem)] leading-[1.03] tracking-[-0.045em] text-foreground">
          {title}
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">{text}</p>
      </Container>
    </section>
  );
}
