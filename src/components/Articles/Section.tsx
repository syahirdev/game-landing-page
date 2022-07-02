import Article from "./Article";

export default function Section() {
  return (
    <div className="w-full lg:w-1/3 overflow-y-auto space-y-5 sm:space-y-7 h-96 scrollbar-app">
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
    </div>
  );
}
