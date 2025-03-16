"use client";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-30 backdrop-blur-md bg-white/30 shadow-md">
      <div className="flex items-center justify-between w-full mx-auto px-4 py-2">
        {/* Logo */}
        <a
          href="/"
          className="text-lg md:text-xl font-medium cursor-pointer relative z-2 hover:scale-105 transition duration-500 text-black"
        >
          Amanze Bruno.
        </a>

        {/* Right Side - Menu Icon + Contact Button */}
        <div className="flex flex-row gap-10 text-center items-center">
          {/* Menu Icon */}
          <div className="border border-stone-500 rounded-full p-2 cursor-pointer hover:bg-stone-900 hover:text-white transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect x="3" y="15" width="18" height="2" fill="currentColor" />
              <rect x="3" y="7" width="18" height="2" fill="currentColor" />
            </svg>
          </div>

          {/* Contact Button - Visible only on Medium+ Screens */}
          <div className="hidden md:flex justify-center items-center">
            <a
              href="mailto:brunoamanze67@gmail.com"
              className="px-6 h-11 flex items-center justify-center border-2 border-stone-400 rounded-2xl hover:bg-stone-900 hover:text-white transition"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
