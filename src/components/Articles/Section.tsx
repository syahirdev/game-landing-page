import Article from "./Article";

export default function Section() {
  return (
    <div className="w-1/3 overflow-y-auto space-y-7 h-80 scrollbar-app">
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
