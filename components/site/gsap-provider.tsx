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
 *   [data-magnetic]  — buttons pull gently toward the cursor
 *   [data-float]     — ambient float (hero portrait)
 *   [data-parallax]  — slow parallax drift on scroll (photo slots)
 *   [data-nav]       — nav condenses after leaving the hero
 */
export function GsapProvider() {
  useIso(() => {
    const reduce =
      typeof matchMedia !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reduce) return // elements are already visible; skip all motion

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

      // --- signature chain draws left→right ---
      const reins = document.querySelector<HTMLElement>("[data-reins]")
      if (reins) {
        const nodes = reins.querySelectorAll(".reins__node")
        const links = reins.querySelectorAll(".reins__link")
        gsap.set(nodes, { opacity: 0, y: 8 })
        gsap.set(links, { scaleX: 0, transformOrigin: "left center" })
        const tl = gsap.timeline({
          scrollTrigger: { trigger: reins, start: "top 78%", once: true },
        })
        nodes.forEach((n, i) => {
          tl.to(n, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, i * 0.28)
          if (links[i])
            tl.to(
              links[i],
              { scaleX: 1, duration: 0.28, ease: "none" },
              i * 0.28 + 0.18
            )
        })
      }

      // --- magnetic buttons ---
      gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((el) => {
        const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" })
        const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" })
        const move = (e: MouseEvent) => {
          const r = el.getBoundingClientRect()
          xTo((e.clientX - (r.left + r.width / 2)) * 0.28)
          yTo((e.clientY - (r.top + r.height / 2)) * 0.35)
        }
        const reset = () => {
          xTo(0)
          yTo(0)
        }
        el.addEventListener("mousemove", move)
        el.addEventListener("mouseleave", reset)
      })

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

      // --- nav condenses past the hero ---
      const nav = document.querySelector<HTMLElement>("[data-nav]")
      if (nav) {
        ScrollTrigger.create({
          start: "top -120",
          onUpdate: (self) =>
            nav.setAttribute("data-scrolled", self.progress > 0 ? "true" : "false"),
          onToggle: (self) =>
            nav.setAttribute("data-scrolled", self.isActive ? "true" : "false"),
        })
        ScrollTrigger.create({
          trigger: "body",
          start: "80 top",
          onEnter: () => nav.setAttribute("data-scrolled", "true"),
          onLeaveBack: () => nav.setAttribute("data-scrolled", "false"),
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return null
}
