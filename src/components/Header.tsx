import classnames from "classnames";
import { useState } from "react";
import Grid from "./Grid";
import header_data from "../data/header.json";

export default function Header() {
  // STATES
  const [isOpen, setIsOpen] = useState(false);

  // VIEWS
  return (
    <>
      <header
        className="absolute relative top-0 z-50 w-full flex items-center justify-between px-5 lg:px-20 py-3">
        {/*Navigation*/}
        <nav>
          <ul className="flex items-center gap-x-5 xl:gap-x-12">
            <li className="font-avenir-bold uppercase text-2xl">Logo</li>
            {
              header_data?.data.map((data) => (
                <li className="hidden md:block" key={data.name}>
                  <a href={data.url}>{data.name}</a>
                </li>
              ))
            }
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
          <div className="
          absolute bottom-[-3.75rem] left-1/2 -translate-x-1/2
          w-52 py-2 border-t-[2rem] border-t-nz-black border-x-[25px] border-x-transparent h-0">
            <div className="space-y-1 mt-[-30px] w-fit mx-auto cursor-pointer">
              <Grid/>
            </div>
          </div>
        </div>

        <div className="flex gap-x-5 items-center">
          {/*Auth*/}
          <button className="text-lupin-dark">
            Login / Sign up
          </button>
          {/*Hamburger*/}
          <button
            className="md:hidden space-y-1"
            onClick={() => setIsOpen(prevState => !prevState)}
          >
            <div className={classnames("h-0.5 w-6 bg-white rounded-full duration-300", {
              "rotate-45 translate-y-1.5": isOpen
            })}/>
            <div className={classnames("h-0.5 w-6 bg-white rounded-full duration-300", {
              "opacity-0": isOpen
            })}/>
            <div className={classnames("h-0.5 w-6 bg-white rounded-full duration-300", {
              "-rotate-45 -translate-y-1.5": isOpen
            })}/>
          </button>
        </div>
      </header>

      {/*Hamburger navigation*/}
      <nav className="relative px-5 overflow-hidden">
        <ul className={classnames("space-y-3 duration-200 mb-3", {
          "mt-0": isOpen,
          "mt-[-100%]": !isOpen
        })}>
          {
            header_data?.data.map((data) => (
              <li className="block" key={data.name}>
                <a href={data.url}>{data.name}</a>
              </li>
            ))
          }
        </ul>
      </nav>
    </>
  );
}
