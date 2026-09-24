"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { BookCall } from "@/components/site/cta"

const LINKS = [
  { href: "#method", label: "The method" },
  { href: "#offer", label: "Work with Tammy" },
]

/**
 * Floating pill nav. It carries its own paper background at all times — the
 * hero is a full-bleed photograph now, so a bare bar left the dark ink type
 * unreadable over the image. Scrolling only deepens the shadow, which
 * GsapProvider drives by flipping data-scrolled.
 */
export function SiteNav() {
  const [open, setOpen] = useState(false)

  // While the sheet is open: lock scroll, close on Escape, and close if the
  // viewport grows to the desktop breakpoint (where the sheet no longer exists).
  // 768 must match the md: switch below — at 640 the wordmark, both links and
  // the button wanted ~650px of a 592px pill and collided.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
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
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-line/70 bg-paper/92 py-2 pr-2 pl-4 shadow-[0_10px_28px_-22px_rgba(61,38,28,0.5)] backdrop-blur-md transition-shadow duration-300 group-data-[scrolled=true]/nav:shadow-[0_18px_42px_-26px_rgba(61,38,28,0.62)] sm:pr-3 sm:pl-5">
        {/* logomark crest + wordmark */}
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2.5 rounded-full"
        >
          <Image
            src="/assets/logo.png"
            alt="Neuro Reset"
            width={112}
            height={76}
            className="h-8 w-auto shrink-0 transition-transform duration-300 group-hover:-rotate-6"
          />
          <span className="script text-[0.95rem] whitespace-nowrap text-teal-ink sm:text-lg">
            Building Brave Riders
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="label rounded-sm text-ink-soft transition-colors hover:text-teal"
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
          className="flex size-11 items-center justify-center rounded-full text-teal-ink hover:bg-teal/5 md:hidden"
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
            className="fixed inset-0 z-40 bg-ink/25 backdrop-blur-[2px] md:hidden"
          />
          <div
            id="mobile-menu"
            className="absolute inset-x-3 top-full z-50 mt-2 origin-top animate-in rounded-3xl border border-line bg-paper p-3 shadow-[0_24px_44px_-26px_rgba(61,38,28,0.6)] duration-200 fade-in slide-in-from-top-2 md:hidden"
          >
            <div className="flex flex-col px-1">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="label border-b border-line/60 py-4 text-teal-ink transition-colors hover:text-teal"
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
