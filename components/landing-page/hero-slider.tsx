'use client';

import {
  motion,
  useMotionValue,
  animate,
  AnimationPlaybackControls
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const data = [
  { id: 1, title: "Social Media Marketing", image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNvY2lhbCUyMG1lZGlhJTIwbWFya2V0aW5nfGVufDB8fDB8fHww", link: "/services/social-media-marketing" },
  { id: 2, title: "SEO", image: "https://images.unsplash.com/photo-1674027001840-1a3e834eb73f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhaWQlMjBBZHMlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D", link: "/services/seo" },
  { id: 3, title: "Paid Ads", image: "https://images.unsplash.com/photo-1631270315847-f418bde47ca6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "/services/paid-ads" },
  { id: 4, title: "Branding", image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U0VPJTIwbWFya2V0aW5nfGVufDB8fDB8fHww", link: "/services/branding" },
  { id: 5, title: "Content Creation", image: "https://images.unsplash.com/photo-1764664035176-8e92ff4f128e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29udGVudCUyMGNyZWF0aW9uJTIwbWFya2V0aW5nfGVufDB8fDB8fHww", link: "/services/content-creation" },
  { id: 6, title: "Web Development", image: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnQlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D", link: "/services/web-development" }
];

const duplicated = [...data, ...data];

export default function HeroSlider() {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const controlsRef = useRef<AnimationPlaybackControls | null>(null);

  // حساب العرض
  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  // تشغيل animation
  const startAnimation = () => {
    controlsRef.current = animate(x, [x.get(), -width], {
      ease: "linear",
      duration: 20,
      repeat: Infinity
    });
  };

  useEffect(() => {
    if (width) startAnimation();
    return () => controlsRef.current?.stop();
  }, [width]);

  // hover
  const handleMouseEnter = () => {
    controlsRef.current?.stop();
  };

  const handleMouseLeave = () => {
    if (!isDragging) startAnimation();
  };

  return (
    <div className="py-10">
        <main
        className="overflow-hidden w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        <motion.div
            ref={containerRef}
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -width, right: 0 }}
            onDragStart={() => {
            setIsDragging(true);
            controlsRef.current?.stop();
            }}
            onDragEnd={() => {
            setIsDragging(false);
            startAnimation();
            }}
            className={`flex gap-4 px-4 ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
        >
            {duplicated.map((item, index) => (
            <div
                key={index}
                className="min-w-[280px] md:min-w-[320px] lg:min-w-[360px]"
            >
                <Link href={item.link} className="block relative group">
                
                <div className="overflow-hidden rounded-2xl">
                    <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-end p-4">
                    <h3 className="text-white text-sm md:text-base font-semibold">
                    {item.title}
                    </h3>
                </div>

                </Link>
            </div>
            ))}
        </motion.div>
        </main>
    </div>
  );
}