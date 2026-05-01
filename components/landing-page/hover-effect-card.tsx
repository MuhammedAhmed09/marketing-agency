import { HoverEffect } from "../ui/card-hover-effect";
import { services } from "./hero-slider";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={services} />
    </div>
  );
}
