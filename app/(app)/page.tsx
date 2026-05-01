import Brands from "@/components/landing-page/brands";
import FAQ from "@/components/landing-page/faq";
import GraphicDesign from "@/components/landing-page/graphic-design";
import Hero from "@/components/landing-page/hero";
import Services from "@/components/landing-page/services";
import ShopifyDesign from "@/components/landing-page/shopify-design";
import WebsiteDesign from "@/components/landing-page/website-design";
import { Spotlight } from "@/components/ui/spotlight";

export default function Page() {
  return (
    <div className="bg-foreground dark:bg-background">
      <Spotlight fill="white" className="h-screen"/>
      <Hero />
      <WebsiteDesign />
      <GraphicDesign />
      <ShopifyDesign />
      <Brands />
      <Services />
      <FAQ />
    </div>
  )
}
