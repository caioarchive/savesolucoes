"use client";

import { useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Button from "@/components/ui/Button";

export default function OpeningFormCta() {
  const shouldReduceMotion = useReducedMotion();

  function handleStart() {
    const formContainer = document.getElementById("abrir-empresa-formulario");
    if (!formContainer) return;

    if (window.matchMedia("(min-width: 1024px)").matches) {
      formContainer.querySelector("input:not([type='checkbox'])")?.focus();
      return;
    }

    formContainer.scrollIntoView({
      behavior: shouldReduceMotion ? "instant" : "smooth",
      block: "start",
    });
  }

  return (
    <Button onClick={handleStart} className="w-full sm:w-auto">
      Preencher formulário
      <ArrowRight size={17} aria-hidden="true" />
    </Button>
  );
}
