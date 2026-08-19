import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import BusinessPaths from "@/components/sections/BusinessPaths";
import ServicesSection from "@/components/sections/ServicesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ConnectSaveSection from "@/components/sections/ConnectSaveSection";
import SegmentsSection from "@/components/sections/SegmentsSection";
import LatestArticles from "@/components/sections/LatestArticles";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import PageTransition from "@/components/motion/PageTransition";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <TrustBar />
      <BusinessPaths />
      <ServicesSection />
      <BenefitsSection />
      <ConnectSaveSection />
      <SegmentsSection />
      <LatestArticles />
      <FAQSection />
      <FinalCTA />
    </PageTransition>
  );
}
