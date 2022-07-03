export default function TournamentHighlight() {
  return (
    <div
      className="flex flex-col md:flex-row md:items-center gap-y-5 gap-x-5 lg:gap-x-10 xl:gap-x-20 !mt-0">
      {/*Image*/}
      <div className="relative">
        <p className="absolute top-[-2.5rem] left-[0.5rem] text-3xl md:text-4xl lg:text-6xl">Tournaments</p>
        <div className="rounded-md overflow-hidden">
          <img src="assets/images/tournament-highlight.png" className="w-full"/>
        </div>

        {/*Abstract*/}
        <img
          src="assets/images/grid-platform.png"
          className="absolute bottom-[-3rem] mix-blend-color-dodge opacity-50 -z-10"/>
        <div
          className="absolute bottom-[-4rem] right-[-4rem] h-52 w-52 border-2 border-[#1a1a1a] rounded-full -z-10"/>
        <div
          className="absolute bottom-[-1.5rem] right-[-1.5rem] border-b-[10px] border-r-[10px] border-lupin-normal border-r-transparent"/>
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
