"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import {
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { useLenis } from "lenis/react";
import { ExternalLink, Menu, X } from "lucide-react";

import MagneticButton from "@/components/interactions/MagneticButton";
import Logo from "@/components/ui/Logo";

import DesktopNavigation from "@/components/layout/DesktopNavigation";
import MobileNavigation from "@/components/layout/MobileNavigation";

export default function Header() {
  const pathname = usePathname();
  const menuButtonRef = useRef(null);
  const isScrolledRef = useRef(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isSolid = isScrolled || isMobileOpen;
  const isDarkTransparent = !isSolid && /^\/servicos\/[^/]+\/?$/.test(pathname);

  const handleMobileClose = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  const syncScrolledState = useCallback((latest) => {
    const nextIsScrolled = isScrolledRef.current ? latest >= 16 : latest > 40;
    if (nextIsScrolled !== isScrolledRef.current) {
      isScrolledRef.current = nextIsScrolled;
      setIsScrolled(nextIsScrolled);
    }
  }, []);

  useEffect(() => {
    const nextIsScrolled = window.scrollY > 40;
    isScrolledRef.current = nextIsScrolled;
    setIsScrolled(nextIsScrolled);
  }, [pathname]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (shouldReduceMotion) {
      syncScrolledState(latest);
    }
  });

  useLenis(
    (lenis) => {
      if (!shouldReduceMotion) {
        syncScrolledState(lenis.scroll);
      }
    },
    [shouldReduceMotion, syncScrolledState],
  );

  return (
    <header
      data-testid="floating-header"
      className={`fixed left-1/2 z-[70] w-[calc(100%_-_20px)] max-w-[1180px] -translate-x-1/2 rounded-[20px] border transition-[background-color,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:duration-0 sm:w-[calc(100%_-_32px)] xl:rounded-[24px] ${
        isSolid
          ? `top-[10px] h-16 border-neutral-200 shadow-[0_6px_24px_rgba(0,0,0,0.05)] xl:top-[14px] ${
              isMobileOpen
                ? "bg-white backdrop-blur-none"
                : "bg-white/95 backdrop-blur-[20px]"
            }`
          : "top-0 h-[72px] border-transparent bg-transparent shadow-none backdrop-blur-none xl:h-20"
      }`}
    >
      <div className="relative z-20 mx-auto flex h-full w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo light={isDarkTransparent} compact={isSolid} navigation />
        <DesktopNavigation light={isDarkTransparent} />

        <div className="hidden shrink-0 xl:block">
          <MagneticButton className="shrink-0">
            <a
              href="https://meucontador.nibo.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              title="Ambiente externo seguro"
              data-cursor="↗"
              className={`inline-flex h-12 min-w-[150px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 text-base font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:duration-0 ${
                isDarkTransparent
                  ? "bg-white text-black hover:bg-neutral-100 focus-visible:ring-white focus-visible:ring-offset-neutral-950"
                  : "bg-black text-white hover:bg-neutral-800 focus-visible:ring-black focus-visible:ring-offset-white"
              }`}
            >
              Área do cliente
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </MagneticButton>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:duration-0 xl:hidden ${
            isDarkTransparent
              ? "border-white/35 text-white hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-neutral-950"
              : "border-border text-black hover:bg-surface focus-visible:ring-black focus-visible:ring-offset-white"
          }`}
          onClick={() => setIsMobileOpen((current) => !current)}
          aria-label={isMobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileOpen ? (
            <X size={19} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>

        <MobileNavigation
          isOpen={isMobileOpen}
          onClose={handleMobileClose}
          pathname={pathname}
          triggerRef={menuButtonRef}
        />
      </div>
    </header>
  );
}
