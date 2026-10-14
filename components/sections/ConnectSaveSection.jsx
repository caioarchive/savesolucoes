import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";

const photos = [
  {
    src: "/images/foto/IMG_0743.JPEG",
    alt: "Duas pessoas posam para uma fotografia durante o Connect Save",
    position: "object-center md:object-[center_20%]",
    sizes:
      "(min-width: 1024px) 420px, (min-width: 768px) 45vw, calc(100vw - 40px)",
    className:
      "col-span-2 aspect-[4/5] md:col-span-1 md:row-span-2 md:aspect-auto",
  },
  {
    src: "/images/connect-save/connect-save-2024-equipe.jpg",
    alt: "Equipe da Save reunida no Connect Save 2024",
    href: "https://www.instagram.com/p/DL77YKRu9up/",
    position: "object-center",
    sizes:
      "(min-width: 1024px) 620px, (min-width: 768px) 55vw, calc(100vw - 40px)",
    className:
      "col-span-2 aspect-[3/2] md:col-start-2 md:row-start-1 md:aspect-auto",
  },
  {
    src: "/images/connect-save/connect-save-2025-palestra.jpg",
    alt: "Palestrante com microfone no Connect Save 2025",
    href: "https://www.instagram.com/p/DQr56LrFZdQ/",
    position: "object-[center_20%]",
    sizes: "(min-width: 1280px) 350px, (min-width: 768px) 28vw, 44vw",
    className: "aspect-[4/5] md:col-start-2 md:row-start-2 md:aspect-auto",
  },
  {
    src: "/images/foto/IMG_0741.JPEG",
    alt: "Público acompanhando uma apresentação no Connect Save",
    position: "object-[48%_center] md:object-[52%_center] lg:object-center",
    sizes: "(min-width: 1280px) 350px, (min-width: 768px) 28vw, 44vw",
    className: "aspect-[4/5] md:col-start-3 md:row-start-2 md:aspect-auto",
  },
];

export default function ConnectSaveSection() {
  return (
    <section className="overflow-hidden bg-neutral-950 pb-20 pt-28 text-white sm:pb-24 sm:pt-32 lg:pb-32 lg:pt-36">
      <Container>
        <div className="max-w-3xl">
          <Badge dark>A Save em movimento</Badge>
          <h2 className="mt-5 text-balance text-3xl leading-[1.08] tracking-[-0.035em] sm:text-4xl lg:text-5xl">
            Relacionamentos que vão além dos números.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
            O Connect Save reúne clientes, parceiros e profissionais para trocar
            conhecimento e criar conexões.
          </p>
          <a
            href="https://www.instagram.com/reel/DZ50Q6mS26t/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-white transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-950"
          >
            Ver no Instagram
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>

        <ul
          aria-label="Fotos do Connect Save"
          className="mt-10 grid min-w-0 grid-cols-2 gap-3 md:h-[560px] md:grid-cols-[2.3fr_1.35fr_1.35fr] md:grid-rows-[240px_minmax(0,1fr)] md:gap-4 lg:mt-12 lg:h-[680px] lg:grid-cols-[2fr_1.5fr_1.5fr] lg:grid-rows-[1.2fr_0.8fr]"
        >
          {photos.map((photo) => (
            <li
              key={photo.src}
              className={`min-w-0 md:h-full ${photo.className}`}
            >
              {photo.href ? (
                <a
                  href={photo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${photo.alt}. Ver publicação no Instagram.`}
                  data-cursor="Explorar"
                  className="group relative block h-full overflow-hidden rounded-[20px] border border-white/10 bg-neutral-900 transition-[border-color,transform] duration-200 ease-out hover:border-white/30 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={photo.sizes}
                    className={`object-cover ${photo.position}`}
                  />
                </a>
              ) : (
                <div className="relative h-full overflow-hidden rounded-[20px] border border-white/10 bg-neutral-900">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={photo.sizes}
                    className={`object-cover ${photo.position}`}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
