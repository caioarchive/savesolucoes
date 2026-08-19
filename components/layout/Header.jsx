"use client";

import { usePathname } from "next/navigation";
import { useCallback, useRef, useState } from "react";

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { ExternalLink, Menu, X } from "lucide-react";

import MagneticButton from "@/components/interactions/MagneticButton";
import ScrollProgress from "@/components/interactions/ScrollProgress";
import Logo from "@/components/ui/Logo";

import DesktopNavigation from "@/components/layout/DesktopNavigation";
import MobileNavigation from "@/components/layout/MobileNavigation";

import { navigationSpring } from "@/lib/motion";

export default function Header() {
  const pathname = usePathname();
  const menuButtonRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleMobileClose = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const nextIsScrolled = latest > 30;

    setIsScrolled((current) =>
      current === nextIsScrolled ? current : nextIsScrolled,
    );
  });

  const headerAnimation = {
    top: isScrolled ? 14 : 0,
    height: isScrolled ? 64 : 80,
    borderRadius: isScrolled ? 24 : "0 0 24px 24px",
    backgroundColor: isScrolled
      ? "rgba(255, 255, 255, 0.82)"
      : "rgba(255, 255, 255, 0.92)",
    borderColor: "rgba(10, 10, 10, 0.08)",
    boxShadow: isScrolled
      ? "0 12px 40px rgba(0, 0, 0, 0.08)"
      : "0 0 0 rgba(0, 0, 0, 0)",
  };

  return (
    <motion.header
      data-testid="floating-header"
      className="floating-header fixed left-1/2 top-0 z-[70] h-20 w-[calc(100%_-_32px)] max-w-[1180px] -translate-x-1/2 rounded-b-[24px] border border-black/10 bg-white/90 backdrop-blur-[20px] [backdrop-filter:blur(20px)_saturate(140%)] [-webkit-backdrop-filter:blur(20px)_saturate(140%)]"
      initial={false}
      animate={headerAnimation}
      transition={shouldReduceMotion ? { duration: 0.1 } : navigationSpring}
    >
      <ScrollProgress />

      <div className="relative z-20 mx-auto flex h-full w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo compact={isScrolled} />
        <DesktopNavigation />

        <div className="hidden shrink-0 xl:block">
          <MagneticButton className="shrink-0">
            <a
              href="https://meucontador.nibo.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              title="Ambiente externo seguro"
              data-cursor="↗"
              className="inline-flex h-12 min-w-[150px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-black px-5 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800"
            >
              Área do cliente
              <ExternalLink size={14} />
            </a>
          </MagneticButton>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border xl:hidden"
          onClick={() => setIsMobileOpen((current) => !current)}
          aria-label={isMobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileOpen ? <X size={19} /> : <Menu size={20} />}
        </button>

        <MobileNavigation
          isOpen={isMobileOpen}
          onClose={handleMobileClose}
          pathname={pathname}
          triggerRef={menuButtonRef}
        />
      </div>
    </motion.header>
  );
}
