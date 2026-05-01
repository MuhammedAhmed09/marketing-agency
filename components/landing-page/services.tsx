import { CardHoverEffectDemo } from "./hover-effect-card";

export default function Services() {
    return (
        <section id="services">
            <main className="text-center py-24 px-6">
                <h1
                    className="text-5xl md:text-7xl font-semibold
                    bg-linear-to-b from-violet-500 via-violet-300 to-violet-100
                    bg-clip-text text-transparent leading-tight mb-6"
                >
                    Streamline your business <br/> with our services
                </h1>

                <p className="mx-auto max-w-lg text-base font-light text-neutral-400 leading-relaxed">
                    From website design to social media management, We offer 
                    a wide range of services to help you grow your business.
                </p>
            </main>

            <div>
                <CardHoverEffectDemo />
            </div>
        </section>
    )
}       