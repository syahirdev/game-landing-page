import Header from "../components/Header";
import Hero from "../components/Hero";
import Tournaments from "../components/Tournaments";
import News from "../components/News";
import Articles from "../components/Articles";

export default function Home() {
  return (
    <div>
      <Header/>
      <main>
        <Hero/>
        <Tournaments/>
        <News/>
        <Articles/>
      </main>
    </div>
  );
}
