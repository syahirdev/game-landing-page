import Highlight from "./Highlight";
import Featured from "./Featured";
import tournament_data from "../../data/tournament.json";
import { useParallax } from "react-scroll-parallax";

export default function Tournaments() {
  // HOOKS
  const tournament = useParallax<HTMLParagraphElement>({
    translateX: ["-10%", "10%"]
  });

  // VIEWS
  return (
    <div className="relative max-w-7xl mx-auto px-5 py-16 space-y-10 bg-nz-black">
      <p
        ref={tournament.ref}
        className="font-avenir-bold absolute top-[-5.5rem] -left-24 text-[12rem]
        text-stroke text-transparent opacity-30 uppercase">
        tournaments
      </p>
      <Highlight tournament={tournament_data.highlight}/>
      <Featured title="Featured tournament" tournaments={tournament_data.tournaments}/>
      <Featured title="Featured seasons" tournaments={tournament_data.seasons}/>

      {/*Down arrow button*/}
      <button
        className="absolute top-[-3.5rem] left-1/2 -translate-x-1/2 bg-nz-black rounded-full border-2 border-greymouth z-50">
        <img src="assets/icons/down-arrow.svg" className="h-8 w-8 p-2 pb-1"/>
      </button>
    </div>
  );
}
