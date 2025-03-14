import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
    <Header />
    <Hero />
    <Intro />
    <Projects />
    <Faq />
    </div>
  );
}
