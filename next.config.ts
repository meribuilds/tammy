import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    // The gallery hand-builds /_next/image URLs at q=70 (see components/site/gallery.tsx).
    // Next 16 only serves qualities listed here, and defaults to [75] alone.
    qualities: [70, 75],
  },
}

export default nextConfig
