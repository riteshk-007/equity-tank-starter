import { IoPricetagsOutline } from "react-icons/io5";
import { GrSystem } from "react-icons/gr";
import { BiRevision } from "react-icons/bi";
import { FaChartLine, FaAward } from "react-icons/fa";
import { PiTimerBold } from "react-icons/pi";

const Providing = () => {
  return (
    <section className="bg-gray-200 dark:bg-black w-full">
      <div className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-4">
          <div className=" mx-auto space-y-3 text-center">
            <h3 className="text-[#03989e] font-semibold text-3xl">Features</h3>
            <p className="text-gray-800 dark:text-gray-400 text-3xl font-semibold sm:text-4xl">
              We Are Providing Various Additional Services To Our Students
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
              {Services.map((item, idx) => (
                <li key={idx} className="flex gap-x-4">
                  <div className="flex-none w-12 h-12 bg-[#03989e] dark:bg-[#00c2cb] text-white rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-800 dark:text-gray-200 font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-light">
                      {item.des}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Providing;
const Services = [
  {
    id: 1,
    title: "Lifetime Mentorship Support",
    icon: <PiTimerBold fontSize={25} />,
    des: "We provide lifetime mentorship support to our students, so that they can clear their doubts and queries anytime.",
  },
  {
    id: 2,
    title: "Advance Price Action Guidance ",
    icon: <IoPricetagsOutline fontSize={25} />,
    des: "We provide lifetime mentorship support to our students, so that they can clear their doubts and queries anytime.",
  },
  {
    id: 3,
    title: "Trading System Guidance",
    icon: <GrSystem fontSize={25} />,
    des: "We provide lifetime mentorship support to our students, so that they can clear their doubts and queries anytime.",
  },
  {
    id: 4,
    title: "Revision Classes ",
    icon: <BiRevision fontSize={25} />,
    des: "We provide lifetime mentorship support to our students, so that they can clear their doubts and queries anytime.",
  },
  {
    id: 5,
    title: "Convert Yourself Into A Pro",
    icon: <FaChartLine fontSize={25} />,
    des: "We provide lifetime mentorship support to our students, so that they can clear their doubts and queries anytime.",
  },
  {
    id: 6,
    title: "Equity Tank ISO Certification",
    icon: <FaAward fontSize={25} />,
    des: "We provide lifetime mentorship support to our students, so that they can clear their doubts and queries anytime.",
  },
];
