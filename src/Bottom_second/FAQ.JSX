import { useState } from "react";
const faqItems = [ 
    { 
        question: "What type of projects do you take on?", 
        answer: 
        "We work on modern websites, landing pages, web applications and digital products.", 
    }, 
    { 
        question: "How do you charge for projects?", 
        answer: "The price depends on the size, functionality and complexity of the project.", 
    }, 
    { 
        question: "What is your hourly rate?", 
        answer: "Our rate depends on the project requirements and the amount of development work.", 
    }, 
    { 
        question: "What does your design process look like?", 
        answer: "We start with research and planning, then create the design, develop the interface and test the final product.", 
    }, 
    { 
        question: "What time-zone do you work in?", 
        answer: "We can work with clients from different time zones and organize communication around the project schedule.", 
    }, 
    { 
        question: "What metrics do you use to measure success?", 
        answer: "We look at usability, performance, conversions, engagement and feedback from users.", 
    }, 
    { 
        question: "What is the typical timeline for a project?", 
        answer: "A typical project can take from a few weeks to several months depending on its size.", 
    }, 
    { 
        question: "What if I need help after the project is complete?", 
        answer: "We can provide maintenance, improvements and technical support after the project is launched.", 
    }, 
];
export default function FAQ() { 
    const [openIndex, setOpenIndex] = 
    useState(null);
const toggleQuestion = (index) => { 
    setOpenIndex(openIndex === index ? null : index); 
};
return ( 
<section className="bg-black px-6 py-20 text-white sm:px-10 lg:px-20 lg:py-28"> 
    <div className="mx-auto max-w-6xl">
        
    {/* TITLE */}
    <div className="mb-16 text-center">

      <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
        FAQ
      </p>

      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        Frequently asked questions
      </h2>

    </div>

    {/* QUESTIONS */}
    <div className="grid gap-x-10 md:grid-cols-2">

      {faqItems.map((item, index) => (
        <div
          key={index}
          className="border-b border-white/20"
        >

          {/* QUESTION */}
          <button
            onClick={() => toggleQuestion(index)}
            className="flex w-full items-center justify-between gap-6 py-7 text-left"
          >

            <span className="text-base font-semibold sm:text-lg">
              {item.question}
            </span>

            <span
              className={`text-2xl font-light transition-transform duration-300 ${
                openIndex === index ? "rotate-45" : ""
              }`}
            >
              +
            </span>

          </button>

          {/* ANSWER */}
          <div
            className={`grid transition-all duration-300 ${
              openIndex === index
                ? "grid-rows-[1fr] pb-7 opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="pr-8 text-sm leading-7 text-gray-400">
                {item.answer}
              </p>
            </div>
          </div>

        </div>
      ))}

    </div>
  </div>
</section>
); 
}