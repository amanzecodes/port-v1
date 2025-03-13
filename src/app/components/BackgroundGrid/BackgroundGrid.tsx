"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/moving-border";
const BackgroundGrid = (props: { children?: React.ReactNode }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden top-0 pb-20">
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
        <div className="flex flex-col text-center justify-center">
          <div className="max-w-5xl">{props.children}</div>
          <div className="mt-4">
            <p className="text-white text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
              Hi
              <motion.span
                animate={{
                  scale: [1, 1.1, 1],
                  skewX: [0, 10, -10, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut",
                }}
                className="inline-block text-xl"
              >
                👋
              </motion.span>{" "}
              I'm Amanze Bruno, a fullstack developer based in Nigeria
            </p>

            <div className="mt-[100px]">
              <Button
                borderRadius="1rem"
                containerClassName="w-52 cursor-pointer"
                duration={2500}
                className="bg-white/5 text-white border-slate-800 font-medium"
              >
                Explore My Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundGrid;
