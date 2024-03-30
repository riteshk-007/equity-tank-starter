import { IoPricetagsOutline } from "react-icons/io5";
import { GrSystem } from "react-icons/gr";
import { BiRevision, BiCertification } from "react-icons/bi";
import { FaChartLine } from "react-icons/fa";
import { PiTimerBold } from "react-icons/pi";

const Providing = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 md:gap-4  bg-white dark:bg-black">
      <p className=" md:text-lg lg:text-xl font-semibold text-center text-[#03989e] dark:text-[#00c2cb] p-3 sm:p-4 md:p-5 flex gap-2">
        We Are Providing Various Additional Services To Our Students
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-5 ">
        {Services.map((service) => (
          <div
            key={service.id}
            className="flex items-center justify-start gap-2 p-2 sm:p-3 md:p-4  rounded-lg"
          >
            <span className="text-white rounded dark:text-white p-3 text-lg lg:text-2xl bg-[#03989e] dark:bg-[#00c2cb]">
              {service.icon}
            </span>
            <span className="text-black dark:text-white  md:text-base">
              {service.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Providing;
const Services = [
  {
    id: 1,
    title: "Lifetime Mentorship Support",
    icon: <PiTimerBold />,
  },
  {
    id: 2,
    title: "Advance Price Action Guidance ",
    icon: <IoPricetagsOutline />,
  },
  {
    id: 3,
    title: "Trading System Guidance",
    icon: <GrSystem />,
  },
  {
    id: 4,
    title: "Revision Classes ",
    icon: <BiRevision />,
  },
  {
    id: 5,
    title: "Convert Yourself Into A Pro",
    icon: <FaChartLine />,
  },
  {
    id: 6,
    title: "Equity Tank ISO Certification",
    icon: <BiCertification />,
  },
];
