"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import SectionEyebrow from "@/components/about/SectionEyebrow";
import Container from "@/components/layout/Container";
import FadeUp from "@/components/motion/FadeUp";

import styles from "./ConnectShowcase.module.css";

const photographs = [
  {
    src: "/images/foto/IMG_0742.JPEG",
    alt: "Apresentadora fala ao microfone durante o Connect Save",
    caption: "Conversas sobre gestão e negócios",
    position: "53% 43%",
  },
  {
    src: "/images/foto/IMG_0741.JPEG",
    alt: "Clientes e convidados acompanham uma apresentação do Connect Save",
    caption: "Clientes, profissionais e convidados",
    position: "45% 50%",
  },
  {
    src: "/images/foto/IMG_0745 (1).JPEG",
    alt: "Palestra do Connect Save registrada pela câmera de um celular",
    caption: "Conteúdo para acompanhar mudanças",
    position: "50% 50%",
  },
];

export default function ConnectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryRef = useRef(null);
  const slideRefs = useRef([]);
  const reduceMotion = useReducedMotion();

  const selectPhoto = (index) => {
    setActiveIndex(index);

    if (window.matchMedia("(max-width: 1023px)").matches) {
      slideRefs.current[index]?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  const move = (direction) => {
    selectPhoto(
      (activeIndex + direction + photographs.length) % photographs.length,
    );
  };

  const updateActiveFromScroll = () => {
    const gallery = galleryRef.current;
    if (!gallery || window.matchMedia("(min-width: 1024px)").matches) return;

    const closestIndex = slideRefs.current.reduce(
      (closest, slide, index) => {
        if (!slide) return closest;
        const distance = Math.abs(slide.offsetLeft - gallery.scrollLeft);
        return distance < closest.distance ? { index, distance } : closest;
      },
      { index: 0, distance: Infinity },
    ).index;

    setActiveIndex((current) =>
      current === closestIndex ? current : closestIndex,
    );
  };

  return (
    <section
      className="bg-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="connect-save-title"
    >
      <Container>
        <FadeUp>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <SectionEyebrow>Connect Save</SectionEyebrow>
              <h2
                id="connect-save-title"
                className="mt-7 max-w-2xl text-balance text-3xl leading-[1.1] tracking-[-0.035em] text-foreground sm:text-5xl"
              >
                Conhecimento também faz parte do acompanhamento.
              </h2>
            </div>

            <div className="flex flex-col items-start lg:col-span-5 lg:col-start-8">
              <div className="max-w-xl space-y-4 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                <p>
                  O Connect Save reúne clientes, profissionais e convidados para
                  conversar sobre temas que impactam a gestão e a rotina das
                  empresas.
                </p>
                <p>
                  A iniciativa amplia o relacionamento para além das obrigações
                  contábeis, aproximando informação, experiência e decisões.
                </p>
              </div>

              <div className="mt-7 hidden w-full justify-end lg:flex">
                <div
                  className="flex shrink-0 gap-2"
                  aria-label="Controles da galeria"
                >
                  <button
                    type="button"
                    className={styles.arrow}
                    onClick={() => move(-1)}
                    aria-label="Fotografia anterior do Connect Save"
                  >
                    <ArrowLeft size={18} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className={styles.arrow}
                    onClick={() => move(1)}
                    aria-label="Próxima fotografia do Connect Save"
                  >
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={galleryRef}
            className={styles.gallery}
            data-active={activeIndex}
            onScroll={updateActiveFromScroll}
            role="group"
            aria-label="Galeria de fotografias do Connect Save"
          >
            {photographs.map((photo, index) => (
              <motion.div
                key={photo.src}
                ref={(node) => {
                  slideRefs.current[index] = node;
                }}
                className={styles.slide}
                data-selected={activeIndex === index}
                layout={!reduceMotion}
                layoutDependency={activeIndex}
                transition={{
                  layout: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
                }}
                style={{ borderRadius: 24 }}
              >
                <button
                  type="button"
                  className={styles.photoButton}
                  onClick={() => selectPhoto(index)}
                  aria-pressed={activeIndex === index}
                  aria-label={`Selecionar fotografia ${index + 1}: ${photo.caption}. ${photo.alt}`}
                >
                  <motion.span
                    className={styles.photoFrame}
                    layout={reduceMotion ? false : "position"}
                    layoutDependency={activeIndex}
                    transition={{
                      layout: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
                    }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 60vw, 86vw"
                      className={styles.photo}
                      style={{ objectPosition: photo.position }}
                    />
                  </motion.span>
                  <motion.span
                    className={styles.caption}
                    layout={reduceMotion ? false : "position"}
                    layoutDependency={activeIndex}
                    transition={{
                      layout: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
                    }}
                  >
                    {photo.caption}
                  </motion.span>
                </button>
              </motion.div>
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
