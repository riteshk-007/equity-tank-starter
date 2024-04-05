"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Map from "./Map";
import { review } from "@/data/review.js";

export function Testimonial() {
  return (
    <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center dark:text-[#00c2cb] text-[#03989e] mt-10 mb-10">
        Testimonials
      </h1>
      <InfiniteMovingCards items={review} direction="right" speed="noraml" />

      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-center mt-10 mb-10">
        To Get Quick Information
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl font-bold text-center dark:text-[#00c2cb] text-[#03989e] ">
        Contact Us On : +91 9315071969
      </p>

      <Map />
    </div>
  );
}
