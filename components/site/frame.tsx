import { cn } from "@/lib/utils"

/**
 * A full-bleed band.
 *
 * Every section that carries its own field — the dark method and CTA bands, the
 * cream offer and gallery bands — runs edge to edge and square-cornered, like
 * the hero. The page reads as a stack of bands, and the paper sections between
 * them (Knot, Proof) are what give the stack its rhythm. Content inside a band
 * is held to the page measure by <Measure>, not by the band itself.
 */
const FRAME = "relative isolate w-full overflow-hidden"

export function Frame({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(FRAME, className)} {...props}>
      {children}
    </div>
  )
}

/**
 * A <section> whose whole body is a Frame. `className` styles the outer element
 * (spacing), `frameClassName` styles the band itself (background, border).
 */
export function FramedSection({
  id,
  className,
  frameClassName,
  children,
}: {
  id?: string
  className?: string
  frameClassName?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={className}>
      <Frame className={frameClassName}>{children}</Frame>
    </section>
  )
}

/**
 * The page's one content measure, copied from the nav island: the same gutter
 * and the same max width, so every kicker, headline and card column starts on
 * the wordmark's vertical no matter which band it sits in. The bands bleed; the
 * type never does.
 *
 * `className` styles the gutter element — put vertical padding and `relative`
 * there. `innerClassName` overrides the measure itself (CtaBand runs narrower).
 */
export function Measure({
  className,
  innerClassName,
  children,
}: {
  className?: string
  innerClassName?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn("px-3 sm:px-6", className)}>
      <div
        className={cn("mx-auto w-full max-w-6xl px-4 sm:px-5", innerClassName)}
      >
        {children}
      </div>
    </div>
  )
}
