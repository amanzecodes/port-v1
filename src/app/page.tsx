"use client";

import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Faq from "./components/Faq";
import Stack from "./components/Stack";
import About from "./components/About";
import Footer from "./components/Footer";
import Approach from "./components/Approach";
import Header from "./components/Header";




export default function Home() {
  return (
    <motion.div
      className="overflow-x-hidden"
      initial={{ opacity: 0 }} // No Y movement to avoid shifting
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
     
     <Header />
      <Hero />
      <Intro />
      <Projects />
      <Stack />
      <About />
      <Approach />
      <Faq />
      <Footer />
      
    </motion.div>
  );
}
