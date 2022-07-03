import about_data from "../data/about.json";

export default function About() {
  return (
    <div className="relative max-w-7xl mx-auto px-5 py-16 space-y-10">
      <p
        className="font-avenir-bold absolute top-0 md:-top-24 left-5 text-[6rem] sm:text-[8rem] md:text-[12rem]
        text-stroke text-transparent opacity-30 uppercase">
        about
      </p>
      <p className="max-w-lg ml-auto">{about_data.data}</p>
    </div>
  );
}
