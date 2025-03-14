const About = () => {
    return (
      <section id="about" className="py-20 mt-20">
        <div className="mx-auto px-4">
          <div className="flex flex-col md:flex-col lg:flex-row w-full justify-between items-center py-10 border-t border-b border-dotted border-black/25 gap-6 md:gap-8">
            <div>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-thin">About Me</h2>
            </div>
            <div className="max-w-[700px]">
              <div className="flex flex-col gap-6">
                <p className="text-xl md:text-2xl lg:text-4xl">
                I study Computer Science at Covenant University with a passion for web development. I'm experienced in Next.js &amp; TypeScript, Framer Motion, and Tailwind CSS.
                </p>
                <p className="text-xl md:text-2xl lg:text-4xl">
                  Apart from coding, I enjoy gaming, exploring new tech trends, and Amapiano. I am also a huge fan of Mark Zuckerberg, I wish to be better one day.
                </p>
                <p className="text-xl md:text-2xl lg:text-4xl">
                  Always eager to learn, I seek opportunities for growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  