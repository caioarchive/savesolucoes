import { notFound } from "next/navigation";
import PageHero from "@/components/pages/PageHero";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";
import { segments } from "@/data/segments";
import { makeMetadata } from "@/lib/metadata";
export function generateStaticParams() {
  return segments.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = segments.find((x) => x.slug === slug);
  return s
    ? makeMetadata(
        `Contabilidade para ${s.title}`,
        `Acompanhamento contábil, fiscal e trabalhista para ${s.title.toLowerCase()}.`,
        `/segmentos/${slug}`,
      )
    : {};
}
export default async function Page({ params }) {
  const { slug } = await params;
  const s = segments.find((x) => x.slug === slug);
  if (!s) notFound();
  return (
    <>
      <PageHero
        eyebrow="Segmentos atendidos"
        title={`Acompanhamento contábil para ${s.title.toLowerCase()}.`}
        text="A Save adapta o acompanhamento contábil, fiscal e trabalhista às particularidades de cada atividade."
      />
      <section className="section">
        <Container className="max-w-4xl">
          <h2 className="text-3xl font-semibold">
            Uma solução alinhada à sua atividade.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            Cada empresa possui rotinas e obrigações próprias. A Save considera
            esse contexto para organizar informações, acompanhar as necessidades
            fiscais e trabalhistas e manter uma comunicação próxima.
          </p>
          <Button href="/contato" className="mt-8">
            Falar com a Save
          </Button>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
