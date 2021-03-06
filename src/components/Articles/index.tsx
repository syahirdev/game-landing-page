import Main from "./Main";
import Section from "./Section";
import article_data from "../../data/article.json";
import { useState } from "react";

export default function Articles() {
  // STATES
  const [chosenArticle, setChosenArticle] = useState(article_data.data[0]);

  // VIEWS
  return (
    <div className="max-w-7xl mx-auto px-5 pb-16 flex flex-col lg:flex-row relative z-30">
      <div className="rotate-0 lg:rotate-90 h-fit uppercase font-avenir-bold leading-none w-[7.5rem] mt-[-1.05rem]">
        <p className="text-lupin-normal text-7xl">featured</p>
        <p className="text-stroke text-transparent text-7xl ">articles</p>
      </div>
      <div className="relative bg-lupin-normal px-5 sm:px-8 py-5 sm:py-12 flex-1 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-5 sm:gap-8">
          <Main article={chosenArticle}/>
          <Section articles={article_data.data} setChosenArticle={setChosenArticle}/>
        </div>
        <div className="absolute bottom-[-2.5rem] right-[-4.5rem] sm:right-[-2.5rem] bg-nz-black h-20 w-20 rotate-45"/>
      </div>
    </div>
  );
}
