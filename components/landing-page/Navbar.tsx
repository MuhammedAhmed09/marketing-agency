"use client";

import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DropdownMenu } from "radix-ui";
import { useState } from "react";
import DropDownMenu from "../drop-down-menu";

const sections = [
    {id: 0, name: "Website Design"},
    {id: 1, name: "Graphic Design"},
    {id: 2, name: "Shopify Design"},
    {id: 3, name: "Brands"}
]

export default function Navbar() {
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);

    const toggleDropDown = () => {
        setIsDropDownVisible(!isDropDownVisible);
    }

    const closeDropDown = () => {
        setIsDropDownVisible(false);
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
                    <div className="hover:text-gray-50" key={section.id}>{section.name}</div>
                ))}    
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
      