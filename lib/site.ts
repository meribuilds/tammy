/**
 * Building Brave Riders — site content.
 * Copy is drop-in from the build brief §08 (re-pointed to riding, in Tammy's voice).
 * Links verified against the brief; flagged items still need Tammy's confirm.
 */

export const BOOK_URL = "https://tidycal.com/coachtammymagnuson1/calmnerves"

export const CONTACT = {
  location: "Glenwood City, WI, USA",
  // TODO(verify): site shows "gmanuson" — likely a typo for magnuson.
  email: "coachtammymagnuson@gmail.com",
}

export const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/coachtammymagnuson" },
  { label: "Facebook", href: "https://www.facebook.com/tammyamagnuson" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/empowering" },
]

// Signature chain — kept exact from her existing brand.
export const CHAIN = [
  "Memories",
  "Thoughts",
  "Feelings",
  "Actions",
  "Results",
] as const

export const TIERS = [
  {
    tag: "Intensive",
    name: "Solace",
    body: "I come to you. A weekend together to find and rewire the specific memories driving the fear.",
  },
  {
    tag: "6 months",
    name: "Vision Implementation",
    body: "Self-curated 1:1 coaching to rewire below conscious awareness and ride from vision, not force.",
  },
  {
    tag: "12 months",
    name: "Bespoke Path",
    body: "A full curated experience for high-achieving women, including a 1:1 weekend and on-demand coaching.",
  },
] as const

export const PILLARS = [
  "Neuroscience Mindset",
  "Horse Healing Connection",
  "Emotional Reset",
  "Strategy & Action",
  "Vision & Growth",
  "Freedom & Legacy",
] as const

export const REVIEWS = [
  {
    quote:
      "Took Savannah down to the arena and she was a little spicy at first. I almost didn’t get on her, but I did a few minutes of breathing and imagined some of the things we talked about and we had a great little session!",
    author: "JG",
  },
] as const
