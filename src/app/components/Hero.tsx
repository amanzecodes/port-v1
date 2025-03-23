"use client";
import React, { useEffect } from "react";
import SplitType from "split-type";
import { useAnimate, motion, stagger } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  const [titleScope, titleAnimate] = useAnimate();
  const [textScope, textAnimate] = useAnimate();

  useEffect(() => {
    new SplitType(titleScope.current, {
      types: "lines,words",
      tagName: "span",
    });
    titleAnimate(
      titleScope.current.querySelectorAll(".word"),
      { transform: "translateY(0)", opacity: 1 },
      { duration: 0.5, delay: stagger(0.2) }
    );

    new SplitType(textScope.current, { types: "lines,words", tagName: "span" });
    textAnimate(
      textScope.current.querySelectorAll(".word"),
      { transform: "translateY(0)", opacity: 1 },
      { duration: 0.5, delay: stagger(0.2, { startDelay: 1 }) }
    );
  }, []);

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 min-h-screen text-center text-gray-900
             border-b border-gray-300/50 before:absolute before:bottom-0 before:left-1/2 before:w-32 before:h-[2px] 
             before:bg-gradient-to-r before:from-transparent before:via-gray-600 before:to-transparent before:-translate-x-1/2"
            style={{
              backgroundImage: "url(/image.png)",
            }}
    >
      <div className="w-full container">
        <Spotlight
          className="absolute-top-40 left-0 md:-top-20 md:left-60"
          fill="blue"
        />
        <Spotlight
          className="absolute-top-40 left-0 md:-top-20 md:left-60"
          fill="purple"
        />
        <div className="flex items-center justify-center w-full flex-col px-4">
          <div className="max-w-5xl sm:flex justify-center items-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            ref={titleScope}
            className="text-4xl md:text-7xl lg:text-8xl font-extralight leading-tight text-stone-200"
          >
            Crafting Modern Web <span>Applications</span>
          </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            ref={textScope}
            className="font-light text-sm md:text-xl mt-4 sm:mt-6 text-stone-200"
          >
            Hi 👋 I&apos;m Amanze Bruno, a full-stack web developer based in
            Lagos, Nigeria.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-4 sm:gap-6"
          >
            <a href="#projects" className="mt-8">
            <button className="bg-transparent no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
              {" "}
              <span className="absolute inset-0 overflow-hidden rounded-full">
                {" "}
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />{" "}
              </span>{" "}
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-transparent py-2 px-6 ring-1 ring-white/10 ">
                {" "}
                <span> View my work </span>{" "}
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />{" "}
                </svg>{" "}
              </div>{" "}
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />{" "}
            </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
