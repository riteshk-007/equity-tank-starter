import CarouselScroll from "@/app/components/Carousel";
import Link from "next/link";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";

const images = [
  {
    img: "/banner/1.png",
  },
  {
    img: "/banner/2.png",
  },
];
const SmartTraders = () => {
  return (
    <div className="flex flex-col w-full">
      <CarouselScroll images={images} />
      <div className="flex mx-auto items-center justify-center gap-2 my-5">
        <Link href={"/foundation"}>
          <IoMdArrowDropleft
            fontSize={35}
            className="text-[#03989e] dark:text-[#00c2cb] cursor-pointer"
          />
        </Link>
        <span className="text-2xl font-bold">2</span>
        <Link href={"/futures-options"}>
          <IoMdArrowDropright
            fontSize={35}
            className="text-[#03989e] dark:text-[#00c2cb] cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default SmartTraders;
