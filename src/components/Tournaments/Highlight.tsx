interface Props {
  tournament: Tournament;
}

export default function TournamentHighlight({ tournament }: Props) {
  return (
    <div
      className="flex flex-col md:flex-row md:items-center gap-y-5 gap-x-5 lg:gap-x-10 xl:gap-x-20 !mt-0">
      {/*Image*/}
      <div className="relative">
        <p className="absolute top-[-2.5rem] left-[0.5rem] text-3xl md:text-4xl lg:text-6xl">Tournaments</p>
        <div className="rounded-md overflow-hidden relative z-50">
          <img src={tournament.imageUrl} className="w-full"/>
        </div>

        {/*Abstract*/}
        <div className="-z-10">
          <img
            src="assets/images/grid-platform.png"
            className="absolute bottom-[-3rem] mix-blend-color-dodge opacity-50"/>
          <div
            className="absolute bottom-[-4rem] right-[-4rem] h-52 w-52 border-2 border-[#1a1a1a] rounded-full opacity-50"/>
          <div
            className="absolute bottom-[-1.5rem] right-[-1.5rem] border-b-[10px] border-r-[10px] border-lupin-normal border-r-transparent"/>
        </div>
      </div>

      {/*Description*/}
      <div className="text-lg lg:text-2xl space-y-2 md:space-y-3 lg:space-y-5 max-w-md z-20">
        <p className="text-2xl md:text-3xl lg:text-4xl">{tournament.title}</p>

        <div className="flex flex-wrap items-center gap-x-3">
          <p>End {tournament.endDate}</p>
          <div className="h-1.5 w-1.5 rounded-full bg-white"/>
          <p>{tournament.type}</p>
        </div>

        <div className="flex gap-x-5 items-center">
          <img src={tournament.author.avatar} className="rounded-full h-7 w-7"/>
          <p className="text-moeraki">Uploaded by {tournament.author.name}</p>
        </div>
      </div>
    </div>
  );
}
