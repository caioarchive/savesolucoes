"use client";

import { useEffect, useRef, useState } from "react";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Pause, Play } from "lucide-react";

import { smoothEase } from "@/lib/motion";

const reelUrl = "https://www.instagram.com/reel/DZ50Q6mS26t/";

export default function HeroVideo() {
  const videoRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isPlaying, setIsPlaying] = useState(!shouldReduceMotion);

  useEffect(() => {
    if (!shouldReduceMotion) return;

    videoRef.current?.pause();
  }, [shouldReduceMotion]);

  function togglePlayback() {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play().catch(() => setIsPlaying(false));
      return;
    }

    video.pause();
    setIsPlaying(false);
  }

  return (
    <motion.div
      initial={{ opacity: 1, y: shouldReduceMotion ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.75,
        delay: shouldReduceMotion ? 0 : 0.5,
        ease: smoothEase,
      }}
      className="grid overflow-hidden rounded-[28px] border border-black/10 bg-neutral-950 text-white shadow-[0_28px_80px_rgba(0,0,0,0.12)] lg:grid-cols-[1fr_390px]"
    >
      <div className="flex min-h-[390px] flex-col justify-between p-7 sm:p-10 lg:min-h-[610px] lg:p-14">
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
          <span className="size-2 rounded-full bg-white" />
          A Save em movimento
        </div>

        <div className="max-w-xl py-14 lg:py-8">
          <p className="text-3xl leading-[1.08] tracking-[-0.035em] sm:text-4xl lg:text-5xl">
            Conhecimento compartilhado transforma empresas.
          </p>
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

      <div className="relative min-h-[560px] overflow-hidden border-t border-white/10 bg-black lg:min-h-[610px] lg:border-l lg:border-t-0">
        <video
          ref={videoRef}
          autoPlay={!shouldReduceMotion}
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
          <source
            src="/videos/save-eventos-360.mp4"
            type="video/mp4"
          />
        </video>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-white/60">
              Experiência Save
            </p>
            <p className="mt-1 text-sm font-medium">Conexões que movimentam negócios</p>
          </div>

          <button
            type="button"
            onClick={togglePlayback}
            aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
            className="grid size-12 shrink-0 place-items-center rounded-full bg-white text-black transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            {isPlaying ? (
              <Pause size={18} aria-hidden="true" />
            ) : (
              <Play size={18} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
