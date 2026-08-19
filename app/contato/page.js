import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import PageHero from "@/components/pages/PageHero";
import Container from "@/components/layout/Container";
import LeadForm from "@/components/forms/LeadForm";
import { makeMetadata } from "@/lib/metadata";
export const metadata = makeMetadata(
  "Contato",
  "Fale com a equipe da Save Soluções.",
  "/contato",
);
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre a sua empresa?"
        text="Envie uma mensagem ou escolha um dos canais de atendimento da Save."
      />
      <section className="section bg-surface">
        <Container className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <div className="space-y-5">
            <a
              href="https://wa.me/558234351890"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="↗"
              className="flex gap-4 rounded-2xl bg-white p-5"
            >
              <MessageCircle className="text-primary" />
              <span>
                <strong className="block">WhatsApp</strong>
                <small className="text-muted">(82) 3435-1890</small>
              </span>
            </a>
            <a
              href="mailto:contato@savesolucoes.com.br"
              className="flex gap-4 rounded-2xl bg-white p-5"
            >
              <Mail className="text-primary" />
              <span>
                <strong className="block">E-mail</strong>
                <small className="text-muted">
                  contato@savesolucoes.com.br
                </small>
              </span>
            </a>
            <a
              href="https://www.instagram.com/save.solucoes/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="↗"
              className="flex gap-4 rounded-2xl bg-white p-5"
            >
              <Instagram className="text-primary" />
              <span>
                <strong className="block">Instagram</strong>
                <small className="text-muted">@save.solucoes</small>
              </span>
            </a>
            <div className="flex gap-4 rounded-2xl bg-white p-5">
              <MapPin className="shrink-0 text-primary" />
              <span>
                <strong className="block">Endereço</strong>
                <small className="text-muted">
                  Av. Menino Marcelo, 9350, Sala 315
                  <br />
                  Empresarial Humberto Lobo
                  <br />
                  Maceió – AL, CEP 57046-000
                </small>
              </span>
            </div>
          </div>
          <LeadForm />
        </Container>
      </section>
    </>
  );
}
