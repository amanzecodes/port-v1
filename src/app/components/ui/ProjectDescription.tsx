"use client";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface ProjectDescriptionProps {
  className?: string;
  description: string;
  stack: string[];
}

const ProjectDescription = ({
  className,
  description,
  stack,
}: ProjectDescriptionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="rounded-3xl bg-slate-900/30
      w-full sm:w-[350px] md:w-[400px] lg:w-[450px] 
      h-auto sm:h-[350px] md:h-[450px] lg:h-[600px] 
      p-4 flex items-center justify-center shadow-lg border-2 border-white/10"
    >
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 py-4 p-2 border-t border-b border-stone-200 border-dotted"
        >
          <h1
            className={twMerge(
              "sm:text-xl md:text-xl lg:text-xl text-white/60 font-light",
              className
            )}
          >
            {description}
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="py-4 flex flex-wrap gap-2 sm:gap-4"
        >
          {" "}
          {stack.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="px-3 py-1.5 bg-gradient-to-r from-slate-800/80 to-slate-700/60 text-white/90 border border-white/10 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-sm backdrop-blur-sm hover:bg-slate-700/70 hover:border-white/20 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDescription;
