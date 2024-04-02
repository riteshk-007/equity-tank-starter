import Image from "next/image";
import Link from "next/link";

const Know = () => {
  return (
    <div>
      <div className="2xl:mx-auto 2xl:container md:px-20 px-4 md:py-12 py-9">
        <div className="relative rounded-md">
          <Image
            width={1920}
            height={80}
            src="/money.jpeg"
            alt="money"
            className="w-full h-full rounded-md  object-center object-fill absolute block filter brightness-75 "
          />

          <div className="text-xl relative z-20 bg-gradient-to-r from-[#287e83] to-transparent w-full h-full  top-0 md:p-16 p-6 flex flex-col justify-between rounded-md ">
            <div>
              <h1 className="md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64">
                We Know The Value Of Your Trust !!
              </h1>
              <span className="text-lg leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12  2xl:pr-12 mt-4">
                On Path To Become India’s Best Affordable & Trustable <br />{" "}
                <p className="font-semibold my-2">Stock Market Institute</p>
              </span>
            </div>
            <Link href="/about" className="md:mt-12 mt-20">
              <button className="text-base font-medium leading-4 text-[#00c2cb] dark:bg-black  sm:w-auto w-full rounded p-4 focus:outline-none bg-gray-100 focus:ring-2 focus:ring-offset-1 focus:ring-[#00c2cb]">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Know;
