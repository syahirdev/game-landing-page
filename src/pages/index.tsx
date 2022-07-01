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
    </div>
  );
}
