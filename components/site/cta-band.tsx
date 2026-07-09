import { BookCall, TailoredQuote } from "@/components/site/cta"
import { Reveal } from "@/components/site/reveal"
import { Horseshoe } from "@/components/site/motifs"

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-teal-ink text-cream">
      {/* gold halo above, cool glow below — composed, not blotchy */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(44rem 26rem at 50% -12%, color-mix(in oklab, var(--gold) 26%, transparent), transparent 60%), radial-gradient(40rem 30rem at 100% 118%, color-mix(in oklab, var(--teal-lt) 30%, transparent), transparent 62%)",
        }}
      />
      {/* ghost motif for depth */}
      <Horseshoe
        aria-hidden
        strokeWidth={0.5}
        className="pointer-events-none absolute top-1/2 left-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 text-cream opacity-[0.04]"
      />
      {/* gold hairline caps the section off from the paper above */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent"
      />

      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <p className="kicker text-gold-soft">Your next ride starts here</p>



          <p className="script mt-7 text-[clamp(2.2rem,6vw,3.8rem)] leading-[1.03] text-cream italic">
            Let&rsquo;s build your <span className="text-gold-soft">brave</span>.
          </p>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream/80">
            Book a call and we&rsquo;ll map the memory that&rsquo;s keeping you out
            of the saddle &mdash; and the path back in.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-3.5">
            <BookCall className="w-full justify-center sm:w-auto" />
            <TailoredQuote className="w-full justify-center border-cream/30 bg-teal text-cream hover:border-cream hover:bg-teal-lt sm:w-auto" />
          </div>

          <p className="mt-8 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-cream/55">
            Private<span className="text-gold-soft"> · </span>By quote
            <span className="text-gold-soft"> · </span>No pressure
          </p>
        </Reveal>
      </div>
    </section>
  )
}
