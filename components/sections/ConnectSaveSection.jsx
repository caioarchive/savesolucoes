import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";

import HeroVideo from "./HeroVideo";

const photos = [
  {
    src: "/images/connect-save/connect-save-2024-equipe.jpg",
    alt: "Equipe da Save reunida no Connect Save 2024",
    href: "https://www.instagram.com/p/DL77YKRu9up/",
    position: "object-center",
    sizes:
      "(min-width: 1280px) 720px, (min-width: 768px) 58vw, calc(100vw - 40px)",
    featured: true,
  },
  {
    src: "/images/connect-save/connect-save-2025-palestra.jpg",
    alt: "Palestrante com microfone no Connect Save 2025",
    href: "https://www.instagram.com/p/DQr56LrFZdQ/",
    position: "object-[center_20%]",
    sizes: "(min-width: 1280px) 350px, (min-width: 768px) 28vw, 44vw",
  },
  {
    src: "/images/foto/IMG_0741.JPEG",
    alt: "Público acompanhando uma apresentação no Connect Save",
    position: "object-[48%_center] md:object-[52%_center] lg:object-center",
    sizes: "(min-width: 1280px) 350px, (min-width: 768px) 28vw, 44vw",
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

        <div className="mt-10 min-w-0 md:grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-4 lg:mt-12">
          <HeroVideo />

          <ul
            aria-label="Fotos do Connect Save"
            className="mt-4 grid max-w-full grid-cols-2 gap-3 md:mt-0 md:h-[560px] md:min-w-0 md:grid-rows-2 md:gap-4 lg:h-[680px] lg:grid-rows-[1.2fr_0.8fr]"
          >
            {photos.map((photo) => (
              <li
                key={photo.src}
                className={`min-w-0 ${photo.featured ? "col-span-2 aspect-[3/2]" : "aspect-[4/5]"} md:h-full md:aspect-auto`}
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
        </div>
      </Container>
    </section>
  );
}
