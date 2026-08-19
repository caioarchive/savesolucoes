import Container from "@/components/layout/Container";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";

import ServicesExplorer from "@/components/sections/ServicesExplorer";

import { services } from "@/data/services";

export default function ServicesSection({ limit }) {
  const visibleServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="section bg-surface">
      <Container>
        <SectionHeader
          eyebrow="O que fazemos"
          title="Contabilidade que acompanha a realidade da sua empresa."
          text="Soluções organizadas para apoiar obrigações, rotinas e decisões empresariais."
        />

        <div className="mt-16 hidden lg:block">
          <ServicesExplorer limit={limit} />
        </div>

        <StaggerContainer className="mt-16 grid gap-5 md:grid-cols-2 lg:hidden">
          {visibleServices.map((service, index) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
