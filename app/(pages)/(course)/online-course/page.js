import CarouselScroll from "@/app/components/Carousel";
import Course from "@/app/components/course/Course";
import React from "react";

const images = [
  {
    img: "/banner/1.png",
  },
  {
    img: "/banner/2.png",
  },
  {
    img: "/banner/3.png",
  },
];
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
      <div className="">
        <div className="flex items-center justify-center w-full my-5">
          <span className="text-xl md:text-2xl lg:text-4xl text-center font-bold text-[#03989e] dark:text-[#00c2cb]">
            ET – Futures & Options
          </span>
        </div>
        <Course
          img={"/banner/1.png"}
          title={"ET – Futures & Options"}
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
      </div>
    </div>
  );
};

export default OnliceCourse;
