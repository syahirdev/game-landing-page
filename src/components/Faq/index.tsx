import Question from "./Question";

export default function Faq() {
  return (
    <div className="bg-neutral-900">
      <div className="max-w-7xl mx-auto py-16 space-y-10 flex flex-col justify-center w-fit text-center">
        <p>Frequently asked questions</p>

        <div className="flex flex-col gap-y-5">
          <Question/>
          <Question/>
          <Question/>
          <Question/>
        </div>

        <a href="#" className="text-nz-purple font-medium">
          Not sure of anything? Contact the support team.
        </a>
      </div>
    </div>
  );
}
