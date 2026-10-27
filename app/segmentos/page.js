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
      <SegmentsSection />
      <FinalCTA />
    </>
  );
}
