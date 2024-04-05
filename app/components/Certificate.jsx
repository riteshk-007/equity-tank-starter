import Image from "next/image";
import React from "react";

const Certificate = ({ img }) => {
  return (
    <div className=" w-full flex flex-col items-center justify-center gap-2 md:gap-4 p-5 bg-gray-100 dark:bg-black/30">
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-black text-center leading-10 gap-2">
        Yes, You’ll Be{" "}
        <span className="text-[#03989e] dark:text-[#00c2cb] ">CERTIFIED</span>{" "}
        For This Course
      </h1>
      <Image src={img} width={1920} height={1080} alt="Certificate" />
    </div>
  );
};

export default Certificate;
