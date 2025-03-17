const Header = () => {
  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 backdrop-blur-md bg-[#0e1016]/30 shadow-md transition-colors duration-300`}
    >
      <div className="flex items-center justify-between w-full mx-auto px-4 sm:px-6 py-3">
        <a
          href="/"
          className="text-lg sm:text-xl font-medium cursor-pointer hover:scale-105 transition duration-500"
        >
          Amanze Bruno.
        </a>
        <div className="flex flex-row gap-6 items-center">
          <div className="border-2 rounded-full p-2 cursor-pointer hover:bg-stone-900 hover:text-stone-200 transition-all duration-500 border-stone-500 text-stone-200">
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
          <div className="hidden md:flex justify-center items-center">
            <a
              href="mailto:brunoamanze67@gmail.com"
              className="px-6 h-11 flex items-center justify-center border-2 rounded-2xl transition border-stone-400 text-stone-200 hover:bg-stone-900 hover:text-white"
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
