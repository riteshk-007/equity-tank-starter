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
const FuturesOptions = () => {
  return (
    <div className="flex flex-col w-full">
      <CarouselScroll images={images} timing={2000} />
      <Pagination
        num={3}
        rightLink={"/foundation"}
        leftLink={"/smart-traders"}
      />
      <div className="flex items-center justify-center w-full my-5">
        <span className="text-3xl md:text-5xl lg:text-6xl text-center font-bold text-[#03989e] dark:text-[#00c2cb]">
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
      <CourseCurriculum list={list} />

      <Providing />
      <Certificate />
    </div>
  );
};

export default FuturesOptions;

const list = [
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
        <h2 className="text-2xl font-bold">Equity Tank</h2>
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
        <h2 className="text-2xl font-bold">Equity Tank</h2>
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
        <h2 className="text-2xl font-bold">Equity Tank</h2>
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
        <h2 className="text-2xl font-bold">Equity Tank</h2>
      </div>
    ),
  },
];
