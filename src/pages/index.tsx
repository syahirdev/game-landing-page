import Header from "../components/Header";
import Hero from "../components/Hero";
import Tournaments from "../components/Tournaments";
import News from "../components/News";
import Articles from "../components/Articles";
import About from "../components/About";
import Games from "../components/Games";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Cinematic from "../components/Cinematic";

export default function Home() {
  return (
    <div>
      <Header/>

      {/*Abstract*/}
      <div className="relative max-w-[90rem] mx-auto">
        <div className="absolute top-0 left-0 h-screen w-full -z-0 bg-[url('/assets/images/square-stars.png')] z-20"/>
      </div>

      <main>
        <Hero/>
        <Tournaments/>

        {/*Abstract*/}
        <div className="relative max-w-[90rem] mx-auto">
          <div className="absolute top-0 left-0 h-screen w-full -z-0 bg-[url('/assets/images/square-stars.png')]"/>
        </div>

        <News/>
        <Articles/>
        <Cinematic/>
        <About/>
        <Games/>
        <Faq/>
      </main>

      <Footer/>

      <div className="fixed bottom-0 right-0 m-5 p-5 rounded-full bg-red-600">
        <div className="sm:hidden">default</div>
        <div className="hidden sm:block md:hidden">sm</div>
        <div className="hidden md:block lg:hidden">md</div>
        <div className="hidden lg:block xl:hidden">lg</div>
        <div className="hidden xl:block 2xl:hidden">xl</div>
        <div className="hidden 2xl:block">2xl</div>
      </div>
    </div>
  );
}
