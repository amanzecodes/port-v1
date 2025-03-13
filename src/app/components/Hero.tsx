import BackgroundGrid from "./BackgroundGrid/BackgroundGrid"
import { Cover } from "./ui/cover"

const Hero = () => {
  return (
    <div>
        <BackgroundGrid>
            <h1 className="text-3xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Building Scalable & Modern Web <Cover>Experiences</Cover>
            </h1>
        </BackgroundGrid>
    </div>
  )
}

export default Hero