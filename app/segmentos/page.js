import PageHero from "@/components/pages/PageHero";
import SegmentsSection from "@/components/sections/SegmentsSection";
import FinalCTA from "@/components/sections/FinalCTA";
import { makeMetadata } from "@/lib/metadata";
export const metadata = makeMetadata(
  "Segmentos atendidos",
  "Acompanhamento contábil adaptado a diferentes atividades empresariais.",
  "/segmentos",
);
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Segmentos"
        title="Experiência para atender diferentes atividades empresariais."
        text="A Save adapta o acompanhamento contábil, fiscal e trabalhista às particularidades de cada atividade."
      />
      <SegmentsSection />
      <FinalCTA />
    </>
  );
}
