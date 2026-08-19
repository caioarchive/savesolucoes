import PageHero from "@/components/pages/PageHero";
import LeadForm from "@/components/forms/LeadForm";
import Container from "@/components/layout/Container";
import { makeMetadata } from "@/lib/metadata";
export const metadata = makeMetadata(
  "Migrar contabilidade",
  "Mude de contador com uma transição organizada e acompanhada pela Save.",
  "/migrar-contabilidade",
);
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Migrar contabilidade"
        title="Mude de contador com uma transição organizada e tranquila."
        text="A Save acompanha a migração das informações contábeis e ajuda sua empresa a iniciar uma nova etapa com mais clareza e organização."
      />
      <section className="section bg-surface">
        <Container className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <h2 className="text-3xl font-semibold">
              Vamos entender sua empresa.
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Informe apenas os dados iniciais. Nenhum documento sensível é
              solicitado nesta etapa.
            </p>
          </div>
          <LeadForm type="migrar-contabilidade" />
        </Container>
      </section>
    </>
  );
}
