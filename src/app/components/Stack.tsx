import { HoverEffect } from "./ui/card-hover-effect";

export default function Stack() {
  return (
    <section id="stack">
      <div className="container">
      <div className="flex items-center justify-center py-20 md:py-12 sm:py-8">
        <h1 className="text-stone-200 lg:text-6xl md:text-5xl sm:text-3xl">My <span className="text-purple-400">Development</span>  Stack</h1>
      </div>
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={stack} />
    </div>
    </div>
    </section>
  );
}
export const stack = [
  {
    title: "Frontend",
    description:
      "Next JS, React JS, TypeScript, JavaScript.",
    
  },
  {
    title: "Backend",
    description:
      "Node JS—Express JS, Next Auth",
    
  },
  {
    title: "Utilities",
    description:
      "Zustand, Clerk, Axios, Zod, Prisma, React Hook Form",
    
  },
  {
    title: "Database",
    description:
      "MongoDB, Redis, PostgreSQL.",
    
  },
  {
    title: "Styling",
    description:
      "Tailwind CSS, Aceternity, Shadcn, Framer Motion.",
    
  },
  {
    title: "Development Tools",
    description:
      "VS Code, Github, Postman, Git.",
    
  },
];
