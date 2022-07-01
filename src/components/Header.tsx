export default function Header() {
  return (
    <header
      className="absolute top-0 z-10 w-full flex items-center justify-between bg-nz-black px-20 py-3">
      {/*Navigation*/}
      <nav>
        <ul className="flex items-center gap-x-12">
          <li className="font-avenir-bold uppercase text-2xl">Logo</li>
          <li>Content</li>
          <li>Play</li>
          <li>Shop</li>
        </ul>
      </nav>

      {/*Search Bar*/}
      <div
        className="relative flex justify-between gap-x-3 w-[25rem] px-6 py-1 rounded-full text-nz-black border-2 border-[#bababa] bg-white">
        <input
          type="text"
          className="flex-1 focus:outline-none placeholder:font-normal"
          placeholder="Search game, tournament, articles..."
        />
        <img src="/assets/icons/search.svg"/>
      </div>

      {/*Auth*/}
      <button className="text-lupin-dark">
        Login / Sign up
      </button>
    </header>
  );
}
