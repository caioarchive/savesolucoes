import PageHero from "@/components/pages/PageHero";
import Container from "@/components/layout/Container";
import { makeMetadata } from "@/lib/metadata";
export const metadata = makeMetadata(
  "Política de privacidade",
  "Saiba como a Save trata os dados enviados por seus canais digitais.",
  "/politica-de-privacidade",
);
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Privacidade"
        title="Política de privacidade"
        text="Transparência sobre o uso dos dados informados nos canais da Save."
      />
      <section className="section">
        <Container className="max-w-3xl space-y-8">
          <div>
            <h2 className="text-2xl font-semibold">
              Dados enviados pelo usuário
            </h2>
            <p className="mt-3 leading-7 text-muted">
              Os formulários coletam somente as informações necessárias para que
              a Save responda à solicitação e dê continuidade ao atendimento
              autorizado.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Finalidade e contato</h2>
            <p className="mt-3 leading-7 text-muted">
              As informações são utilizadas para contato, entendimento da
              solicitação e prestação de orientações iniciais. Para dúvidas,
              escreva para contato@savesolucoes.com.br.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Ambientes externos</h2>
            <p className="mt-3 leading-7 text-muted">
              Links para WhatsApp, Instagram e área do cliente direcionam a
              serviços externos, sujeitos às respectivas políticas.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
