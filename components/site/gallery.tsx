import { FramedSection, Measure } from "@/components/site/frame"
import { Reveal } from "@/components/site/reveal"
import { CylinderCarousel } from "@/components/ui/cylinder-carousel"

/**
 * The payoff band: what riding looks like once the fear is cleared. Sits right
 * before the CTA so the last thing read is the ask and the last thing seen is
 * the outcome.
 *
 * The carousel routes these through next/image itself — twelve untouched JPEGs
 * would be ~3MB on the wire, and hand-writing /_next/image URLs here meant the
 * optimizer's own rules (allowed widths, allowed qualities) were being guessed
 * at rather than enforced.
 */
const SHOTS = [
  { n: 1, alt: "Groundwork in the grass, horse lowering its head to meet her" },
  { n: 4, alt: "Rider and horse face to face in a rope halter, both at ease" },
  {
    n: 5,
    alt: "Rider in the saddle with both arms up, reins dropped, autumn woods",
  },
  { n: 3, alt: "Three riders in open water, arms thrown up" },
  { n: 13, alt: "Chestnut horse trotting through snow at golden hour" },
  { n: 2, alt: "Rider standing beside her grazing horse by a red barn" },
  { n: 10, alt: "Rider carrying the flag at a gallop across the arena" },
  { n: 8, alt: "Dressage rider working a dapple grey along the treeline" },
  { n: 11, alt: "Grey horse clearing an oxer in a show jumping round" },
  { n: 14, alt: "Barrel racer cutting tight around the barrel in the dirt" },
  { n: 6, alt: "Show jumper folded over a fence in an indoor arena" },
  { n: 9, alt: "Rider laughing in the saddle after a round" },
]

const IMAGES = SHOTS.map((s) => ({
  src: `/assets/image-${s.n}.jpg`,
  alt: s.alt,
}))

export function Gallery() {
  return (
    <FramedSection frameClassName="bg-cream">
      <Measure className="relative pt-20 text-center sm:pt-28">
        <Reveal>
          <p className="kicker">The other side of it</p>
          <h2 className="headline mx-auto mt-5 max-w-2xl">
            What getting back looks like.
          </h2>
        </Reveal>
      </Measure>

      {/* the band is the bleed — the carousel runs the full width of the
          viewport, outside the measure the type is held to */}
      <Reveal delay={120} className="relative w-full">
        <CylinderCarousel
          images={IMAGES}
          animationDuration={44}
          className="min-h-[360px] sm:min-h-[470px] lg:min-h-[580px]"
          /* the component writes --w inline, so the responsive sizes have to
             win on !important — cards must shrink or they overrun small screens */
          containerClassName="[--w:8.5rem]! sm:[--w:11rem]! lg:[--w:14rem]!"
          cardClassName="shadow-[0_24px_50px_-30px_rgba(18,58,64,0.8)]"
          imageSizes="(min-width: 1024px) 224px, (min-width: 640px) 176px, 136px"
          /* props spread over the component's own style, so every value has to
             be restated here.
             perspective: the cylinder's radius grows with card count — twelve
             cards put it near 450px, and against the component's 35em camera
             the front card scales ~5x and gets clipped by the frame. Standing
             the camera well back keeps the turn readable at any card count.
             mask: the default faded 20% off each side, which read as a crop. */
          style={{
            perspective: "100em",
            maskImage:
              "linear-gradient(90deg, transparent, #000 6% 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, #000 6% 94%, transparent)",
          }}
        />
      </Reveal>

      <Measure className="pb-20 sm:pb-28">
        <Reveal delay={200}>
          <p className="mx-auto max-w-md text-center text-base leading-relaxed text-ink-soft">
            Not managed. Cleared, and back out there.
          </p>
        </Reveal>
      </Measure>
    </FramedSection>
  )
}
