import classnames from "classnames";
import { useState } from "react";

export default function Header() {
  // STATES
  const [openHamburger, setOpenHamburger] = useState(false);

  // VIEWS
  return (
    <header
      className="absolute top-0 z-50 w-full flex items-center justify-between bg-nz-black px-5 lg:px-20 py-3">
      {/*Navigation*/}
      <nav>
        <ul className="flex items-center gap-x-5 xl:gap-x-12">
          <li className="font-avenir-bold uppercase text-2xl">Logo</li>
          <li className="hidden md:block">Content</li>
          <li className="hidden md:block">Play</li>
          <li className="hidden md:block">Shop</li>
        </ul>
      </nav>

      {/*Search Bar*/}
      <div
        className="hidden flex-1 mx-5 lg:flex-none md:flex relative justify-between gap-x-3 lg:w-[25rem] px-6 py-1 rounded-full text-nz-black border-2 border-[#bababa] bg-white">
        <input
          type="text"
          className="flex-1 focus:outline-none placeholder:font-normal"
          placeholder="Search game, tournament, articles..."
        />
        <img src="/assets/icons/search.svg"/>
      </div>

      <div className="flex gap-x-5 items-center">
        {/*Auth*/}
        <button className="text-lupin-dark">
          Login / Sign up
        </button>
        {/*Hamburger*/}
        <button
          className="md:hidden space-y-1"
          onClick={() => setOpenHamburger(prevState => !prevState)}
        >
          <div className={classnames("h-0.5 w-6 bg-white rounded-full duration-300", {
            "rotate-45 translate-y-1.5": openHamburger
          })}/>
          <div className={classnames("h-0.5 w-6 bg-white rounded-full duration-300", {
            "opacity-0": openHamburger
          })}/>
          <div className={classnames("h-0.5 w-6 bg-white rounded-full duration-300", {
            "-rotate-45 -translate-y-1.5": openHamburger
          })}/>
        </button>
      </div>
    </header>
  );
}
