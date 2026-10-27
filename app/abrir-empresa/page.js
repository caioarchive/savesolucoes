import { MessageCircle } from "lucide-react";

import LeadForm from "@/components/forms/LeadForm";
import OpeningFormCta from "@/components/forms/OpeningFormCta";
import Container from "@/components/layout/Container";
import FadeUp from "@/components/motion/FadeUp";
import OpeningProcessSection from "@/components/sections/OpeningProcessSection";
import OpeningFaqSection from "@/components/sections/OpeningFaqSection";
import SectionEyebrow from "@/components/about/SectionEyebrow";
import Button from "@/components/ui/Button";
import { makeMetadata } from "@/lib/metadata";

export const metadata = makeMetadata(
  "Abrir empresa",
  "Comece sua empresa com orientação para constituição, enquadramento e legalização.",
  "/abrir-empresa",
);

export default function Page() {
  return (
    <>
      <section
        className="bg-white pb-16 pt-28"
        aria-labelledby="abrir-empresa-title"
      >
        <Container className="max-sm:px-4">
          <div className="grid min-w-0 items-start gap-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:gap-12 xl:gap-16">
            <FadeUp
              className="min-w-0 lg:pt-4"
              distance={20}
              blur={4}
              instantOnReducedMotion
            >
              <SectionEyebrow>ABRIR EMPRESA</SectionEyebrow>
              <h1
                id="abrir-empresa-title"
                className="mt-6 max-w-xl text-balance text-4xl leading-[1.1] tracking-[-0.045em] text-foreground sm:text-5xl xl:text-[3.375rem]"
              >
                Comece sua empresa com orientação desde o primeiro passo.
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                A Save orienta a definição da empresa, o enquadramento
                tributário, os registros e a legalização para você começar com
                mais clareza e segurança.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <OpeningFormCta />
                <Button
                  href="https://wa.me/558234351890"
                  external
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Falar com a Save
                </Button>
              </div>
            </FadeUp>

            <div
              id="abrir-empresa-formulario"
              className="min-w-0 scroll-mt-28 lg:scroll-mt-24 [&_form]:shadow-none"
            >
              <FadeUp
                distance={20}
                blur={4}
                delay={0.12}
                instantOnReducedMotion
                viewportAmount={0.01}
              >
                <LeadForm
                  type="abrir-empresa"
                  variant="sidebar"
                  title="Conte sobre o seu novo negócio."
                  description="Preencha as informações iniciais. A equipe da Save entrará em contato para entender o seu projeto e orientar os próximos passos."
                />
              </FadeUp>
            </div>
          </div>
        </Container>
      </section>
      <OpeningProcessSection />
      <OpeningFaqSection />
    </>
  );
}
