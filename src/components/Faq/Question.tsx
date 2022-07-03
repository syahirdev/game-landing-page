import { Plus } from "iconoir-react";
import { useState } from "react";
import classnames from "classnames";

export default function Question() {
  // STATES
  const [isOpen, setIsOpen] = useState(false);

  // VIEWS
  return (
    <div
      className="text-left bg-neutral-800 rounded px-5 py-5 bg-neutral-800 rounded overflow-hidden">
      <div className="flex justify-between items-center">
        <p>FAQ Question 1</p>
        <button
          className={classnames("border-2 border-lupin-dark rounded-full p-0.5 duration-500", { "rotate-[225deg]": isOpen })}
          onClick={() => setIsOpen(prevState => !prevState)}
        >
          <Plus className="text-lupin-dark"/>
        </button>
      </div>
      <div className="overflow-hidden">
        <p className={classnames("duration-500 ease-in-out pt-3", {
          "mt-0": isOpen,
          "mt-[-100%] lg:mt-[-10%]": !isOpen
        })}>
          Tortor, laoreet nunc diam et nullam sed. Vel eu tempus nibh quis. Nulla et congue pellentesque amet, purus. In
          suspendisse eleifend pellentesque in tellus libero, venenatis viverra. Amet convallis in faucibus ut. Sit elit
          molestie quam sed vestibulum, magna. Consectetur pulvinar dapibusturpis.
        </p>
      </div>
    </div>
  );
}
