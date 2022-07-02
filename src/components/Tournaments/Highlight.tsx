export default function TournamentHighlight() {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-y-5 gap-x-5 lg:gap-x-10 xl:gap-x-20 !mt-0">
      {/*Image*/}
      <div className="relative">
        <p className="absolute top-[-2.5rem] left-[0.5rem] text-3xl md:text-4xl lg:text-6xl">Tournaments</p>
        <div className="rounded-md overflow-hidden">
          <img src="assets/images/tournament-highlight.png" className="w-full"/>
        </div>
      </div>

      {/*Description*/}
      <div className="text-lg lg:text-2xl space-y-2 md:space-y-3 lg:space-y-5 max-w-md">
        <p className="text-2xl md:text-3xl lg:text-4xl">CS:GO Chapter 2 - Monthly Ladder</p>

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
