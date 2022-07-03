import { Fade } from "react-reveal";

interface Props {
  tournament: Tournament;
}

export default function Thumbnail({ tournament }: Props) {
  return (
    <Fade>
      <div className="space-y-2">
        <img src={tournament.imageUrl} className="w-full"/>
        <div className="flex gap-x-2">
          <img src={tournament.author.avatar} className="h-8 w-8"/>
          <div className="space-y-2 max-w-[16rem]">
            <p className="font-bold">{tournament.title}</p>
            <div className="text-moeraki text-sm">
              <div className="flex items-center gap-x-2">
                <p>{tournament.type}</p>
                <div className="h-1 w-1 rounded-full bg-moeraki"/>
                Prize: ${tournament.prize.toFixed(2)}
              </div>
              <p>Ends {tournament.endDate}</p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
