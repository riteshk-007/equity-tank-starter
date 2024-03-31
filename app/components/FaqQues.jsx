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
            <AccordionTrigger>{question.trigger}</AccordionTrigger>
            <AccordionContent>{question.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
export default FaqQuesAns;

const questions = [
  {
    trigger: "What is the purpose of this website?",
    content:
      "This website is a collection of my personal projects, blog posts, and other content that I want to share with the world. I built this website to showcase my work and to help others learn from my experiences.",
  },
  {
    trigger: "How can I contact you?",
    content:
      "You can contact me by sending an email to  [email protected] or by filling out the contact form on the Contact page. I will do my best to respond to your message as soon as possible.",
  },
];
