import { Reveal } from "@/components/site/reveal"
import { Horseshoe } from "@/components/site/motifs"

const TRIED = [
  "Pushing through it",
  "Groundwork drills",
  "“Confidence” clinics",
  "Calming supplements",
  "Quietly stepping back",
]

export function Knot() {
  return (
    <section className="relative overflow-hidden">
      <Horseshoe
        strokeWidth={0.5}
        className="pointer-events-none absolute -bottom-20 -left-16 hidden size-[28rem] text-teal opacity-[0.05] sm:block"
      />
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <p className="kicker">If this is you</p>
        <h2 className="mt-5 max-w-3xl text-balance text-[clamp(1.9rem,4.4vw,3.1rem)] leading-[1.08]">
          You still love horses. Your body just won&rsquo;t trust the saddle again.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <Reveal className="max-w-xl">
          <p className="text-lg leading-relaxed text-ink-soft">
            You used to love riding, and now you freeze at the mounting block. Maybe
            there was a fall, a bolt, or a bad scare. Maybe the nerves crept in with
            age. You still love horses. You just can&rsquo;t get your body to trust
            the saddle again.
          </p>

          <div className="mt-9">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-teal">
              What you&rsquo;ve tried
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {TRIED.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-line bg-paper-2 px-3.5 py-1.5 text-sm text-ink-soft"
                >
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-base text-ink-soft">
              It manages the fear at best.{" "}
              <span className="font-medium text-ink">It never clears it.</span>
            </p>
          </div>
        </Reveal>

        {/* Pull-quote — the problem in her words */}
        <Reveal delay={120}>
          <figure className="relative rounded-3xl border border-line bg-paper-2 p-8 sm:p-10">
            <span
              aria-hidden
              className="font-display absolute top-3 left-6 text-7xl leading-none text-gold/35 select-none"
            >
              &ldquo;
            </span>
            <blockquote className="font-display relative text-[clamp(1.35rem,2.6vw,1.9rem)] leading-snug text-teal-ink italic">
              Everyone keeps telling me to just get back on. I try, and my body
              won&rsquo;t let me. I feel ridiculous being scared of something I used
              to do without thinking.
            </blockquote>
            <figcaption className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-soft">
              The rider Tammy helps
            </figcaption>
          </figure>
        </Reveal>
      </div>
      </div>
    </section>
  )
}
