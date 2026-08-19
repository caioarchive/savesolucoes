import { Mail, MessageCircle } from "lucide-react";

import MagneticButton from "@/components/interactions/MagneticButton";
import Container from "@/components/layout/Container";
import FadeUp from "@/components/motion/FadeUp";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <FadeUp className="rounded-[24px] border border-border bg-surface px-6 py-16 text-center sm:px-12 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-balance text-3xl tracking-[-0.035em] text-foreground sm:text-5xl">
              Sua empresa merece uma contabilidade presente, organizada e
              preparada.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
              Converse com a equipe da Save e encontre a solução mais adequada
              para o momento do seu negócio.
            </p>

            <StaggerContainer className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <StaggerItem>
                <MagneticButton>
                  <Button href="https://wa.me/558234351890" external cursor="↗">
                    <MessageCircle size={18} />
                    Falar pelo WhatsApp
                  </Button>
                </MagneticButton>
              </StaggerItem>

              <StaggerItem>
                <Button href="/contato" variant="secondary">
                  <Mail size={18} />
                  Enviar uma mensagem
                </Button>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
