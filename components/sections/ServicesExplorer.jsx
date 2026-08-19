"use client";

import Link from "next/link";
import { useRef, useState } from "react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

import { services } from "@/data/services";
import { durations, smoothEase } from "@/lib/motion";

export default function ServicesExplorer({ limit }) {
  const visibleServices = limit ? services.slice(0, limit) : services;
  const shouldReduceMotion = useReducedMotion();
  const tabRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = visibleServices[activeIndex];

  function handleListKeyDown(event) {
    const keyDirections = {
      ArrowDown: 1,
      ArrowRight: 1,
      ArrowUp: -1,
      ArrowLeft: -1,
    };
    const direction = keyDirections[event.key];

    if (!direction) {
      return;
    }

    event.preventDefault();
    setActiveIndex((current) => {
      const next = current + direction;
      const normalizedIndex =
        (next + visibleServices.length) % visibleServices.length;

      requestAnimationFrame(() => {
        tabRefs.current[normalizedIndex]?.focus();
      });

      return normalizedIndex;
    });
  }

  return (
    <div className="grid grid-cols-[0.72fr_1.28fr] gap-8">
      <div
        role="tablist"
        aria-label="Serviços da Save"
        onKeyDown={handleListKeyDown}
        className="sticky top-32 h-fit rounded-[22px] border border-border bg-white p-2"
      >
        {visibleServices.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={service.slug}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              type="button"
              role="tab"
              id={`service-tab-${service.slug}`}
              aria-controls={`service-panel-${service.slug}`}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              className="relative flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left text-sm font-medium text-neutral-600 transition-colors duration-200 hover:bg-surface hover:text-black"
            >
              {isActive && (
                <motion.span
                  layoutId="service-active-indicator"
                  className="absolute inset-0 rounded-2xl bg-surface"
                  transition={{ type: "spring", stiffness: 320, damping: 32 }}
                />
              )}

              <span className="relative text-xs text-muted">0{index + 1}</span>
              <span className="relative">{service.title}</span>
            </button>
          );
        })}
      </div>

      <div className="min-h-[470px] overflow-hidden rounded-[24px] border border-border bg-white p-10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeService.slug}
            role="tabpanel"
            id={`service-panel-${activeService.slug}`}
            aria-labelledby={`service-tab-${activeService.slug}`}
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : 18,
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : -12,
            }}
            transition={{
              duration: shouldReduceMotion ? 0.12 : durations.fast,
              ease: smoothEase,
            }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              Serviço contábil
            </p>
            <h3 className="mt-6 text-4xl tracking-[-0.035em]">
              {activeService.title}
            </h3>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              {activeService.short}
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {activeService.items.slice(0, 6).map((item) => (
                <span key={item} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 shrink-0" size={15} />
                  {item}
                </span>
              ))}
            </div>

            <Link
              href={`/servicos/${activeService.slug}`}
              data-cursor="Ver serviço"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Conhecer serviço
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
