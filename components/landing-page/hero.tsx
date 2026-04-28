import Link from "next/link";

export default function Hero() {
    return (
        <div className="w-full mx-auto text-center h-[80vh] content-center p-4">
            <div 
                className="text-4xl md:text-7xl bg-clip-text
                bg-linear-to-b from-neutral-50 to bg-neutral-400"
            >
                Create, grow, and <br/> scale your business
            </div>
            
            <p className="mx-auto text-center max-w-lg my-6 text-lg font-normal text-neutral-300">
                Custom tailored solutions for your business. We are a team of
                creatives who are excited to help you grow your business.
            </p>

            <Link
                href={"/booking"}
                className="cursor-pointer shimmer-button h-10"
            >Book now</Link>
        </div>
    );
}