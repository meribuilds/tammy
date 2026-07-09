import { Quote } from "lucide-react"

import { PhotoSlot } from "@/components/site/photo-slot"
import { Reveal } from "@/components/site/reveal"
import {
  Horizon,
  Hoofprint,
  Horseshoe,
  Knot,
  Neuron,
  Stirrup,
} from "@/components/site/motifs"
import { PILLARS } from "@/lib/site"

// One motif per pillar, in her framework's order.
const PILLAR_MOTIFS = [Neuron, Horseshoe, Knot, Stirrup, Horizon, Hoofprint]

export function Proof() {
  return (
    <section className="relative overflow-hidden">
      <Hoofprint
        strokeWidth={0.5}
        className="pointer-events-none absolute -top-16 -right-16 hidden size-[26rem] text-teal opacity-[0.05] sm:block"
      />
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <p className="kicker">What she brings</p>
        <h2 className="mt-5 max-w-2xl text-balance text-[clamp(1.9rem,4.4vw,3.1rem)] leading-[1.08]">
          Six pillars behind every ride back.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* Pillars — her actual framework, so the numbering carries meaning */}
        <Reveal>
          <ol className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {PILLARS.map((p, i) => {
              const Motif = PILLAR_MOTIFS[i]
              return (
                <li key={p} className="group flex items-start gap-4 border-t border-line pt-5">
                  <span className="motif-badge flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/[0.06] text-gold group-hover:border-gold/60 group-hover:bg-gold/10">
                    <Motif className="size-5" />
                  </span>
                  <div className="pt-0.5">
                    <span className="font-display text-xs leading-none text-gold tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-1 block text-lg leading-tight text-teal-ink">
                      {p}
                    </span>
                  </div>
                </li>
              )
            })}
          </ol>
        </Reveal>

        {/* Landscape + testimonial slot */}
        <div className="flex flex-col gap-6">
          <Reveal delay={100}>
            <PhotoSlot
              label="Open landscape, horse & rider, room to breathe"
              ratio="16 / 10"
              parallax
            />
          </Reveal>

          {/*
            SWAP: her one existing testimonial is food-framed ("not thinking about
            food at all") and does not fit riding. Per the brief, we lead with the
            pillars and her method, and hold this slot for one rider quote about
            getting back in the saddle. Do not paste the food testimonial here.
          */}
          <Reveal delay={180}>
            <figure className="rounded-2xl border border-dashed border-teal/30 bg-paper-2 p-6">
              <Quote className="size-5 text-gold" />
              <p className="mt-3 leading-relaxed text-ink-soft italic">
                A rider&rsquo;s own words about getting back in the saddle will live
                here.
              </p>
              <figcaption className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-teal">
                Testimonial · to be added
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
      </div>
    </section>
  )
}
