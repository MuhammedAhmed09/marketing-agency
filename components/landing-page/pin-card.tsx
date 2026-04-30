"use client";
import { PinContainer } from "../ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center">
      <PinContainer
        title="Portfolio"
        href="https://muhammad-ahmad-0.vercel.app/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          
          {/* اسم المشروع */}
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            Portfolio
          </h3>

          {/* وصف */}
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              A showcase of my work — web design & development projects built with modern technologies.
            </span>
          </div>

          {/* Preview gradient */}
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />

        </div>
      </PinContainer>
    </div>
  );
}