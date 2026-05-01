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

export const services = [
  {
    id: 1,
    icon: "📱",
    title: "Social Media Management",
    description:
      "We grow your brand's presence across all social platforms with engaging content and data-driven strategies.",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=500&auto=format&fit=crop&q=60",
    link: "/services/social-media-marketing",
  },
  {
    id: 2,
    icon: "🔍",
    title: "SEO Optimization",
    description:
      "We boost your search rankings and drive organic traffic with proven on-page and off-page SEO techniques.",
    image: "https://images.unsplash.com/photo-1674027001840-1a3e834eb73f?w=500&auto=format&fit=crop&q=60",
    link: "/services/seo",
  },
  {
    id: 3,
    icon: "📢",
    title: "Paid Advertising",
    description:
      "We run high-ROI ad campaigns on Google, Meta, and TikTok that reach the right audience at the right time.",
    image: "https://images.unsplash.com/photo-1631270315847-f418bde47ca6?q=80&w=870&auto=format&fit=crop",
    link: "/services/paid-ads",
  },
  {
    id: 4,
    icon: "✦",
    title: "Branding & Identity",
    description:
      "We create memorable brand identities — from logos to full style guides — that set you apart from the competition.",
    image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?w=500&auto=format&fit=crop&q=60",
    link: "/services/branding",
  },
  {
    id: 5,
    icon: "✍️",
    title: "Content Creation",
    description:
      "We produce compelling written, visual, and video content that tells your story and drives real engagement.",
    image: "https://images.unsplash.com/photo-1764664035176-8e92ff4f128e?w=500&auto=format&fit=crop&q=60",
    link: "/services/content-creation",
  },
  {
    id: 6,
    icon: "🎨",
    title: "Web Development",
    description:
      "We craft visually stunning, high-converting websites tailored to your brand identity and business goals.",
    image: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=500&auto=format&fit=crop&q=60",
    link: "/services/web-development",
  },
];

const duplicated = [...services, ...services];

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
      linear: "ease",
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
        className={`overflow-hidden w-full ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
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
            <Link 
              href={item.link} 
              className="block relative group"
              style={{ cursor: "inherit" }}
              draggable={false}  
            >
              <div className="overflow-hidden rounded-2xl" draggable={false}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                    draggable={false}
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