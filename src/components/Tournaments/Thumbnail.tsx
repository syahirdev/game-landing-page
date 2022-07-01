interface Props {
  title: string,
  posterImage: string,
  authorImage: string,
  gameType: string,
  prize: number,
  endDate: string
}

export default function Thumbnail(props: Props) {
  return (
    <div className="space-y-2">
      <img src={props.posterImage}/>
      <div className="flex gap-x-2">
        <img src={props.authorImage} className="h-8 w-8"/>
        <div className="space-y-2">
          <p className="font-bold">{props.title}</p>
          <div className="text-moeraki text-sm">
            <div className="flex items-center gap-x-2">
              <p>{props.gameType}</p>
              <div className="h-1 w-1 rounded-full bg-moeraki"/>
              Prize: ${props.prize.toFixed(2)}
            </div>
            <p>Ends {props.endDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
