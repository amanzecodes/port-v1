import { FC } from "react";
import image2 from "../../../assets/images/project1.png";
import image3 from "../../../assets/images/image3.png";
import image5 from "../../../assets/images/image5.png";
import edusiri from "../../../assets/images/edusirii.png";
import socially from "../../../assets/images/socially.png"
import bluelink from '../../../assets/images/project11.png'
import Image from "next/image";
import Structure from "./Structure";

const projects = [
  {name: "BlueLink SBS", image: bluelink, href: "https://www.bluel.ink/"},
  {name: "Socially", image: socially, href: "https://socially-amanze.vercel.app/"},
  {name: "Edusiri", image: edusiri, href: "https://edusirii.com/"},
  { name: "Layers", image: image2, href: "https://layers-sigma.vercel.app/" },
  { name: "Saas Landing Page", image: image5, href: "https://amanze-saas.vercel.app/" },
  { name: "VirtualR", image: image3, href: "https://virtual-r-one-ochre.vercel.app/" },
];

const Projects: FC = () => {
  return (
    <section id="projects" className="py-24 md:py-32 lg:py-40">
      <div>
        <h1 className="font-light text-4xl md:text-7xl text-center">Selected <span className="text-purple-400">Works</span></h1>
      </div>

      {/* Show only on sm and md */}
      <div className="block lg:hidden">
        <div className="container">
          <div className="mt-10 md:mt-16 lg:mt-20">
            {projects.map(({ name, image, href }) => (
              <a
                href={href}
                key={name}
                target="_blank"
                className="border-stone-200 font-thin border-t last:border-b border-dotted py-6 md:py-8 lg:py-12 flex flex-col relative group/project"
              >
                <div className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-700 bg-slate-800"></div>
                <div className="relative">
                  <div className="aspect-video md:hidden relative overflow-hidden">
                    <Image
                      src={image}
                      alt={name}
                      className="size-full object-cover shadow-md transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded-lg"></div>
                  </div>
                  <div className="mt-8 md:mt-0 flex justify-between items-center md:grid md:[grid-template-columns:1fr_300px_max-content] md:gap-8">
                    <div className="lg:group-hover/project:pl-8 transition-all duration-700">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl">{name}</h3>
                    </div>
                    <div className="relative">
                      <div className="absolute aspect-video w-full top-1/2 -translate-y-1/2 opacity-0 scale-90 group-hover/project:opacity-100 group-hover/project:scale-100 lg:group-hover/project:scale-110 transition-all duration-500 z-10">
                        <Image
                          src={image}
                          alt={name}
                          className="size-full object-cover shadow-md transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="lg:group-hover/project:pr-8 transition-all duration-700">
                      <div className="size-6 overflow-hidden">
                        <div className="h-6 w-12 flex group-hover/project:-translate-x-1/2 transition-transform duration-300">
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
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Show only on lg and above */}
      <div className="hidden lg:block">
        <Structure />
      </div>
    </section>
  );
};

export default Projects;
