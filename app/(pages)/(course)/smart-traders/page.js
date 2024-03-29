import CarouselScroll from "@/app/components/Carousel";
import Course from "@/app/components/course/Course";
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
      <Course
        img={"/banner/1.png"}
        title={"Smart Traders Course "}
        description1={
          "This Course is specially designed to Learn Institutional Based Trading and Real Price Action Data Analysis. You’ll Learn to Trade on Smart Money Concept."
        }
        description2={
          "This course will make your psychology strong and make you more accurate in your trading. At the end of your course, you’ll start doing trade like banks & Institutions."
        }
        price={"2499"}
        discount={"5999"}
        message={"I am Interested in Smart Traders Course"}
      />
    </div>
  );
};

export default SmartTraders;
