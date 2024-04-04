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
      <Certificate />
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
        <h2 className="text-2xl font-bold">Equity Tank</h2>
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
        <h2 className="text-2xl font-bold">Equity Tank</h2>
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
        <h2 className="text-2xl font-bold">Equity Tank</h2>
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
        <h2 className="text-2xl font-bold">Equity Tank</h2>
      </div>
    ),
  },
];
