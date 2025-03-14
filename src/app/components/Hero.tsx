"use client";
import React from "react";
import { ArrowDown } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Cover } from "./ui/cover";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/paper-bg.jpg')" }}
    >
      <div className="lg:h-screen pb-20 pt-36 w-full flex items-center justify-center relative">
        <div className="absolute ml-[600px]">
          <DotLottieReact
            src="https://lottie.host/fc174717-0804-4a7f-9e4d-b92ab72c6a47/NA0eDl6hBq.lottie"
            loop
            autoplay
          />
        </div>
        <div className="max-w-[60%] flex flex-col">
          <div className="flex items-center justify-center">
            <h1 className="text-[40px] md:text-5xl lg:text-7xl font-semibold text-center">
              Crafting Modern Web <Cover>Applications</Cover>
            </h1>
          </div>
          <div className="text-center mt-10">
            <p className="font-medium text-lg">
              Hi👋 I&apos;m Amanze Bruno, a fullstack web developer based in
              Lagos, Nigeria
            </p>
          </div>
          <div className="flex justify-center mt-20 flex-row gap-5">
            <button className="bg-neutral-900 w-52 border border-black/35 p-3 rounded-2xl cursor-pointer">
              <div className="flex flex-row items-center justify-center gap-2">
                <p className="text-white">View my work</p>
                <ArrowDown className="text-white" />
              </div>
            </button>
            <button className="bg-transparent border border-neutral-900 p-3 rounded-2xl w-52 cursor-pointer">
              <p className="cursor-pointer">Let's Talk 💌</p>
            </button>
          </div>
          <div className=" absolute ml-[395px] mt-[310px]">
            <DotLottieReact
              className="w-[200px] h-[200px]"
              speed={1}
              src="https://lottie.host/bed393cc-6b32-4fa1-bceb-d12c77fd59fd/kDYkHKVKrV.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
