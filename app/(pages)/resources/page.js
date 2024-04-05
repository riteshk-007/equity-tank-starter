import Image from "next/image";
import React from "react";

const Resources = () => {
  function truncateText(text, limit) {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    } else {
      return text;
    }
  }
  return (
    <div className="text-[#03989e] dark:text-[#00c2cb] w-full flex flex-col items-center justify-center gap-2 md:gap-4  bg-gray-100 dark:bg-black/30">
      <Image
        src="/banner/4.png"
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
            {books.map((book) => (
              <a
                target="_blank"
                href={book.link}
                key={book.id}
                className="max-w-xs mx-auto overflow-hidden bg-white dark:bg-gray-950 rounded-lg shadow-md"
              >
                <div className="relative">
                  <Image
                    width={200}
                    height={200}
                    className="w-full h-80 object-fill object-center"
                    src={book.image}
                    alt={book.name}
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
                  <h3 className="text-lg font-semibold mb-2">{book.name}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {truncateText(book.description, 20)}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;

const books = [
  {
    id: 1,
    name: "Beating The Street By Peter Lynch",
    image: "/book/1.jpg",
    link: "https://delhibookmarket.com/beating-the-street-by-peter-lynch/",
    description:
      "PAPERBACK Beating The Street is a rich knowledge bank, telling about how the finance and investment works in reality. Peter Lynch and John Rothchild are known to carry a vast experience in investment decisions and their book is ideal for those looking for acquiring big level of success in the stock markets.",
  },
  {
    id: 2,
    name: "Buy Super Trader [Paperback] by Van K Tharp",
    image: "/book/2.jpg",
    link: "https://delhibookmarket.com/super-trader-paperback-by-van-k-tharp/",
    description:
      "'Super Trader: Make Consistent Profits in Good and Bad Markets' by Van K. Tharp is a comprehensive guide to achieving success in trading by mastering both the psychological and strategic aspects of the market. Tharp, a renowned trading coach and psychologist, shares valuable insights and strategies gleaned from years of experience working with traders of all levels. Here's a breakdown of key themes and insights from Super Trader",
  },
  {
    id: 3,
    name: "Buy The Intelligent Investor by Benjamin Graham (paperback)",
    image: "/book/3.jpg",
    link: "https://delhibookmarket.com/the-intelligent-investor-by-benjamin-graham/",
    description:
      "The Intelligent Investor is a seminal book on value investing written by Benjamin Graham, first published in 1949. Widely regarded as one of the greatest investment books of all time, it has had a profound influence on generations of investors and is considered essential reading for anyone interested in the principles of sound investing. In 'The Intelligent Investor,' Graham outlines his investment philosophy, which is based on the principles of value investing and fundamental analysis. He emphasizes the importance of adopting a disciplined and rational approach to investing, focusing on the long-term intrinsic value of a company rather than short-term market fluctuations.",
  },
  {
    id: 4,
    name: "Buy Trading in the Zone [paperback]",
    image: "/book/4.jpg",
    link: "https://delhibookmarket.com/trading-in-the-zone-paperback/",
    description:
      "Trading in the Zone' is a book written by Mark Douglas, first published in 2000. It falls within the genre of finance and investment, specifically focusing on trading psychology and mindset. In 'Trading in the Zone,' Mark Douglas explores the psychological aspects of trading and how they can impact a trader's performance in the financial markets.",
  },
  {
    id: 5,
    name: "High Probability Trading by Marcel Link",
    image: "/book/5.jpg",
    link: "https://delhibookmarket.com/high-probability-trading-by-marcel-link/",
    description:
      "The Goal Is to Teach All Traders to Think with the Mindset of a Successful Trader... While successful trading requires tremendous skill and knowledge, it begins and ends with mindset.",
  },
  {
    id: 6,
    name: "Buy Technical Analysis of the Financial Markets [Paperback] by John J Murphy",
    image: "/book/6.jpg",
    link: "https://delhibookmarket.com/technical-analysis-of-the-financial-markets-paperback-by-john-j-murphy/",
    description:
      "Technical Analysis of the Financial Markets 'Technical Analysis of the Financial Markets' by John J. Murphy is a seminal work that serves as a comprehensive guide to understanding and applying technical analysis in financial markets. ",
  },
  {
    id: 7,
    name: "Buy The Psychology of Money by Morgan Housel",
    image: "/book/7.jpg",
    link: "https://delhibookmarket.com/the-psychology-of-money-by-morgan-housel/",
    description:
      "The Psychology of Money is a thought-provoking book authored by Morgan Housel. Published in 2020, this insightful work explores the complex relationship between human behavior and financial decision-making, offering valuable lessons for managing money and building wealth. ",
  },
  {
    id: 8,
    name: "New Trader Rich Trader [Paperback] by Steve Burns",
    image: "/book/8.jpg",
    link: "https://delhibookmarket.com/new-trader-rich-trader-paperback-by-steve-burns/",
    description:
      "New Traders are greedy and have unrealistic expectations; Rich Traders are realistic about their returns. When New Trader awoke bright and early, he could feel his excitement building with every second.",
  },
];
