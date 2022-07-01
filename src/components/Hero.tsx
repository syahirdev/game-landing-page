export default function Hero() {
  return (
    <section className="relative h-[75vh] bg-gradient-to-br from-[#6013B4] to-[#27054B]">
      <div className="max-w-7xl mx-auto flex flex-col justify-center h-full">
        <h1 className="max-w-xl text-6xl font-medium mb-4">Homepage CTA banner title</h1>
        <h2 className="max-w-sm text-xl mb-10">
          Tincidunt velit turpis mus egestas nisl sed. Lectus tincidunt nec praesent placerat pellentesque.
          Pharetra adipiscing iaculis semper aliquet mi, etiam.
        </h2>
        <button className="bg-white rounded-md text-[#772BCB] font-bold px-12 py-3 w-fit mb-6">
          Create tournament
        </button>
        <p className="text-sm">Dolor elementum commodo lorem aenean dictum.</p>
      </div>

      {/*Down arrow button*/}
      <button
        className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 bg-nz-black rounded-full border-2 border-greymouth">
        <img src="assets/icons/down-arrow.svg" className="h-8 w-8 p-2 pb-1"/>
      </button>
    </section>
  );
}
