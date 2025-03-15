"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMouse } from "react-use";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Project", href: "#projects" },
  { label: "Connect", href: "#contact" },
];

const Header = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);
  const { docX, docY } = useMouse(iconRef);

  useEffect(() => {
    const handleScroll = () => {
      setShowHamburger(window.scrollY > 750);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateMagneticEffect = () => {
    if (!iconRef.current) return { x: 0, y: 0 };

    const rect = iconRef.current.getBoundingClientRect();
    const distanceX = docX - (rect.left + rect.width / 2);
    const distanceY = docY - (rect.top + rect.height / 2);
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    const magneticRadius = 100;

    if (distance < magneticRadius) {
      const strength = (magneticRadius - distance) / magneticRadius;
      return {
        x: (distanceX / distance) * strength * 10,
        y: (distanceY / distance) * strength * 10,
      };
    }

    return { x: 0, y: 0 };
  };

  const magneticEffect = calculateMagneticEffect();

  return (
    <section>
      <header className="absolute top-0 left-0 w-full z-10">
        <div className="flex items-center justify-between p-8">
          <div>
            <a
              href="/"
              className="text-lg md:text-xl font-medium cursor-pointer relative z-10 hover:scale-105 transition duration-500"
            >
              <span className="font-bold">&copy; </span>Amanze Bruno.
            </a>
          </div>
          
          {/* Desktop Nav Links */}
          <div className="hidden md:flex flex-row gap-10 text-lg font-medium cursor-pointer">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative hover:scale-110 group transition duration-300"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Static SVG for small/medium screens when nav links disappear */}
          <div className="md:hidden flex">
            <div className="p-4 border-stone-400 border rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-black text-2xl"
              >
                <rect x="3" y="15" width="18" height="2" fill="currentColor" />
                <rect x="3" y="7" width="18" height="2" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {showHamburger && (
          <motion.div
            ref={iconRef}
            className="fixed top-10 right-6 z-20 cursor-pointer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1.2,
              x: magneticEffect.x,
              y: magneticEffect.y,
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 4,
            }}
          >
            <div className="p-2 md:p-5 lg:p-6 border-white bg-[#1c1d20] border rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="0.5"
                className="text-white font-thin text-xl w-6 h-6 md:w-8 md:h-8"
              >
                <rect x="3" y="15" width="18" height="2" strokeWidth="0.5" fill="currentColor" />
                <rect x="3" y="7" width="18" height="2" strokeWidth="0.5" fill="currentColor" />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Header;
