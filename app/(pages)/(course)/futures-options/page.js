import CarouselScroll from "@/app/components/Carousel";
import Certificate from "@/app/components/Certificate";
import CourseCurriculum from "@/app/components/CourseCurriculum";
import Providing from "@/app/components/Providing";
import Course from "@/app/components/course/Course";
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
      <div className="flex items-center justify-center w-full my-5">
        <span className="text-3xl md:text-5xl lg:text-6xl text-center font-bold text-[#03989e] dark:text-[#00c2cb]">
          ET – Futures & Options
        </span>
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

export default FuturesOptions;

const list1 = [
  "Options Foundation",
  "Why trade Options ",
  "Benefits of Trading Options",
  "Risk Correlations",
  "Intrinsic Value / Time Value",
];
const list2 = [
  "Breakeven",
  "Moneyness : (ITM/ATM/OTM) ",
  "Options Buying vs. Options Selling",
  "Importance & Risk factor of Options writing ",
  "How to choose the right strike and expiry",
];
const list3 = [
  "Implied Volatility - The game changer for Options premium",
  "Delta/Theta/Vega/Gamma/Rho ",
  "Long Call (Debit) / Long Put (Debit) / Short Call (Credit) / Short Put (Credit) ",
  "Anchor Unit and Offset Unit",
  "Multi-leg Strategies ",
];
const list4 = [
  "Non-directional Strategies",
  "Other Strategies ",
  "Role of Open Interest ",
  "Options for Rental Income",
];
