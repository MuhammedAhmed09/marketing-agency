"use client";

import { motion } from "framer-motion";
import { ThreeDCardDemo } from "./3d-card";
import { AnimatedPinDemo } from "./pin-card";

export default function GraphicDesign() {
    return(
        <div id="graphic">
            <main className="w-full mx-auto text-center h-[60vh] content-center p-4">
                <div 
                    className="text-4xl md:text-7xl bg-clip-text text-transparent
                    bg-linear-to-b from-purple-600 to bg-purple-100"
                >
                    Graphic Design <br/> that works
                </div>

                <p className="mx-auto text-center max-w-lg my-6 text-lg font-normal text-neutral-300">
                    We create stunning visuals for your brand. From logos to social media 
                    posts, we&#39;ve got you covered with designs that captivate and convert.
                </p>
            </main>

            <div className="md:flex md:mx-auto items-center justify-center">
                <motion.div
                   initial={{ opacity: 0, x: -100 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <ThreeDCardDemo />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <AnimatedPinDemo />
                </motion.div>
            </div>
        </div>
    )
}