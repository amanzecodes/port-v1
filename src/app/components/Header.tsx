"use client";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Project", href: "#projects" },
  { label: "Connect", href: "#contact" },
];

const Header = () => {
  return (
    <section>
      <header className="fixed top-0 left-0 w-full z-30 backdrop-blur-md bg-white/30 shadow-md">
        <div className="flex items-center justify-between mx-auto px-4 py-6">
          <a
            href="/"
            className="text-lg md:text-xl font-medium cursor-pointer relative z-2 hover:scale-105 transition duration-500 text-black"
          >
            <span className="font-bold">&copy; </span>Amanze Bruno.
          </a>

          <div className="hidden md:flex flex-row gap-10 text-lg font-medium cursor-pointer">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="relative group transition duration-300"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;