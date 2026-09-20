import Image from "next/image"
import { Quote } from "lucide-react"

import { Measure } from "@/components/site/frame"
import { Reveal } from "@/components/site/reveal"
import { Horseshoe } from "@/components/site/motifs"

const TRIED = [
  "Pushing through it",
  "Groundwork",
  "“Confidence” clinics",
  "Calming supplements",
  "Quietly stepping back",
  "New tack",
  "Body work",
  "New farrier",
]

export function Knot() {
  return (
    <section className="relative overflow-hidden">
      <Horseshoe
        strokeWidth={0.5}
        className="pointer-events-none absolute -bottom-20 -left-16 hidden size-[28rem] text-teal opacity-[0.05] sm:block"
      />
      <Measure className="py-20 sm:py-28">
        <Reveal className="text-center">
          <p className="pull-quote mx-auto max-w-2xl text-teal-ink">
            This is not therapy. This is not a lesson. This is neuroscience
            working the way your brain actually works.
          </p>
        </Reveal>

        <Reveal className="mt-14 text-center">
          <p className="kicker text-base">If this is you</p>
          <h2 className="headline mx-auto mt-5 max-w-3xl">
            You still love horses. You&rsquo;re struggling to get back in the
            saddle again.
          </h2>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <Reveal className="max-w-xl">
            <p className="lead text-ink-soft">
              You used to feel free when you were riding, but now you freeze
              at the mounting block. Maybe there was a fall, a bolt, or a bad
              scare or maybe the nerves crept in with age.
            </p>

            <div className="mt-9">
              <p className="label text-base text-teal">What you&rsquo;ve tried</p>
              <ul className="mt-4 flex flex-wrap gap-3">
                {TRIED.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-line bg-paper-2 px-5 py-2.5 text-base text-ink-soft"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-base text-ink-soft">
                It manages the fear at best.{" "}
                <span className="font-medium text-ink">
                  It never clears it.
                </span>
              </p>
            </div>
          </Reveal>

          {/* The waiting shot, then the problem in her words. Held-in riders sitting
            still: the only photograph on the page that isn't someone already back
            out there, which is the whole point of this section. */}
          <div className="flex flex-col gap-6">
            <Reveal delay={80}>
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-line/60 sm:rounded-3xl">
                <Image
                  src="/assets/image-16.jpg"
                  alt="Riders halted side by side in the collecting ring, reins gathered, waiting"
                  fill
                  sizes="(min-width: 1024px) 38rem, (min-width: 640px) 90vw, 100vw"
                  quality={70}
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <figure className="relative rounded-3xl border border-line bg-paper-2 p-8 sm:p-10">
                <Quote
                  aria-hidden
                  strokeWidth={1.4}
                  className="absolute top-6 right-7 size-9 text-gold/35"
                />
                <blockquote className="pull-quote relative text-teal-ink">
                  Everyone keeps telling me to just get back on. I try, and my
                  body won&rsquo;t let me. I feel ridiculous being scared of
                  something I used to do without thinking.
                </blockquote>
                <figcaption className="label-xs mt-6 text-ink-soft">
                  The rider Tammy helps
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </Measure>
    </section>
  )
}
