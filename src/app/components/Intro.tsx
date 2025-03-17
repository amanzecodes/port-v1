"use client";
import { stagger, useAnimate, useInView } from "framer-motion";
import { transform } from "next/dist/build/swc";
import { FC, useEffect } from "react";
import SplitType from "split-type";

const Intro: FC = () => {
  const [scope, animate] = useAnimate()
  const inView = useInView(scope, {
    once: false,
  })

  useEffect(() => {
    new SplitType(scope.current.querySelector('h2'), {
      types: 'lines,words',
      tagName: 'span',
    });
  }, [scope])

  useEffect(() => {
    if (inView) {
      animate(scope.current.querySelectorAll(".word"), {
        transform: 'translateY(0)',
      }, {
        duration: 0.5,
        delay: stagger(0.2)
      });
    }
  }, [inView, animate, scope]);

  return (
    <section id="intro" className="py-24 mt-12 md:py-32 lg:py-40 md:mt-16 lg:mt-20" ref={scope}>
      <div className="container text-wrap">
        <h2 className="text-3xl md:text-6xl lg:text-8xl lg:w-[80%] font-extralight leading-tight">
          Crafting functional websites with clean code and smart structure to
          help your business thrive and shine online
        </h2>
      </div>
    </section>
  );
};

export default Intro;
