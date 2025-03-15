import { FC } from "react";
import image1 from "../../../assets/images/image1.png";
import image2 from "../../../assets/images/image2.png";
import image3 from "../../../assets/images/image3.png";
import image4 from "../../../assets/images/image4.png";
import image5 from "../../../assets/images/image5.png";
import Image from "next/image";

const projects = [
  {
    name: "Spotify Clone",
    image: image1,
  },
  {
    name: "Layers",
    image: image2,
  },
  {
    name: "Virtual CU",
    image: image3,
  },
  {
    name: "Saas Landing Page",
    image: image4,
  },
  {
    name: "My Portfolio",
    image: image5,
  },
];

const Projects: FC = () => {
  return (
    <section id="projects" className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto px-4 md:px-2 lg:px-2">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">Selected Works</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {projects.map(({ name, image }) => (
            <a href="#hero" key={name} className="border-black/25 border-t last:border-b border-dotted py-6 md:py-8 lg:py-10 flex flex-col">
              <div className="">
                <div className="aspect-video md:hidden">
                <Image src={image} alt={name} className="size-full object-cover rounded-sm border border-blue-800"/>
                </div>
                <div className="mt-8 md:mt-0 flex justify-between items-center">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl">{name}</h3>
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
