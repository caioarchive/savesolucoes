import ServicesSection from "@/components/sections/ServicesSection";
import PageHero from "@/components/pages/PageHero";
import FinalCTA from "@/components/sections/FinalCTA";
import { makeMetadata } from "@/lib/metadata";
export const metadata = makeMetadata(
  "Serviços contábeis e empresariais",
  "Conheça os serviços contábeis, fiscais, trabalhistas, societários e online da Save.",
  "/servicos",
);
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Soluções para organizar cada etapa da sua empresa."
        text="Conhecimento contábil, tributário e tecnológico aplicado às necessidades reais do seu negócio."
      />
      <ServicesSection />
      <FinalCTA />
    </>
  );
}
