"use client";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

const techStack = ["Next JS", "TypeScript", "React JS", "Node JS", "Express JS", "MongoDB"];

export default function CallToAction() {
  const [isHovered, setIsHovered] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("[data-animate]", { x: "-50%" }, { duration: isHovered ? 65 : 40, ease: "linear", repeat: Infinity });
  }, [isHovered, animate]);

  return (
    <section className="py-16" ref={scope}>
      <div className="flex w-full justify-center items-center py-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-thin">My Tech Stack</h1>
      </div>
      <div className="overflow-x-clip p-4 flex">
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          data-animate
          className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cursor-pointer"
        >
          {Array(6) // Repeat the stack for continuous animation
            .fill(techStack)
            .flat()
            .map((tech, index) => (
              <div key={index} className="flex items-center gap-16">
                <span className="text-lime-400 text-7xl">&#10038;</span>
                <span className="group-hover:text-lime-400">{tech}</span>
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
