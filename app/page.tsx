import GraphicDesign from "@/components/landing-page/graphic-desing";
import Hero from "@/components/landing-page/hero";
import Navbar from "@/components/landing-page/Navbar";
import ShopifyDesign from "@/components/landing-page/shopify-design";
import WebsiteDesign from "@/components/landing-page/website-design";
import { Spotlight } from "@/components/ui/spotlight";

export default function Page() {
  return (
    <div className="bg-background">
      <Navbar />
      <Spotlight fill="white" className="h-screen"/>
      <Hero />
      <WebsiteDesign />
      <GraphicDesign />
      <ShopifyDesign />
    </div>
  )
}
