import Image from "next/image";
import React from "react";

const Resources = () => {
  return (
    <div className="text-[#03989e] dark:text-[#00c2cb] w-full flex flex-col items-center justify-center gap-2 md:gap-4  bg-gray-100 dark:bg-black/30">
      <Image
        src="/banner/3.png"
        width={1920}
        height={1080}
        alt="Resources"
        className="md:px-10 w-full"
      />

      <div className="flex flex-wrap justify-center items-center text-center p-4 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <a
            class="p-5 max-w-md border border-indigo-300 rounded-2xl hover:shadow-xl  flex flex-col items-center"
            href="https://neo.kotaksecurities.com/"
            target="_blank"
          >
            <Image
              width={300}
              height={200}
              alt="kotak mahindra bank"
              src="/brand/kotak.png"
              class="shadow rounded-lg overflow-hidden"
            />
            <div class="mt-8">
              <h4 class="font-bold text-xl">Kotak Mahindra Bank</h4>
              <p class="mt-2 text-gray-600 dark:text-gray-300">
                Open Your Demat Account In Kotak Securities
              </p>
              <div class="mt-5">
                <button
                  type="button"
                  class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
                >
                  Click Here
                </button>
              </div>
            </div>
          </a>
          <a
            class="p-5 max-w-md border border-indigo-300 rounded-2xl hover:shadow-xl  flex flex-col items-center"
            href="https://signup.fyers.in/?utm-source=AP-Leads&utm-medium=AP2684"
            target="_blank"
          >
            <Image
              width={300}
              height={200}
              alt="Fyers"
              src="/brand/fyers.png"
              class="shadow rounded-lg overflow-hidden"
            />
            <div class="mt-8">
              <h4 class="font-bold text-xl">Fyers</h4>
              <p class="mt-2 text-gray-600 dark:text-gray-300">
                Open Your Demat Account In Fyers
              </p>
              <div class="mt-5">
                <button
                  type="button"
                  class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
                >
                  Click Here
                </button>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="bg-white dark:bg-black w-full">
        <div className="w-full mx-auto md:w-4/5  my-4 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#03989e] border-2 rounded-md dark:text-[#00c2cb] p-4 mb-8  w-full text-center">
            Books Recommended by us{" "}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-2 w-full">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="max-w-xs mx-auto overflow-hidden bg-white dark:bg-gray-950 rounded-lg shadow-md"
              >
                <div className="relative">
                  <Image
                    width={200}
                    height={200}
                    className="w-full h-64 object-cover"
                    src="https://picsum.photos/200/200"
                    alt="Image"
                  />
                  <div className="absolute top-0 right-0">
                    <div className="w-32 h-8 absolute top-4 -right-8">
                      <div className="h-full w-full bg-red-500 text-white text-center leading-8 font-semibold transform rotate-45">
                        SALE
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Rich Dad Poor Dad by Robert Kiyosaki
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base">
                    The #1 Personal Finance book of all time, Robert Kiyosaki
                    shares the story of his two dads.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
