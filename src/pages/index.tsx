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
import Abstract from "../components/Abstract";

export default function Home() {
  return (
    <div>

      {/*Header*/}
      <Header/>
      <Abstract/>

      {/*Body*/}
      <main>
        <Hero/>
        <Tournaments/>
        <Abstract/>
        <News/>
        <Articles/>
        <Cinematic/>
        <About/>
        <Games/>
        <Faq/>
      </main>

      {/*Footer*/}
      <Footer/>

    </div>
  );
}
