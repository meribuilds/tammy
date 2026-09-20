"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

import { FramedSection, Measure } from "@/components/site/frame"
import { Reveal } from "@/components/site/reveal"
import { cn } from "@/lib/utils"
import { REVIEWS } from "@/lib/site"

/**
 * Social proof, right before the closing ask — one review at a time, riders
 * in their own words, mid-method, not polished testimonial copy.
 *
 * Client component for the prev/next + dot state. The swapped card content
 * is deliberately NOT wrapped in <Reveal>: GsapProvider scans [data-animate]
 * once on mount and hides unscanned ones forever via `.js [data-animate]
 * { opacity: 0 }` — a card mounted fresh on click would never get revealed.
 * Only the section-level intro/carousel-shell reveals scroll-in once.
 */
export function Reviews() {
  const [index, setIndex] = useState(0)
  const review = REVIEWS[index]
  const go = (delta: number) =>
    setIndex((i) => (i + delta + REVIEWS.length) % REVIEWS.length)

  return (
    <FramedSection frameClassName="bg-cream">
      <Measure className="py-20 sm:py-28">
        <Reveal className="text-center">
          <p className="kicker">Reviews</p>
          <h2 className="headline mx-auto mt-5 max-w-2xl">
            Riders, in their own words.
          </h2>
        </Reveal>

        <Reveal className="mt-14 flex items-center justify-center gap-3 sm:gap-6">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous review"
            className="hidden size-11 shrink-0 items-center justify-center rounded-full border border-line text-teal-ink transition-colors hover:border-teal hover:bg-teal/5 sm:flex"
          >
            <ChevronLeft className="size-5" />
          </button>

          <figure className="relative w-full max-w-2xl rounded-3xl border border-line bg-paper-2 p-8 sm:p-10">
            <Quote
              aria-hidden
              strokeWidth={1.4}
              className="size-8 text-gold/35"
            />
            <blockquote className="relative mt-4 text-lg leading-relaxed text-teal-ink sm:text-xl">
              {review.quote}
            </blockquote>

            <div className="mt-5 flex gap-1 text-gold" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3 border-t border-line pt-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-teal-ink text-sm font-semibold text-gold-soft">
                {review.author.charAt(0)}
              </span>
              <div>
                <p className="font-medium text-teal-ink">{review.author}</p>
                <p className="text-sm text-ink-soft">Rider</p>
              </div>
            </div>
          </figure>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next review"
            className="hidden size-11 shrink-0 items-center justify-center rounded-full border border-line text-teal-ink transition-colors hover:border-teal hover:bg-teal/5 sm:flex"
          >
            <ChevronRight className="size-5" />
          </button>
        </Reveal>

        <div className="mt-8 flex items-center justify-center gap-2">
          {REVIEWS.map((r, i) => (
            <button
              key={r.author}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show review ${i + 1} of ${REVIEWS.length}`}
              aria-current={i === index}
              className={cn(
                "h-2 rounded-full transition-all",
                i === index ? "w-6 bg-teal-ink" : "w-2 bg-line"
              )}
            />
          ))}
        </div>
      </Measure>
    </FramedSection>
  )
}
