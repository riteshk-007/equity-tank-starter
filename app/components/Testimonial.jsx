"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Map from "./Map";
export function Testimonial() {
  return (
    <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center dark:text-[#00c2cb] text-[#03989e] mt-10 mb-10">
        Testimonials
      </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />

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

const testimonials = [
  {
    review:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Shyam",
    star: 5,
  },
  {
    review:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "Dinesh",
    star: 5,
  },
  {
    review: "All that we see or seem is but a dream within a dream.",
    name: "Krishna",
    star: 4.5,
  },
  {
    review:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Rahul Rao",
    star: 5,
  },
  {
    review:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Shubham",
    star: 5,
  },
];
