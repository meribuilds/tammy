import { BookCall, FreeGuide } from "@/components/site/cta"
import { FramedSection, Measure } from "@/components/site/frame"
import { Reveal } from "@/components/site/reveal"
import { Horseshoe } from "@/components/site/motifs"

export function CtaBand() {
  return (
    <FramedSection frameClassName="bg-teal-lt text-teal-ink">
      {/* coral halo above, cool glow below — composed, not blotchy */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(44rem 26rem at 50% -12%, color-mix(in oklab, var(--coral) 26%, transparent), transparent 60%), radial-gradient(40rem 30rem at 100% 118%, color-mix(in oklab, var(--teal-ink) 22%, transparent), transparent 62%)",
        }}
      />
      {/* ghost motif for depth */}
      <Horseshoe
        aria-hidden
        strokeWidth={0.5}
        className="pointer-events-none absolute top-1/2 left-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 text-teal-ink opacity-[0.05]"
      />
      {/* coral hairline caps the section off from the paper above */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-coral/45 to-transparent"
      />

      {/* narrower than the 6xl measure the other bands share: it's a single
          centred column of type, and 6xl would let the headline run too wide */}
      <Measure
        className="relative py-24 text-center sm:py-32"
        innerClassName="max-w-4xl"
      >
        <Reveal>
          <p className="kicker text-teal-ink">Your next ride starts here</p>

          {/* the page's closing statement was a <p> styled to look like a
              headline — it never appeared in the document outline */}
          <h2 className="display mt-7 text-teal-ink">
            Let&rsquo;s build your <span className="text-coral-deep">brave</span>
            .
          </h2>

          <p className="lead mx-auto mt-5 max-w-xl text-ink/80">
            Book a call and we&rsquo;ll map the memory that&rsquo;s keeping you
            out of the saddle, and the path back in.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-3.5">
            <BookCall className="w-full justify-center sm:w-auto" />
            <FreeGuide className="w-full justify-center border-teal-ink/30 bg-teal-ink text-cream hover:border-teal-ink hover:bg-teal sm:w-auto" />
          </div>

          <p className="label-xs mt-8 text-ink/75">
            Private<span className="text-coral-deep"> · </span>By quote
            <span className="text-coral-deep"> · </span>No pressure
          </p>
        </Reveal>
      </Measure>
    </FramedSection>
  )
}
