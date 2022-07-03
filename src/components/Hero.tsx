import hero_data from "../data/hero.json";
import { useParallax } from "react-scroll-parallax";
import { Fade } from "react-reveal";

export default function Hero() {
  // HOOKS
  const wave = useParallax<HTMLDivElement>({
    speed: 10
  });
  const hero = useParallax<HTMLDivElement>({
    speed: -20
  });

  // VIEWS
  return (
    <section className="relative h-[75vh] bg-gradient-to-br from-[#6013B4] to-[#27054B] overflow-hidden">
      <div className="flex relative h-full max-w-7xl mx-auto px-5 items-center">

        <div
          ref={wave.ref}
          className="absolute animate-move-alt bg-[url('/assets/images/circle-wave.png')] h-full w-full left-0 md:left-1/2 opacity-10 md:opacity-80 md:bg-contain mix-blend-color-dodge bg-no-repeat"/>
        <div
          ref={hero.ref}
          className="absolute animate-move bg-[url('/assets/images/hero.png')] h-full w-full left-0 md:left-1/2 opacity-30 md:opacity-100"/>

        <Fade left>
          <div className="flex flex-col justify-center h-full z-50">
            <h1 className="max-w-xl text-6xl mb-4">{hero_data.title}</h1>
            <h2 className="max-w-sm text-xl mb-10">{hero_data.description}</h2>
            <a
              href={hero_data.button.url}
              className="bg-white rounded-md text-lupin-normal px-12 py-3 w-fit mb-6 hover:bg-purple-200 duration-300">
              {hero_data.button.name}
            </a>
            <p className="text-sm font-normal">{hero_data.text}</p>
          </div>
        </Fade>
      </div>

      {/*Abstract*/}
      <img
        src="assets/images/rectangle-dots.png"
        className="absolute top-[60%] right-[30%] opacity-50 mix-blend-color-dodge"
      />
      <img
        src="assets/images/rectangle-dots.png"
        className="absolute top-[5%] right-[0%] opacity-50 mix-blend-color-dodge"
      />
    </section>
  );
}
