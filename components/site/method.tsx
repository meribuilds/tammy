import Image from "next/image"

import { FramedSection, Measure } from "@/components/site/frame"
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
    <FramedSection id="method" frameClassName="bg-teal-lt text-teal-ink">
      {/* watercolor atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(38rem 30rem at 82% 0%, color-mix(in oklab, var(--teal-ink) 22%, transparent), transparent 60%), radial-gradient(34rem 26rem at 4% 96%, color-mix(in oklab, var(--coral) 26%, transparent), transparent 60%)",
        }}
      />

      <Measure className="relative py-20 sm:py-28">
        <Reveal className="text-center">
          <p className="kicker text-teal-ink">The method</p>
          {/* was a fourth, larger h2 clamp — section headlines are one size */}
          <h2 className="headline mx-auto mt-5 max-w-3xl text-teal-ink">
            Right effort.{" "}
            <span className="text-coral-deep">Wrong direction.</span>
          </h2>
          <p className="lead mx-auto mt-6 max-w-2xl text-ink/80">
            Pushing through fear never clears it. We work at the level where the
            memory actually lives, and rewire it at the source.
          </p>
        </Reveal>

        {/* The mechanism, plainly — a neuron firing beside the copy that
            explains what memory reconsolidation actually does. */}
        <Reveal delay={60}>
          <div className="mt-14 grid items-center gap-8 rounded-3xl border border-teal-ink/12 bg-paper/55 p-7 backdrop-blur-sm sm:p-10 md:grid-cols-2 md:gap-12">
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl sm:rounded-3xl">
              <Image
                src="/assets/neuron-network.webp"
                alt="A neuron firing, synaptic connections glowing along its dendrites"
                fill
                sizes="(min-width: 768px) 32rem, 100vw"
                quality={75}
                className="object-cover"
              />
            </div>
            <p className="text-lg leading-relaxed text-ink/85 sm:text-xl">
              We use the Neuro Reset to unlink and relink the wiring in the
              brain using memory reconsolidation. We target the level where
              the memory lives to create effortless change.
            </p>
          </div>
        </Reveal>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {BEATS.map((b, i) => {
            const Motif = BEAT_MOTIFS[i]
            const isSignature = i === BEATS.length - 1
            return (
              <Reveal key={b.k} delay={i * 100}>
                <div className="h-full rounded-3xl border border-teal-ink/12 bg-paper/55 p-7 backdrop-blur-sm">
                  <span className="text-coral-deep">
                    {isSignature ? (
                      <ReinSynapse pulse className="h-8 w-auto" />
                    ) : (
                      <Motif className="size-7" strokeWidth={1.4} />
                    )}
                  </span>
                  <p className="label mt-5 text-coral-deep">{b.k}</p>
                  <p className="mt-4 leading-relaxed text-ink/80">{b.t}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Signature chain — Memories → … → Results */}
        <Reveal delay={120}>
          <div className="mt-14 rounded-3xl border border-teal-ink/10 bg-paper-2 p-8 text-center sm:p-10">
            <ReinSynapse
              pulse
              className="mx-auto h-9 w-auto text-teal"
              strokeWidth={1.6}
            />
            <p className="label mt-5 text-teal">
              Her signature Neuro Reset method
            </p>
            <div className="reins mt-6" data-reins>
              {CHAIN.map((word, i) => (
                <span key={word} className="contents">
                  <span className="reins__node">{word}</span>
                  {i < CHAIN.length - 1 && (
                    <span className="reins__link" aria-hidden />
                  )}
                </span>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-ink-soft">
              Change the memory and the whole pattern changes: the thoughts,
              the feelings, and the action you can take at the mounting
              block.
            </p>
          </div>
        </Reveal>
      </Measure>
    </FramedSection>
  )
}
