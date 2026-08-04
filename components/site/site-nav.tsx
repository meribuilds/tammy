"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

import { BookCall } from "@/components/site/cta"
import { Horseshoe } from "@/components/site/motifs"

const LINKS = [
  { href: "#method", label: "The method" },
  { href: "#offer", label: "Work with Tammy" },
]

/**
 * Two-state nav. At rest it's a bare bar on paper — no chrome, aligned to the
 * page container. Once the page scrolls it collects into a floating pill so it
 * stays readable over whatever passes beneath. GsapProvider flips
 * data-scrolled; every state style is a group-data variant below.
 */
export function SiteNav() {
  const [open, setOpen] = useState(false)

  // While the sheet is open: lock scroll, close on Escape, and close if the
  // viewport grows to the desktop breakpoint (where the sheet no longer exists).
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    const onResize = () => window.innerWidth >= 640 && setOpen(false)
    document.addEventListener("keydown", onKey)
    window.addEventListener("resize", onResize)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      window.removeEventListener("resize", onResize)
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      data-nav
      className="group/nav fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5"
    >
      {/* narrower than the hero frame on purpose — it reads as an island sitting
          on the page, not as a lid matching the image edge for edge */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-transparent py-2 pr-2 pl-4 group-data-[scrolled=true]/nav:border-line/70 group-data-[scrolled=true]/nav:bg-paper/90 group-data-[scrolled=true]/nav:shadow-[0_18px_42px_-26px_rgba(18,58,64,0.62)] group-data-[scrolled=true]/nav:backdrop-blur-md sm:pr-3 sm:pl-5">
        {/* logomark crest + wordmark */}
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2.5"
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-teal-ink text-gold-soft transition-transform duration-300 group-hover:-rotate-6">
            <Horseshoe className="size-[18px]" strokeWidth={1.6} />
          </span>
          <span className="script text-[0.95rem] whitespace-nowrap text-teal-ink sm:text-lg">
            Building Brave Riders
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 sm:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[0.7rem] tracking-[0.16em] text-ink-soft uppercase hover:text-teal"
            >
              {l.label}
            </a>
          ))}
          <BookCall className="px-5 py-2 text-sm" />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex size-9 items-center justify-center rounded-full text-teal-ink hover:bg-teal/5 focus-visible:ring-2 focus-visible:ring-teal focus-visible:outline-none sm:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <>
          <div
            aria-hidden
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-ink/25 backdrop-blur-[2px] sm:hidden"
          />
          <div
            id="mobile-menu"
            className="absolute inset-x-3 top-full z-50 mt-2 origin-top animate-in rounded-3xl border border-line bg-paper p-3 shadow-[0_24px_44px_-26px_rgba(18,58,64,0.6)] duration-200 fade-in slide-in-from-top-2 sm:hidden"
          >
            <div className="flex flex-col px-1">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line/60 py-3.5 font-mono text-[0.74rem] tracking-[0.18em] text-teal-ink uppercase transition-colors hover:text-teal"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <BookCall
              className="mt-3 w-full justify-center px-5 py-3.5 text-base"
              label="Book a call"
            />
          </div>
        </>
      )}
    </header>
  )
}
