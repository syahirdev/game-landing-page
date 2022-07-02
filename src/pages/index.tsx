import Header from "../components/Header";
import Hero from "../components/Hero";
import Tournaments from "../components/Tournaments";
import News from "../components/News";
import Articles from "../components/Articles";
import About from "../components/About";
import Games from "../components/Games";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header/>

      <main>
        <Hero/>
        <Tournaments/>
        <News/>
        <Articles/>
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
