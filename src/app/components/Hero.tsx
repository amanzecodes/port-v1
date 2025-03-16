"use client";
import React, { useEffect, useState } from "react";
import SplitType from "split-type";
import { useAnimate, motion, stagger } from "framer-motion";

const Hero = () => {
  const [titleScope, titleAnimate] = useAnimate();
  const [textScope, textAnimate] = useAnimate();

  useEffect(() => {
    new SplitType(titleScope.current, { types: "words", tagName: "span" });
    titleAnimate(
      titleScope.current.querySelectorAll(".word"),
      { transform: "translateY(0)", opacity: 1 },
      { duration: 0.5, delay: stagger(0.2) }
    );

    new SplitType(textScope.current, { types: "words", tagName: "span" });
    textAnimate(
      textScope.current.querySelectorAll(".word"),
      { transform: "translateY(0)", opacity: 1 },
      { duration: 0.5, delay: stagger(0.05, { startDelay: 1 }) }
    );
  }, []);

  return (
    <section className="flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 min-h-screen text-center">
      <div className="w-full max-w-4xl container">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          ref={titleScope}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight"
        >
          Crafting Modern Web <span>Applications</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          ref={textScope}
          className="font-medium text-lg sm:text-xl mt-4 sm:mt-6"
        >
          Hi 👋 I&apos;m Amanze Bruno, a full-stack web developer based in Lagos, Nigeria.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-4 sm:gap-6"
        >
          <a
            href="#projects"
            className="bg-stone-900 h-11 px-6 uppercase flex items-center justify-center gap-2 rounded-2xl text-white hover:bg-stone-800 transition"
          >
            View my work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;