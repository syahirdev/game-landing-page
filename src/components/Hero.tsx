export default function Hero() {
  return (
    <section className="relative h-[75vh] bg-gradient-to-br from-[#6013B4] to-[#27054B] z-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 flex flex-col justify-center h-full">
        <h1 className="max-w-xl text-6xl mb-4">Homepage CTA banner title</h1>
        <h2 className="max-w-sm text-xl mb-10">
          Tincidunt velit turpis mus egestas nisl sed. Lectus tincidunt nec praesent placerat pellentesque.
          Pharetra adipiscing iaculis semper aliquet mi, etiam.
        </h2>
        <button className="bg-white rounded-md text-lupin-normal px-12 py-3 w-fit mb-6">
          Create tournament
        </button>
        <p className="text-sm font-normal">Dolor elementum commodo lorem aenean dictum.</p>
      </div>


      <img
        src="assets/images/circle-wave.png"
        className="absolute top-0 right-0 opacity-50 w-9/12 mix-blend-color-dodge"
      />
      <img
        src="assets/images/hero.png"
        className="absolute top-16 right-0 w-7/12"
      />
      <img
        src="assets/images/rectangle-dots.png"
        className="absolute top-[60%] right-[30%] opacity-50 mix-blend-color-dodge"
      />
      <img
        src="assets/images/rectangle-dots.png"
        className="absolute top-[5%] right-[0%] opacity-50 mix-blend-color-dodge"
      />

      {/*Abstract*/}

    </section>
  );
}
