import CarouselScroll from "@/app/components/Carousel";
import Certificate from "@/app/components/Certificate";
import CourseCurriculum from "@/app/components/CourseCurriculum";
import Providing from "@/app/components/Providing";
import Course from "@/app/components/course/Course";
import Image from "next/image";
import React from "react";

const images = [
  {
    img: "/6.png",
  },
  {
    img: "/banner/2.png",
  },
];
export const metadata = {
  title: "Equity Tank - Online Course",
  description:
    "Online Course is specially designed to Learn Institutional Based Trading and Real Price Action Data Analysis. You’ll Learn to Trade on Smart Money Concept. This course will make your psychology strong and make you more accurate in your trading. At the end of your course, you’ll start doing trade like banks & Institutions.",
};
const OnliceCourse = () => {
  return (
    <div className="flex flex-col">
      <CarouselScroll images={images} timing={2000} />
      <h1 className="text-3xl md:text-5xl lg:text-6xl uppercase text-center font-bold bg-clip-text text-transparent bg-gradient-to-r  dark:from-[#00c2cb] dark:to-green-600  from-[#1a8085] to-green-400 mt-5">
        Our Online Course
      </h1>
      <div className="">
        <div className="flex items-center justify-center w-full my-5">
          <span className="text-xl md:text-2xl lg:text-4xl text-center font-bold text-[#03989e] dark:text-[#00c2cb]">
            Smart Traders Course
          </span>
        </div>
        <Course
          img={"/4.png"}
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
        <CourseCurriculum list={list} />
      </div>
      <div className="">
        <div className="flex items-center justify-center w-full my-5">
          <span className="text-xl md:text-2xl lg:text-4xl text-center font-bold text-[#03989e] dark:text-[#00c2cb]">
            ET – Futures & Options
          </span>
        </div>
        <Course
          img={"/5.png"}
          description1={
            "This Course is designed for Traders who want to learn about Futures & Options in depth and also want to trade in specially options."
          }
          description2={
            "This course is designed for those who want to trade options professionally, in this course you will get to know how options premium calculated with the help of Greeks. Whether the options premium is cheap or expensive, when to be an option buyer and when to be a seller. "
          }
          price={"2999"}
          discount={"6999"}
          message={"I am Interested in ET – Futures & Options"}
        />
        <CourseCurriculum list={list2} />
        <Providing />
        <Certificate img={"/certificate/futures-options.png"} />
      </div>
    </div>
  );
};

export default OnliceCourse;

const list = [
  {
    title: "Level 1",
    description: [
      "Importance of Price Action",
      "Demand & Supply theory – Data Based",
      "Trading on Multiple Time Frames ",
      "How to pick a perfect time frame based on your trading style   ",
    ],
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white rounded-lg shadow-lg">
        <Image
          src="/chart/1.jpeg"
          width={800}
          height={500}
          className="h-full w-full object-cover border-[#00c2cb] border-2 rounded-lg shadow-lg"
          alt="chart"
        />
      </div>
    ),
  },
  {
    title: "Level 2",
    description: [
      "How to scan stock in the live market",
      "Trend Analysis",
      "Risk Management & Position size",
      "How to Analyse a Sector to Find the blockbuster opportunity",
    ],
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/chart/2.jpeg"
          width={800}
          height={500}
          className="h-full w-full object-cover border-[#00c2cb] border-2 rounded-lg shadow-lg"
          alt="chart"
        />
      </div>
    ),
  },
  {
    title: "Level 3",
    description: [
      "Moving Average (Simple, Exponential, Linearly Weighted) ",
      "Algo Trader (How we can take advantage from them)",
      "Market Traps",
      "Trading against the Trend",
    ],
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/chart/3.jpeg"
          width={800}
          height={500}
          className="h-full w-full object-cover border-[#00c2cb] border-2 rounded-lg shadow-lg"
          alt="chart"
        />
      </div>
    ),
  },
  {
    title: "Level 4",
    description: [
      "Conventional patterns V/s Demand & Supply",
      "Gap Theory",
      "Trading Indicators with Demand & Supply",
      "Trading Psychology- How to overcome fear and greed ",
    ],
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/chart/4.jpeg"
          width={800}
          height={500}
          className="h-full w-full object-cover border-[#00c2cb] border-2 rounded-lg shadow-lg"
          alt="chart"
        />
      </div>
    ),
  },
];
const list2 = [
  {
    title: "Level 1",
    description: [
      "Options Foundation",
      "Why trade Options ",
      "Benefits of Trading Options",
      "Risk Correlations",
      "Intrinsic Value / Time Value",
    ],
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white rounded-lg shadow-lg">
        <Image
          src="/chart/1.jpeg"
          width={800}
          height={500}
          className="h-full w-full object-cover border-[#00c2cb] border-2 rounded-lg shadow-lg"
          alt="chart"
        />
      </div>
    ),
  },
  {
    title: "Level 2",
    description: [
      "Breakeven",
      "Moneyness : (ITM/ATM/OTM) ",
      "Options Buying vs. Options Selling",
      "Importance & Risk factor of Options writing ",
      "How to choose the right strike and expiry",
    ],
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/chart/2.jpeg"
          width={800}
          height={500}
          className="h-full w-full object-cover border-[#00c2cb] border-2 rounded-lg shadow-lg"
          alt="chart"
        />
      </div>
    ),
  },
  {
    title: "Level 3",
    description: [
      "Implied Volatility - The game changer for Options premium",
      "Delta/Theta/Vega/Gamma/Rho ",
      "Long Call (Debit) / Long Put (Debit) / Short Call (Credit) / Short Put (Credit) ",
      "Anchor Unit and Offset Unit",
      "Multi-leg Strategies ",
    ],
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/chart/3.jpeg"
          width={800}
          height={500}
          className="h-full w-full object-cover border-[#00c2cb] border-2 rounded-lg shadow-lg"
          alt="chart"
        />
      </div>
    ),
  },
  {
    title: "Level 4",
    description: [
      "Non-directional Strategies",
      "Other Strategies ",
      "Role of Open Interest ",
      "Options for Rental Income",
    ],
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/chart/4.jpeg"
          width={800}
          height={500}
          className="h-full w-full object-cover border-[#00c2cb] border-2 rounded-lg shadow-lg"
          alt="chart"
        />
      </div>
    ),
  },
];
