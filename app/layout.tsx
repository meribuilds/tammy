import type { Metadata, Viewport } from "next"
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"

// The variables are named for the face, not for the role. globals.css maps
// role → face (--font-mono: var(--font-geist-mono)); naming them after the role
// here made those mappings self-referential, and a custom property that
// references itself is invalid — the page fell through to the UA serif.
//
// Utility — eyebrows, labels, data.
const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

// Everything else — headlines, body and UI all sit on one contemporary
// grotesque; hierarchy comes from size, weight and tracking, not from a
// second typeface.
const fontHeading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})

const TITLE = "Building Brave Riders · Get back in the saddle with Tammy Magnuson"
const DESCRIPTION =
  "You're not a nervous rider. Your brain is protecting you from a memory. The Neuro Reset method uses memory reconsolidation to unlink the fear and relink trust in the saddle. Book a call with Tammy Magnuson."

// Absolute URLs for OG/Twitter images. Set NEXT_PUBLIC_SITE_URL at deploy time;
// Vercel supplies VERCEL_PROJECT_PRODUCTION_URL on its own.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    siteName: "Building Brave Riders",
    images: [{ url: "/assets/hero-image.jpeg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
}

export const viewport: Viewport = {
  themeColor: "#f3eee3",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        "font-sans",
        fontHeading.variable,
        fontMono.variable
      )}
    >
      <body>
        {/* Enable reveal-hiding only when JS can animate it back in (pre-paint). */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
