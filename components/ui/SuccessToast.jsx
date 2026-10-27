"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

export default function SuccessToast({ open, onClose }) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return undefined;

    const timer = window.setTimeout(onClose, 5_000);
    return () => window.clearTimeout(timer);
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.18,
            ease: "easeOut",
          }}
          className="fixed left-4 right-4 top-[calc(6rem+env(safe-area-inset-top))] z-[80] flex items-start gap-3 rounded-2xl bg-black p-4 text-white shadow-[0_12px_32px_rgba(0,0,0,0.2)] sm:left-auto sm:right-6 sm:w-[min(24rem,calc(100vw-3rem))]"
        >
          <CheckCircle2
            size={20}
            className="mt-0.5 shrink-0"
            aria-hidden="true"
          />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold">Informações enviadas</p>
            <p className="mt-1 text-sm leading-5 text-neutral-200">
              Recebemos seus dados. A equipe da Save entrará em contato.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar notificação"
            className="-m-2 grid h-11 w-11 shrink-0 place-items-center rounded-full text-neutral-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
