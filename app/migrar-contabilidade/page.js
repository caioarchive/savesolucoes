import { MessageCircle } from "lucide-react";

import LeadForm from "@/components/forms/LeadForm";
import MigrationFormCta from "@/components/forms/MigrationFormCta";
import Container from "@/components/layout/Container";
import SectionEyebrow from "@/components/about/SectionEyebrow";
import MigrationFaqSection from "@/components/sections/MigrationFaqSection";
import MigrationProcessSection from "@/components/sections/MigrationProcessSection";
import Button from "@/components/ui/Button";
import { makeMetadata } from "@/lib/metadata";

import styles from "./page.module.css";

export const metadata = makeMetadata(
  "Migrar contabilidade",
  "Mude de contador com uma transição organizada e acompanhada pela Save.",
  "/migrar-contabilidade",
);

export default function Page() {
  return (
    <>
      <section
        className="bg-white pb-16 pt-28"
        aria-labelledby="migrar-contabilidade-title"
      >
        <Container className="max-sm:px-4">
          <div className="grid min-w-0 items-start gap-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:gap-12 xl:gap-16">
            <div className={`min-w-0 lg:pt-4 ${styles.textEnter}`}>
              <SectionEyebrow>MIGRAR CONTABILIDADE</SectionEyebrow>
              <h1
                id="migrar-contabilidade-title"
                className="mt-6 max-w-xl text-balance text-4xl leading-[1.1] tracking-[-0.045em] text-foreground sm:text-5xl xl:text-[3.375rem]"
              >
                Mude de contabilidade com clareza em cada etapa.
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                A Save entende a rotina da sua empresa, orienta a transferência
                das informações e organiza o início do novo acompanhamento
                contábil.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <MigrationFormCta />
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
            </div>

            <div
              id="migrar-contabilidade-formulario"
              className="min-w-0 scroll-mt-28 lg:scroll-mt-24 [&_form]:shadow-none"
            >
              <div className={styles.formEnter}>
                <LeadForm
                  type="migrar-contabilidade"
                  variant="sidebar"
                  title="Vamos entender sua empresa."
                  description="Preencha as informações iniciais. A equipe da Save entrará em contato para orientar os próximos passos. Nenhum documento sensível é solicitado nesta etapa."
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <MigrationProcessSection />
      <MigrationFaqSection />
    </>
  );
}
