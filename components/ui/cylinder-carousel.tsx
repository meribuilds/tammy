"use client"

import React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

export interface CarouselImage {
  src: string
  alt?: string
}

export interface CylinderCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  images: CarouselImage[]
  containerClassName?: string
  cardClassName?: string
  animationDuration?: number // in seconds
  cardWidth?: number // in pixels
  /** Handed to next/image so the optimizer picks a card-sized source, not a page-sized one. */
  imageSizes?: string
  quality?: number
}

// Cards are cut to 7:10; the intrinsic pair only has to hold that ratio so the
// browser can reserve the box before the bytes land.
const CARD_W = 560
const CARD_H = 800

export const CylinderCarousel = React.forwardRef<
  HTMLDivElement,
  CylinderCarouselProps
>(
  (
    {
      images,
      className,
      containerClassName,
      cardClassName,
      animationDuration = 32,
      cardWidth = 250,
      imageSizes = "250px",
      quality = 70,
      ...props
    },
    ref
  ) => {
    const N = images.length

    // We compute the CSS variables here instead of polluting the global CSS
    // --n: number of cards
    // --w: card width
    const customStyle = {
      "--n": N,
      "--w": `${cardWidth}px`,
      "--ba": `calc(1turn / var(--n))`,
      // animation duration
      "--anim-dur": `${animationDuration}s`,
    } as React.CSSProperties

    return (
      <div
        ref={ref}
        className={cn(
          "grid h-full min-h-[500px] w-full place-items-center overflow-hidden",
          className
        )}
        style={{
          perspective: "35em",
          maskImage:
            "linear-gradient(90deg, transparent, #000 20% 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 20% 80%, transparent)",
        }}
        {...props}
      >
        <div
          className={cn(
            // The spin is a class, not an inline style, so `motion-reduce` can
            // actually cancel it — an inline `animation` would outrank the
            // variant and keep turning for people who asked for stillness.
            "grid animate-[ry_var(--anim-dur)_linear_infinite] place-items-center [transform-style:preserve-3d] motion-reduce:animate-none",
            containerClassName
          )}
          style={customStyle}
        >
          {/* We define the keyframes inline via a style block to ensure it works without global CSS config */}
          <style>
            {`
              @keyframes ry {
                to { transform: rotateY(1turn); }
              }
            `}
          </style>

          {images.map((img, i) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt || `Carousel image ${i + 1}`}
              width={CARD_W}
              height={CARD_H}
              sizes={imageSizes}
              quality={quality}
              className={cn(
                "rounded-2xl object-cover [backface-visibility:hidden] [grid-area:1/1]",
                cardClassName
              )}
              style={
                {
                  width: "var(--w)",
                  height: "auto",
                  aspectRatio: "7/10",
                  "--i": i,
                  // transform: rotateY(calc(var(--i) * var(--ba))) translateZ(calc(-1 * (0.5 * var(--w) + 0.5em) / tan(0.5 * var(--ba))))
                  // Note: using modern CSS tan() function. Fallback translates are recommended if targeting very old browsers.
                  transform:
                    "rotateY(calc(var(--i) * var(--ba))) translateZ(calc(-1 * (0.5 * var(--w) + 0.5em) / tan(0.5 * var(--ba))))",
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      </div>
    )
  }
)

CylinderCarousel.displayName = "CylinderCarousel"
