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
          <ul className="grid gap-6 lg:grid-cols-2">
            {downloads.map((item, index) => (
              <li
                key={item.id}
                className="rounded-[28px] border border-border-strong bg-white p-7 shadow-[0_8px_30px_rgba(20,20,20,0.035)] sm:p-9"
              >
                <span className="text-xs font-medium tracking-[0.16em] text-neutral-500">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(downloads.length).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-xl leading-7 tracking-[-0.02em] text-foreground sm:text-2xl sm:leading-8">
                  {item.title}
                </h2>
                {item.file ? (
                  <a
                    href={item.file}
                    download
                    className="mt-7 flex min-h-14 items-center justify-between gap-4 rounded-xl border border-border bg-surface px-5 py-3 text-base font-medium text-foreground transition-[border-color,background-color] duration-200 hover:border-neutral-400 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 motion-reduce:transition-none"
                  >
                    Baixar arquivo
                    <span className="sr-only">: {item.title}</span>
                    <Download size={17} aria-hidden="true" />
                  </a>
                ) : (
                  <span className="mt-7 flex min-h-14 items-center rounded-xl border border-dashed border-border-strong px-5 py-3 text-base text-neutral-600">
                    Ainda não disponível
                  </span>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base leading-7 text-neutral-600">
            Estes modelos vieram do acervo do site anterior. Confira se o texto
            está adequado ao seu caso antes de utilizar.
          </p>
          <p className="mt-10 text-base leading-7 text-neutral-600">
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
