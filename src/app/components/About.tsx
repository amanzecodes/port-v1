const About = () => {
  return (
    <section id="about" className="py-20 mt-20">
      <div className="mx-auto px-4">
        <div className="flex flex-col md:flex-col lg:flex-row w-full justify-between items-center py-10 border-t border-b border-dotted border-black/25 gap-6 md:gap-8">
          <div>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-thin">
              About Me
            </h2>
          </div>
          <div className="max-w-[700px]">
            <div className="flex flex-col gap-6">
              <p className="text-xl md:text-2xl lg:text-4xl">
                "I build modern, responsive websites and full-stack applications
                for businesses and personal brands. With expertise in Next.js,
                Framer Motion, and Express.js, I create fast, visually
                appealing, and user-friendly web experiences—seamlessly handling
                both frontend and backend development.
              </p>
              <p className="text-xl md:text-2xl lg:text-4xl">
                Beyond coding, I enjoy gaming, exploring emerging tech trends,
                and listening to Amapiano. I admire Mark Zuckerberg&apos;s
                impact on the tech industry and strive to surpass expectations
                in my own journey.
              </p>
              <p className="text-xl md:text-2xl lg:text-4xl">
                Always eager to learn, I seek opportunities for growth."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
