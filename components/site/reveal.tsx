import { cn } from "@/lib/utils"

/**
 * Tags an element for scroll-reveal. The actual animation is orchestrated by
 * <GsapProvider> (GSAP + ScrollTrigger). Kept as a server component so sections
 * stay static HTML; GSAP selects [data-animate] after hydration.
 *
 * Safe by default: with no JS (or reduced motion) elements render fully visible.
 * The `.js` class (set before paint in layout) is what hides them for animation.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: React.ElementType
}) {
  return (
    <Tag
      className={cn(className)}
      data-animate=""
      data-delay={delay || undefined}
    >
      {children}
    </Tag>
  )
}
