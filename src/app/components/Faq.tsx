"use client"
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
const faqs = [
  {
    question: "Can I collaborate with you on a project?",
    answer:
      "Absolutely! I'm always open to working on exciting projects with like-minded developers, designers, and entrepreneurs. If you have a cool idea or need an extra hand on something, feel free to reach out—I’d love to hear about it!",
  },
  {
    question: "What do you specialize in?",
    answer:
      "Web development, SaaS product building, e-commerce solutions, payment gateway integration,",
  },
  {
    question: "Are you available for freelance work?",
    answer:
      "Yes! I am open to freelance projects, collaborations that align with my expertise.",
  },
  {
    question: "Can I hire you to build a website or web app?",
    answer:
      "Absolutely! You can contact me via my portfolio or email to discuss your project requirements.",
  },
];

const Faq = () => {
  const [selectIndex, setSelectIndex] = React.useState<number | null>(null);
  return (
    <section
      id="faqs"
      className="py-20 mt-12 md:py-32 lg:py-40 md:mt-16 lg:mt-10"
    >
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQS</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={question}
              className="border-t border-stone-400 border-dotted cursor-pointer py-6 md:py-8 lg:py-10 last:border-b relative isolate group/faq"
              onClick={() => {
                if(index === selectIndex) {
                  setSelectIndex(null)
                } else {
                  setSelectIndex(index)
                }
              }}
            >
              <div className={twMerge("absolute h-0 w-full bottom-0 bg-[#212531] -z-10 group-hover/faq:h-full transition-all duration-700", index === selectIndex && "h-full")}></div>
              <div className={twMerge("flex items-center justify-between gap-4 transition-all duration-700 group-hover/faq:lg:px-8", index === selectIndex && "lg:px-8")}>
                <div className="text-2xl md:text-3xl lg:text-4xl font-extralight">{question}</div>
                <div className={twMerge("inline-flex items-center justify-center size-11 cursor-pointer border border-stone-400 rounded-full shrink-0 transition duration-300 bg-[#212531]", index === selectIndex && "rotate-45") }>
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
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
              <AnimatePresence>
              {index === selectIndex && (
                 <motion.div
                 className="overflow-hidden lg:px-8"
                 initial={{ height: 0 }}
                 animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: .7, ease: "easeOut" }}
                 >
                 <p className="text-xl mt-4">{answer}</p>
               </motion.div>
              )}
             </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
