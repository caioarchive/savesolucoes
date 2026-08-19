import PageHero from "@/components/pages/PageHero";
import LeadForm from "@/components/forms/LeadForm";
import Container from "@/components/layout/Container";
import { makeMetadata } from "@/lib/metadata";
export const metadata = makeMetadata(
  "Abrir empresa",
  "Comece sua empresa com orientação para constituição, enquadramento e legalização.",
  "/abrir-empresa",
);
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Abrir empresa"
        title="Comece sua empresa com orientação desde o primeiro passo."
        text="A Save cuida dos processos de abertura, enquadramento e legalização para que você possa iniciar seu negócio com mais segurança."
      />
      <section className="section bg-surface">
        <Container className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <h2 className="text-3xl font-semibold">
              Conte sobre o seu novo negócio.
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Preencha as informações iniciais. A equipe da Save entrará em
              contato para entender o seu projeto e orientar os próximos passos.
            </p>
          </div>
          <LeadForm type="abrir-empresa" />
        </Container>
      </section>
    </>
  );
}
