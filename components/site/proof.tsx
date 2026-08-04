import { Measure } from "@/components/site/frame"
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
      <Measure className="py-20 sm:py-28">
        <Reveal className="text-center">
          <p className="kicker">What she brings</p>
          <h2 className="mx-auto mt-5 max-w-2xl text-[clamp(1.9rem,4.4vw,3.1rem)] leading-[1.08] text-balance">
            Six pillars behind every ride back.
          </h2>
        </Reveal>

        {/* Pillars — her actual framework, so the numbering carries meaning.
          Six items run the full width in three columns; nothing sits beside them,
          so the framework reads as the whole section rather than half of it. */}
        <Reveal>
          <ol className="mt-14 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
            {PILLARS.map((p, i) => {
              const Motif = PILLAR_MOTIFS[i]
              return (
                <li
                  key={p}
                  className="group flex items-start gap-4 border-t border-line pt-5"
                >
                  <span className="motif-badge flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/[0.06] text-gold group-hover:border-gold/60 group-hover:bg-gold/10">
                    <Motif className="size-5" />
                  </span>
                  <div className="pt-0.5">
                    <span className="font-mono text-[0.68rem] leading-none tracking-[0.12em] text-gold tabular-nums">
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

        {/*
        The dashed "testimonial to be added" card that used to close this section
        is gone: it shipped to production reading as unfinished. Her one existing
        testimonial is food-framed ("not thinking about food at all") and does not
        fit riding, so there is nothing honest to put here yet. Drop a rider quote
        in here when Tammy supplies one.
      */}
      </Measure>
    </section>
  )
}
