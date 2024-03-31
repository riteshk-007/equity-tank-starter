import Image from "next/image";
import {
  FaSquareFacebook,
  FaXTwitter,
  FaSquareInstagram,
  FaLinkedin,
} from "react-icons/fa6";

const About = () => {
  return (
    <div className="flex w-full flex-col">
      <Image
        width={1920}
        height={1080}
        src="/banner/4.png"
        alt="Step 3"
        className="h-full w-full object-cover p-5 rounded-3xl"
      />
      <div className=" my-1 md:my-5">
        <h2 className="lg:text-6xl md:text-5xl text-2xl font-black text-center leading-10 text-[#03989e] dark:text-[#00c2cb] ">
          More About Us
        </h2>
      </div>
      <div className="my-1 md:my-5">
        <h2 className="lg:text-2xl md:text-xl text-lg font-black text-center leading-10 text-gray-800 dark:text-gray-400 ">
          On Mission Of Making
        </h2>
      </div>
      <div className="flex flex-col md:flex-row w-full items-center justify-center p-5 md:p-10">
        <span className="text-xs lg:text-sm  mx-2  text-gray-700 dark:text-gray-300 text-start w-full md:w-1/2  md:my-3 flex flex-col">
          <span className="my-2 capitalize text-xl  font-semibold flex items-start text-[#03989e] dark:text-[#00c2cb]">
            Equity Tank{" "}
            <p className="font-light text-gray-700 dark:text-gray-300">
              {" "}
              – Stock Market Institute In Delhi Since 2021
            </p>
          </span>
          <p className="my-2 text-xl font-medium leading-relaxed">
            Welcome, to the Leading Best Stock Market Institute In Delhi Since
            2021.
          </p>
          <p className="my-2 text-base">
            We Started our organization in 2021, since that time we are working
            on providing best knowledge about stock market and chart trading in
            very affordable cost. It is an initiative for our new generation who
            have interest on making more money, Willing to do something new, and
            want to be achieve FINANCIAL FREEDOM. Usually, we believe that
            trading is as a business that is not made for everyone, but this is
            just a myth that we clear by making you learn about the market &
            strategies that gives you mind blowing results.
          </p>
          <p className="my-2 text-base">
            We are more passionate about Stock Market Trading Techniques; Short
            term trading techniques that attract wonderful earning in stock
            market.
          </p>
        </span>
        <div className="w-full md:w-1/2 flex items-center justify-center bg-cover">
          <Image
            width={600}
            height={500}
            src="https://images.unsplash.com/photo-1682687982049-b3d433368cd1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Equity Tank"
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00c2cb] to-green-600 dark:from-[#1a8085] dark:to-green-400 mb-8">
          Our Mission Is To Make People Financially Strong And Independent
        </h1>

        <div className=" w-full text-center ">
          <h2 className="  text-3xl sm:text-4xl md:text-5xl font-bold px-6 py-4 text-[#03989e] dark:text-[#00c2cb] ">
            EDUCATION FOR EVERYONE
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold px-6 py-1 md:py-4">
            Our Values
          </h2>
          <p className="text-sm sm:text-md md:text-lg lg:text-xl font-semibold text-center text-gray-900 dark:text-gray-300 px-6 py-4">
            Utilizing better learning options can yield faster results than
            traditional methods.
            <br />
            Enjoy the beauty of learning!
          </p>
        </div>

        <div className="flex items-center flex-col md:flex-row justify-center my-8 space-x-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-500">
            OUR SOCIAL MEDIA HANDLING
          </h2>
          <div className="flex items-center space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaSquareFacebook
                fontSize={35}
                className=" transition duration-300 bg-[#3b5998] hover:bg-[#4267B2] p-2 rounded-full"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaXTwitter
                fontSize={35}
                className=" transition duration-300 bg-[#3b5998] hover:bg-[#4267B2] p-2 rounded-full"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaSquareInstagram
                fontSize={35}
                className=" transition duration-300 bg-[#3b5998] hover:bg-[#4267B2] p-2 rounded-full"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin
                fontSize={35}
                className=" transition duration-300 bg-[#3b5998] hover:bg-[#4267B2] p-2 rounded-full"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
