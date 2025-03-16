"use client";
import React from "react";
import { Cover } from "./ui/cover";
const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center relative px-4"
      style={{
        background: "url('/paper-bg.jpg')"
      }}
    >
      <div className="absolute inset-0 hidden lg:flex justify-center">
        {/* <DotLottieReact
          src="https://lottie.host/fc174717-0804-4a7f-9e4d-b92ab72c6a47/NA0eDl6hBq.lottie"
          loop
          autoplay
          speed={1}
          className="w-[400px] lg:w-[500px]"
        /> */}
      </div>

      <div className="sm:max-w-[80%] md:max-w-[90%] lg:max-w-[60%] flex flex-col text-center relative">
        {/* Title */}
        <h1 className="md:text-7xl sm:text-4xl lg:text-8xl leading-tight font-bold py-4">
          Crafting Modern Web <Cover>Applications</Cover>
        </h1>

        {/* Subtitle */}
        <p className="font-medium text-xl mt-8">
          Hi👋 I&apos;m Amanze Bruno, a fullstack web developer based in Lagos,
          Nigeria
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center mt-12 gap-5">
          <a
            href="#projects"
            className="bg-stone-900 h-11 px-6 uppercase items-center justify-center flex gap-2 rounded-2xl"
          >
            <p className="text-white">View my work</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="uppercase font-medium px-6 h-11 flex items-center justify-center"
          >
            Let's Connect  
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
