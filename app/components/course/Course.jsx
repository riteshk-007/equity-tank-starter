import { MdOutlineTimer } from "react-icons/md";
import { RxLapTimer } from "react-icons/rx";
import { FaCalendarDays } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import CarouselScroll from "../Carousel";
const images = [
  {
    img: "/banner/1.png",
  },
  {
    img: "/banner/2.png",
  },
];

const Course = ({
  title,
  description1,
  description2,
  price,
  discount,
  message,
}) => {
  return (
    <div className="flex items-center justify-center flex-col md:flex-row p-2">
      <div className="w-full md:w-1/2">
        <CarouselScroll images={images} timing={2500} />
      </div>
      <div className="w-full p-1 md:w-1/2 flex items-center justify-center flex-col shadow-md mt-5 rounded-lg border  m-1">
        <span className="md:text-2xl text-lg font-bold text-[#03989e] dark:text-[#00c2cb]  text-center">
          {title}
        </span>
        <p className="text-start text-sm text-gray-800 dark:text-gray-300 p-1">
          {description1}
        </p>
        <p className="text-start text-sm text-gray-800 dark:text-gray-200 p-1 font-semibold">
          {description2}
        </p>
        <div className="w-full border flex items-center justify-center bg-gray-200 rounded dark:bg-gray-900 my-3">
          <div className="lg:w-1/2 flex items-start justify-center p-2 flex-col space-y-3 my-3">
            <span className="text-xs md:text-sm text-gray-800 dark:text-gray-300 flex items-center justify-center gap-3 font-semibold">
              <MdOutlineTimer className="text-2xl text-[#03989e] dark:text-[#00c2cb]" />
              <span>
                Duration:{" "}
                <span className="text-[#03989e] dark:text-[#00c2cb] mx-2">
                  3 Months
                </span>
              </span>
            </span>

            <span className="text-xs md:text-sm text-gray-800 dark:text-gray-300 flex items-center justify-center gap-3 font-semibold">
              <RxLapTimer className="text-2xl text-[#03989e] dark:text-[#00c2cb]" />
              <span>
                Timing:{" "}
                <span className="text-[#03989e] dark:text-[#00c2cb] mx-2">
                  1 Hour in a Day
                </span>
              </span>
            </span>

            <span className="text-xs md:text-sm text-gray-800 dark:text-gray-300 flex items-center justify-center gap-3 font-semibold">
              <FaCalendarDays className="text-2xl text-[#03989e] dark:text-[#00c2cb]" />
              <span>
                Days:{" "}
                <span className="text-[#03989e] dark:text-[#00c2cb] mx-2">
                  Alternate Days
                </span>
              </span>
            </span>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center p-2 flex-col space-y-1">
            <p>Price</p>
            <h1 className="text-[#03989e] dark:text-[#00c2cb] text-2xl font-bold flex gap-1">
              <span className="text-[#03989e] dark:text-[#00c2cb] text-2xl font-bold flex gap-1">
                <FaRupeeSign className="text-2xl" />
                {price}/-
              </span>
            </h1>

            <span className="line-through text-gray-400 dark:text-gray-500">
              {discount}/-
            </span>

            <span className="text-sm text-gray-800 dark:text-gray-300">
              per month
            </span>
          </div>
        </div>
        <span className="w-full flex items-center justify-center px-1 my-2">
          <a
            href={`https://wa.me/+918750475852?text=${message}`}
            target="_blank"
            className="w-full"
            rel="noreferrer"
          >
            <button className="bg-[#03989e] dark:bg-[#00c2cb] text-white font-bold p-2 rounded-md hover:bg-[#00c2cb] dark:hover:bg-[#03989e] transition duration-300 ease-in-out w-full">
              Join Now
            </button>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Course;
