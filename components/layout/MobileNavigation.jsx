"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";

import {
  businessNavigation,
  navigation,
  servicesNavigation,
} from "@/data/navigation";

function isRouteActive(pathname, href) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function MobileNavigation({
  isOpen,
  onClose,
  pathname,
  triggerRef,
}) {
  const panelRef = useRef(null);
  const servicesButtonRef = useRef(null);
  const businessButtonRef = useRef(null);
  const wasOpenRef = useRef(false);
  const shouldReduceMotion = useReducedMotion();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      panelRef.current?.querySelector("button")?.focus();
    }, 80);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        if (isServicesOpen) {
          setIsServicesOpen(false);
          servicesButtonRef.current?.focus();
        } else if (isBusinessOpen) {
          setIsBusinessOpen(false);
          businessButtonRef.current?.focus();
        } else {
          onClose();
          triggerRef.current?.focus();
        }
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
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isServicesOpen, isBusinessOpen, onClose, triggerRef]);

  useEffect(() => {
    if (wasOpenRef.current && !isOpen) {
      requestAnimationFrame(() => triggerRef.current?.focus());
      setIsServicesOpen(false);
      setIsBusinessOpen(false);
    }

    wasOpenRef.current = isOpen;
  }, [isOpen, triggerRef]);

  function handleClose({ restoreFocus = false } = {}) {
    setIsServicesOpen(false);
    setIsBusinessOpen(false);
    onClose();

    if (restoreFocus) {
      triggerRef.current?.focus();
    }
  }

  return (
    <>
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                aria-hidden="true"
                className="fixed inset-0 z-[60] bg-black/10 backdrop-blur-[2px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                onClick={() => handleClose({ restoreFocus: true })}
              />
            )}
          </AnimatePresence>,
          document.body,
        )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            ref={panelRef}
            className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 max-h-[calc(100dvh_-_92px_-_env(safe-area-inset-bottom))] touch-pan-y overflow-x-hidden overflow-y-auto overscroll-contain rounded-[20px] border border-black/10 bg-white p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_18px_50px_rgba(0,0,0,0.1)] xl:hidden"
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
                if (!item.type) {
                  const isActive = isRouteActive(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => handleClose()}
                      aria-current={isActive ? "page" : undefined}
                      className={`block rounded-xl px-4 py-3.5 font-medium focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-neutral-950 ${isActive ? "bg-surface-secondary text-black shadow-[inset_0_0_0_1px_rgba(17,17,17,0.06)]" : "text-neutral-700"}`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                const isServices = item.type === "services";
                const expanded = isServices ? isServicesOpen : isBusinessOpen;
                const links = isServices
                  ? servicesNavigation
                  : businessNavigation;
                const panelId = isServices
                  ? "mobile-services-list"
                  : "mobile-business-list";
                const isActive = isServices
                  ? isRouteActive(pathname, "/servicos") ||
                    isRouteActive(pathname, "/segmentos")
                  : businessNavigation.some(({ href }) =>
                      isRouteActive(pathname, href),
                    );

                return (
                  <div key={item.type}>
                    <button
                      ref={isServices ? servicesButtonRef : businessButtonRef}
                      type="button"
                      onClick={() => {
                        if (isServices) {
                          setIsServicesOpen((current) => !current);
                          setIsBusinessOpen(false);
                        } else {
                          setIsBusinessOpen((current) => !current);
                          setIsServicesOpen(false);
                        }
                      }}
                      aria-expanded={expanded}
                      aria-controls={panelId}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 font-medium focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-neutral-950 ${isActive ? "bg-surface text-black" : "text-neutral-700"}`}
                    >
                      {item.label}
                      <motion.span
                        animate={{ rotate: expanded ? 180 : 0 }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.16 }}
                      >
                        <ChevronDown size={17} aria-hidden="true" />
                      </motion.span>
                    </button>

                    <div
                      id={panelId}
                      hidden={!expanded}
                      className="ml-4 border-l border-border pl-4"
                    >
                      <ul>
                        {links.map((link) => (
                          <li
                            key={link.href}
                            className={
                              link.separated
                                ? "mt-2 border-t border-border pt-2"
                                : undefined
                            }
                          >
                            <Link
                              href={link.href}
                              onClick={() => handleClose()}
                              aria-current={
                                isRouteActive(pathname, link.href)
                                  ? "page"
                                  : undefined
                              }
                              className={`block rounded-lg px-2 py-2.5 text-sm focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-neutral-950 ${isRouteActive(pathname, link.href) ? "font-semibold text-black" : "text-muted"}`}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
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
        )}
      </AnimatePresence>
    </>
  );
}
