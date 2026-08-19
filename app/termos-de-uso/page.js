import PageHero from "@/components/pages/PageHero";
import Container from "@/components/layout/Container";
import { makeMetadata } from "@/lib/metadata";
export const metadata = makeMetadata(
  "Termos de uso",
  "Condições de uso do site da Save Soluções.",
  "/termos-de-uso",
);
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Termos"
        title="Termos de uso"
        text="Condições gerais para navegação e utilização deste site."
      />
      <section className="section">
        <Container className="max-w-3xl space-y-8">
          <div>
            <h2 className="text-2xl font-semibold">Conteúdo informativo</h2>
            <p className="mt-3 leading-7 text-muted">
              As informações deste site apresentam os serviços e canais da Save.
              Conteúdos e notícias não substituem uma análise específica da
              situação de cada empresa.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Uso dos formulários</h2>
            <p className="mt-3 leading-7 text-muted">
              Ao enviar informações, o usuário declara que os dados são
              verdadeiros e autoriza o contato conforme indicado no formulário.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Links externos</h2>
            <p className="mt-3 leading-7 text-muted">
              O site pode conter links para ambientes externos, cuja operação e
              disponibilidade são de responsabilidade de seus respectivos
              provedores.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
