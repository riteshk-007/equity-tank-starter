import { FaHandPointRight } from "react-icons/fa";

const CourseCurriculum = ({ list1, list2, list3, list4 }) => {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="w-full flex flex-col items-center justify-center gap-2 md:gap-4 p-5 mb-5">
        <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r  dark:from-[#00c2cb] dark:to-green-600  from-[#1a8085] to-green-400">
          Course Curriculum
        </h1>
      </div>
      <div className="flex">
        <div className="mr-4 flex flex-col items-center">
          <div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#00c2cb]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-blue-800 dark:text-slate-200"
              >
                <path d="M12 5l0 14"></path>
                <path d="M18 13l-6 6"></path>
                <path d="M6 13l6 6"></path>
              </svg>
            </div>
          </div>
          <div className="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
        </div>
        <div className="pt-1 pb-8">
          <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
            Level 1
          </p>
          <ul>
            {list1.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaHandPointRight className="text-[#03989e] dark:text-[#00c2cb]" />
                <p className="text-gray-600 dark:text-slate-400">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex">
        <div className="mr-4 flex flex-col items-center">
          <div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#00c2cb]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-blue-800 dark:text-slate-200"
              >
                <path d="M12 5l0 14"></path>
                <path d="M18 13l-6 6"></path>
                <path d="M6 13l6 6"></path>
              </svg>
            </div>
          </div>
          <div className="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
        </div>
        <div className="pt-1 pb-8">
          <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
            Level 2
          </p>
          <ul>
            {list2.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaHandPointRight className="text-[#03989e] dark:text-[#00c2cb]" />
                <p className="text-gray-600 dark:text-slate-400">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex">
        <div className="mr-4 flex flex-col items-center">
          <div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#00c2cb]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-blue-800 dark:text-slate-200"
              >
                <path d="M12 5l0 14"></path>
                <path d="M18 13l-6 6"></path>
                <path d="M6 13l6 6"></path>
              </svg>
            </div>
          </div>
          <div className="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
        </div>
        <div className="pt-1 pb-8">
          <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
            Level 3
          </p>
          <ul>
            {list3.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaHandPointRight className="text-[#03989e] dark:text-[#00c2cb]" />
                <p className="text-gray-600 dark:text-slate-400">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex">
        <div className="mr-4 flex flex-col items-center">
          <div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#03989e] bg-[#00c2cb]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-white dark:text-slate-200"
              >
                <path d="M5 12l5 5l10 -10"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="pt-1 pb-8">
          <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
            Level 4
          </p>
          <ul>
            {list4.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaHandPointRight className="text-[#03989e] dark:text-[#00c2cb]" />
                <p className="text-gray-600 dark:text-slate-400">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseCurriculum;
