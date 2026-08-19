import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";

import { segments } from "@/data/segments";

const cardClasses = [
  "group flex min-h-40 flex-col justify-between",
  "rounded-[20px] border border-border bg-white p-6",
  "transition duration-300 hover:-translate-y-1 hover:scale-[1.01]",
  "hover:border-border-strong hover:shadow-[0_14px_40px_rgba(0,0,0,0.05)]",
].join(" ");

export default function SegmentsSection() {
  return (
    <section className="section bg-white">
      <Container>
        <SectionHeader
          eyebrow="Segmentos"
          title="Experiência para atender diferentes atividades empresariais."
          text="A Save adapta o acompanhamento contábil, fiscal e trabalhista às particularidades de cada atividade."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment, index) => (
            <Link
              href={`/segmentos/${segment.slug}`}
              key={segment.slug}
              data-cursor="Explorar"
              className={cardClasses}
            >
              <span className="text-xs text-muted transition-transform duration-200 group-hover:translate-x-1">
                0{index + 1}
              </span>

              <span className="flex items-end justify-between gap-4 font-medium">
                {segment.title}
                <ArrowUpRight
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  size={18}
                />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
