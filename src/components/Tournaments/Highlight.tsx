export default function TournamentHighlight() {
  return (
    <div className="flex items-center gap-x-20 !mt-0">
      {/*Image*/}
      <div className="relative">
        <p className="absolute top-[-2.5rem] left-[0.5rem] text-6xl">Tournaments</p>
        <div className="rounded-md overflow-hidden">
          <img src="assets/images/tournament-highlight.png"/>
        </div>
      </div>

      {/*Description*/}
      <div className="text-2xl space-y-5 max-w-md">
        <p className="text-4xl">CS:GO Chapter 2 - Monthly Ladder</p>

        <div className="flex flex-wrap items-center gap-x-3">
          <p>End Monday, December 11, 15:00</p>
          <div className="h-1.5 w-1.5 rounded-full bg-white"/>
          <p>Elimination</p>
        </div>

        <div className="flex gap-x-5 items-center">
          <img src="assets/avatar/jagong_gong.png" className="rounded-full h-7 w-7"/>
          <p className="text-moeraki">Uploaded by jagong_gong</p>
        </div>
      </div>
    </div>
  );
}
