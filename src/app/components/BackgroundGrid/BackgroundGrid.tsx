"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/moving-border";
import { ArrowDown } from "lucide-react";
const BackgroundGrid = (props: { children?: React.ReactNode }) => {
  return (
    <div
      className="relative w-full top-0 pb-20 
      lg:h-screen  /* Full screen on large devices */
      md:h-[80vh]  /* 80% of viewport height on medium devices */
      sm:h-[60vh]  /* 60% of viewport height on small devices */
      h-auto /* Default for extra-small devices */
      overflow-hidden"
    >
      {/* Ensure the absolute div takes full space */}
      <div className="absolute inset-0 bg-black pointer-events-none flex items-center justify-center">
        <svg
          className="absolute w-full h-full opacity-40 text-neutral-700"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Grid Pattern */}
            <pattern
              id="grid"
              width="3"
              height="3"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 3 0 L 0 0 0 3"
                fill="none"
                stroke="#ffffff"
                strokeWidth="0.13"
                strokeOpacity="0.3"
              />
            </pattern>

            {/* Radial Gradient for Fade Effect */}
            <radialGradient id="fadeMask" cx="50%" cy="50%" r="90%">
              <stop offset="25%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="black" stopOpacity="0" />
            </radialGradient>

            {/* Mask for Grid */}
            <mask id="gridMask">
              <rect width="100%" height="100%" fill="url(#fadeMask)" />
            </mask>
          </defs>

          {/* Apply Grid with Even Fading Effect */}
          <rect
            width="100%"
            height="100%"
            fill="url(#grid)"
            mask="url(#gridMask)"
          />
        </svg>

        {/* Content Section */}
        <div className="flex flex-col text-center justify-center lg:mt-0 md:-mt-20 sm:-mt-8">
          <div className="lg:max-w-5xl md:max-w-4xl sm:max-w-3xl">
            {props.children}
          </div>

          {/* Hero Text */}
          <div className="mt-4">
            <p className="text-white text-sm md:text-lg lg:text-xl sm:max-w-xl md:max-w-3xl lg:max-w-5xl sm:p-3 md:p-0">
              Hi
              <motion.span
                animate={{ scale: [1, 1.1, 1], skewX: [0, 10, -10, 10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                👋
              </motion.span>{" "}
              I'm Amanze Bruno, a fullstack developer based in Lagos, Nigeria.
            </p>

            {/* CTA Button */}
            <div className="mt-[100px] flex items-center justify-center">
              <Button
                borderRadius="1rem"
                containerClassName="w-52 p0"
                duration={2500}
                className="bg-white/5 text-white border-slate-800 font-medium"
              >
                <span className="flex items-center gap-2">
                  Explore My Work
                  <motion.div
                    animate={{ y: [0, 4, 0] }} // Moves up and down
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }} // Smooth infinite animation
                  >
                    <ArrowDown size={24} />
                  </motion.div>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundGrid;
