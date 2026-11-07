import Project from "./ui/Project";
import ProjectDescription from "./ui/ProjectDescription";
import project1 from "../../../assets/images/project1.png";
import socially from "../../../assets/images/socially.png"
import bluelink from '../../../assets/images/project11.png'
import payflow from '../../../assets/images/payflow.png'
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
    title: "Payflow",
    subheading: "2026",
    imageUrl: payflow,
    description:
      "A payment reconciliation engine, track who paid, you could also pay your bills with collected payments from your customers",
    stack: ["Next JS", "Tailwind CSS", "TypeScript", "ExpressJS", "PostgreSQL", "PrismaORM"],
    reverse: true, // Normal order
    href: "https://payflow-lemon.vercel.app/",
    githubhref: "https://github.com/amanzecodes/payflow",
  },
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
    title: "Layers",
    subheading: "2025",
    imageUrl: project1,
    description:
      "Layers Sigma is a modern, visually stunning web platform that showcases cutting-edge UI/UX design principles with a focus on smooth animations, layered aesthetics, and interactive elements.",
    stack: ["React", "Next.js", "Typescript", "Tailwind CSS", "Framer"],
    reverse: true, // Normal order (Image first, then description)
    href:"https://layers-sigma.vercel.app/",
    githubhref:"https://github.com/amanzecodes/Layers"
  }
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
