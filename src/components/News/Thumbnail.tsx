interface Props {
  news: News
}

export default function Thumbnail({ news }: Props) {
  return (
    <div>
      <img src={news.imageUrl} className="w-full"/>
      <p className="mt-2 md:mt-4 mb-1">{news.title}</p>
      <div className="flex items-center gap-x-2 text-moeraki text-sm">
        <p>{news.author}</p>
        <div className="h-1 w-1 rounded-full bg-moeraki"/>
        <p>{news.date}</p>
      </div>
    </div>
  );
}
