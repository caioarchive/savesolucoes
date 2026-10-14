"use client";

import { useEffect, useRef, useState } from "react";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Pause, Play } from "lucide-react";

import { parallaxSpring } from "@/lib/motion";

const reelUrl = "https://www.instagram.com/reel/DZ50Q6mS26t/";

export default function HeroVideo() {
  const stageRef = useRef(null);
  const videoRef = useRef(null);
  const hasAutoplayedRef = useRef(false);
  const shouldReduceMotion = useReducedMotion();
  const [hasFineDesktopPointer, setHasFineDesktopPointer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start end", "center center"],
  });
  const smoothProgress = useSpring(scrollYProgress, parallaxSpring);
  const cardTransform = useTransform(
    smoothProgress,
    [0.18, 0.75],
    ["rotateX(3deg)", "rotateX(0deg)"],
  );
  const canTilt = hasFineDesktopPointer && !shouldReduceMotion;

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(min-width: 1024px) and (hover: hover) and (pointer: fine)",
    );
    const updatePointerMode = () =>
      setHasFineDesktopPointer(mediaQuery.matches);

    updatePointerMode();
    mediaQuery.addEventListener("change", updatePointerMode);

    return () => mediaQuery.removeEventListener("change", updatePointerMode);
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || shouldReduceMotion === null) return;

    if (shouldReduceMotion) {
      video.pause();
      if (video.currentTime > 0) video.load();
      setIsPlaying(false);
      return;
    }

    if (hasAutoplayedRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAutoplayedRef.current) return;

        hasAutoplayedRef.current = true;
        video.play().catch(() => setIsPlaying(false));
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [shouldReduceMotion]);

  function togglePlayback() {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      hasAutoplayedRef.current = true;
      video.play().catch(() => setIsPlaying(false));
      return;
    }

    video.pause();
    setIsPlaying(false);
  }

  return (
    <div ref={stageRef} style={{ perspective: "1400px" }}>
      <motion.div
        className="grid overflow-hidden rounded-[28px] bg-neutral-950 text-white shadow-[0_28px_80px_rgba(0,0,0,0.3)] md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:grid-cols-[minmax(0,1fr)_390px]"
        style={{
          transform: canTilt ? cardTransform : "rotateX(0deg)",
          transformOrigin: "center top",
        }}
      >
        <div className="flex min-h-[360px] flex-col justify-between p-7 sm:p-10 md:min-h-[560px] md:px-10 md:pb-10 md:pt-10 lg:min-h-[610px] lg:px-14 lg:pb-14 lg:pt-14">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
            <span className="size-2 rounded-full bg-white" aria-hidden="true" />
            A Save em movimento
          </div>

          <div className="max-w-xl py-10 md:py-8">
            <h2 className="text-3xl leading-[1.08] tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              Conhecimento compartilhado transforma empresas.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-neutral-400 sm:text-lg sm:leading-8">
              Em encontros e eventos, a Save aproxima empresários para trocar
              experiências, ampliar repertório e criar novas oportunidades.
            </p>
          </div>

          <a
            href={reelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-white transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-950"
          >
            Ver no Instagram
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden bg-black md:aspect-auto md:min-h-[560px] lg:min-h-[610px]">
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/connect-save/connect-save-2024-palco.jpg"
            aria-label="Encontro Papo Business promovido pela Save"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/videos/save-eventos-360.mp4" type="video/mp4" />
          </video>

          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

          <div className="pointer-events-none absolute bottom-5 left-5 right-20 z-20 sm:bottom-6 sm:left-6 sm:right-24">
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/85">
              EXPERIÊNCIA SAVE
            </p>
            <p className="mt-1 text-sm font-semibold leading-tight text-white sm:text-base">
              Conexões que movimentam negócios
            </p>
          </div>

          <button
            type="button"
            onClick={togglePlayback}
            aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
            className="absolute bottom-5 right-5 z-30 grid size-12 place-items-center rounded-full bg-white text-black transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black motion-reduce:transform-none motion-reduce:transition-none sm:bottom-6 sm:right-6"
          >
            {isPlaying ? (
              <Pause size={18} aria-hidden="true" />
            ) : (
              <Play size={18} aria-hidden="true" />
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
