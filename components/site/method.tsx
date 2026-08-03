import { Reveal } from "@/components/site/reveal"
import { Bit, Neuron, ReinSynapse } from "@/components/site/motifs"
import { CHAIN } from "@/lib/site"

const BEAT_MOTIFS = [Neuron, Bit, ReinSynapse]

const BEATS = [
  {
    k: "You're not broken",
    t: "It isn't a nerve problem. The fear is a specific memory your brain linked to danger, and it's been honoring that link, below your awareness, ever since.",
  },
  {
    k: "Why willpower loses",
    t: "Exposure, pep talks, and gritting through don't reach the level where the memory lives. That's why the fear keeps winning even when you know the horse is safe.",
  },
  {
    k: "The Neuro Reset shift",
    t: "Memory reconsolidation unlinks the fear response and relinks calm and trust in the saddle. Not managed. Cleared.",
  },
]

export function Method() {
  return (
    <section id="method" className="relative overflow-hidden bg-teal-ink text-cream">
      {/* watercolor atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(38rem 30rem at 82% 0%, color-mix(in oklab, var(--teal-lt) 40%, transparent), transparent 60%), radial-gradient(34rem 26rem at 4% 96%, color-mix(in oklab, var(--gold) 26%, transparent), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <Reveal>
          <p className="kicker text-gold">The method</p>
          <h2 className="mt-5 max-w-3xl text-balance text-[clamp(2rem,4.6vw,3.2rem)] leading-[1.06] text-cream">
            Right effort. <span className="text-gold-soft">Wrong direction.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/75">
            Pushing through fear never clears it. We work at the level where the
            memory actually lives, and rewire it at the source.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {BEATS.map((b, i) => {
            const Motif = BEAT_MOTIFS[i]
            const isSignature = i === BEATS.length - 1
            return (
              <Reveal key={b.k} delay={i * 100}>
                <div className="h-full rounded-2xl border border-cream/12 bg-cream/[0.05] p-7 backdrop-blur-sm">
                  <span className="text-gold-soft">
                    {isSignature ? (
                      <ReinSynapse pulse className="h-8 w-auto" />
                    ) : (
                      <Motif className="size-7" strokeWidth={1.4} />
                    )}
                  </span>
                  <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-gold-soft">
                    {b.k}
                  </p>
                  <p className="mt-4 leading-relaxed text-cream/85">{b.t}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Signature chain — Memories → … → Results */}
        <Reveal delay={120}>
          <div className="mt-14 rounded-3xl border border-cream/12 bg-paper-2 p-8 text-center sm:p-10">
            <ReinSynapse
              pulse
              className="mx-auto h-9 w-auto text-teal"
              strokeWidth={1.6}
            />
            <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-teal">
              Her signature chain
            </p>
            <div className="reins mt-6" data-reins>
              {CHAIN.map((word, i) => (
                <span key={word} className="contents">
                  <span className="reins__node">{word}</span>
                  {i < CHAIN.length - 1 && <span className="reins__link" aria-hidden />}
                </span>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-ink-soft">
              Change the memory and the whole chain changes with it: the thoughts,
              the feelings, and what your body does at the mounting block.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
