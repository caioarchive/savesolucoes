"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";

import { navigation } from "@/data/navigation";
import { services } from "@/data/services";

export default function MobileNavigation({
  isOpen,
  onClose,
  pathname,
  triggerRef,
}) {
  const panelRef = useRef(null);
  const wasOpenRef = useRef(false);
  const shouldReduceMotion = useReducedMotion();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const hasActiveServicesRoute = pathname.startsWith("/servicos");

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      panelRef.current?.querySelector("a")?.focus();
    }, 80);

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
        onClose();
        triggerRef.current?.focus();
        return;
      }

      if (event.key === "Tab") {
        const focusableElements = panelRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );

        if (!focusableElements?.length) {
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, triggerRef]);

  useEffect(() => {
    if (wasOpenRef.current && !isOpen) {
      requestAnimationFrame(() => triggerRef.current?.focus());
      setIsServicesOpen(false);
    }

    wasOpenRef.current = isOpen;
  }, [isOpen, triggerRef]);

  function handleClose({ restoreFocus = false } = {}) {
    setIsServicesOpen(false);
    onClose();

    if (restoreFocus) {
      triggerRef.current?.focus();
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-10 bg-black/10 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => handleClose({ restoreFocus: true })}
          />

          <motion.div
            id="mobile-navigation"
            ref={panelRef}
            className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 max-h-[calc(100vh-96px)] overflow-y-auto rounded-[20px] border border-black/10 bg-white/90 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.1)] backdrop-blur-[20px] xl:hidden"
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={
              shouldReduceMotion
                ? { duration: 0.1 }
                : { duration: 0.24, ease: [0.22, 1, 0.36, 1] }
            }
          >
            <nav className="space-y-1" aria-label="Navegação mobile">
              {navigation.map((item) => {
                const isServices = item.label === "Serviços";

                if (!isServices) {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => handleClose()}
                      className={`block rounded-xl px-4 py-3.5 font-medium ${isActive ? "bg-surface text-black" : "text-neutral-700"}`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div key={item.href}>
                    <button
                      type="button"
                      onClick={() => setIsServicesOpen((current) => !current)}
                      aria-expanded={isServicesOpen}
                      aria-controls="mobile-services-list"
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 font-medium ${hasActiveServicesRoute ? "bg-surface text-black" : "text-neutral-700"}`}
                    >
                      Serviços
                      <motion.span
                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                      >
                        <ChevronDown size={17} />
                      </motion.span>
                    </button>

                    <motion.div
                      id="mobile-services-list"
                      aria-hidden={!isServicesOpen}
                      initial={false}
                      animate={{
                        height: isServicesOpen ? 280 : 0,
                        opacity: isServicesOpen ? 1 : 0,
                      }}
                      transition={{
                        duration: shouldReduceMotion ? 0.1 : 0.22,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`overflow-hidden border-l border-border pl-4 ${isServicesOpen ? "pointer-events-auto" : "pointer-events-none"}`}
                    >
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/servicos/${service.slug}`}
                          tabIndex={isServicesOpen ? 0 : -1}
                          onClick={() => handleClose()}
                          className="block py-2.5 text-sm text-muted"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  </div>
                );
              })}
            </nav>

            <a
              href="https://meucontador.nibo.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="↗"
              className="mt-8 flex items-center justify-center gap-2 rounded-full bg-black px-5 py-3.5 font-medium text-white"
            >
              Área do cliente
              <ExternalLink size={15} />
            </a>

            <p className="mt-3 text-center text-xs text-muted">
              Ambiente externo seguro
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
