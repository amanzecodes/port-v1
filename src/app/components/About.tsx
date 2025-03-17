"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.div
          className="flex flex-col md:flex-col lg:flex-row w-full justify-between items-center py-10 border-t border-b border-dotted border-black/25 gap-6 md:gap-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-3xl lg:text-4xl font-thin">
              About Me
            </h2>
          </motion.div>

          <motion.div
            className="max-w-[700px]"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-6">
              <p className="text-xl md:text-2xl lg:text-4xl font-extralight">
                "I build modern, responsive websites and full-stack applications
                for businesses and personal brands. With expertise in Next.js,
                Framer Motion, and Express.js, I create fast, visually
                appealing, and user-friendly web experiences—seamlessly handling
                both frontend and backend development.
              </p>
              <p className="text-xl md:text-2xl lg:text-4xl font-extralight">
                Beyond coding, I enjoy gaming, exploring emerging tech trends,
                and listening to Amapiano. I admire Mark Zuckerberg&apos;s
                impact on the tech industry and strive to surpass expectations
                in my own journey.
              </p>
              <p className="text-xl md:text-2xl lg:text-4xl font-extralight">
                Always eager to learn, I seek opportunities for growth."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
