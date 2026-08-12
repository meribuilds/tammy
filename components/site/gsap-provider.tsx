"use client"

import { useEffect, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Layout effect on the client (runs pre-paint → no reveal flash); useEffect on the
// server render pass. Identical signatures, so no type friction.
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect

/**
 * Single client island that orchestrates every animation on the page.
 * It selects server-rendered DOM by data-attributes, so sections stay static.
 *
 * Hooks it drives:
 *   [data-animate]   — scroll-reveal (fade + lift), staggered per section
 *   [data-reins]     — the signature Memories→…→Results chain draws in
 *   [data-float]     — ambient float (hero portrait)
 *   [data-parallax]  — slow parallax drift on scroll (photo slots)
 *   [data-nav]       — nav swaps to its paper pill after leaving the hero
 */
export function GsapProvider() {
  useIso(() => {
    const reduce =
      typeof matchMedia !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches

    // --- nav collects into its floating pill once the page moves ---
    // Wired up before the reduced-motion bail: this is a legibility state, not
    // decoration — the bar has no backdrop until it gets one here.
    const nav = document.querySelector<HTMLElement>("[data-nav]")
    let navFrame = 0
    const syncNav = () => {
      navFrame = 0
      nav?.setAttribute("data-scrolled", window.scrollY > 24 ? "true" : "false")
    }
    const onNavScroll = () => {
      if (!navFrame) navFrame = requestAnimationFrame(syncNav)
    }
    const cleanupNav = () => {
      window.removeEventListener("scroll", onNavScroll)
      window.removeEventListener("resize", onNavScroll)
      if (navFrame) cancelAnimationFrame(navFrame)
    }
    if (nav) {
      syncNav()
      window.addEventListener("scroll", onNavScroll, { passive: true })
      window.addEventListener("resize", onNavScroll)
    }

    if (reduce) return cleanupNav // elements are already visible; skip all motion

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // --- scroll reveals, grouped so items in a section stagger together ---
      const items = gsap.utils.toArray<HTMLElement>("[data-animate]")
      const seen = new Set<HTMLElement>()

      items.forEach((el) => {
        if (seen.has(el)) return
        const section = el.closest("section, footer") ?? el
        const group = items.filter(
          (n) => (n.closest("section, footer") ?? n) === section
        )
        group.forEach((n) => seen.add(n))

        gsap.set(group, { opacity: 0, y: 22 })
        ScrollTrigger.create({
          trigger: section,
          start: "top 82%",
          once: true,
          onEnter: () =>
            gsap.to(group, {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: "power3.out",
              stagger: 0.09,
            }),
        })
      })

      // --- signature chain draws through, node by node ---
      // Horizontal on desktop (draw left→right), vertical on mobile (draw down).
      const reins = document.querySelector<HTMLElement>("[data-reins]")
      if (reins) {
        // Must track the .reins breakpoint in globals.css — draw the wrong axis
        // and the links scale from zero along a dimension that isn't animating.
        const horizontal = matchMedia("(min-width: 1024px)").matches
        const drawAxis = horizontal ? "scaleX" : "scaleY"
        const origin = horizontal ? "left center" : "center top"
        const nodes = reins.querySelectorAll(".reins__node")
        const links = reins.querySelectorAll(".reins__link")
        gsap.set(nodes, { opacity: 0, y: 8 })
        gsap.set(links, { [drawAxis]: 0, transformOrigin: origin })
        const tl = gsap.timeline({
          scrollTrigger: { trigger: reins, start: "top 78%", once: true },
        })
        nodes.forEach((n, i) => {
          tl.to(
            n,
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
            i * 0.28
          )
          if (links[i])
            tl.to(
              links[i],
              { [drawAxis]: 1, duration: 0.28, ease: "none" },
              i * 0.28 + 0.18
            )
        })
      }

      // --- ambient float (hero portrait) ---
      gsap.utils.toArray<HTMLElement>("[data-float]").forEach((el) => {
        gsap.to(el, {
          y: -12,
          duration: 3.4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        })
      })

      // --- parallax drift on scroll ---
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 26 },
          {
            y: -26,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        )
      })
    })

    return () => {
      ctx.revert()
      cleanupNav()
    }
  }, [])

  return null
}
