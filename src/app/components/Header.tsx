"use client";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const navItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Stack",
    href: "#stack"
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate()

  useEffect(() => {
    if (isOpen) {
      topLineAnimate([
        [
          topLineScope.current,
          {
            translateY: 4,
          },
        ],
        [
          topLineScope.current,
          {
            rotate: 45,
          },
        ],
      ]);
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            translateY: -4,
          },
        ],
        [
          bottomLineScope.current,
          {
            rotate: -45,
          },
        ],
      ]);
      navAnimate(navScope.current, {
        height: "100%"
      }, {
        duration: 0.7
      })
    } else {
      topLineAnimate([
        [
          topLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          topLineScope.current,
          {
            translateY: 0,
          },
        ],
      ]);
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          bottomLineScope.current,
          {
            translateY: 0,
          },
        ],
      ]);
      navAnimate(navScope.current, {
       height: 0
      },
    {
      duration: 0.4
    })
    }
  }, [
    isOpen,
    topLineAnimate,
    topLineScope,
    bottomLineAnimate,
    bottomLineScope,
    navScope,
    navAnimate
  ]);

  return (
    <header>
      <div className="fixed top-0 left-0 w-full h-0 overflow-hidden bg-slate-950 z-30" ref={navScope}>
        <nav className="mt-20 flex flex-col">
          {navItems.map(({ label, href }) => (
            <a
              href={href}
              key={label}
              className="border-t last:border-b border-stone-200 py-10 group/nav-item relative isolate"
              onClick={() => {setIsOpen(false)}}
            > 
              <div className="container !max-w-full flex items-center justify-between">
                <span className="text-3xl font-light group-hover/nav-item:pl-4 transition-all duration-500">{label}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <div className="absolute w-full h-0 bg-slate-900 group-hover/nav-item:h-full transition-all duration-500 bottom-0 -z-10"></div>
            </a>
          ))}
        </nav>
      </div>
      <div className={twMerge("absolute top-0 left-0 w-full z-40 transition-colors duration-300", isOpen && "fixed")}>
        <div className="flex items-center justify-between w-full mx-auto px-4 sm:px-6 py-3">
          <a
            href="/"
            className="text-base md:text-xl font-medium cursor-pointer hover:scale-105 transition duration-500"
          >
            Amanze Bruno.
          </a>
          <div className="flex flex-row gap-6 items-center">
            <div
              className="border-2 rounded-full p-2 cursor-pointer hover:bg-slate-800 hover:text-stone-200 transition-all duration-500 border-stone-500 text-stone-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <motion.rect
                  x="3"
                  y="7"
                  width="18"
                  height="2"
                  fill="currentColor"
                  ref={topLineScope}
                  style={{
                    transformOrigin: "12px 8px",
                  }}
                />
                <motion.rect
                  x="3"
                  y="15"
                  ref={bottomLineScope}
                  width="18"
                  height="2"
                  fill="currentColor"
                  style={{
                    transformOrigin: "12px 16px",
                  }}
                />
              </svg>
            </div>
            <div className="hidden md:flex justify-center items-center">
              <a
                href="mailto:brunoamanze67@gmail.com"
                className="px-6 h-11 flex items-center justify-center border-2 rounded-2xl transition border-stone-400 text-stone-200 hover:bg-slate-900 hover:text-white"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
