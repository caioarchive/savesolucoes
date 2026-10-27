import Container from "@/components/layout/Container";
import Accordion from "@/components/ui/Accordion";
import SectionHeader from "@/components/ui/SectionHeader";

import { faq } from "@/data/faq";

export default function FAQSection() {
  return (
    <section className="section bg-white">
      <Container className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <SectionHeader
            eyebrow="Dúvidas frequentes"
            title="Respostas claras para começar uma conversa."
            text="Se a sua dúvida não estiver aqui, fale diretamente com a equipe da Save."
          />
        </div>

        <Accordion items={faq} />
      </Container>
    </section>
  );
}
