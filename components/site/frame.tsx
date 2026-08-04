import { cn } from "@/lib/utils"

/**
 * The hero's inset panel, made reusable.
 *
 * Every section that carries its own field — the dark method and CTA bands, the
 * cream offer and gallery bands — sits in this frame at the same page margin and
 * the same radius as the hero. The page then reads as a stack of panels laid on
 * paper rather than as edge-to-edge stripes, and the paper sections between them
 * (Knot, Proof) are what give the stack its rhythm.
 */
const FRAME =
  "relative isolate mx-auto max-w-[110rem] overflow-hidden rounded-[1.5rem] border border-line/60 sm:rounded-[2.25rem]"

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
 * A <section> whose whole body is a Frame. `className` styles the outer gutter
 * (spacing), `frameClassName` styles the panel itself (background, border).
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
    <section id={id} className={cn("px-3 pb-6 sm:px-6 sm:pb-8", className)}>
      <Frame className={frameClassName}>{children}</Frame>
    </section>
  )
}
