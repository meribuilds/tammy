import { BookCall } from "@/components/site/cta"

export function SiteNav() {
  return (
    <header
      data-nav
      className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2.5">
          <span className="script whitespace-nowrap text-lg text-teal-ink sm:text-xl">
            Building Brave Riders
          </span>
        </a>
        <div className="flex items-center gap-6">
          <a
            href="#method"
            className="hidden font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-teal sm:inline"
          >
            The method
          </a>
          <a
            href="#offer"
            className="hidden font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-teal sm:inline"
          >
            Work with Tammy
          </a>
          <BookCall className="px-5 py-2 text-sm" />
        </div>
      </nav>
    </header>
  )
}
