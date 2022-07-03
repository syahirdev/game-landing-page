interface Props {
  article: Article;
}

export default function Article({ article }: Props) {
  return (
    <div className="flex gap-x-5">
      <img src={article.imageUrl} className="flex-1 w-52 h-32 object-cover overflow-hidden"/>
      <div className="space-y-2 flex-1">
        <p>{article.title}</p>
        <p className="text-sm text-alto">{article.date}</p>
      </div>
    </div>
  );
}
