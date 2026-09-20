import { cn } from "@/lib/utils"

/**
 * Bespoke line-art motifs — drawn for this brand, not pulled from an icon set.
 * Two worlds meet here: the tack room (reins, bit, stirrup, horseshoe, hoof)
 * and the nervous system (neuron, synapse). The signature <ReinSynapse> fuses
 * them: a rein that dissolves into a synapse — horse × brain, the whole method
 * in one mark.
 *
 * All strokes are currentColor, so color comes from `text-*`; every icon takes
 * a `strokeWidth` so the same path works at button scale and as a giant faint
 * watermark.
 */
type MotifProps = {
  className?: string
  strokeWidth?: number
}

function Grid({
  children,
  className,
  strokeWidth = 1.5,
}: MotifProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {children}
    </svg>
  )
}

const dot = "fill-current [stroke:none]"

/** Neuroscience — a neuron: soma, dendrites, axon, synaptic terminals. */
export function Neuron({ className, strokeWidth }: MotifProps) {
  return (
    <Grid className={className} strokeWidth={strokeWidth}>
      <circle cx="9" cy="12" r="2.4" />
      <path d="M7.3 10.3 4.2 7.2M6.6 12H3.2M7.3 13.7 4.4 16.6" />
      <path d="M11.4 12H16.6" />
      <path d="M16.6 12 19.6 9.4M16.6 12 19.6 14.6" />
      <circle className={dot} cx="20.4" cy="8.9" r="1" />
      <circle className={dot} cx="20.4" cy="15.1" r="1" />
    </Grid>
  )
}

/** Horse connection — a horseshoe, open at the top, with nail holes. */
export function Horseshoe({ className, strokeWidth }: MotifProps) {
  return (
    <Grid className={className} strokeWidth={strokeWidth}>
      <path d="M7.2 4.2C4.4 6 4 11 5.8 15.2 6.9 17.7 9.2 19 12 19s5.1-1.3 6.2-3.8C19.8 11.2 19.4 6 16.8 4.2" />
      <circle className={dot} cx="7.4" cy="8.2" r="0.7" />
      <circle className={dot} cx="7" cy="12" r="0.7" />
      <circle className={dot} cx="8.4" cy="15.4" r="0.7" />
      <circle className={dot} cx="16.6" cy="8.2" r="0.7" />
      <circle className={dot} cx="17" cy="12" r="0.7" />
      <circle className={dot} cx="15.6" cy="15.4" r="0.7" />
    </Grid>
  )
}

/** Emotional reset — a looped tie: two feelings knotted, ready to be untied. */
export function Knot({ className, strokeWidth }: MotifProps) {
  return (
    <Grid className={className} strokeWidth={strokeWidth}>
      <path d="M6 12c0-3.4 3.2-3.4 6 0s6 3.4 6 0-3.2-3.4-6 0-6 3.4-6 0Z" />
    </Grid>
  )
}

/** Strategy & action — a stirrup: foot in, moving forward. */
export function Stirrup({ className, strokeWidth }: MotifProps) {
  return (
    <Grid className={className} strokeWidth={strokeWidth}>
      <path d="M10 3.6h4v2.1h-4z" />
      <path d="M9.4 5.7C5.7 6.8 4.4 11.2 6.3 15 7.3 17 9.5 18 12 18s4.7-1 5.7-3C19.6 11.2 18.3 6.8 14.6 5.7" />
      <path d="M7.6 16h8.8" />
    </Grid>
  )
}

/** Vision & growth — a sun rising over the horizon, room to breathe. */
export function Horizon({ className, strokeWidth }: MotifProps) {
  return (
    <Grid className={className} strokeWidth={strokeWidth}>
      <path d="M3.5 16h17" />
      <path d="M8 16a4 4 0 0 1 8 0" />
      <path d="M12 5.4V3.7M6.5 8.5 5.3 7.3M17.5 8.5l1.2-1.2" />
    </Grid>
  )
}

/** Freedom & legacy — a hoofprint: the mark you leave, moving on. */
export function Hoofprint({ className, strokeWidth }: MotifProps) {
  return (
    <Grid className={className} strokeWidth={strokeWidth}>
      <path d="M12 3.2c-3.5 0-6 3-6 7.3 0 4 2.5 8.3 6 8.3s6-4.3 6-8.3c0-4.3-2.5-7.3-6-7.3Z" />
      <path d="M9.4 9.6c-.7 2.2-.7 4.8 0 7M14.6 9.6c.7 2.2.7 4.8 0 7" />
    </Grid>
  )
}

/** Force — a snaffle bit: two rings and a jointed mouthpiece. Willpower's tool. */
export function Bit({ className, strokeWidth }: MotifProps) {
  return (
    <Grid className={className} strokeWidth={strokeWidth}>
      <circle cx="5.2" cy="12" r="2.8" />
      <circle cx="18.8" cy="12" r="2.8" />
      <path d="M8 12h3.4M12.6 12H16" />
      <circle className={dot} cx="12" cy="12" r="0.9" />
    </Grid>
  )
}

/**
 * Signature — the rein becomes a synapse.
 * Left: a buckle + flowing rein (the horse). Right: the strap dissolves into
 * synaptic terminals (the brain). `pulse` gently animates the terminals.
 */
export function ReinSynapse({
  className,
  strokeWidth = 1.6,
  pulse = false,
}: MotifProps & { pulse?: boolean }) {
  return (
    <svg
      viewBox="0 0 140 44"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* buckle */}
      <circle cx="12" cy="22" r="6" />
      <path d="M12 15.5v13" />
      {/* rein flowing across */}
      <path d="M18 22C40 8 58 36 84 22" />
      <path d="M84 22h15" />
      {/* synapse terminals */}
      <path d="M99 22 115 11M99 22h20M99 22 115 33" />
      <circle
        className={cn(dot, pulse && "synapse-dot")}
        cx="99"
        cy="22"
        r="2.4"
      />
      <circle
        className={cn(dot, pulse && "synapse-dot")}
        cx="117"
        cy="10"
        r="2.4"
        style={pulse ? { animationDelay: "0.25s" } : undefined}
      />
      <circle
        className={cn(dot, pulse && "synapse-dot")}
        cx="121"
        cy="22"
        r="2.4"
        style={pulse ? { animationDelay: "0.5s" } : undefined}
      />
      <circle
        className={cn(dot, pulse && "synapse-dot")}
        cx="117"
        cy="34"
        r="2.4"
        style={pulse ? { animationDelay: "0.75s" } : undefined}
      />
    </svg>
  )
}
