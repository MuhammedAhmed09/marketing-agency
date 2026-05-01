import PricingCards from "@/components/pricing/pricing-cards"
import { Metadata } from "next"

export const metadata:Metadata = {
    title: "Pricing",
    description: "Simple pricing for your business."
}

// export type Plan = typeof plans[0]
export default function Pricing() {
    return (
        <div>
            <main className="w-full mx-auto text-center h-[30vh] content-center p-4">
                <div 
                    className="text-4xl md:text-7xl bg-clip-text text-transparent
                    bg-linear-to-b from-purple-600 to bg-purple-100"
                >
                    Simple Pricing <br/> choose your plan.
                </div>
            </main>

            <PricingCards />
        </div>
    )
}