"use client";
import Image, { StaticImageData } from "next/image";
import { SiGithub } from "react-icons/si";


interface ProjectProps {
  title: string;
  subheading: string;
  imageUrl: StaticImageData;
  href?: string;
  githubhref?: string;
}

const Project = ({ title, subheading, imageUrl, href, githubhref }: ProjectProps) => {
  return (
    <div className="relative rounded-3xl h-auto w-full sm:h-[300px] sm:w-[350px] md:h-[400px] md:w-[500px] lg:h-[600px] lg:w-[800px] overflow-hidden bg-[#212531]">
      {/* Overlay Content */}
      <div className="relative py-6 px-4">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-xl lg:text-2xl text-white">{title}</h1>
            <p className="text-xs sm:text-sm text-gray-300">{subheading}</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <a href={githubhref} target="_blank">
            <div className="p-3 sm:p-4 border-2 border-stone-200 bg-transparent rounded-full cursor-pointer hover:bg-stone-200 transition-all duration-200 group/git">
              <SiGithub className="text-white size-5 sm:size-6 group-hover/git:text-black" />
            </div>
            </a>
            <div className="p-3 sm:p-4 rounded-full border-2 border-stone-200 bg-transparent cursor-pointer hover:bg-stone-200 transition-all duration-200 group">
              <a href={href} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 sm:size-6 text-white group-hover:text-black transition-all duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
              </a>   
            </div>
          </div>
        </div>
        <div className="p-2 flex items-center justify-center py-2 mt-6 sm:mt-10 rounded-md h-full w-full shadow-2xl">
          <div className="shadow-xl rounded-md overflow-hidden">
            <Image
              src={imageUrl.src}
              alt="Project Image"
              className="rounded-md shadow-lg w-full"
              width={1500}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Project;
