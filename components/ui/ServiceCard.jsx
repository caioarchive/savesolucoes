import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

const cardClasses = [
  "group flex min-h-80 flex-col",
  "rounded-[22px] border border-border bg-white p-8",
  "transition duration-300 hover:-translate-y-1 hover:scale-[1.01]",
  "hover:border-border-strong hover:shadow-[0_18px_55px_rgba(0,0,0,0.05)]",
].join(" ");

export default function ServiceCard({ service, index }) {
  return (
    <Link
      href={`/servicos/${service.slug}`}
      data-cursor="Ver serviço"
      className={cardClasses}
    >
      <span className="text-sm font-medium text-muted">0{index + 1}</span>

      <h3 className="mt-10 text-2xl tracking-[-0.025em]">{service.title}</h3>

      <p className="mt-3 leading-7 text-muted">{service.short}</p>

      <span className="mt-auto flex items-center gap-2 pt-9 text-sm font-medium text-foreground">
        Conhecer serviço
        <ArrowUpRight
          size={17}
          className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
