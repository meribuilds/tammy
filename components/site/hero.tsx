import Image from "next/image"

import { BookCall, FreeGuide } from "@/components/site/cta"
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
                <p className="kicker text-coral-soft">Neuro Reset method</p>
              </Reveal>

              <Reveal delay={90}>
                {/* the 6vw floor never bit until 613px, so every phone got the
                    same oversized 2.3rem block — .display leans on vw sooner */}
                <h1 className="display mt-5 text-paper-2 sm:mt-6">
                  You&rsquo;re not a nervous rider.{" "}
                  <span className="text-coral-soft">
                    Your brain is replaying a memory.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={180}>
                <p className="lead mx-auto mt-5 max-w-lg text-paper/90 sm:mt-6">
                  Clear the fear where it lives so you can ride calmly.
                </p>
              </Reveal>

              <Reveal delay={260}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3.5">
                  <BookCall className="w-full justify-center sm:w-auto" />
                  <FreeGuide className="w-full justify-center border-paper/40 bg-paper/10 text-paper backdrop-blur-sm hover:border-paper/80 hover:bg-paper/20 sm:w-auto" />
                </div>
              </Reveal>

              <Reveal delay={340}>
                {/* was hidden below 640px, which dropped the page's only trust
                    signal on the devices most of this traffic arrives on */}
                <p className="label mt-8 text-paper/80">
                  Science-backed<span className="text-coral-soft"> · </span>
                  Soul-driven
                  <span className="text-coral-soft"> · </span>Results-focused
                </p>
              </Reveal>
            </div>
          </Measure>
        </div>
      </Frame>
    </section>
  )
}
