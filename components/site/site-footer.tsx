import { CONTACT, SOCIALS } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <p className="script text-2xl text-teal-ink">Building Brave Riders</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
              Confidence coaching for riders who&rsquo;ve lost their nerve. The Neuro
              Reset method: science-backed, soul-driven, results-focused.
            </p>
            <p className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-teal">
              Vision · Healing · Action · Results
            </p>
          </div>

          {/* Connect */}
          <div>
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-ink-soft">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-teal-ink underline-offset-4 transition-colors hover:text-teal hover:underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach */}
          <div>
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-ink-soft">
              Reach Tammy
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
              <li>{CONTACT.location}</li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-teal-ink underline-offset-4 transition-colors hover:text-teal hover:underline"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.66rem] tracking-[0.08em] text-ink-soft">
            © {new Date().getFullYear()} Tammy Magnuson · Building Brave Riders
          </p>
          <p className="font-mono text-[0.66rem] tracking-[0.08em] text-ink-soft">
            No BS coaching. Real tools. Real transformation.
          </p>
        </div>
      </div>
    </footer>
  )
}
