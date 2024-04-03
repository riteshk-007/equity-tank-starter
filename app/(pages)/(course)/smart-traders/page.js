import CarouselScroll from "@/app/components/Carousel";
import Certificate from "@/app/components/Certificate";
import CourseCurriculum from "@/app/components/CourseCurriculum";
import Pagination from "@/app/components/Pagination";
import Providing from "@/app/components/Providing";
import Course from "@/app/components/course/Course";

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
      <CarouselScroll images={images} timing={2000} />
      <Pagination
        num={2}
        rightLink={"/futures-options"}
        leftLink={"/foundation"}
      />
      <div className="flex items-center justify-center w-full my-5">
        <span className="text-3xl md:text-5xl lg:text-6xl text-center font-bold text-[#03989e] dark:text-[#00c2cb]">
          Smart Traders Course
        </span>
      </div>
      <Course
        img={
          "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
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

export default SmartTraders;

const list1 = [
  "Importance of Price Action",
  "Demand & Supply theory – Data Based",
  "Trading on Multiple Time Frames ",
  "How to pick a perfect time frame based on your trading style   ",
];
const list2 = [
  "How to scan stock in the live market",
  "Trend Analysis",
  "Risk Management & Position size",
  "How to Analyse a Sector to Find the blockbuster opportunity",
];
const list3 = [
  "Moving Average (Simple, Exponential, Linearly Weighted) ",
  "Algo Trader (How we can take advantage from them)",
  "Market Traps",
  "Trading against the Trend",
];
const list4 = [
  "Conventional patterns V/s Demand & Supply",
  "Gap Theory",
  "Trading Indicators with Demand & Supply",
  "Trading Psychology- How to overcome fear and greed ",
];
