import Link from "next/link";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const Pagination = ({ num, rightLink, leftLink }) => {
  return (
    <div className="flex mx-auto items-center justify-center my-3 gap-3">
      <Link
        href={leftLink}
        className="border-2  rounded-full flex items-center justify-center text-[#03989e] dark:text-[#00c2cb] border-[#03989e] dark:border-[#00c2cb] h-10 w-10"
      >
        <MdArrowBackIos className="ml-1" />
      </Link>
      <span className="border-2 px-3 rounded-full bg-[#03989e] dark:bg-[#00c2cb] flex items-center justify-center text-white font-bold text-xl border-[#03989e] dark:border-[#00c2cb] h-10 w-10">
        {num}
      </span>
      <Link
        href={rightLink}
        className="border-2  rounded-full flex items-center justify-center text-[#03989e] dark:text-[#00c2cb] border-[#03989e] dark:border-[#00c2cb] h-10 w-10"
      >
        <MdArrowForwardIos />
      </Link>
    </div>
  );
};

export default Pagination;
