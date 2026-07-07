import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductShowcase } from "@/components/product-showcase"
import { Partners } from "@/components/partners"
import SizeGuide from "@/components/size-guide"
import { TrustIndicators } from "@/components/trust-indicators"
import { Footer } from "@/components/footer"
import { FloatingBuyButton } from "@/components/floating-buy-button"
import { HotLineButton } from "@/components/zalo-chat"
import AboutUs from "@/components/about-us"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductShowcase />
        <AboutUs />
        <Partners />
        <SizeGuide />
        <TrustIndicators />
      </main>
      <Footer />
      <FloatingBuyButton />
      <HotLineButton phone="0939142100" messenger="thekimblousecantho" />
    </div>
  )
}
