import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="text-[#2ec8d0] dark:text-[#00c2cb] w-full mx-auto flex items-center justify-center p-3 sm:p-4 md:p-5 flex-col bg-white dark:bg-gray-950">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-yellow-400">
        About Us
      </h1>
      <span className="text-sm sm:text-md md:text-lg lg:text-xl font-semibold text-center text-[#2ec8d0] dark:text-[#00c2cb] p-3 sm:p-4 md:p-5 flex gap-2">
        Equity Tank –{" "}
        <p className="text-sm sm:text-md md:text-lg lg:text-xl text-center text-black dark:text-gray-200 font-light flex gap-2">
          Stock Market Institute In Delhi
        </p>
      </span>
      <div className="flex flex-col md:flex-row w-full items-center justify-center p-5 md:p-10">
        <div className="w-full md:w-1/2 flex items-center justify-center bg-cover">
          <Image
            width={500}
            height={300}
            src="https://images.unsplash.com/photo-1707343848610-16f9afe1ae23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Equity Tank"
            className="rounded-lg"
          />
        </div>
        <span className="text-xs lg:text-sm  mx-2 font-semibold text-gray-700 dark:text-gray-300 text-start w-full md:w-1/2  my-3 flex flex-col">
          <p className="my-2">
            Welcome, to the Leading Best Stock Market Institute In Delhi.
          </p>
          <p className="my-2">
            Equity Tank Institute is the Best Stock Market Institute In Delhi,
            with Top Offline Stock Market Classes, that provides you best
            guidance & leadership in Stock Market with our offered courses.
            Equity Tank (An ISO 21008:2018 Certified Institute) Is Most Trusted
            Institute by Our Young Generation. It is an initiative for our new
            generation who have interest on making more money, Willing to do
            something new, and want to be achieve FINANCIAL FREEDOM. Usually, we
            believe that trading is as a business that is not made for everyone,
            but this is just a myth that we clear by making you learn about the
            market & strategies that gives you mind blowing results
          </p>
          <p className="my-2">
            Equity Tank (An ISO 21008:2018 Certified Institute) Is the Top
            Offline Stock Market Study Centre In Delhi which provides best
            learning environment for learning traders. Here We’ll Teach you &
            Guide you to deal in stock market with best strategies. Our courses
            contain all about stock market from basics to advance concepts which
            will help you to learn from scratch. If you want to learn abcd.. of
            this market and to reach advance levels then join us. We assure
            genuine support and skilful guidance of stock market.
          </p>
        </span>
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r  dark:from-[#00c2cb] dark:to-yellow-600  from-[#1a8085] to-yellow-400">
        Our Mission Is To Make People Financial Strong And Independent
      </h1>
    </div>
  );
};

export default AboutUs;
