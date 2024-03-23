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
        src="https://images.unsplash.com/photo-1675889247652-f2ae837e05fd?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Step 3"
        className="h-full w-full object-cover p-5 rounded-3xl"
      />
      <div className=" my-1 md:my-5">
        <h2 className="lg:text-6xl md:text-5xl text-2xl font-black text-center leading-10 text-[#03989e] dark:text-[#00c2cb] ">
          More About Us
        </h2>
      </div>
      <div className="my-1 md:my-5">
        <h2 className="lg:text-2xl md:text-xl text-lg font-black text-center leading-10 text-gray-800 dark:text-gray-300 ">
          On Mission Of Making
        </h2>
      </div>
      <div className="flex flex-col md:flex-row w-full items-center justify-center p-5 md:p-10">
        <span className="text-xs lg:text-sm  mx-2  text-gray-700 dark:text-gray-300 text-start w-full md:w-1/2  md:my-3 flex flex-col">
          <span className="my-2 capitalize  font-semibold flex items-start text-[#03989e] dark:text-[#00c2cb]">
            Equity Tank{" "}
            <p className="font-light text-gray-700 dark:text-gray-300">
              {" "}
              – Stock Market Institute In Delhi Since 2021
            </p>
          </span>
          <p className="my-2 ">
            Welcome, to the Leading Best Stock Market Institute In Delhi Since
            2021.
          </p>
          <p className="my-2">
            We Started our organization in 2021, since that time we are working
            on providing best knowledge about stock market and chart trading in
            very affordable cost. It is an initiative for our new generation who
            have interest on making more money, Willing to do something new, and
            want to be achieve FINANCIAL FREEDOM. Usually, we believe that
            trading is as a business that is not made for everyone, but this is
            just a myth that we clear by making you learn about the market &
            strategies that gives you mind blowing results.
          </p>
          <p className="my-2">
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
            className="rounded-lg"
          />
        </div>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl capitalize lg:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r  dark:from-[#00c2cb] dark:to-green-600  from-[#1a8085] to-green-400">
        Our Mission Is To Make People Financial Strong And Independent
      </h1>
      <div className="flex flex-col w-full items-center justify-center my-8 border p-4 rounded-sm shadow">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 text-red-500 ">
          EDUCATION FOR EVERYONE
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 text-black dark:text-white font-sans">
          Our Values
        </h1>
        <p className="text-sm sm:text-md md:text-lg lg:text-xl font-semibold text-center text-black dark:text-white p-3 sm:p-4 md:p-5 flex gap-2">
          Utilizing better learning options can result faster than the
          traditional ways.
          <br />
          Enjoy the beauty of Learning!
        </p>
      </div>
      <div className="flex items-center justify-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 text-red-500">
          OUR SOCIAL MEDIA HANDLING
        </h1>
      </div>
      <div className="flex justify-center space-x-4 md:space-x-8 lg:space-x-12">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaSquareFacebook fontSize={25} className=" my-2" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaXTwitter fontSize={25} className=" my-2" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaSquareInstagram fontSize={25} className=" my-2" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaLinkedin fontSize={25} className=" my-2" />
        </a>
      </div>
    </div>
  );
};

export default About;
