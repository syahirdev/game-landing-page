import Highlight from "./Highlight";
import Featured from "./Featured";

export default function Tournaments() {
  return (
    <div className="relative max-w-7xl mx-auto py-16 space-y-10">
      <p
        className="font-avenir-bold absolute -top-24 -left-24 text-[12rem]
        text-stroke text-transparent opacity-30 uppercase">
        tournaments
      </p>
      <Highlight/>
      <Featured title="Featured tournament"/>
      <Featured title="Featured seasons"/>
    </div>
  );
}
