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
    href: "#stack",
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
  {
    label: "Approach",
    href: "#approach",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      // First translate, then rotate for a more natural motion
      topLineAnimate([
        [
          topLineScope.current,
          {
            translateY: 4,
          },
          { duration: 0.3, ease: "easeInOut" },
        ],
        [
          topLineScope.current,
          {
            rotate: 45,
            width: 16, // Slightly shorten the line for a more elegant X
          },
          { duration: 0.3, ease: "easeOut" },
        ],
      ]);
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            translateY: -4,
          },
          { duration: 0.3, ease: "easeInOut" },
        ],
        [
          bottomLineScope.current,
          {
            rotate: -45,
            width: 16, // Match the top line
          },
          { duration: 0.3, ease: "easeOut" },
        ],
      ]);
      // Open menu with slight delay and slower animation for better visual hierarchy
      navAnimate(
        navScope.current,
        {
          height: "100%",
          opacity: 1,
        },
        {
          duration: 0.6,
          ease: "anticipate", // Built-in framer-motion easing
        }
      );
    } else {
      // Reverse animation order for closing - first rotate back, then translate
      topLineAnimate([
        [
          topLineScope.current,
          {
            rotate: 0,
            width: 18, // Restore original width
          },
          { duration: 0.3, ease: "easeOut" },
        ],
        [
          topLineScope.current,
          {
            translateY: 0,
          },
          { duration: 0.2, ease: "easeOut" },
        ],
      ]);
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            rotate: 0,
            width: 18, // Restore original width
          },
          { duration: 0.3, ease: "easeOut" },
        ],
        [
          bottomLineScope.current,
          {
            translateY: 0,
          },
          { duration: 0.2, ease: "easeOut" },
        ],
      ]);
      // Close menu with smooth fade out
      navAnimate(
        navScope.current,
        {
          height: 0,
          opacity: 0,
        },
        {
          duration: 0.4,
          ease: "easeOut",
        }
      );
    }
  }, [
    isOpen,
    topLineAnimate,
    topLineScope,
    bottomLineAnimate,
    bottomLineScope,
    navScope,
    navAnimate,
  ]);

  return (
    <header>
      {" "}
      <div
        className="fixed top-0 left-0 w-full h-0 overflow-hidden bg-slate-950 z-30 backdrop-blur-sm"
        ref={navScope}
      >
        <motion.nav
          className="mt-20 flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.4, delay: isOpen ? 0.2 : 0 }}
        >
          {navItems.map(({ label, href }, index) => (
            <motion.a
              href={href}
              key={label}
              className="border-t last:border-b border-stone-200/80 py-10 group/nav-item relative isolate"
              onClick={() => {
                setIsOpen(false);
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                x: isOpen ? 0 : -20,
              }}
              transition={{
                duration: 0.4,
                delay: isOpen ? 0.3 + index * 0.1 : 0,
                ease: "easeOut",
              }}
            >
              <div className="container !max-w-full flex items-center justify-between">
                <span className="text-3xl font-light group-hover/nav-item:pl-4 transition-all duration-500">
                  {label}
                </span>
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
              </div>{" "}
              <div className="absolute w-full h-0 bg-slate-900 group-hover/nav-item:h-full transition-all duration-500 bottom-0 -z-10"></div>
            </motion.a>
          ))}
        </motion.nav>
      </div>
      <div
        className={twMerge(
          "absolute top-0 left-0 w-full z-40 transition-colors duration-300",
          isOpen && "fixed"
        )}
      >
        <div className="flex items-center justify-between w-full mx-auto px-4 sm:px-6 py-3">
          <a
            href="/"
            className="text-base md:text-xl font-medium cursor-pointer transition duration-500"
          >
            Amanze Bruno.
          </a>
          <div className="flex flex-row gap-6 items-center">
            {" "}
            <motion.div
              className="border-2 rounded-full p-2 cursor-pointer hover:bg-white hover:text-black transition-colors border-stone-500 text-stone-200 relative overflow-hidden group"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ borderColor: "rgb(226 232 240)" }}
            >
              <motion.span
                className="absolute inset-0 bg-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ zIndex: -1 }}
                initial={{ scale: 0 }}
                animate={{ scale: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="relative z-10"
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
                  initial={{ opacity: 0.9 }}
                  animate={{ opacity: 1 }}
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
                  initial={{ opacity: 0.9 }}
                  animate={{ opacity: 1 }}
                />
              </svg>
            </motion.div>
            <div className="hidden md:flex justify-center items-center">
              <a
                href="mailto:brunoamanze67@gmail.com"
                className="px-6 h-11 flex items-center justify-center border-2 transition border-stone-400 text-stone-200 hover:bg-white hover:text-black"
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
