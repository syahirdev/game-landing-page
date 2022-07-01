import Header from "../components/Header";
import Hero from "../components/Hero";
import Tournaments from "../components/Tournaments";
import News from "../components/News";
import Articles from "../components/Articles";
import About from "../components/About";
import Games from "../components/Games";

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
      </main>
    </div>
  );
}
