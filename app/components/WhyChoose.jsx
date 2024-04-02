import Image from "next/image";
import { PiStudentBold } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { IoIosStar } from "react-icons/io";
import { LiaStarHalf } from "react-icons/lia";
import { MdGroups } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import Providing from "./Providing";
import Link from "next/link";

const WhyChoose = () => {
  return (
    <div className="text-[#03989e] dark:text-[#00c2cb] w-full flex flex-col items-center justify-center gap-2 md:gap-4  bg-gray-100 dark:bg-black/30">
      <div className="py-14">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden lg:block">
              <Image
                width={774}
                height={516}
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="md:max-w-lg sm:rounded-lg"
                alt="know me"
              />
            </div>
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              <h3 className="text-[#03989e] dark:text-[#00c2cb] font-semibold">
                Professional services
              </h3>
              <h2 className="text-gray-800 text-3xl dark:text-gray-400  font-semibold sm:text-4xl">
                Why Choose Equity Tank?
              </h2>
              <h4 className="text-gray-800  dark:text-gray-400 text-xl font-semibold sm:text-2xl">
                We Simplified Chart Trading !
              </h4>
              <p className="mt-3 text-gray-600 dark:text-gray-200">
                Equity Tank Institute is focusing on evolving Traders, With
                Lifetime mentorship and one-on-one guidance to all our students.
                Our goal is to build a strong community of traders.
              </p>
              <Link
                href="/about"
                className="inline-flex gap-x-1 items-center text-[#03989e] dark:text-[#00c2cb] hover:text-[#2f9194] duration-150 font-medium"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Providing />
      <div className=" mt-5 w-full p-5">
        <div className="pb-20">
          <div className="mx-auto  h-96">
            <div className="mx-auto container w-full flex flex-col justify-center items-center">
              <div className="flex justify-center items-center flex-col">
                <div className="mt-20">
                  <h2 className="lg:text-6xl md:text-5xl text-2xl font-black text-center  text-[#03989e] dark:text-[#00c2cb] ">
                    Why Choose Us?
                  </h2>
                </div>
                <div className=" mx-2 md:mx-0 text-center">
                  <p className="lg:text-lg md:text-base leading-6 text-sm  dark:text-gray-200 text-gray-800">
                    Equity Tank, Delhi&apos;s premier stock market institute
                    since 2021, offers top-notch courses, guiding the young
                    generation towards financial freedom. We dispel myths,
                    providing strategies for exceptional trading results.
                    Trusted excellence awaits.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto container  md:-mt-28 -mt-20 flex justify-center items-center">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6 ">
              <div className="flex justify-center flex-col items-center w-32 h-32 m-2 md:w-44 md:h-44 lg:w-56 lg:h-40 dark:bg-gray-200  bg-gray-900 shadow rounded-2xl">
                <p className="mt-1 md:mt-4 text-sm md:text-base lg:text-lg leading-none text-center dark:text-gray-600 text-gray-200 flex items-center justify-center gap-2">
                  <FcGoogle fontSize={40} /> Reviews
                </p>
                <h2 className="lg:text-3xl md:text-2xl text-xl font-extrabold  text-center text-gray-200 dark:text-gray-800">
                  4.6 Ratings
                </h2>
                <p className="mt-1 md:mt-4 text-sm md:text-base lg:text-lg leading-none text-center  flex items-center justify-center gap-1 text-yellow-400">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <LiaStarHalf />
                </p>
              </div>
              <div className="flex justify-center flex-col items-center w-32 h-32 m-2 md:w-44 md:h-44 lg:w-56 lg:h-40 dark:bg-gray-200  bg-gray-900 shadow rounded-2xl">
                <p className="mt-1 md:mt-4 text-sm md:text-base lg:text-lg leading-none text-center dark:text-gray-600 text-gray-200 flex items-center justify-center gap-2">
                  <MdGroups fontSize={40} />
                </p>
                <h2 className="lg:text-xl md:text-lg text-base font-extrabold  px-2 text-center text-gray-200 dark:text-gray-800">
                  1500+ Session Completed
                </h2>
              </div>
              <div className="flex justify-center flex-col items-center w-32 h-32 m-2 md:w-44 md:h-44 lg:w-56 lg:h-40 dark:bg-gray-200  bg-gray-900 shadow rounded-2xl">
                <p className="mt-1 md:mt-4 text-sm md:text-base lg:text-lg leading-none text-center dark:text-gray-600 text-gray-200 flex items-center justify-center gap-2">
                  <GiTeacher fontSize={40} />
                </p>
                <h2 className="lg:text-xl md:text-lg text-base font-extrabold  px-2 text-center text-gray-200 dark:text-gray-800">
                  13 Dedicated Mentors
                </h2>
              </div>
              <div className="flex justify-center flex-col items-center w-32 h-32 m-2 md:w-44 md:h-44 lg:w-56 lg:h-40 dark:bg-gray-200  bg-gray-900 shadow rounded-2xl">
                <p className="mt-1 md:mt-4 text-sm md:text-base lg:text-lg leading-none text-center dark:text-gray-600 text-gray-200 flex items-center justify-center gap-2">
                  <PiStudentBold fontSize={40} />
                </p>
                <h2 className="lg:text-xl md:text-lg text-base font-extrabold  px-2 text-center text-gray-200 dark:text-gray-800">
                  100+ Student Trained Offline
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
