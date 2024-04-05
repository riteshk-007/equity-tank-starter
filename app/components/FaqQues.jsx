import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqQuesAns = ({ numQuestions }) => {
  return (
    <div className="w-full md:w-4/5 lg:w-3/4 flex items-center justify-center mx-auto flex-col p-5 md:p-10 ">
      <h1 className="text-3xl font-bold text-center mb-10">
        Commonly Asked Queries
      </h1>
      <Accordion type="single" collapsible className="w-full">
        {questions?.slice(0, numQuestions).map((question, index) => (
          <AccordionItem value={`item-${index + 1}`} key={`item-${index + 1}`}>
            <AccordionTrigger className="text-start font-semibold text-base cursor-pointer">
              {question.trigger}
            </AccordionTrigger>
            <AccordionContent className="text-start text-gray-900 dark:text-gray-300">
              {question.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
export default FaqQuesAns;

const questions = [
  {
    trigger: "Can i Attend Demo Class for free ?",
    content:
      "Yes, anyone can take one demo class for free in any course. I am very new in this market, and i want to learn from very basics. -You can enrol for 'Stock Foundation Programme' Course. here you will learn a lot about stock market from very basics and all important concepts.",
  },
  {
    trigger: "Is trading in share market is risky ?",
    content:
      "Yes, it is risky for those who trade without any proper training and knowledge.",
  },
  {
    trigger: "Do you teach Price Action ?",
    content:
      "Yes, we have a Lot of strategies that are purely based on Price Action.",
  },
  {
    trigger:
      "I am a trader and I only need strategies. Will it be useful for me ?",
    content:
      "Yes, our Trading courses are very Helpful for those who are already doing trading and want to do trading in a professional way.",
  },
  {
    trigger: "What's the accuracy of your strategies ?",
    content: "Our strategies are 75-80% accurate",
  },
  {
    trigger: "After course, can i still come to your offline classes?",
    content: "Yes, you can visit anytime for trade practice & revision.",
  },
];
