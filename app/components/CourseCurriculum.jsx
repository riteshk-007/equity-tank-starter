import { IoIosArrowForward } from "react-icons/io";
const CourseCurriculum = ({ list1, list2, list3, list4 }) => {
  return (
    <div className="p-4 w-full mx-auto">
      <div className="w-full flex flex-col items-center justify-center gap-2 md:gap-4 p-5 mb-5">
        <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r  dark:from-[#00c2cb] dark:to-green-600  from-[#1a8085] to-green-400">
          Course Curriculum
        </h1>
      </div>
      <div className="w-full">
        <ul className=" grid grid-cols-1 md:grid-cols-2 gap-5">
          {[list1, list2, list3, list4].map((list, index) => (
            <div
              key={index}
              className="bg-transparent  text-gray-950 dark:text-gray-100 p-3 md:p-5 border-2 border-[#00c2cb] rounded-md dark:shadow-lg "
            >
              <h1
                className="text-xl font-bold text-[#00c2cb] w-1/2 bg-gray-100 dark:bg-gray-950 text-center p-3 rounded shadow-lg"
                style={{ margin: "20px auto" }}
              >
                Level {index + 1}
              </h1>
              <ul>
                {list.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-lg flex gap-1 md:gap-2 items-center justify-start font-sans"
                  >
                    <IoIosArrowForward
                      fontSize={15}
                      className="text-[#00c2cb]"
                    />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseCurriculum;
