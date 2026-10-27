import Image from "next/image";

import Container from "@/components/layout/Container";

import HeroIntro from "./HeroIntro";
import HeroVideo from "./HeroVideo";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className="bg-neutral-100 text-neutral-950">
      <div className="relative isolate overflow-hidden bg-white">
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
              "linear-gradient(to right, rgb(255 255 255 / 0.9), rgb(255 255 255 / 0.94) 50%, rgb(255 255 255 / 0.9))",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-b from-transparent via-white/45 to-white"
        />
        <Container className="relative z-10 flex flex-col pt-20 sm:pt-24 md:min-h-[calc(100dvh-12rem)] lg:min-h-[calc(100dvh-5rem)] lg:pt-24">
          <HeroIntro />
        </Container>
      </div>

      <Container className="relative z-10">
        <div className="mx-auto w-full max-w-5xl md:-mt-14">
          <HeroVideo />
        </div>
      </Container>
    </section>
  );
}
