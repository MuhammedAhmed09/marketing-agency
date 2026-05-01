"use client";

import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DropDownMenu from "../drop-down-menu";
import { useRouter } from "next/navigation";

const sections = [
    {id: 0, name: "Website Design", section: "website"},
    {id: 1, name: "Graphic Design", section: "graphic"},
    {id: 2, name: "Shopify Design", section: "shopify"},
    {id: 3, name: "Brands", section: "brands"}
]

export default function Navbar() {
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);

    const router = useRouter();

    const toggleDropDown = () => {
        setIsDropDownVisible(!isDropDownVisible);
    }

    const closeDropDown = () => {
        setIsDropDownVisible(false);
    }

    const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
        e.preventDefault();

        if(window.location.pathname !== "/") {
            router.push(`/#${section}`);
            return;
        }
        document.querySelector(`#${section}`)?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <nav className="p-6 md:p-10 w-full flex items-center justify-between z-50">
            <Link href={"/"}>
                <Image
                    priority
                    width={100}
                    height={100}
                    src={"/logo2.svg"}
                    alt="ViralOps Marketing"
                    className="h-10 w-full md:h-14"
                />
            </Link>

            <div 
                className="cursor-pointer hidden md:flex
                mx-10 space-x-10 items-center text-slate-300 text-center
                bg-clip-text text-transparent bg-linear-to-b from-neutral-50
                to bg-neutral-400 bg-opacity-50"
            >
                {sections.map((section) => (
                    <Link 
                        href={`/#${section.section}`} 
                        className="hover:text-gray-50 scroll-smooth text-xl md:text-2xl font-medium" 
                        key={section.id}
                        onClick={(e) => handleSectionClick(e, section.section)}
                    >
                        {section.name}
                    </Link>
                ))}    

                <Link
                    href={"/pricing"}
                    className="hover:text-gray-50 scroll-smooth text-xl md:text-2xl font-medium"
                >
                    Pricing
                </Link>
            </div>

            <div className="flex md:hidden">
                {isDropDownVisible ? (
                    <div 
                        onClick={toggleDropDown}
                        className="w-8 h-8 text-slate-300 cursor-pointer"
                    >
                        <X size={28}/>
                        <DropDownMenu onClose={closeDropDown} />
                    </div>
                ) : (
                    <AlignJustify
                        onClick={toggleDropDown}
                        size={28}
                        className="w-8 h-8 text-slate-300 cursor-pointer"
                    />
                )}
            </div>

            <div className="hidden md:flex">
                <Link 
                    href={"/contact"}
                    className="inline-flex h-12 shimmer-button"
                >
                    Contact
                </Link>            
            </div>
        </nav>
    )
}
      