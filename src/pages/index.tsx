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
import Head from "next/head";

export default function Home() {
  return (
    <div>

      {/*SEO & Opengraph*/}
      <Head>
        <title>Game Landing Page</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <meta name="description" content="An example game landing page"/>
        <meta property="og:title" content="Game landing page"/>
        <meta property="og:description" content="An example game landing page"/>
        <meta property="og:url" content="https://www.game.syahir.dev/"/>
        <meta property="og:image" content="https://game.syahir.dev/assets/images/hero.png"/>
        <meta property="og:type" content="website"/>
      </Head>

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
