import { Cpu, Handshake, ShieldCheck } from "lucide-react";
import PageHero from "@/components/pages/PageHero";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import FinalCTA from "@/components/sections/FinalCTA";
import { makeMetadata } from "@/lib/metadata";
export const metadata = makeMetadata(
  "Sobre a Save",
  "Conheça o posicionamento e a forma de atuação da Save Soluções.",
  "/sobre",
);
export default function Page() {
  const values = [
    [
      Handshake,
      "Atendimento próximo",
      "Acompanhamento comprometido com a realidade de cada cliente.",
    ],
    [
      ShieldCheck,
      "Organização e segurança",
      "Informações claras e rotinas conduzidas com cuidado.",
    ],
    [
      Cpu,
      "Experiência e tecnologia",
      "Conhecimento tributário aliado a recursos que facilitam o dia a dia.",
    ],
  ];
  return (
    <>
      <PageHero
        eyebrow="Sobre a Save"
        title="Conhecimento contábil e tecnologia a serviço da sua empresa."
        text="A Save Soluções é uma empresa contábil comprometida com seus clientes, formada por profissionais qualificados e experientes nas áreas tributária e tecnológica."
      />
      <section className="section">
        <Container>
          <SectionHeader
            eyebrow="Nossa atuação"
            title="Soluções adequadas à realidade de cada cliente."
            text="A Save busca excelência na prestação dos serviços, organização contábil, acompanhamento próximo e uso de tecnologia."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map(([Icon, title, text]) => (
              <div key={title} className="rounded-3xl border border-border p-7">
                <Icon className="text-primary" />
                <h2 className="mt-10 text-xl font-semibold">{title}</h2>
                <p className="mt-3 leading-7 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
