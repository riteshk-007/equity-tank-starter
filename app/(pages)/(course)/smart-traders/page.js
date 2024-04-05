import Certificate from "@/app/components/Certificate";
import CourseCurriculum from "@/app/components/CourseCurriculum";
import Pagination from "@/app/components/Pagination";
import Providing from "@/app/components/Providing";
import Course from "@/app/components/course/Course";
import Image from "next/image";

export const metadata = {
  title: "Equity Tank - Smart Traders Course",
  description:
    "Smart Traders Course is specially designed to Learn Institutional Based Trading and Real Price Action Data Analysis. You’ll Learn to Trade on Smart Money Concept. This course will make your psychology strong and make you more accurate in your trading. At the end of your course, you’ll start doing trade like banks & Institutions.",
};
const SmartTraders = () => {
  return (
    <div className="flex flex-col w-full">
      <Image src="/6.png" width={1920} height={1080} alt="smart-trades" />
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
      <Providing />
      <Certificate img={"/certificate/smart trader.png"} />
    </div>
  );
};

export default SmartTraders;

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
