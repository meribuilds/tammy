import { GsapProvider } from "@/components/site/gsap-provider"
import { SiteNav } from "@/components/site/site-nav"
import { Hero } from "@/components/site/hero"
import { Knot } from "@/components/site/knot"
import { Method } from "@/components/site/method"
import { Offer } from "@/components/site/offer"
import { Proof } from "@/components/site/proof"
import { Gallery } from "@/components/site/gallery"
import { CtaBand } from "@/components/site/cta-band"
import { SiteFooter } from "@/components/site/site-footer"

export default function Page() {
  return (
    <>
      <GsapProvider />
      <SiteNav />
      <main id="main">
        <Hero />
        <Knot />
        <Method />
        <Offer />
        <Proof />
        <Gallery />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  )
}
