import { ContactFrom } from "@/components/contact/form";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with us."
}

export default function Contact() {
    return (
        <div className="min-h-screen bg-foreground dark:bg-background flex flex-col lg:flex-row justify-between">

            {/* Left */}
            <main className="lg:sticky lg:top-0 lg:h-screen lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-8 py-20 md:px-16 lg:px-20">
                <div className="max-w-md">
                    <h1 className="text-5xl md:text-7xl font-semibold bg-linear-to-b from-violet-500 via-violet-300 to-violet-100 bg-clip-text text-transparent leading-tight mb-6">
                        Shopify Stores
                    </h1>
                    <p className="max-w-lg text-base font-light text-neutral-400 leading-relaxed">
                        We create stunning Shopify stores that are designed to convert visitors into
                        customers. Our team of experts will work with you to bring your vision to life.
                    </p>
                    <div className="flex gap-2 mt-10 justify-self-center lg:justify-self-start">
                        <span className="w-2 h-2 rounded-full bg-purple-500 opacity-80" />
                        <span className="w-2 h-2 rounded-full bg-purple-400 opacity-40" />
                        <span className="w-2 h-2 rounded-full bg-purple-300 opacity-20" />
                    </div>
                </div>
            </main>

            {/* Right */}
            <div className="lg:w-1/2 flex items-start lg:items-center justify-center px-4 py-12 lg:py-16 lg:overflow-y-auto">
                <div className="w-full sm:max-w-md">
                    <ContactFrom />
                </div>
            </div>

        </div>
    )
}