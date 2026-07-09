import { ImageIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Labeled placeholder for real photography.
 * The poster Tammy shared is an unusable composite, so every image on the page
 * is a slot with a note describing the shot to drop in.
 *
 * SWAP: replace each <PhotoSlot> with next/image once real horse & rider shots exist.
 */
export function PhotoSlot({
  label,
  ratio = "4 / 3",
  className,
  parallax = false,
}: {
  label: string
  ratio?: string
  className?: string
  parallax?: boolean
}) {
  return (
    <div
      className={cn("photo-slot rounded-2xl", className)}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`Placeholder: ${label}`}
      {...(parallax ? { "data-parallax": "" } : {})}
    >
      <div className="relative z-10 flex flex-col items-center gap-2 px-6">
        <ImageIcon className="size-6 opacity-70" strokeWidth={1.5} />
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] opacity-90">
          {label}
        </span>
      </div>
    </div>
  )
}
