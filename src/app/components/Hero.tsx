"use client";
import React from "react";
import { ArrowDown } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Cover } from "./ui/cover";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center relative px-4"
      style={{ backgroundImage: "url('/paper-bg.jpg')" }}
    >
      
      {/* <div className="absolute inset-0 hidden lg:flex justify-center">
        <DotLottieReact
          src="https://lottie.host/fc174717-0804-4a7f-9e4d-b92ab72c6a47/NA0eDl6hBq.lottie"
          loop
          autoplay
          speed={1}
          className="w-[400px] lg:w-[500px]"
        />
      </div> */}

      <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] flex flex-col text-center relative">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold">
          Crafting Modern Web <Cover>Applications</Cover>
        </h1>

        {/* Subtitle */}
        <p className="font-medium text-lg mt-6">
          Hi👋 I&apos;m Amanze Bruno, a fullstack web developer based in Lagos, Nigeria
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center mt-12 gap-5">
          <button className="bg-neutral-900 w-full sm:w-44 md:w-52 border border-black/35 p-3 rounded-2xl cursor-pointer">
            <div className="flex items-center justify-center gap-2">
              <p className="text-white">View my work</p>
              <ArrowDown className="text-white" />
            </div>
          </button>
          <button className="bg-transparent border border-neutral-900 p-3 rounded-2xl w-full sm:w-44 md:w-52 cursor-pointer">
            <p className="cursor-pointer">Let's Talk 🙋‍♂️</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
