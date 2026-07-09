"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

import { BookCall } from "@/components/site/cta"

const LINKS = [
  { href: "#method", label: "The method" },
  { href: "#offer", label: "Work with Tammy" },
]

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
      className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-8">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="flex items-baseline gap-2.5"
        >
          <span className="script whitespace-nowrap text-base text-teal-ink sm:text-xl">
            Building Brave Riders
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 sm:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-teal"
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
          className="-mr-1.5 flex size-10 items-center justify-center rounded-full text-teal-ink transition-colors hover:bg-teal/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal sm:hidden"
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
            className="absolute inset-x-0 top-full z-50 origin-top border-b border-line bg-paper px-4 pt-2 pb-5 shadow-[0_24px_40px_-28px_rgba(18,58,64,0.6)] duration-200 animate-in fade-in slide-in-from-top-2 sm:hidden"
          >
            <div className="flex flex-col">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line/60 py-3.5 font-mono text-[0.74rem] uppercase tracking-[0.18em] text-teal-ink transition-colors hover:text-teal"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <BookCall
              className="mt-4 w-full justify-center px-5 py-3.5 text-base"
              label="Book a call"
            />
          </div>
        </>
      )}
    </header>
  )
}
