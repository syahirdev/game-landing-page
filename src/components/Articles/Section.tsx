import Article from "./Article";
import { Dispatch, SetStateAction } from "react";

interface Props {
  articles: Article[];
  setChosenArticle: Dispatch<SetStateAction<Article>>
}

export default function Section({ articles, setChosenArticle }: Props) {
  return (
    <div className="w-full lg:w-1/3 overflow-y-auto space-y-5 sm:space-y-7 h-96 scrollbar-app">
      {articles.map((article, index) => (
        <Article key={index} article={article} setChosenArticle={setChosenArticle}/>
      ))}
    </div>
  );
}
