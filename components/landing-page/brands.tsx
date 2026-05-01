import Image from "next/image";

const logos = [
    "/brands-logo/logo1.svg",
    "/brands-logo/logo2.svg",
    "/brands-logo/logo3.svg",
    "/brands-logo/logo4.svg",
    "/brands-logo/logo5.svg",
    "/brands-logo/logo6.svg",
];

export default function Brands() {
    return (
        <section id="brands" className="p-4">
            <main className="text-center py-24 px-6">
                <h1
                    className="text-5xl md:text-7xl font-semibold
                    bg-linear-to-b from-violet-500 via-violet-300 to-violet-100
                    bg-clip-text text-transparent leading-tight mb-6"
                >
                    The best brands <br/> choose us
                </h1>

                <p className="mx-auto max-w-lg text-base font-light text-neutral-400 leading-relaxed">
                    from small businesses to large corporations, we have helped many
                    brands achieve their goals and grow their online presence.
                </p>
            </main>

            <div className="grid grid-cols-3 gap-10 px-6 pb-20">
                {logos.map((logo, index) => (
                    <div key={index} className="flex justify-center items-center p-4 md:p-20">
                        <Image 
                            src={logo} 
                            alt={`Brand ${index + 1}`} 
                            width={500}
                            height={500}
                            className="h-16 w-auto" 
                        />
                    </div>
                ))}
            </div>

            <div className="text-center text-2xl font-medium text-neutral-400 mb-20 mx-auto max-w-2xl">
                &#34;We got rid of nearly a dozen different tools 
                because of what Bird does for us.&#34;
            </div>

            <div className="items-center flex justify-center flex-col text-center">
                <Image 
                    src="/brands-logo/logo7.svg" 
                    alt="Brand 7" 
                    width={500}
                    height={500}
                    className="h-16 w-auto mb-4" 
                />
                <p className="text-sm text-neutral-400">John Doe</p>
                <p className="text-sm">Marketing Director, Palium Software</p>
            </div>
        </section>
    )
}