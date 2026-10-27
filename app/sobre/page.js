import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import SectionEyebrow from "@/components/about/SectionEyebrow";
import AboutProcess from "@/components/about/AboutProcess";
import ConnectShowcase from "@/components/about/ConnectShowcase";
import StatsStrip from "@/components/about/StatsStrip";
import MagneticButton from "@/components/interactions/MagneticButton";
import Container from "@/components/layout/Container";
import FadeUp from "@/components/motion/FadeUp";
import Button from "@/components/ui/Button";
import { makeMetadata } from "@/lib/metadata";

export const metadata = makeMetadata(
  "Sobre a Save",
  "Conheça o posicionamento e a forma de atuação da Save Soluções.",
  "/sobre",
);

const stats = [
  {
    index: "I",
    value: "2021",
    label: "Ano de fundação",
  },
  {
    index: "II",
    value: "Brasil",
    label: "Atendimento em todo o país",
  },
  {
    index: "III",
    value: "7",
    label: "Frentes de serviço",
  },
  {
    index: "IV",
    value: "Maceió",
    label: "Sede em Alagoas",
  },
];

const googleReviews = {
  eyebrow: "Reconhecimento de quem confia",
  title: "Uma experiência construída com proximidade.",
  description:
    "Atendimento próximo, processos organizados e tecnologia aplicada à rotina de cada empresa.",
  rating: "5,0 no Google",
  socialProof: "Experiência reconhecida pelos clientes",
  linkLabel: "Ler avaliações",
  avatarSrc: "/images/save-social-proof-avatars.png",
  href: "https://www.google.com/maps/search/?api=1&query=Av.%20Menino%20Marcelo%2C%209350%2C%20Macei%C3%B3%20AL",
};

export default function Page() {
  return (
    <main>
      <section className="border-b border-border bg-white pb-16 pt-28 sm:pt-32 lg:pb-20 lg:pt-36">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-8">
            <FadeUp className="lg:col-span-7">
              <SectionEyebrow>Sobre a Save</SectionEyebrow>
              <h1 className="mt-6 max-w-4xl text-balance text-4xl leading-[1.1] tracking-[-0.045em] text-foreground sm:mt-7 sm:text-5xl lg:text-6xl">
                Contabilidade, tecnologia e proximidade para cuidar da sua
                empresa.
              </h1>
            </FadeUp>

            <FadeUp
              className="lg:col-span-5 lg:col-start-8 lg:pt-14"
              delay={0.1}
            >
              <p className="max-w-xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                A Save reúne experiência contábil, conhecimento tributário e
                tecnologia para organizar rotinas, facilitar o acesso às
                informações e apoiar decisões com mais clareza.
              </p>

              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
                <Button href="/contato">
                  Falar com a Save <ArrowRight size={17} aria-hidden="true" />
                </Button>
                <Link
                  href="/servicos"
                  className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-neutral-300 bg-white px-6 text-sm font-medium text-neutral-900 transition-colors duration-200 hover:border-neutral-400 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 motion-reduce:duration-0"
                >
                  Conheça nossos serviços
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      <section className="bg-white py-6 sm:py-8">
        <Container>
          <FadeUp className="relative aspect-[4/3] overflow-hidden rounded-[24px] lg:aspect-[21/9]">
            <Image
              src="/images/connect-save/connect-save-2024-equipe.jpg"
              alt="Equipe da Save Soluções"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1280px"
              className="object-cover"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.25)_45%,transparent_100%)]"
            />
          </FadeUp>
        </Container>
      </section>

      <section className="bg-surface py-20 sm:py-24 lg:py-28">
        <Container>
          <FadeUp className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-8">
              <SectionEyebrow>A Save hoje</SectionEyebrow>
              <h2 className="mt-7 max-w-4xl text-balance text-3xl leading-[1.1] tracking-[-0.035em] text-foreground sm:text-5xl">
                Estrutura para acompanhar empresas de diferentes realidades.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8 lg:col-span-4 lg:pb-1">
              Presença, organização e tecnologia reunidas para tornar a rotina
              contábil mais clara.
            </p>
          </FadeUp>

          <StatsStrip className="mt-12" items={stats} reviews={googleReviews} />
        </Container>
      </section>
      <AboutProcess />
      <ConnectShowcase />
      <section className="bg-neutral-950 py-20 text-white sm:py-24 lg:py-28">
        <Container>
          <FadeUp className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="max-w-3xl text-balance text-3xl tracking-[-0.035em] sm:text-5xl">
                Uma contabilidade presente nas decisões da sua empresa.
              </h2>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-base leading-relaxed text-neutral-300">
                Conte com a Save para organizar suas rotinas, esclarecer dúvidas
                e apoiar o crescimento do seu negócio.
              </p>

              <MagneticButton className="mt-8 inline-flex">
                <Button
                  href="https://wa.me/558234351890"
                  external
                  variant="light"
                  className="px-6 py-3 focus-visible:outline-white focus-visible:duration-0"
                  cursor="↗"
                >
                  <MessageCircle size={19} />
                  Falar com a Save
                </Button>
              </MagneticButton>
            </div>
          </FadeUp>
        </Container>
      </section>
    </main>
  );
}
