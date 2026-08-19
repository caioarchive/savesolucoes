import Image from "next/image";

import { ArrowUpRight } from "lucide-react";

import Container from "@/components/layout/Container";
import FadeUp from "@/components/motion/FadeUp";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import SectionHeader from "@/components/ui/SectionHeader";

const instagramPosts = {
  connect2024: "https://www.instagram.com/p/DL77YKRu9up/",
  connect2025: "https://www.instagram.com/p/DQr56LrFZdQ/",
};

const photos = [
  {
    src: "/images/connect-save/connect-save-2025-palestra.jpg",
    alt: "Palestrante no palco do Connect Save 2025 diante do público",
    label: "Connect Save 2025",
    href: instagramPosts.connect2025,
    className: "min-h-[440px] lg:row-span-2 lg:min-h-[680px]",
    sizes: "(min-width: 1024px) 58vw, 100vw",
  },
  {
    src: "/images/connect-save/connect-save-2024-equipe.jpg",
    alt: "Equipe reunida durante o Connect Save 2024",
    label: "Quem faz acontecer",
    href: instagramPosts.connect2024,
    className: "min-h-[300px] lg:min-h-0",
    sizes: "(min-width: 1024px) 38vw, 100vw",
  },
  {
    src: "/images/connect-save/connect-save-2025-conexoes.jpg",
    alt: "Participantes compartilhando experiências no Connect Save 2025",
    label: "Conhecimento e conexões",
    href: instagramPosts.connect2025,
    className: "min-h-[360px] lg:min-h-0",
    sizes: "(min-width: 1024px) 38vw, 100vw",
  },
];

export default function ConnectSaveSection() {
  return (
    <section className="section overflow-hidden bg-neutral-950 text-white">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <FadeUp>
            <SectionHeader
              dark
              eyebrow="Experiência Save"
              title="Relacionamentos que vão além dos números."
              text="O Connect Save reúne clientes, parceiros e profissionais para trocar conhecimento, criar conexões genuínas e enxergar novas oportunidades para os negócios."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <a
              href={instagramPosts.connect2025}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-300 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-950"
            >
              Acompanhar no Instagram
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </FadeUp>
        </div>

        <StaggerContainer className="mt-14 grid gap-4 lg:grid-cols-[1.45fr_1fr] lg:grid-rows-2">
          {photos.map((photo) => (
            <StaggerItem key={photo.src} className={photo.className}>
              <a
                href={photo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${photo.label} — ver publicação no Instagram`}
                data-cursor="Explorar"
                className="group relative block h-full min-h-[inherit] overflow-hidden rounded-[28px] border border-white/10 bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-950"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={photo.sizes}
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-7">
                  <span className="text-sm font-medium tracking-[-0.01em] text-white">
                    {photo.label}
                  </span>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
