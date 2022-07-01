import Thumbnail from "./Thumbnail";

export default function News() {
  return (
    <div className=" max-w-7xl mx-auto py-16 space-y-10">
      <div className="relative flex gap-x-5">
        <h3 className="absolute top-[-42px] left-[20px] text-6xl">Latest News</h3>
        <Thumbnail
          title="What is?: Professional Competition in esports"
          posterImage="assets/images/news-1.png"
          authorName="Veronica Brauer"
          date="August 1, 2021"
        />
        <Thumbnail
          title="Auctor scelerisque tritique neque, in nec"
          posterImage="assets/images/news-2.png"
          authorName="Kimberly Vaughn"
          date="August 1, 2021"
        />
        <Thumbnail
          title="Volutpat mauris risus aliquam convallis"
          posterImage="assets/images/news-3.png"
          authorName="Sarah Jennings"
          date="August 1, 2021"
        />
      </div>

      <div className="flex justify-between items-center">
        <h3 className="text-4xl">Spotlight news</h3>
        <button className="bg-white text-lupin-normal rounded-md px-8 py-2">
          View more
        </button>
      </div>
    </div>
  );
}
