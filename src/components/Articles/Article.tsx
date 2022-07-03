import { Dispatch, SetStateAction } from "react";

interface Props {
  article: Article;
  setChosenArticle: Dispatch<SetStateAction<Article>>;
}

export default function Article({ article, setChosenArticle }: Props) {
  return (
    <div className="flex gap-x-5 cursor-pointer" onClick={() => setChosenArticle(article)}>
      <img src={article.imageUrl} className="flex-1 w-52 h-32 object-cover overflow-hidden"/>
      <div className="space-y-2 flex-1">
        <p>{article.title}</p>
        <p className="text-sm text-alto">{article.date}</p>
      </div>
    </div>
  );
}
