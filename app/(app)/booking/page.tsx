'use client';

import { InlineWidget } from "react-calendly";

export default function Booking() {
    return (
        <div className="min-h-screen bg-background flex flex-col justify-start items-center text-center px-8 py-20 md:px-16 lg:px-20">
            <main className="w-full mx-auto text-center content-center p-4">
                <div 
                    className="text-4xl md:text-7xl bg-clip-text text-transparent
                    bg-linear-to-b from-purple-600 to bg-purple-100"
                >
                    Book a Consultation <br/> with us
                </div>
            </main>

            <InlineWidget 
                url="https://calendly.com/muhammedahmedragab/30min"
                styles={{
                    height: "800px",
                    width: "100%",
                    border: "none",
                }}
                className="rounded-3xl"
            />
        </div>
    )
}   