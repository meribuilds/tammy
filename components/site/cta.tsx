import { ArrowUpRight, Download } from "lucide-react"

import { cn } from "@/lib/utils"
import { BOOK_URL } from "@/lib/site"

// TODO(tammy): point this at the actual guide (a hosted PDF or landing page)
// once it exists. Falls back to the booking link so the button never 404s.
const FREE_GUIDE_URL = BOOK_URL

/**
 * Primary conversion: "Book a call" — the single job of the page.
 * Gold fill, generous target, a light sheen glint sweeps across on hover, and a
 * subtle lift. Links to Tammy's Wix calendar.
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
      className={cn(
        "sheen group inline-flex items-center justify-center gap-2 rounded-full",
        "bg-gold px-7 py-3.5 font-medium text-ink",
        "shadow-[0_1px_0_rgba(255,255,255,0.35)_inset,0_8px_24px_-10px_rgba(176,132,74,0.9)]",
        "transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-soft hover:shadow-[0_1px_0_rgba(255,255,255,0.35)_inset,0_16px_30px_-12px_rgba(176,132,74,0.95)]",
        "focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
        className
      )}
    >
      {label}
      <span className="sr-only"> (opens Tammy&rsquo;s calendar in a new tab)</span>
      <ArrowUpRight
        aria-hidden
        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  )
}

/**
 * Secondary: "Download free guide" — a lower-commitment lead magnet ask,
 * paired next to BookCall wherever it appears.
 */
export function FreeGuide({ className }: { className?: string }) {
  return (
    <a
      href={FREE_GUIDE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full",
        "border border-teal/35 bg-paper-2 px-6 py-3.5 font-medium text-teal-ink",
        "transition-all duration-200 hover:-translate-y-0.5 hover:border-teal hover:bg-teal/10",
        "focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
        className
      )}
    >
      <Download
        aria-hidden
        className="size-4 transition-transform duration-200 group-hover:translate-y-0.5"
      />
      Download free guide
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}
