import React from "react";
const faqs = [
  {
    question: "How can I contact you?",
    answer:
      "You can reach me through my email, LinkedIn, or the contact form on my website. I typically respond within 24 hours.",
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
      className="py-20 mt-12 md:py-32 lg:py-40 md:mt-16 lg:mt-10"
    >
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQS</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {faqs.map(({ question, answer }) => (
            <div
              key={question}
              className="border-t border-stone-400 border-dotted py-6 md:py-8 lg:py-10 last:border-b"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-2xl md:text-3xl lg:text-4xl">{question}</div>
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
