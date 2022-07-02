interface Props {
  title: string,
  posterImage: string,
  authorName: string,
  date: string
}

export default function Thumbnail(props: Props) {
  return (
    <div>
      <img src={props.posterImage} className="w-full"/>
      <p className="mt-2 md:mt-4 mb-1">{props.title}</p>
      <div className="flex items-center gap-x-2 text-moeraki text-sm">
        <p>{props.authorName}</p>
        <div className="h-1 w-1 rounded-full bg-moeraki"/>
        <p>{props.date}</p>
      </div>
    </div>
  );
}
