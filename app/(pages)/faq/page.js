import FaqQuesAns from "@/app/components/FaqQues";
import React from "react";

export const metadata = {
  title: "Equity Tank - FAQ",
  description:
    "FAQ is a page where you can find answers to all your queries related to Equity Tank.",
};
const FAQ = () => {
  return (
    <div>
      <FaqQuesAns />
    </div>
  );
};

export default FAQ;
