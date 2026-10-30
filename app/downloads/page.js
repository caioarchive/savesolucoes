import Link from "next/link";
import { Download } from "lucide-react";
import Container from "@/components/layout/Container";
import { downloads } from "@/data/downloads";
import { makeMetadata } from "@/lib/metadata";

export const metadata = makeMetadata(
  "Downloads",
  "Consulte a disponibilidade dos modelos trabalhistas da Save.",
  "/downloads",
);

export default function DownloadsPage() {
  const available = downloads.some((item) => item.file);
  return (
    <>
      <section className="border-b border-border bg-white pb-16 pt-32 sm:pb-20 lg:pt-40">
        <Container>
          <h1 className="max-w-4xl text-balance text-4xl leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
            Modelos trabalhistas
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
            {available
              ? "Consulte os modelos disponíveis para download."
              : "Os arquivos ainda não estão disponíveis para download. Você pode consultar os modelos previstos abaixo."}
          </p>
        </Container>
      </section>
      <section
        aria-label="Modelos para download"
        className="bg-surface py-14 sm:py-20"
      >
        <Container>
          <ul className="max-w-4xl border-t border-border-strong">
            {downloads.map((item) => (
              <li
                key={item.id}
                className="flex flex-col items-start gap-3 border-b border-border-strong py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-7"
              >
                <h2 className="text-lg leading-7 text-foreground sm:text-xl">
                  {item.title}
                </h2>
                {item.file ? (
                  <a
                    href={item.file}
                    download
                    className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-medium text-foreground underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-neutral-950 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 motion-reduce:transition-none"
                  >
                    <Download size={17} aria-hidden="true" />
                    Baixar arquivo
                    <span className="sr-only">: {item.title}</span>
                  </a>
                ) : (
                  <span className="shrink-0 text-sm text-neutral-600">
                    Ainda não disponível
                  </span>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-2xl text-base leading-7 text-neutral-600">
            Precisa de um desses modelos?{" "}
            <Link
              href="/contato"
              className="font-medium text-foreground underline underline-offset-4 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
            >
              Fale com a equipe da Save
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
