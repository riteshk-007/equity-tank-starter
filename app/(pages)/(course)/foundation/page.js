import CarouselScroll from "@/app/components/Carousel";
import Certificate from "@/app/components/Certificate";
import Providing from "@/app/components/Providing";
import Course from "@/app/components/course/Course";
import Curriculum from "@/app/components/course/Curriculum";
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
      <Course
        img={"/banner/1.png"}
        title={"Stock Foundation Programme"}
        description1={
          "This Course is specially designed for beginners who want to learn from the scratch & to build a strong Fundamental & core knowledge of Technical Analysis. "
        }
        description2={
          "This course will make your foundaƟon strong about stock market. At the end of course, you will be able to pick a fundamentally strong share for invest and you will also start trading in stocks. "
        }
        price={"1999"}
        discount={"3999"}
        message={"I am Interested in Stock Foundation Programme"}
      />
      <Curriculum />
      <Providing />
      <Certificate />
    </div>
  );
};

export default Foundation;
