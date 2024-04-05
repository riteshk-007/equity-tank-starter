import Image from "next/image";
import { GiBrain } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { FaHandshake } from "react-icons/fa";

const BrokenCard = () => {
  return (
    <div className="bg-gray-100 dark:bg-black">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
        <div className="text-center">
          <p className="mt-4 text-sm leading-7 text-gray-500 dark:text-[#00c2cb] font-regular">
            STEPS
          </p>
          <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900  dark:text-gray-200">
            How to{" "}
            <span className="dark:text-[#00c2cb] text-[#03989e]">Apply?</span>
          </h3>
        </div>

        <div className="mt-20">
          <ul className="">
            <li className="text-left mb-10">
              <div className="flex flex-col md:flex-row md:items-start gap-2">
                <div className="flex flex-col items-center justify-center mr-5">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-[#00c2cb] text-white border-4 border-gray-200 text-4xl font-semibold">
                    <GiBrain />
                  </div>
                  <span className="text-gray-500 dark:text-gray-200">STEP</span>
                </div>
                <div className="dark:bg-gray-200 bg-gray-50 dark:bg-transparent md:w-[700px] shadow-md border p-5 pb-10 rounded-md ">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900 dark:text-[#03989e]">
                    Make a Decision
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-200">
                    It’s time to become financial independent
                  </p>
                </div>
              </div>
            </li>
            <li className="text-left mb-10">
              <div className="flex flex-col md:flex-row md:items-start gap-2">
                <div className="flex flex-col items-center justify-center mr-5">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-[#00c2cb] text-white border-4 border-gray-200 text-4xl font-semibold">
                    <ImBooks />
                  </div>
                  <span className="text-gray-500 dark:text-gray-200">STEP</span>
                </div>
                <div className="dark:bg-gray-200 bg-gray-50 dark:bg-transparent md:w-[700px] shadow-md border p-5 pb-10 rounded-md ">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900 dark:text-[#03989e]">
                    Get Enrolment
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-200">
                    Contact Us & Our Team will Assist you
                  </p>
                </div>
              </div>
            </li>
            <li className="text-left mb-10">
              <div className="flex flex-col md:flex-row md:items-start gap-2">
                <div className="flex flex-col items-center justify-center mr-5">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-[#00c2cb] text-white border-4 border-gray-200 text-4xl font-semibold">
                    <FaHandshake />
                  </div>
                  <span className="text-gray-500 dark:text-gray-200">STEP</span>
                </div>
                <div className="dark:bg-gray-200 bg-gray-50 dark:bg-transparent md:w-[700px] shadow-md border p-5 pb-10 rounded-md ">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900 dark:text-[#03989e]">
                    Join Classes
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-200">
                    Fill up Application Form And Attend all classes and take
                    doubt session, do practice with guidance.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BrokenCard;
