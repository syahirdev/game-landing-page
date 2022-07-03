import about_data from "../data/about.json";
import { useParallax } from "react-scroll-parallax";
import { Fade } from "react-reveal";

export default function About() {
  // HOOKS
  const about = useParallax<HTMLParagraphElement>({
    translateX: ["-10%", "10%"]
  });

  // VIEWS
  return (
    <Fade>
      <div className="relative max-w-7xl mx-auto px-5 lg:mt-32 py-16 space-y-10">
        <p
          ref={about.ref}
          className="font-avenir-bold absolute top-0 md:-top-24 left-5 text-[6rem] sm:text-[8rem] md:text-[12rem]
        text-stroke text-transparent opacity-30 uppercase">
          about
        </p>
        <p className="max-w-lg ml-auto">{about_data.data}</p>
      </div>
    </Fade>
  );
}
