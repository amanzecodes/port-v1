"use client";
import React, { useEffect } from "react";
import SplitType from "split-type";
import { useAnimate, motion, stagger } from "framer-motion";

const Hero = () => {
  const [titleScope, titleAnimate] = useAnimate();
  const [textScope, textAnimate] = useAnimate();

  useEffect(() => {
    // Split & Animate Heading
    new SplitType(titleScope.current, { types: "words", tagName: "span" });
    titleAnimate(titleScope.current.querySelectorAll(".word"), 
      { transform: "translateY(0)", opacity: 1 }, 
      { duration: 0.5, delay: stagger(0.2) }
    );

    // Split & Animate Paragraph
    new SplitType(textScope.current, { types: "words", tagName: "span" });
    textAnimate(textScope.current.querySelectorAll(".word"), 
      { transform: "translateY(0)", opacity: 1 }, 
      { duration: 0.5, delay: stagger(0.05, { startDelay: 1 }) } // Slight delay after heading
    );
  }, []);

  return (
    <section id="hero" className="flex items-center justify-center px-6 sm:px-8 md:px-12 min-h-[80vh] lg:h-screen">
      <div className="flex flex-col text-center w-full max-w-4xl mx-auto">
        {/* Hero Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          ref={titleScope}
          className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold leading-tight lg:mt-0 md:mt-0 sm:mt-20"
        >
          Crafting Modern Web <span>Applications</span>
        </motion.h1>

        {/* Subtitle (Now with Animation) */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          ref={textScope}
          className="font-medium text-lg sm:text-xl mt-6 sm:mt-8"
        >
          Hi 👋 I&apos;m Amanze Bruno, a full-stack web developer based in Lagos, Nigeria.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col md:flex-row items-center justify-center mt-14 md:mt-12 gap-4 md:gap-6"
        >
          <a
            href="#projects"
            className="bg-stone-900 h-11 px-6 uppercase flex items-center justify-center gap-2 rounded-2xl text-white hover:bg-stone-800 transition"
          >
            View my work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
