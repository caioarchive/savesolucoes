"use client";

import { useEffect, useRef, useState } from "react";

import { motion, useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";

import { smoothEase } from "@/lib/motion";

export default function HeroVideo() {
  const videoRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || shouldReduceMotion === null) return;

    if (shouldReduceMotion) {
      video.pause();
      setIsPlaying(false);
      return;
    }

    video.play().catch(() => setIsPlaying(false));
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
      className="relative aspect-[4/5] w-full min-w-0 overflow-hidden rounded-[28px] border border-white/10 bg-black text-white md:h-[560px] md:aspect-auto lg:h-[680px]"
    >
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

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-white/85">
            Experiência Save
          </p>
          <p className="mt-1 text-sm font-medium">
            Conexões que movimentam negócios
          </p>
        </div>

        <button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
          className="grid size-9 shrink-0 place-items-center rounded-full border border-white/15 bg-black/45 text-white transition-colors duration-200 hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {isPlaying ? (
            <Pause size={16} aria-hidden="true" />
          ) : (
            <Play size={16} aria-hidden="true" />
          )}
        </button>
      </div>
    </motion.div>
  );
}
