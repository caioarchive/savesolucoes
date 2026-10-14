import Image from "next/image";

import Container from "@/components/layout/Container";

import HeroIntro from "./HeroIntro";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-neutral-950">
      <div aria-hidden="true" className={styles.backgroundLayers}>
        <Image
          src="/images/save-hero-ambient-lines.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none object-cover object-center grayscale contrast-75"
        />
        <Image
          src="/images/save-hero-ambient-lines.png"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none object-cover object-center grayscale contrast-75 blur-[20px]"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 70%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 70%, black 100%)",
          }}
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgb(255 255 255 / 0.74), rgb(255 255 255 / 0.84) 50%, rgb(255 255 255 / 0.74))",
        }}
      />
      <div aria-hidden="true" className={styles.ambientGradient} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-b from-transparent via-white/45 to-white"
      />
      <Container className="relative z-10 flex min-h-[100dvh] flex-col pb-5 pt-20 sm:pb-8 sm:pt-24">
        <HeroIntro />
      </Container>
    </section>
  );
}
