import Image from "next/image";
import { PiTimerBold, PiStudentBold } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";
import { GrSystem } from "react-icons/gr";
import { BiRevision, BiCertification } from "react-icons/bi";
import { FaChartLine } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoIosStar } from "react-icons/io";
import { LiaStarHalf } from "react-icons/lia";
import { MdGroups } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";

const WhyChoose = () => {
  return (
    <div className="text-[#03989e] dark:text-[#00c2cb] w-full mx-auto flex items-center justify-center p-3 sm:p-4 md:p-5 flex-col bg-white dark:bg-gray-950">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 text-center">
        Why Choose Equity Tank?
      </h1>
      <div className="flex flex-col md:flex-row w-full items-center justify-center p-5 md:p-10">
        <div className="w-full md:w-1/2 flex items-center justify-center bg-cover">
          <Image
            width={400}
            height={300}
            src="https://images.unsplash.com/photo-1682687982049-b3d433368cd1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Equity Tank"
            className="rounded-lg"
          />
        </div>
        <span className="text-xs lg:text-sm  mx-2  text-gray-700 dark:text-gray-300 text-start w-full md:w-1/2  my-3 flex flex-col">
          <p className="my-2 capitalize  font-semibold">
            We Simplified Chart Trading !
          </p>
          <p className="my-2 ">
            Equity Tank Institute is focusing on evolving Traders, With Lifetime
            mentorship and one-on-one guidance to all our students. Our goal is
            to build a strong community of traders.
          </p>
        </span>
      </div>
      <p className="text-sm sm:text-md md:text-lg lg:text-xl font-semibold text-center text-[#03989e] dark:text-[#00c2cb] p-3 sm:p-4 md:p-5 flex gap-2">
        We Are Providing Various Additional Services To Our Students
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-5 ">
        {Services.map((service) => (
          <div
            key={service.id}
            className="flex items-center justify-start gap-2 p-2 sm:p-3 md:p-4  rounded-lg"
          >
            <span className="text-white rounded dark:text-white p-3 text-sm sm:text-md md:text-lg lg:text-2xl bg-[#03989e] dark:bg-[#00c2cb]">
              {service.icon}
            </span>
            <span className="text-black dark:text-white text-sm sm:text-md md:text-base">
              {service.title}
            </span>
          </div>
        ))}
      </div>

      <div className=" mt-5 w-full">
        <div className="pb-20">
          <div className="mx-auto  h-96">
            <div className="mx-auto container w-full flex flex-col justify-center items-center">
              <div className="flex justify-center items-center flex-col">
                <div className="mt-20">
                  <h2 className="lg:text-6xl md:text-5xl text-2xl font-black text-center leading-10 text-[#03989e] dark:text-[#00c2cb] ">
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
              <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-44 lg:w-56 lg:h-40 dark:bg-gray-200  bg-gray-900 shadow rounded-2xl">
                <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center dark:text-gray-600 text-gray-200 flex items-center justify-center gap-2">
                  <FcGoogle fontSize={40} /> Reviews
                </p>
                <h2 className="lg:text-3xl md:text-2xl text-xl font-extrabold leading-10 text-center text-gray-200 dark:text-gray-800">
                  4.6 Ratings
                </h2>
                <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center  flex items-center justify-center gap-1 text-yellow-400">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <LiaStarHalf />
                </p>
              </div>
              <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-44 lg:w-56 lg:h-40 dark:bg-gray-200  bg-gray-900 shadow rounded-2xl">
                <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center dark:text-gray-600 text-gray-200 flex items-center justify-center gap-2">
                  <MdGroups fontSize={40} />
                </p>
                <h2 className="lg:text-xl md:text-lg text-base font-extrabold leading-10 px-2 text-center text-gray-200 dark:text-gray-800">
                  1500+ Session Completed
                </h2>
              </div>
              <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-44 lg:w-56 lg:h-40 dark:bg-gray-200  bg-gray-900 shadow rounded-2xl">
                <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center dark:text-gray-600 text-gray-200 flex items-center justify-center gap-2">
                  <GiTeacher fontSize={40} />
                </p>
                <h2 className="lg:text-xl md:text-lg text-base font-extrabold leading-10 px-2 text-center text-gray-200 dark:text-gray-800">
                  13 Dedicated Mentors
                </h2>
              </div>
              <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-44 lg:w-56 lg:h-40 dark:bg-gray-200  bg-gray-900 shadow rounded-2xl">
                <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center dark:text-gray-600 text-gray-200 flex items-center justify-center gap-2">
                  <PiStudentBold fontSize={40} />
                </p>
                <h2 className="lg:text-xl md:text-lg text-base font-extrabold leading-10 px-2 text-center text-gray-200 dark:text-gray-800">
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

const Services = [
  {
    id: 1,
    title: "Lifetime Mentorship Support",
    icon: <PiTimerBold />,
  },
  {
    id: 2,
    title: "Advance Price Action Guidance ",
    icon: <IoPricetagsOutline />,
  },
  {
    id: 3,
    title: "Trading System Guidance",
    icon: <GrSystem />,
  },
  {
    id: 4,
    title: "Revision Classes ",
    icon: <BiRevision />,
  },
  {
    id: 5,
    title: "Convert Yourself Into A Pro",
    icon: <FaChartLine />,
  },
  {
    id: 6,
    title: "Equity Tank ISO Certification",
    icon: <BiCertification />,
  },
];
