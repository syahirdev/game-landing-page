import Main from "./Main";
import Section from "./Section";

export default function Articles() {
  return (
    <div className="max-w-7xl mx-auto py-16 space-y-10">
      <div className="bg-nz-purple-dark px-8 py-12">
        <div className="flex gap-x-8">
          <Main/>
          <Section/>
        </div>
      </div>
    </div>
  );
}
