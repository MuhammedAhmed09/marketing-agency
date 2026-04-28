import Hero from "@/components/landing-page/hero";
import Navbar from "@/components/landing-page/Navbar";
import { Spotlight } from "@/components/ui/spotlight";

export default function Page() {
  return (
    <div className="bg-background">
      <Navbar />
      <Spotlight fill="white" className="h-screen"/>
      <Hero />
    </div>
  )
}
