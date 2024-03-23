import { FaStar } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const PriceCard = () => {
  function truncateText(text, limit) {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    } else {
      return text;
    }
  }
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 md:gap-4 p-5  dark:bg-black">
      <p className="text-xs md:text-base font-semibold text-gray-500 dark:text-gray-300 text-center uppercase">
        OUR COURSES
      </p>
      <h1 className="text-base md:text-4xl font-bold text-center text-[#03989e] dark:text-[#00c2cb] ">
        We Offer Following Stock Trading Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
        {Card?.map((item) => (
          <Link
            href={item?.link}
            key={item?.id}
            className="md:max-w-96 border-2 dark:border shadow-lg rounded overflow-hidden bg-gray-100 dark:bg-black flex flex-col items-start gap-3 justify-start "
          >
            <Image
              width={500}
              height={300}
              src={item?.image}
              alt="Equity Tank"
              className="w-full h-48 object-cover object-center"
            />
            <h2>
              <span className="text-base md:text-lg px-3 font-bold text-gray-900 dark:text-gray-200 text-center uppercase">
                {item?.title}
              </span>
            </h2>
            <p className="text-xs md:text-sm font-semibold text-gray-500 dark:text-gray-300 text-start px-3">
              {truncateText(item?.text, 20)}
            </p>
            <span className="flex items-center justify-between space-x-1 px-3 text-yellow-500 dark:text-yellow-400  w-full">
              <div className="flex gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div
                className="flex gap-1 items-center justify-center text-xs md:text-sm font-semibold text-gray-500 dark:text-gray-300"
                style={{ marginLeft: "auto" }}
              >
                <p className="text-xs md:text-sm font-semibold text-gray-500 dark:text-gray-300">
                  {item?.rating} ratings
                </p>
              </div>
            </span>
            <div className="flex w-full items-center justify-between px-5 py-8 bg-white dark:bg-gray-800 rounded-sm shadow-md">
              <div className="flex flex-col items-start">
                <div className="flex items-center text-2xl font-bold text-black dark:text-white">
                  <span>₹</span>
                  <span>{item?.price}</span>
                  <span className="text-sm ml-1">/-{item?.paymentType}</span>
                </div>
                <div className="line-through text-sm text-gray-500 dark:text-gray-400 mt-2">
                  ₹ {item?.discount}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;

export const Card = [
  {
    id: 1,
    title: "Stock Foundation Programme ",
    image: "/course/img2.png",
    text: "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolore ut veritatis esse voluptatum consectetur autem voluptatibus beatae aspernatur corrupti fugiat libero nobis, aut consequatur suscipit vel magni commodi explicabo mollitia? Illo omnis accusamus nesciunt numquam dolore architecto quaerat facilis!    ",
    price: 1800,
    discount: 3000,
    paymentType: "monthly",
    link: "/offline-classes",
    rating: 93,
  },
  {
    id: 2,
    title: "Smart Trader Course – Advance ",
    image: "/course/img3.png",
    text: "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolore ut veritatis esse voluptatum consectetur autem voluptatibus beatae aspernatur corrupti fugiat libero nobis, aut consequatur suscipit vel magni commodi explicabo mollitia? Illo omnis accusamus nesciunt numquam dolore architecto quaerat facilis!    ",
    price: 2500,
    discount: 4500,
    paymentType: "monthly",
    link: "/online-classes",
    rating: 305,
  },
  {
    id: 3,
    title: "ET – Futures & Options",
    image: "/course/img1.png",
    text: "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolore ut veritatis esse voluptatum consectetur autem voluptatibus beatae aspernatur corrupti fugiat libero nobis, aut consequatur suscipit vel magni commodi explicabo mollitia? Illo omnis accusamus nesciunt numquam dolore architecto quaerat facilis!    ",
    price: 3000,
    discount: 6500,
    paymentType: "one time",
    link: "/",
    rating: 113,
  },
];
