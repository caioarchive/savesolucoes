import { Check, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import PageHero from "./PageHero";
import FinalCTA from "@/components/sections/FinalCTA";
export default function ServiceDetail({ service }) {
  return (
    <>
      <PageHero
        eyebrow="Serviços Save"
        title={service.title}
        text={service.short}
      />
      <section className="section">
        <Container className="grid gap-12 lg:grid-cols-[1fr_.42fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              O que este serviço contempla
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.items.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-border p-4"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/8 text-primary">
                    <Check size={14} />
                  </span>
                  <span className="leading-6">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <aside className="h-fit rounded-3xl bg-surface p-7">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Converse com a Save
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Encontre uma solução adequada à sua empresa.
            </h3>
            <p className="mt-3 leading-7 text-muted">
              Nossa equipe está pronta para entender o seu momento e orientar os
              próximos passos.
            </p>
            <Button href="/contato" className="mt-6 w-full">
              Enviar uma mensagem
            </Button>
            <Button href="/servicos" variant="ghost" className="mt-2 w-full">
              <ArrowLeft size={16} /> Todos os serviços
            </Button>
          </aside>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
