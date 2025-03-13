import BackgroundGrid from "./BackgroundGrid/BackgroundGrid";
import { Cover } from "./ui/cover";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <section id="hero">
      <BackgroundGrid>
        <div className="sm:container">
        <Spotlight className="hidden lg:block"/>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Building Scalable & Modern Web <Cover>Experiences</Cover>
        </h1>
        </div>
      </BackgroundGrid>
    </section>
  );
};

export default Hero;
