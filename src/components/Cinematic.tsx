import { useEffect, useState } from "react";
import classnames from "classnames";
import { useParallax } from "react-scroll-parallax";

export default function Cinematic() {
  // HOOKS
  const text = useParallax<HTMLDivElement>({
    scale: [1, 2]
  });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // VIEWS
  return (
    <div
      className="relative max-w-[90rem] mx-auto h-80 sm:h-[600px] md:h-[810px] flex justify-center items-center px-5 py-16">
      <img
        src="assets/images/cinematic.png"
        className={classnames("absolute top-0 left-0 w-full py-16 duration-500 top-1/2 -translate-y-1/2",
          {
            "opacity-100": scrollY >= 3200,
            "opacity-0": scrollY < 3200
          })}/>
      <p
        ref={text.ref}
        className={classnames(
          "bg-[url('/assets/images/cinematic.png')] text-center text-transparent px-96 py-48 bg-clip-text",
          "font-avenir-bold uppercase text-9xl hidden lg:block",
          { "text-transparent opacity-0 duration-500": scrollY >= 3200 })}>
        <span className="whitespace-nowrap">play games</span>
        <br/>
        <span>your way</span>
      </p>
    </div>
  );
}
