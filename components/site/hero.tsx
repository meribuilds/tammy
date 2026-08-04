import Image from "next/image"

import { BookCall, TailoredQuote } from "@/components/site/cta"
import { Frame } from "@/components/site/frame"
import { Reveal } from "@/components/site/reveal"

/**
 * Hero — a single inset image frame that carries the whole section.
 * The photograph (horse eye ↔ rider eye) is the argument the copy makes, so it
 * runs full-width inside a margin, corners rounded like the nav island, with the
 * copy laid over a teal scrim rather than beside it.
 */
export function Hero() {
  return (
    <section id="top" className="px-3 pt-20 pb-6 sm:px-6 sm:pt-24 sm:pb-8">
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

        {/* Scrim — stacks up from the bottom on mobile, in from the left on
            desktop, so the copy always sits on the quiet side of the frame. */}
        <div
          aria-hidden
          className="absolute inset-0 z-0 bg-gradient-to-t from-teal-ink/94 via-teal-ink/62 to-teal-ink/20 sm:bg-gradient-to-r sm:from-teal-ink/92 sm:via-teal-ink/55 sm:to-teal-ink/10"
        />

        {/* Copy */}
        {/* the frame fills the viewport it opens in: everything the nav and the
            page margins take is subtracted, so nothing dead sits below it */}
        <div className="relative z-10 flex min-h-[clamp(32rem,calc(100svh-8rem),62rem)] flex-col justify-end px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
          <div className="max-w-3xl">
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
              <p className="mt-5 max-w-md text-lg leading-relaxed text-paper/85 sm:mt-6">
                Clear the fear where it lives, so you ride from calm, not force.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5">
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
        </div>
      </Frame>
    </section>
  )
}
