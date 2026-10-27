"use client";

import { useCallback, useState } from "react";

import { LoaderCircle } from "lucide-react";

import Button from "@/components/ui/Button";
import FormField from "@/components/ui/FormField";
import SuccessToast from "@/components/ui/SuccessToast";

const fields = {
  contato: [
    { name: "nome", label: "Nome", required: true },
    { name: "telefone", label: "Telefone", required: true },
    { name: "email", label: "E-mail", type: "email", required: true },
    { name: "assunto", label: "Assunto", required: true },
  ],
  "abrir-empresa": [
    { name: "nome", label: "Nome completo", required: true },
    { name: "email", label: "E-mail", type: "email", required: true },
    { name: "telefone", label: "Telefone", required: true },
    { name: "celular", label: "Celular", required: true },
    { name: "estado", label: "Estado", required: true },
    { name: "cidade", label: "Cidade", required: true },
  ],
  "migrar-contabilidade": [
    { name: "razaoSocial", label: "Razão social", required: true },
    { name: "cnpj", label: "CNPJ", required: true },
    { name: "tipoEmpresa", label: "Tipo de empresa", required: true },
    { name: "telefone", label: "Telefone", required: true },
    { name: "email", label: "E-mail", type: "email", required: true },
  ],
};

const companySegments = [
  "Prestação de serviços",
  "Prestação de serviços e comércio",
  "Comércio",
  "Comércio e indústria",
  "Indústria",
];

export default function LeadForm({
  type = "contato",
  variant = "default",
  title,
  description,
  initialSubject,
}) {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const isSidebar = variant === "sidebar";
  const isLoading = status === "loading";
  const closeToast = useCallback(() => setStatus("idle"), []);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = Object.fromEntries(new FormData(form));

    for (const key of ["telefone", "celular", "cnpj"]) {
      if (formData[key]) {
        formData[key] = formData[key].replace(/\D/g, "");
      }
    }

    try {
      const response = await fetch(`/api/${type}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.message ||
            "Não foi possível enviar suas informações. Tente novamente.",
        );
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Não foi possível enviar. Tente novamente.");
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        aria-busy={isLoading}
        className={
          isSidebar
            ? "rounded-[22px] border border-border bg-white p-5 shadow-[0_18px_55px_rgba(0,0,0,0.04)] sm:p-6"
            : "rounded-[22px] border border-border bg-white p-6 shadow-[0_18px_55px_rgba(0,0,0,0.04)] sm:p-8"
        }
      >
        {isSidebar && (title || description) ? (
          <div className="mb-4">
            {title ? (
              <h2 className="text-xl tracking-[-0.025em] text-foreground">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-2 text-sm leading-6 text-neutral-700">
                {description}
              </p>
            ) : null}
          </div>
        ) : null}
        <div
          className={
            isSidebar
              ? "grid gap-4 xl:grid-cols-2"
              : "grid gap-5 sm:grid-cols-2"
          }
        >
          {fields[type].map((field) => (
            <FormField
              key={field.name}
              {...field}
              {...(isSidebar && field.name === "assunto" && initialSubject
                ? { defaultValue: initialSubject }
                : {})}
            />
          ))}

          {type === "abrir-empresa" && (
            <label className="block text-sm font-medium sm:col-span-2">
              Segmento da empresa *
              <select
                name="segmento"
                required
                className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3.5 outline-none focus:border-border-strong focus:ring-4 focus:ring-neutral-100"
              >
                <option value="">Selecione</option>
                {companySegments.map((segment) => (
                  <option key={segment}>{segment}</option>
                ))}
              </select>
            </label>
          )}

          <div className={isSidebar ? "xl:col-span-2" : "sm:col-span-2"}>
            <FormField label="Mensagem" name="mensagem" required multiline />
          </div>

          <label
            className={`flex items-start gap-3 text-sm leading-6 text-muted ${isSidebar ? "xl:col-span-2" : "sm:col-span-2"}`}
          >
            <input
              name="autorizacao"
              value="sim"
              type="checkbox"
              required
              className="mt-1 h-4 w-4 accent-black"
            />
            {type === "contato"
              ? "Autorizo o uso dos dados informados para que a Save entre em contato comigo."
              : "Autorizo o tratamento dos dados informados para que a Save entre em contato comigo."}
          </label>
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className={isSidebar ? "mt-4 w-full" : "mt-7 w-full sm:w-auto"}
        >
          {isLoading && <LoaderCircle className="animate-spin" size={18} />}
          {isLoading ? "Enviando..." : "Enviar informações"}
        </Button>

        {status === "error" && message && (
          <p
            role="alert"
            className="mt-5 flex items-center gap-2 rounded-xl bg-surface p-4 text-sm text-foreground"
          >
            {message}
          </p>
        )}
      </form>
      <SuccessToast open={status === "success"} onClose={closeToast} />
    </>
  );
}
