import {
  ArrowUpRight,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import SectionEyebrow from "@/components/about/SectionEyebrow";
import LeadForm from "@/components/forms/LeadForm";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { makeMetadata } from "@/lib/metadata";

import styles from "./page.module.css";

const directionsUrl = "https://share.google/dyFblpxcUTLLWIizS";
const mapEmbedUrl =
  "https://www.google.com/maps?q=Save%20Solu%C3%A7%C3%B5es%20Cont%C3%A1beis%20e%20Empresariais%2C%20Av.%20Menino%20Marcelo%2C%209350%2C%20Sala%20315%2C%20Macei%C3%B3%20AL&output=embed";

const channels = [
  {
    label: "WhatsApp",
    value: "(82) 3435-1890",
    href: "https://wa.me/558234351890",
    icon: MessageCircle,
    external: true,
  },
  {
    label: "E-mail",
    value: "contato@savesolucoes.com.br",
    href: "mailto:contato@savesolucoes.com.br",
    icon: Mail,
  },
  {
    label: "Instagram",
    value: "@save.solucoes",
    href: "https://www.instagram.com/save.solucoes/",
    icon: Instagram,
    external: true,
  },
];

export const metadata = makeMetadata(
  "Contato",
  "Fale com a equipe da Save Soluções.",
  "/contato",
);

function ChannelContent({ icon: Icon, label, children }) {
  return (
    <>
      <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-surface text-foreground">
        <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <strong className="block text-sm font-semibold text-foreground">
          {label}
        </strong>
        <span className="mt-1 block break-words text-[13px] leading-6 text-neutral-600">
          {children}
        </span>
      </span>
    </>
  );
}

export default function Page() {
  return (
    <>
      <section
        aria-labelledby="contact-title"
        className="border-b border-border bg-white pb-20 pt-32 lg:pb-28 lg:pt-36"
      >
        <Container className="grid min-w-0 gap-14 max-sm:px-4 lg:grid-cols-2 lg:items-start lg:gap-16 xl:gap-20">
          <div className="min-w-0">
            <SectionEyebrow>Contato</SectionEyebrow>
            <h1
              id="contact-title"
              className="mt-7 max-w-xl text-balance text-4xl leading-[1.08] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[3.5rem] xl:text-6xl"
            >
              Vamos conversar sobre a sua empresa?
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Envie uma mensagem ou escolha um dos canais de atendimento da
              Save.
            </p>

            <address className="mt-10 not-italic">
              <ul className="grid border-t border-border sm:grid-cols-2">
                {channels.map(
                  ({ label, value, href, icon, external }, index) => (
                    <li
                      key={label}
                      className={`border-b border-border ${index % 2 === 0 ? "sm:border-r sm:pr-6" : "sm:pl-6"}`}
                    >
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="group flex min-h-32 items-start gap-4 py-6 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
                      >
                        <ChannelContent icon={icon} label={label}>
                          {value}
                        </ChannelContent>
                      </a>
                    </li>
                  ),
                )}

                <li className="border-b border-border sm:pl-6">
                  <div className="flex min-h-32 items-start gap-4 py-6">
                    <ChannelContent icon={MapPin} label="Endereço">
                      Av. Menino Marcelo, 9350, Sala 315, Empresarial Humberto
                      Lobo, Maceió - AL,{" "}
                      <span className="whitespace-nowrap">CEP 57046-000</span>
                    </ChannelContent>
                  </div>
                </li>
              </ul>
            </address>
          </div>

          <div className="min-w-0 [&_form]:shadow-none">
            <LeadForm />
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="contact-map-title"
        className="bg-surface py-20 sm:py-24 lg:py-28"
      >
        <Container className="max-sm:px-4">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <h2
                id="contact-map-title"
                className="text-3xl leading-[1.1] tracking-[-0.035em] text-foreground sm:text-4xl lg:text-5xl"
              >
                Onde estamos
              </h2>
            </div>

            <Button
              href={directionsUrl}
              external
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Como chegar
              <ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" />
            </Button>
          </div>

          <div
            className={`mt-10 overflow-hidden rounded-[24px] border border-border bg-surface-secondary lg:mt-12 ${styles.mapFrame}`}
          >
            <iframe
              src={mapEmbedUrl}
              title="Mapa com a localização da Save Soluções em Maceió"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
