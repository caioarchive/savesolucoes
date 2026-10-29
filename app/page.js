import Hero from "@/components/sections/Hero";
import BusinessPaths from "@/components/sections/BusinessPaths";
import AccountingSupportSection from "@/components/sections/AccountingSupportSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ConnectSaveSection from "@/components/sections/ConnectSaveSection";
import SegmentsSection from "@/components/sections/SegmentsSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import PageTransition from "@/components/motion/PageTransition";
import { siteUrl } from "@/lib/metadata";

export const metadata = {
  alternates: { canonical: `${siteUrl}/` },
  verification: { google: "Y8dnYqPbeznIywqc77xHrLgGeEBPwuBkguODRR8iXpc" },
};

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <BusinessPaths />
      <AccountingSupportSection />
      <ServicesSection />
      <BenefitsSection />
      <ConnectSaveSection />
      <SegmentsSection variant="home" />
      <FAQSection />
      <FinalCTA />
    </PageTransition>
  );
}
