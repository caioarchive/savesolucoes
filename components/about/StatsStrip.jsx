import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";

import FadeUp from "@/components/motion/FadeUp";

/**
 * @typedef {Object} Stat
 * @property {string} index
 * @property {string} value
 * @property {string} label
 */

/**
 * @typedef {Object} Reviews
 * @property {string} eyebrow
 * @property {string} title
 * @property {string} description
 * @property {string} rating
 * @property {string} socialProof
 * @property {string} linkLabel
 * @property {string} avatarSrc
 * @property {string} href
 */

/**
 * @param {{ items: Stat[], reviews: Reviews, className?: string }} props
 */
export default function StatsStrip({ items, reviews, className = "" }) {
  const dividerClasses = [
    "border-b min-[360px]:border-r",
    "border-b",
    "max-[359px]:border-b min-[360px]:border-r",
    "",
  ];

  return (
    <FadeUp
      className={`overflow-hidden rounded-[24px] border border-border-strong bg-neutral-50 ${className}`}
    >
      <div className="grid md:grid-cols-[minmax(14rem,0.9fr)_minmax(0,1.5fr)]">
        <article className="flex min-h-[440px] flex-col border-b border-border-strong bg-neutral-950 p-6 text-white md:border-b-0 md:border-r lg:p-8">
          <p className="max-w-[18rem] text-xs font-medium uppercase leading-5 tracking-[0.12em] text-white/60">
            {reviews.eyebrow}
          </p>
          <h3 className="mt-5 max-w-sm text-2xl font-medium leading-tight tracking-[-0.025em] lg:text-3xl">
            {reviews.title}
          </h3>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
            {reviews.description}
          </p>

          <div className="mt-auto pt-10">
            <div className="flex -space-x-2" aria-hidden="true">
              {Array.from({ length: 3 }, (_, index) => (
                <span
                  key={index}
                  className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border-2 border-neutral-950 bg-neutral-700"
                >
                  <Image
                    src={reviews.avatarSrc}
                    alt=""
                    width={96}
                    height={36}
                    aria-hidden="true"
                    className="absolute top-1/2 h-9 w-24 max-w-none -translate-y-1/2 object-cover"
                    style={{ left: `-${index * 32}px` }}
                  />
                </span>
              ))}
            </div>
            <div
              className="mt-5 flex items-center gap-1"
              role="img"
              aria-label="5 de 5 estrelas"
            >
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  size={18}
                  fill="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="mt-4 text-lg font-medium text-white">
              {reviews.rating}
            </p>
            <p className="mt-1 text-sm text-white/60">{reviews.socialProof}</p>
            <a
              className="mt-5 inline-flex w-fit items-center gap-2 border-b border-white/30 pb-1 text-sm font-medium text-white transition-colors duration-200 hover:border-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
              href={reviews.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${reviews.linkLabel} no Google Maps (abre em nova aba)`}
            >
              {reviews.linkLabel}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </article>

        <dl className="grid grid-cols-1 min-[360px]:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={item.label}
              className={`flex min-h-44 flex-col border-border bg-neutral-50 p-5 transition-colors duration-200 hover:bg-white/70 motion-reduce:transition-none sm:min-h-52 sm:p-6 lg:min-h-56 lg:p-8 ${dividerClasses[index]}`}
            >
              <dt className="order-2 mt-auto max-w-[12rem] pt-8 text-sm font-medium leading-5 text-neutral-600">
                {item.label}
              </dt>
              <dd className="order-1 flex items-start justify-between gap-4">
                <span className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-none tracking-[-0.055em] text-neutral-950">
                  {item.value}
                </span>
                <span className="pt-1 text-xs font-semibold tracking-[0.12em] text-neutral-700">
                  {item.index}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </FadeUp>
  );
}
