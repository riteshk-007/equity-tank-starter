import { MdOutlineTimer } from "react-icons/md";
import { RxLapTimer } from "react-icons/rx";
import { FaCalendarDays } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import Image from "next/image";
const Course = ({
  description1,
  description2,
  price,
  discount,
  message,
  img,
}) => {
  return (
    <div className="flex items-center justify-center flex-col lg:flex-row px-2 py-1">
      <div className="w-full lg:w-[60%]">
        <Image
          src={img}
          width={1920}
          height={1080}
          alt="Resources"
          className=" w-full rounded-2xl shadow-md border-2 dark:border-gray-900"
        />
      </div>
      <div className="w-full p-4 lg:w-[40%] flex items-center justify-center flex-col shadow-md mt-5 rounded-lg border-2 dark:bg-gray-950  m-1">
        <p className="text-start text-base text-gray-800 dark:text-gray-300">
          {description1}
        </p>
        <p className="text-start text-base text-gray-800 dark:text-gray-200">
          {description2}
        </p>
        <div className="w-full flex md:items-center flex-col md:flex-row justify-center bg-gray-200 rounded dark:bg-gray-900 my-3">
          <div className="sm:w-1/2 flex items-start justify-center px-2 py-1 flex-col space-y-3 my-3">
            <span className="text-sm md:text-base text-gray-800 dark:text-gray-300 flex items-center justify-center gap-1 md:gap-2 font-semibold">
              <MdOutlineTimer className="text-2xl text-[#03989e] dark:text-[#00c2cb]" />
              <span>
                Duration:{" "}
                <span className="text-[#03989e] dark:text-[#00c2cb] mx-1">
                  3 Months
                </span>
              </span>
            </span>

            <span className="text-sm md:text-base text-gray-800 dark:text-gray-300 flex items-center justify-center gap-1 md:gap-2 font-semibold">
              <RxLapTimer className="text-2xl text-[#03989e] dark:text-[#00c2cb]" />
              <span>
                Timing:{" "}
                <span className="text-[#03989e] dark:text-[#00c2cb] mx-1">
                  1 Hour in a Day
                </span>
              </span>
            </span>

            <span className="text-sm md:text-base text-gray-800 dark:text-gray-300 flex items-center justify-center gap-1 md:gap-2 font-semibold">
              <FaCalendarDays className="text-2xl text-[#03989e] dark:text-[#00c2cb]" />
              <span>
                Days:{" "}
                <span className="text-[#03989e] dark:text-[#00c2cb] mx-1">
                  Alternate Days
                </span>
              </span>
            </span>
          </div>
          <div className="sm:w-1/2 flex items-end justify-center">
            <div className="w-full flex items-center justify-center px-2 py-1 md:flex-col space-y-1">
              <p>Price</p>
              <div className="flex flex-col items-center  justify-center mx-4 md:mx-0">
                <h1 className="text-[#03989e] dark:text-[#00c2cb] text-2xl font-bold flex gap-1">
                  <span className="text-[#03989e] dark:text-[#00c2cb] text-2xl md:text-4xl font-bold flex gap-1">
                    <FaRupeeSign className="text-2xl" />
                    {price}/-
                  </span>
                </h1>

                <span className="line-through text-gray-400 dark:text-gray-500">
                  {discount}/-
                </span>
              </div>

              <span className="text-sm text-gray-800 dark:text-gray-300">
                per month
              </span>
            </div>
          </div>
        </div>
        <span className="w-full flex items-center justify-center px-1 my-2">
          <a
            href={`https://wa.me/+919315071969?text=${message}`}
            target="_blank"
            className="w-full"
            rel="noreferrer"
          >
            <button className="bg-[#03989e] dark:bg-[#00c2cb] text-white font-bold px-2 py-3 rounded-md hover:bg-[#00c2cb] dark:hover:bg-[#03989e] transition duration-300 ease-in-out w-full">
              Join Now
            </button>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Course;
