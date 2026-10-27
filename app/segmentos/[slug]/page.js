import { notFound } from "next/navigation";
import CommerceHero from "@/components/pages/CommerceHero";
import CommerceRoutineSection from "@/components/pages/CommerceRoutineSection";
import BusinessSystemsHero from "@/components/pages/BusinessSystemsHero";
import BusinessSystemsOperationsSection from "@/components/pages/BusinessSystemsOperationsSection";
import ServiceProvidersHero from "@/components/pages/ServiceProvidersHero";
import ServiceProvidersRoutineSection from "@/components/pages/ServiceProvidersRoutineSection";
import FinalCTA from "@/components/sections/FinalCTA";
import SegmentFaqSection from "@/components/sections/SegmentFaqSection";
import { segmentPages } from "@/data/segmentPages";
import { segments } from "@/data/segments";
import { makeMetadata } from "@/lib/metadata";

const pageVariants = {
  "photo-story": {
    Hero: CommerceHero,
    Narrative: CommerceRoutineSection,
  },
  "service-flow": {
    Hero: ServiceProvidersHero,
    Narrative: ServiceProvidersRoutineSection,
  },
  "operations-map": {
    Hero: BusinessSystemsHero,
    Narrative: BusinessSystemsOperationsSection,
  },
};

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
  const page = segmentPages[slug];
  const variant = pageVariants[page?.pageVariant];
  if (!s || !variant) notFound();

  const { Hero, Narrative } = variant;
  const narrativeId = page.sectionIds?.narrative ?? `${slug}-narrative-title`;
  const faqId = page.sectionIds?.faq ?? `${slug}-faq-title`;

  return (
    <>
      <Hero page={page} />
      <Narrative page={page} id={narrativeId} />
      <SegmentFaqSection faq={page.faq} id={faqId} />
      <FinalCTA />
    </>
  );
}
