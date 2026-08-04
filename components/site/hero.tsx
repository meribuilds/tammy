import Image from "next/image"

import { BookCall, TailoredQuote } from "@/components/site/cta"
import { Frame, Measure } from "@/components/site/frame"
import { Reveal } from "@/components/site/reveal"

/**
 * Hero — a single full-bleed image that carries the whole section.
 * The photograph (horse eye ↔ rider eye) is the argument the copy makes, so it
 * runs edge to edge and full height, square-cornered, with the copy laid over a
 * teal scrim rather than beside it. The rest of the page keeps the inset frame;
 * the hero is the one panel that breaks it.
 */
export function Hero() {
  return (
    <section id="top">
      <Frame>
        {/* Photograph — oversized on the vertical so the parallax drift never
            exposes an edge of the frame. */}
        <div className="absolute inset-x-0 -inset-y-10 z-0" data-parallax>
          <Image
            src="/assets/hero-image.jpeg"
            alt="Close-up of a horse's eye beside a rider's eye, meeting the same light"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[64%_center] sm:object-center"
          />
        </div>

        {/* Scrim — the copy sits in the middle of the frame now, so the wash
            covers the whole image instead of banking to one side: an even veil
            for the type, deepened top and bottom so the nav pill and the seam
            with the next section both keep their edge. */}
        <div aria-hidden className="absolute inset-0 z-0 bg-teal-ink/45" />
        <div
          aria-hidden
          className="absolute inset-0 z-0 bg-gradient-to-b from-teal-ink/55 via-transparent to-teal-ink/70"
        />

        {/* Copy */}
        {/* the frame is the viewport it opens in — nothing is subtracted now
            that the margins are gone, and the block is centred on both axes */}
        <div className="relative z-10 flex min-h-svh flex-col justify-center py-24 sm:py-28">
          <Measure>
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <p className="kicker text-gold-soft">Neuro Reset method</p>
              </Reveal>

              <Reveal delay={90}>
                <h1 className="mt-5 text-[clamp(2.3rem,6vw,4.6rem)] leading-[1.02] text-balance text-paper-2 sm:mt-6">
                  You&rsquo;re not a nervous rider.{" "}
                  <span className="text-gold-soft">
                    Your brain is guarding a memory.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={180}>
                <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-paper/85 sm:mt-6">
                  Clear the fear where it lives, so you ride from calm, not
                  force.
                </p>
              </Reveal>

              <Reveal delay={260}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3.5">
                  <BookCall className="w-full justify-center sm:w-auto" />
                  <TailoredQuote className="w-full justify-center border-paper/40 bg-paper/10 text-paper backdrop-blur-sm hover:border-paper/80 hover:bg-paper/20 sm:w-auto" />
                </div>
              </Reveal>

              <Reveal delay={340}>
                <p className="mt-8 hidden font-mono text-[0.72rem] tracking-[0.16em] text-paper/70 uppercase sm:block">
                  Science-backed<span className="text-gold-soft"> · </span>
                  Soul-driven
                  <span className="text-gold-soft"> · </span>Results-focused
                </p>
              </Reveal>
            </div>
          </Measure>
        </div>
      </Frame>
    </section>
  )
}
