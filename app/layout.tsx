import type { Metadata } from "next"
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"

// Headings + body — one contemporary grotesque, carried by weight contrast.
const fontHeading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-heading",
})

// Utility — eyebrows, labels, data.
const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Building Brave Riders · Get back in the saddle with Tammy Magnuson",
  description:
    "You're not a nervous rider — your brain is protecting you from a memory. The Neuro Reset method uses memory reconsolidation to unlink the fear and relink trust in the saddle. Book a call with Tammy Magnuson.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
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
        {children}
      </body>
    </html>
  )
}
