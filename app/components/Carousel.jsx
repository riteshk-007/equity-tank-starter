"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const CarouselScroll = ({ images, timing }) => {
  const plugin = React.useRef(
    Autoplay({ delay: timing, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images?.map((item, index) => (
          <CarouselItem key={index}>
            <div className="w-full  shadow-lg">
              <Image
                width={1920}
                height={1080}
                src={item.img}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselScroll;
