import Header from "../components/Header";
import Hero from "../components/Hero";
import Tournaments from "../components/Tournaments";

export default function Home() {
  return (
    <div>
      <Header/>
      <main>
        <Hero/>
        <Tournaments/>
      </main>
    </div>
  );
}
