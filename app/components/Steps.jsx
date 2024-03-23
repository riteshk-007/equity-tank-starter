// BrokenCard.js

import Image from "next/image";
import React from "react";

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
                    <Image
                      width={100}
                      height={100}
                      src="https://images.unsplash.com/photo-1711075781376-bc5107736730?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Step 3"
                      className="h-full w-full object-cover rounded-full"
                    />
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
                    <Image
                      width={100}
                      height={100}
                      src="https://images.unsplash.com/photo-1711075781376-bc5107736730?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Step 3"
                      className="h-full w-full object-cover rounded-full"
                    />
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
                    <Image
                      width={100}
                      height={100}
                      src="https://images.unsplash.com/photo-1711075781376-bc5107736730?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Step 3"
                      className="h-full w-full object-cover rounded-full"
                    />
                  </div>
                  <span className="text-gray-500 dark:text-gray-200">STEP</span>
                </div>
                <div className="dark:bg-gray-200 bg-gray-50 dark:bg-transparent md:w-[700px] shadow-md border p-5 pb-10 rounded-md ">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900 dark:text-[#03989e]">
                    Join Classes
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-200">
                    Fill up Application Form And AƩend all classes and take
                    doubt session, do pracƟce with guidance.
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
