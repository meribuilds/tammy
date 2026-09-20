import { Quote } from "lucide-react"

import { FramedSection, Measure } from "@/components/site/frame"
import { Reveal } from "@/components/site/reveal"
import { REVIEWS } from "@/lib/site"

/**
 * Social proof, right before the closing ask — riders in their own words,
 * mid-method, not polished testimonial copy.
 */
export function Reviews() {
  return (
    <FramedSection frameClassName="bg-cream">
      <Measure className="py-20 sm:py-28">
        <Reveal className="text-center">
          <p className="kicker">Reviews</p>
          <h2 className="headline mx-auto mt-5 max-w-2xl">
            Riders, in their own words.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.author} delay={i * 100} className="w-full max-w-xl">
              <figure className="relative h-full rounded-3xl border border-line bg-paper-2 p-8 sm:p-10">
                <Quote
                  aria-hidden
                  strokeWidth={1.4}
                  className="absolute top-6 right-7 size-9 text-gold/35"
                />
                <blockquote className="pull-quote relative text-teal-ink">
                  {r.quote}
                </blockquote>
                <figcaption className="label-xs mt-6 text-ink-soft">
                  {r.author}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Measure>
    </FramedSection>
  )
}
