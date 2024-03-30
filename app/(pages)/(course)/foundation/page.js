import CarouselScroll from "@/app/components/Carousel";
import Certificate from "@/app/components/Certificate";
import CourseCurriculum from "@/app/components/CourseCurriculum";
import Providing from "@/app/components/Providing";
import Course from "@/app/components/course/Course";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

const images = [
  {
    img: "/banner/1.png",
  },
  {
    img: "/banner/2.png",
  },
];

const Foundation = () => {
  return (
    <div className="flex flex-col w-full">
      <CarouselScroll images={images} timing={2000} />

      <div className="flex mx-auto items-center justify-center gap-2 my-5">
        <span className="text-2xl font-bold">1</span>
        <Link href={"/smart-traders"}>
          <IoMdArrowDropright
            fontSize={35}
            className="text-[#03989e] dark:text-[#00c2cb] cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex items-center justify-center w-full my-5">
        <span className="text-3xl md:text-5xl lg:text-6xl text-center font-bold text-[#03989e] dark:text-[#00c2cb]">
          Stock Foundation Programme
        </span>
      </div>
      <Course
        img={"/banner/1.png"}
        title={"Stock Foundation Programme"}
        description1={
          "This Course is specially designed for beginners who want to learn from the scratch & to build a strong Fundamental & core knowledge of Technical Analysis. "
        }
        description2={
          "This course will make your foundation strong about stock market. At the end of course, you will be able to pick a fundamentally strong share for invest and you will also start trading in stocks. "
        }
        price={"1999"}
        discount={"3999"}
        message={"I am Interested in Stock Foundation Programme"}
      />
      <CourseCurriculum
        list1={list1}
        list2={list2}
        list3={list3}
        list4={list4}
      />
      <Providing />
      <Certificate />
    </div>
  );
};

export default Foundation;

const list1 = [
  "Basics of Stock Market – A to Z ",
  "Fundamental Analysis of Company & Industry",
  "Valuation Of Stocks",
  "Candlestick Patterns ",
];
const list2 = [
  "Wick Vs Body ",
  "Types of Traders & Trading styles",
  "Importance of Candle Closing ",
  "Time Frame Study",
];
const list3 = [
  "Chart Patterns",
  "Identifying Trends",
  "Support & Resistance",
  "Breakouts | Reversal | Retests ",
  "Multiple Websites Learning ",
];
const list4 = [
  "Gap Theory   ",
  "Indicators & Oscillators",
  "Stock Selection Process   ",
  "Risk Management",
  "Trading System",
];
