import Thumbnail from "./Thumbnail";
import news_data from "../../data/news.json";
import { useParallax } from "react-scroll-parallax";

export default function News() {
  // HOOKS
  const news = useParallax<HTMLParagraphElement>({
    translateX: ["10%", "-10%"]
  });

  // VIEWS
  return (
    <div className="relative max-w-7xl mx-auto px-5 py-16 space-y-10">
      <p
        ref={news.ref}
        className="font-avenir-bold absolute -top-24 left-0 text-[12rem]
        text-stroke text-transparent opacity-30 uppercase">
        get ahead
      </p>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 !mt-0">
        <h3 className="absolute top-[-42px] left-[20px] text-6xl">Latest News</h3>
        {news_data?.data.map((news, index) => (
          <Thumbnail key={index} news={news}/>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <h3 className="text-4xl">Spotlight news</h3>
        <button className="bg-white text-lupin-normal rounded-md px-8 py-2 shrink-0">
          View more
        </button>
      </div>
    </div>
  );
}
