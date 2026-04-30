"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        
        {/* Project Name */}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Fashion Store
        </CardItem>

        {/* Project Description */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          A full-featured fashion e-commerce store — modern design, smooth user experience, and high performance.
        </CardItem>

        {/* Project Image */}
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://plus.unsplash.com/premium_photo-1683288662019-c92caea8276d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="Fashion Store website preview"
          />
        </CardItem>

        <div className="flex justify-between items-center mt-20">
          {/* Visit Link */}
          <CardItem
            translateZ={20}
            as="a"
            href="https://fashion-store-amber.vercel.app/"
            target="_blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Visit Site →
          </CardItem>

          {/* CTA Button */}
          <CardItem
            translateZ={20}
            as="a"
            href="https://fashion-store-amber.vercel.app/"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            View Project
          </CardItem>
        </div>

      </CardBody>
    </CardContainer>
  );
}