import { BookCall, TailoredQuote } from "@/components/site/cta"
import { Reveal } from "@/components/site/reveal"

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-teal text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(40rem 30rem at 100% 0%, color-mix(in oklab, var(--gold) 34%, transparent), transparent 58%), radial-gradient(36rem 28rem at -6% 100%, color-mix(in oklab, var(--teal-ink) 70%, transparent), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <p className="script text-[clamp(2rem,5.5vw,3.6rem)] leading-[1.05] text-gold-soft">
            Let&rsquo;s build your brave.
          </p>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream/85">
            Book a call and we&rsquo;ll map the memory that&rsquo;s keeping you out of
            the saddle, and the path back in.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
            <BookCall />
            <TailoredQuote className="border-cream/30 text-cream hover:border-cream hover:bg-cream/10" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
