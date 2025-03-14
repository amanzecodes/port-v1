import React from "react";
const faqs = [
  {
    question: "Who are you?",
    answer:
      "I am Amanze Bruno, a student at Covenant University currently studying Computer Science. I am also a web developer passionate about building scalable and interactive web applications.",
  },
  {
    question: "What do you specialize in?",
    answer:
      "I specialize in full-stack web development, working primarily with Next.js, TypeScript, Tailwind CSS, Node.js, and MongoDB.",
  },
  {
    question: "Are you available for freelance work or internships?",
    answer:
      "Yes! I am open to freelance projects, internships, and collaborations that align with my expertise.",
  },
  {
    question: "Can I hire you to build a website or web app?",
    answer:
      "Absolutely! You can contact me via my portfolio or email to discuss your project requirements.",
  },
];

const Faq = () => {
  return (
    <section
      id="faqs"
      className="py-24 mt-12 md:py-32 lg:py-40 md:mt-16 lg:mt-10"
    >
      <div className="mx-auto px-2">
        <h2 className="text-4xl md:text-7xl">FAQS</h2>
        <div className="mt-10 md:mt-16">
          {faqs.map(({ question, answer }) => (
            <div
              key={question}
              className="border-t border-stone-400 border-dotted py-6 md:py-8 last:border-b"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-2xl md:text-3xl">{question}</div>
                <div className="inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
