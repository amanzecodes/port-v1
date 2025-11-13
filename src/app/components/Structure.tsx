import Project from "./ui/Project";
import ProjectDescription from "./ui/ProjectDescription";
import project1 from "../../../assets/images/project1.png";
import project2 from "../../../assets/images/image5.png";
import project4 from "../../../assets/images/image3.png";
import edusiri from "../../../assets/images/edusirii.png"
import socially from "../../../assets/images/socially.png"
import bluelink from '../../../assets/images/project11.png'

interface ProjectProps {
  title: string;
  subheading: string;
  imageUrl: any;
  description: string;
  stack: string[];
  reverse: boolean;
  href?: string;
  githubhref?: string;
}

const projects: ProjectProps[] = [
  {
    title: "BlueLink SBS",
    subheading: "2025",
    imageUrl: bluelink,
    description: "BlueLink – Escrow-powered payments with airtight encryption. A secure, seamless platform that holds funds, ensures satisfaction, and releases payment only when conditions are met—building trust and boosting conversion for buyers and sellers alike.",
    stack: ["Next.js", "Tailwind CSS", "Typescript", "FastApi", "Paystack Api", "Alembic", "SQLAlchemy"],
    reverse: false, 
    href: "https://www.bluel.ink/",
    githubhref: "https://github.com/amanzecodes/bluelink"
  },
  {
    title: "Socially",
    subheading: "2025",
    imageUrl: socially,
    description:
      "Socially is a modern social media platform that enables users to connect, share posts, and engage with others in a seamless experience. Built with Next.js and TypeScript, it offers a fast, intuitive interface with real-time interactions, user authentication, and personalized feeds",
    stack: ["Next.js", "Tailwind CSS", "Typescript", "Clerk", "Prisma", "Postgresql", "Uploadthing"],
    reverse: true, 
    href:"https://socially-amanze.vercel.app/",
    githubhref:"https://github.com/amanzecodes/socially"
  },
  {
    title: "EduSiri (in progress)",
    subheading: "2025",
    imageUrl: edusiri,
    description:
      "An AI-powered school management system, that ensures seamless school management operations",
    stack: ["Next.js", "Tailwind CSS", "Typescript", "Node JS", "Prisma", "Postgresql", "Express", "Cloudinary"],
    reverse: false, 
    href:"",
    githubhref:"https://github.com/amanzecodes/EdAfrika_Backend"
  },
  {
    title: "Layers",
    subheading: "2025",
    imageUrl: project1,
    description:
      "Layers Sigma is a modern, visually stunning web platform that showcases cutting-edge UI/UX design principles with a focus on smooth animations, layered aesthetics, and interactive elements.",
    stack: ["React", "Next.js", "Typescript", "Tailwind CSS", "Framer"],
    reverse: true, // Normal order (Image first, then description)
    href:"https://layers-sigma.vercel.app/",
    githubhref:"https://github.com/amanzecodes/Layers"
  },
  {
    title: "Saas Landing Page",
    subheading: "2024",
    imageUrl: project2,
    description:
      "This is the landing page for a versatile software-as-a-service platform designed to help businesses scale, automate, and optimize their operations effortlessly.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer"],
    reverse: false, // Reverse order (Description first, then image)
    href: "https://amanze-saas.vercel.app/",
    githubhref: "https://github.com/amanzecodes/Landing-page"
  },
  {
    title: "VirtualR",
    subheading: "2023",
    imageUrl: project4,
    description:
      "VirtualR is a cutting-edge platform designed to bridge the gap between physical and remote experiences by offering an immersive virtual environment for collaboration, learning, and engagement.",
    stack: ["React JS", "Tailwind CSS"],
    reverse: true, // Normal order
    href: "https://virtual-r-one-ochre.vercel.app/",
    githubhref: "https://github.com/amanzecodes/Virtual-R",
  },
];

const Structure = () => {
  return (
    <div className="py-20 px-4">
      <div className="container">
        <div className="flex flex-col items-center gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                project.reverse ? "md:flex-row-reverse" : ""
              } gap-6 md:gap-4 items-center`}
            >
              <ProjectDescription
              className={index === 0 ? "text-lg sm:text-xl md:text-2xl lg:text-xl": ""}
                description={project.description}
                stack={project.stack}
              />
              <Project
                title={project.title}
                subheading={project.subheading}
                imageUrl={project.imageUrl}
                href={project.href}
                githubhref={project.githubhref}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Structure;
