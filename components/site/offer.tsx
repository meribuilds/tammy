import { BookCall } from "@/components/site/cta"
import { FramedSection, Measure } from "@/components/site/frame"
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
      <Measure className="relative py-20 sm:py-28">
        <Reveal className="text-center">
          <p className="kicker">Work with Tammy</p>
          <h2 className="headline mx-auto mt-5 max-w-2xl">
            Three ways in. All private, all tailored.
          </h2>
          <p className="lead mx-auto mt-5 max-w-xl text-ink-soft">
            Her work is premium and built around you, so there&rsquo;s no
            checkout and no public price. The call is where we find the right
            fit.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 100}>
              <article className="group flex h-full flex-col rounded-3xl border border-line bg-paper-2 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_28px_60px_-40px_rgba(18,58,64,0.6)]">
                <div className="flex items-center justify-between gap-3">
                  <span className="label-xs text-teal">{tier.tag}</span>
                  {/* was 0.58rem in --gold, which is 2.9:1 on this cream — the
                      smallest type on the page in the lowest-contrast colour */}
                  <span className="label-xs rounded-full border border-gold/40 bg-gold/[0.07] px-2.5 py-0.5 text-gold-ink">
                    By quote
                  </span>
                </div>
                <h3 className="card-title mt-5 text-teal-ink">{tier.name}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink-soft">
                  {tier.body}
                </p>
                <span className="mt-6 h-px w-10 bg-gold transition-all duration-300 group-hover:w-20" />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-center">
            <BookCall />
            <p className="text-sm text-ink-soft">
              Not sure which fits? Book a call and we&rsquo;ll map it together.
            </p>
          </div>
        </Reveal>
      </Measure>
    </FramedSection>
  )
}
