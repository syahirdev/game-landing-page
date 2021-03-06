import Question from "./Question";
import faq_data from "../../data/faq.json";

export default function Faq() {
  return (
    <div className="bg-neutral-900">
      <div className="max-w-7xl mx-auto px-5 py-10 space-y-10 flex flex-col justify-center w-fit text-center">
        <p className="text-2xl">Frequently asked questions</p>

        <div className="flex flex-col gap-y-5">
          {faq_data.data.map((faq, index) => (
            <Question
              key={index}
              question={faq.question}
              answer={faq.answer}/>
          ))}
        </div>

        <a href="#" className="text-lupin-dark">
          Not sure of anything? Contact the support team.
        </a>
      </div>
    </div>
  );
}
