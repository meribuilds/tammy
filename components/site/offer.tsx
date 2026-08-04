import { BookCall } from "@/components/site/cta"
import { FramedSection } from "@/components/site/frame"
import { Reveal } from "@/components/site/reveal"
import { Stirrup } from "@/components/site/motifs"
import { TIERS } from "@/lib/site"

export function Offer() {
  return (
    <FramedSection id="offer" frameClassName="bg-cream">
      <Stirrup
        strokeWidth={0.5}
        className="pointer-events-none absolute -right-20 -bottom-16 hidden size-[30rem] text-gold opacity-[0.06] lg:block"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <Reveal>
          <p className="kicker">Work with Tammy</p>
          <h2 className="mt-5 max-w-2xl text-[clamp(1.9rem,4.4vw,3.1rem)] leading-[1.08] text-balance">
            Three ways in. All private, all tailored.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-ink-soft">
            Her work is premium and built around you, so there&rsquo;s no
            checkout and no public price. The call is where we find the right
            fit.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 100}>
              <article className="group flex h-full flex-col rounded-3xl border border-line bg-paper-2 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_28px_60px_-40px_rgba(18,58,64,0.6)]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.64rem] tracking-[0.16em] text-teal uppercase">
                    {tier.tag}
                  </span>
                  <span className="rounded-full border border-gold/40 px-2.5 py-0.5 font-mono text-[0.58rem] tracking-[0.14em] text-gold uppercase">
                    By quote
                  </span>
                </div>
                <h3 className="mt-5 text-2xl text-teal-ink">{tier.name}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink-soft">
                  {tier.body}
                </p>
                <span className="mt-6 h-px w-10 bg-gold transition-all duration-300 group-hover:w-20" />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <BookCall />
            <p className="text-sm text-ink-soft">
              Not sure which fits? Book a call and we&rsquo;ll map it together.
            </p>
          </div>
        </Reveal>
      </div>
    </FramedSection>
  )
}
