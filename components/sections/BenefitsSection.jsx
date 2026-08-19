import Container from "@/components/layout/Container";
import ClipReveal from "@/components/motion/ClipReveal";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import SectionHeader from "@/components/ui/SectionHeader";

import { benefits } from "@/data/benefits";

export default function BenefitsSection() {
  return (
    <ClipReveal>
      <section className="section bg-ink text-white">
        <Container>
          <SectionHeader
            dark
            eyebrow="Presença no dia a dia"
            title="Estrutura para cuidar das rotinas e apoiar sua gestão."
          />

          <StaggerContainer className="mt-16 grid gap-px overflow-hidden rounded-[24px] border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ title, icon: Icon }) => (
              <StaggerItem key={title} className="h-full">
                <div className="h-full bg-ink p-7 transition-colors hover:bg-neutral-900">
                  <Icon className="text-white" size={23} strokeWidth={1.6} />
                  <h3 className="mt-10 font-medium leading-6 text-white">
                    {title}
                  </h3>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </ClipReveal>
  );
}
