import { Fade } from "react-reveal";

interface Props {
  article: Article
}

export default function Main({ article }: Props) {
  return (
    <Fade>
      <div className="w-full lg:w-2/3">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-72 sm:h-96 bg-gradient-to-t from-black to-transparent"/>
          <img src={article.imageUrl} className="w-full h-72 sm:h-96 object-cover"/>
          <div className="absolute bottom-5 left-5">
            <p className="text-3xl">{article.title}</p>
            <p className="text-moeraki">{article.date}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
