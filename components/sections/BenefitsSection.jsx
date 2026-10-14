import Container from "@/components/layout/Container";
import ClipReveal from "@/components/motion/ClipReveal";
import SectionHeader from "@/components/ui/SectionHeader";

import { benefits } from "@/data/benefits";
import styles from "./BenefitsSection.module.css";

function BenefitCards({ hidden = false }) {
  return (
    <ul
      className={`${styles.set} m-0 flex shrink-0 list-none gap-4 p-0 pr-4 ${hidden ? styles.duplicate : ""}`}
      aria-hidden={hidden || undefined}
    >
      {benefits.map(({ title, description, icon: Icon }, index) => (
        <li key={title} className={`${styles.item} shrink-0`}>
          <article className="benefit-card flex h-[16.5rem] w-[17.5rem] cursor-default flex-col rounded-[24px] border border-border bg-white p-6 lg:w-80">
            <div className="flex items-start justify-between gap-6">
              <span
                className="grid size-11 shrink-0 place-items-center rounded-[12px] bg-surface-secondary text-brand-green"
                aria-hidden="true"
              >
                <Icon size={22} strokeWidth={1.6} />
              </span>

              <span
                className="text-xs font-medium tabular-nums tracking-[0.08em] text-muted"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="mt-auto pt-8">
              <h3 className="text-lg font-medium leading-6 tracking-[-0.015em] text-foreground">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default function BenefitsSection() {
  return (
    <ClipReveal>
      <section className="bg-surface pb-20 pt-10 text-foreground sm:pb-32 sm:pt-16">
        <Container>
          <SectionHeader
            eyebrow="Presença no dia a dia"
            title="Estrutura para cuidar das rotinas e apoiar sua gestão."
          />

          <div
            className={`${styles.shell} mt-16 rounded-[24px]`}
            data-benefits-shell
          >
            <div
              className={`${styles.viewport} overflow-hidden focus:outline-none`}
              tabIndex={0}
              aria-label="Serviços presentes no dia a dia da empresa"
              data-benefits-viewport
            >
              <div className={`${styles.track} flex w-max`} data-benefits-track>
                <BenefitCards />
                <BenefitCards hidden />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </ClipReveal>
  );
}
