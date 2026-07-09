import { ArrowUpRight, Phone } from "lucide-react"

import { cn } from "@/lib/utils"
import { BOOK_URL } from "@/lib/site"

/**
 * Primary conversion: "Book a call" — the single job of the page.
 * Gold fill, generous target, subtle lift on hover. Links to Tammy's Wix calendar.
 */
export function BookCall({
  className,
  label = "Book a call",
}: {
  className?: string
  label?: string
}) {
  return (
    <a
      href={BOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-magnetic
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full",
        "bg-gold px-7 py-3.5 font-medium text-ink",
        "shadow-[0_1px_0_rgba(255,255,255,0.35)_inset,0_8px_24px_-10px_rgba(176,132,74,0.9)]",
        "transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-soft",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      {label}
      <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  )
}

/**
 * Secondary: "Call for a tailored quote" — keeps pricing off the page by design,
 * matches her existing language.
 */
export function TailoredQuote({ className }: { className?: string }) {
  return (
    <a
      href={BOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-magnetic
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full",
        "border border-teal/35 px-6 py-3.5 font-medium text-teal-ink",
        "transition-colors duration-200 hover:border-teal hover:bg-teal/5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <Phone className="size-4" />
      Call for a tailored quote
    </a>
  )
}
