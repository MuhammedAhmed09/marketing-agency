import { Accordions } from "./accordions-faq";

export default function FAQ() {
    return (
        <div className="p-4 md:p-8 mt-10">
            <div className="py-10 md:p-20 rounded-3xl w-full bg-accent-foreground text-accent dark:bg-accent dark:text-accent-foreground">
                <h1 className="text-3xl md:text-7xl font-bold">Have a Question? </h1>
                <p className="text-xl sm:text-2xl md:text-5xl text-neutral-400 mt-4">
                    Get answers.
                </p>
                <div className="mt-10">
                    <Accordions />
                </div>
            </div>
        </div>
    )
}