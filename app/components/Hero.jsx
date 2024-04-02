"use client";
import * as React from "react";
import CarouselScroll from "./Carousel";

const images = [
  {
    img: "/banner/4.png",
  },

  {
    img: "/banner/2.png",
  },
  {
    img: "/banner/1.png",
  },
];
const Hero = () => {
  return <CarouselScroll images={images} timing={3000} />;
};

export default Hero;
