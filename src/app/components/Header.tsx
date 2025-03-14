"use client";

const navLinks = [
  { label: "About", href: "#" },
  { label: "Project", href: "#projects" },
  { label: "Connect", href: "#integrations" }
];

const Header = () => {
  return (
    <section>
      <header className="absolute top-0 left-0 w-full z-10">
        <div className="flex items-center justify-between p-8">
          <div>
            <p className="text-xl font-medium cursor-pointer relative z-10">
              <span className="text-[17px] font-bold">&copy; </span>Amanze Bruno.
            </p>
          </div>
          <div className="flex flex-row gap-10 text-lg font-medium cursor-pointer">
            {navLinks.map((link,index) => (
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
        </div>
      </header>
    </section>
  );
};

export default Header;
