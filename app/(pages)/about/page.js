import Image from "next/image";
import {
  FaSquareFacebook,
  FaXTwitter,
  FaSquareInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import CarouselScroll from "@/app/components/Carousel";

const images = [
  {
    img: "/7.png",
  },
  {
    img: "/8.png",
  },
  {
    img: "/9.png",
  },
];
const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="lg:w-10/12 w-full">
        <p className="font-normal text-sm leading-3 text-[#03989e] dark:text-[#00c2cb] cursor-pointer">
          About Us
        </p>
        <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 dark:text-gray-300 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">
          On Mission Of Making
        </h2>
        <div className="flex items-center gap-2 flex-col text-center md:flex-row  w-full mt-2">
          <h2 className="font-bold text-[#03989e] dark:text-[#00c2cb] lg:text-4xl text-3xl lg:leading-10 leading-9">
            Equity Tank
          </h2>
          <p className="font-light text-gray-800 dark:text-gray-300 lg:text-3xl text-2xl lg:leading-10 leading-9">
            Stock Market Institute In Delhi Since 2021
          </p>
        </div>
        <p className="font-normal text-lg leading-6 text-gray-600 dark:text-gray-300  mt-6">
          Welcome, to the Leading Best Stock Market Institute In Delhi Since
          2021.
        </p>
      </div>

      <div className="lg:mt-14 sm:mt-10 mt-12">
        <CarouselScroll images={images} timing={2500} />
      </div>

      <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
        <div className="w-full xl:w-5/12 lg:w-6/12">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-gray-100">
            On Mission Of Making
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-300 mt-4">
            We Started our organization in 2021, since that time we are working
            on providing best knowledge about stock market and chart trading in
            very affordable cost. It is an initiative for our new generation who
            have interest on making more money, Willing to do something new, and
            want to be achieve FINANCIAL FREEDOM.
            <br />
            Usually, we believe that trading is as a business that is not made
            for everyone, but this is just a myth that we clear by making you
            learn about the market & strategies that gives you mind blowing
            results.
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-300 mt-6">
            We are more passionate about Stock Market Trading Techniques; Short
            term trading techniques that attract wonderful earning in stock
            market.
          </p>
          <h2 className="font-bold my-2 text-xl lg:leading-9 leading-7 text-gray-800 dark:text-gray-100">
            Our Mission Is To Make People Financially Strong And Independent
          </h2>
          <h4 className="font-bold text-lg md:text-2xl text-[#03989e] dark:text-[#00c2cb] cursor-pointer mt-4">
            Our Social Media Handles
          </h4>
          <div className="flex items-center space-x-4 text-white my-3">
            <a
              href="https://www.facebook.com/equitytank"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareFacebook
                fontSize={35}
                className=" transition duration-300 bg-[#3b5998] hover:bg-[#4267B2] p-2 rounded-full"
              />
            </a>
            <a
              href="https://x.com/equitytank?s=20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter
                fontSize={35}
                className=" transition duration-300 bg-[#3b5998] hover:bg-[#4267B2] p-2 rounded-full"
              />
            </a>
            <a
              href="https://www.instagram.com/equitytank/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareInstagram
                fontSize={35}
                className=" transition duration-300 bg-[#3b5998] hover:bg-[#4267B2] p-2 rounded-full"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/equitytank-institute/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                fontSize={35}
                className=" transition duration-300 bg-[#3b5998] hover:bg-[#4267B2] p-2 rounded-full"
              />
            </a>
            <a
              href="http://www.youtube.com/@EquityTank"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube
                fontSize={35}
                className=" transition duration-300 bg-[#3b5998] hover:bg-[#4267B2] p-2 rounded-full"
              />
            </a>
          </div>
        </div>
        <div className="lg:flex items-center w-full lg:w-1/2 ">
          <Image
            width={800}
            height={500}
            className="block rounded-md  w-full"
            src="/1.png"
            alt="about us image"
          />
        </div>
      </div>
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
    </div>
  );
};

export default About;
