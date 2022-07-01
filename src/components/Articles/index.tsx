import Main from "./Main";
import Section from "./Section";

export default function Articles() {
  return (
    <div className="max-w-7xl mx-auto pb-16 flex">
      <div className="rotate-90 h-fit uppercase font-avenir-bold leading-none w-[7.5rem] mt-[-1.05rem]">
        <p className="text-lupin-normal text-7xl">featured</p>
        <p className="text-stroke text-transparent text-7xl ">articles</p>
      </div>
      <div className="relative bg-lupin-normal px-8 py-12 flex-1 overflow-hidden">
        <div className="flex gap-x-8">
          <Main/>
          <Section/>
        </div>
        <div className="absolute bottom-[-2.5rem] right-[-2.5rem] bg-nz-black h-20 w-20 rotate-45"/>
      </div>
    </div>
  );
}
