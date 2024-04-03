import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
const CourseCurriculum = ({ list }) => {
  return (
    <div className="p-4 w-full mx-auto">
      <div className="w-full flex flex-col items-center justify-center gap-2 md:gap-4 p-5 mb-5">
        <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r  dark:from-[#00c2cb] dark:to-green-600  from-[#1a8085] to-green-400">
          Course Curriculum
        </h1>
      </div>
      <div className="w-full flex items-center justify-center ">
        <StickyScroll content={list} />
      </div>
    </div>
  );
};

export default CourseCurriculum;
