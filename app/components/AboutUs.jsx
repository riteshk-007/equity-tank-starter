import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="text-[#03989e] dark:text-[#00c2cb] w-full flex flex-col items-center justify-center gap-2 md:gap-4 p-5 bg-gray-100 dark:bg-black/30">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black dark:text-white">
        About Us
      </h1>
      <h1 className="text-lg md:text-xl text-center text-[#03989e] dark:text-[#00c2cb] leading-10 gap-2 font-bold">
        Equity Tank –{" "}
        <span className="text-black dark:text-white font-light">
          Stock Market Institute In Delhi Since 2021
        </span>{" "}
      </h1>
      <div className="mb-20">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
            <div className="flex lg:py-12">
              <Image
                width={500}
                height={300}
                src="https://images.unsplash.com/photo-1707343848610-16f9afe1ae23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Equity Tank"
                className="w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px] z-[10]"
              />
            </div>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex h-full items-center rounded-lg p-6 text-center bg-gray-300 shadow-2xl dark:bg-gray-800 lg:pl-12 lg:text-left">
              <div className="lg:pl-12">
                <h2 className="mb-5 text-3xl font-bold">
                  Welcome, to the Leading Best Stock Market Institute In Delhi
                  Since 2021.
                </h2>
                <span className="mb-5 pb-2 lg:pb-0 text-[0.9rem] text-gray-700 font-semibold dark:text-gray-200">
                  Equity Tank (An ISO 21008:2018 Certified Institute) is the
                  Best Stock Market Institute In Delhi, that provides you best
                  guidance & leadership in Stock Market with our offered
                  courses. Equity Tank Is Most Trusted Institute by Our Young
                  Generation. It is an initiative for our new generation who
                  have interest on making more money, Willing to do something
                  new, and want to be achieve FINANCIAL FREEDOM. Usually, we
                  believe that trading is as a business that is not made for
                  everyone, but this is just a myth that we clear by making you
                  learn about the market & strategies that gives you mind
                  blowing results.
                </span>
                <br />
                <br />
                <span className="mb-5 pb-2 lg:pb-0 text-[0.9rem] text-gray-700 font-semibold dark:text-gray-200">
                  Equity Tank (An ISO 21008:2018 Certified Institute) Is the Top
                  Offline Stock Market Study Centre In Delhi which provides best
                  learning environment for learning traders. Here We’ll Teach
                  you & Guide you to deal in stock market with best strategies.
                  Our courses contain all about stock market from basics to
                  advance concepts which will help you to learn from scratch. If
                  you want to learn abcd.. of this market and to reach advance
                  levels then join us. We assure genuine support and skilful
                  guidance of stock market.
                </span>

                <h1 className="text-xl md:text-2xl mt-5 capitalize  font-bold text-center bg-clip-text text-transparent bg-gradient-to-r  dark:from-[#00c2cb] dark:to-green-600  from-[#1a8085] to-green-400">
                  Our Mission Is To Make People Financial Strong And Independent
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
