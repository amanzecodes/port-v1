"use client "
import React from "react";
import { useTextRevealAnimation } from "@/hooks/useTextRevealAnimation"; // Update the path accordingly


const navItems = [
  {
    href: "#hero",
    label: "Home",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#faqs",
    label: "Faqs",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const Footer = () => {
  const {scope, entranceAnimation} = useTextRevealAnimation();
  return (
    <footer id="contact" className="bg-stone-900 text-white">
      <div className="container">
        <div className="py-24 md:py-32 lg:py-40">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-green-400"></div>
            <span>Available for work</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2 className="text-4xl md:text-7xl lg:text-8xl mt-8 font-extralight">
                Enough Talk. Let's Make something great together.
              </h2>
              <a
                href="mailto:brunoamanze67@gmail.com"
                className="uppercase rounded-2xl border border-lime-400 px-6 h-11 w-[300px] flex items-center justify-center mt-4 "
              >
                <div className="flex">
                <span>brunoamanze67@gmail.com</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 text-white ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
                </div>
              </a>
            </div>
            <div className="md:col-span-1">
              <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                {navItems.map(({ href, label }) => (
                  <a href={href} key={label} className="uppercase text-lg">
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="py-16 text-white/30 text-sm">
          Copyright &copy; Amanze Bruno &bull; All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
