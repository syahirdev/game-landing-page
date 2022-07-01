interface Props {
  title: string,
  posterImage: string,
  authorName: string,
  date: string
}

export default function Thumbnail(props: Props) {
  return (
    <div>
      <img src={props.posterImage}/>
      <p className="mt-4 mb-1">{props.title}</p>
      <div className="flex items-center gap-x-2 opacity-50">
        <p>{props.authorName}</p>
        <div className="h-1 w-1 rounded-full bg-white"/>
        <p>{props.date}</p>
      </div>
    </div>
  );
}
