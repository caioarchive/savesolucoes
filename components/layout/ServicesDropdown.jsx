"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { services } from "@/data/services";
import { durations, smoothEase } from "@/lib/motion";

export default function ServicesDropdown({ triggerClassName }) {
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  function closeMenu({ restoreFocus = false } = {}) {
    setIsOpen(false);

    if (restoreFocus) {
      triggerRef.current?.focus();
    }
  }

  function focusFirstItem() {
    requestAnimationFrame(() => {
      menuRef.current?.querySelector("a")?.focus();
    });
  }

  function handleTriggerKeyDown(event) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setIsOpen(true);
      focusFirstItem();
    }
  }

  useEffect(() => {
    function handlePointerDown(event) {
      if (!containerRef.current?.contains(event.target)) {
        closeMenu();
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape" && isOpen) {
        closeMenu({ restoreFocus: true });
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        className={triggerClassName}
        onClick={() => setIsOpen((current) => !current)}
        onKeyDown={handleTriggerKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls="services-menu"
      >
        <span className="flex items-center gap-1">
          Serviços
          <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
            <ChevronDown size={14} />
          </motion.span>
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            id="services-menu"
            role="menu"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
            transition={{
              duration: shouldReduceMotion ? 0.1 : durations.fast,
              ease: smoothEase,
            }}
            className="absolute left-0 top-full w-80 pt-3"
          >
            <div className="rounded-[20px] border border-black/10 bg-white/90 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/servicos/${service.slug}`}
                  role="menuitem"
                  onClick={() => closeMenu()}
                  className="block rounded-xl px-4 py-3 text-sm text-neutral-700 transition-colors duration-200 hover:bg-surface hover:text-black focus-visible:bg-surface focus-visible:text-black focus-visible:outline-none"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
