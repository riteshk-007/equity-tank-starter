import CarouselScroll from "@/app/components/Carousel";
import Certificate from "@/app/components/Certificate";
import Providing from "@/app/components/Providing";
import Course from "@/app/components/course/Course";
import Curriculum from "@/app/components/course/Curriculum";
import Link from "next/link";
import { IoMdArrowDropleft } from "react-icons/io";

const images = [
  {
    img: "/banner/1.png",
  },
  {
    img: "/banner/2.png",
  },
];
const FuturesOptions = () => {
  return (
    <div className="flex flex-col w-full">
      <CarouselScroll images={images} timing={2000} />
      <div className="flex mx-auto items-center justify-center gap-2 my-5">
        <Link href={"/smart-traders"}>
          <IoMdArrowDropleft
            fontSize={35}
            className="text-[#03989e] dark:text-[#00c2cb] cursor-pointer"
          />
        </Link>
        <span className="text-2xl font-bold">3</span>
      </div>
      <Course
        img={"/banner/1.png"}
        title={"ET – Futures & Options"}
        description1={
          "This Course is designed for Traders who want to learn about Futures & OpƟons in depth and also want to trade in specially options."
        }
        description2={
          "This course is designed for those who want to trade options professionally, in this course you will get to know how options premium calculated with the help of Greeks. Whether the options premium is cheap or expensive, when to be an option buyer and when to be a seller. "
        }
        price={"2999"}
        discount={"6999"}
        message={"I am Interested in ET – Futures & Options"}
      />
      <Curriculum />
      <Providing />
      <Certificate />
    </div>
  );
};

export default FuturesOptions;
