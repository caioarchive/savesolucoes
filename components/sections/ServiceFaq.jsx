import { Minus, Plus } from "lucide-react";

import Container from "@/components/layout/Container";

export default function ServiceFaq({ eyebrow, title, intro, faqs }) {
  return (
    <section
      aria-labelledby="service-faq-title"
      className="border-t border-border bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container className="grid min-w-0 gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-20">
        <div className="max-w-md lg:sticky lg:top-32 lg:h-fit">
          <p className="text-xs font-semibold tracking-[0.16em] text-neutral-600">
            {eyebrow}
          </p>
          <h2
            id="service-faq-title"
            className="mt-6 max-w-[18ch] text-balance text-3xl leading-tight tracking-[-0.035em] text-neutral-950 sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-5 max-w-sm text-base leading-7 text-neutral-700">
            {intro}
          </p>
        </div>

        <div className="min-w-0 border-t border-border">
          {faqs.map(({ question, answer }, index) => (
            <details
              key={question}
              open={index === 0}
              className="group border-b border-border"
            >
              <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-5 py-5 text-left focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 [&::-webkit-details-marker]:hidden">
                <span className="min-w-0 text-base font-medium leading-7 tracking-[-0.02em] text-neutral-950 sm:text-lg">
                  {question}
                </span>
                <span
                  className="flex size-8 shrink-0 items-center justify-center text-neutral-600"
                  aria-hidden="true"
                >
                  <Plus
                    size={18}
                    strokeWidth={1.5}
                    className="group-open:hidden"
                  />
                  <Minus
                    size={18}
                    strokeWidth={1.5}
                    className="hidden group-open:block"
                  />
                </span>
              </summary>
              <p className="max-w-[65ch] pb-7 pr-12 text-base leading-7 text-neutral-700">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
