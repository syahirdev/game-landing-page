import Highlight from "./Highlight";
import Featured from "./Featured";

export default function Tournaments() {
  return (
    <div className="max-w-7xl mx-auto py-16 space-y-10">
      <Highlight/>
      <Featured title="Featured tournament"/>
      <Featured title="Featured seasons"/>
    </div>
  );
}
