import { BookCall, TailoredQuote } from "@/components/site/cta"
import { PhotoSlot } from "@/components/site/photo-slot"
import { Reveal } from "@/components/site/reveal"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Copy */}
        <div className="max-w-2xl">
          <Reveal>
            <p className="kicker">Confidence coaching for riders · Neuro Reset method</p>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-6 text-balance text-[clamp(2.4rem,6.4vw,4.4rem)] leading-[1.02]">
              You&rsquo;re not a nervous rider.{" "}
              <span className="italic text-teal">Your brain is protecting you</span>{" "}
              from a memory.
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Get back in the saddle without white-knuckling it. Neuro Reset uses
              memory reconsolidation to unlink the fear and relink trust, so you
              ride from calm, not force.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <BookCall />
              <TailoredQuote />
            </div>
          </Reveal>

          <Reveal delay={340}>
            <p className="mt-8 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-soft">
              Science-backed<span className="text-gold"> · </span>Soul-driven
              <span className="text-gold"> · </span>Results-focused
            </p>
          </Reveal>
        </div>

        {/* Portrait */}
        <Reveal delay={200} className="relative">
          <div className="relative" data-float>
            <PhotoSlot
              label="Tammy with a horse, warm natural light, calm & grounded"
              ratio="4 / 5"
              className="w-full"
            />
            {/* signature tag overlapping the frame */}
            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-line bg-paper-2/95 px-5 py-3 shadow-[0_18px_40px_-24px_rgba(18,58,64,0.55)] backdrop-blur">
              <p className="script text-xl text-teal-ink">Tammy Magnuson</p>
              <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-soft">
                Glenwood City, WI
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* hairline close */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="h-px w-full bg-line" />
      </div>
    </section>
  )
}
