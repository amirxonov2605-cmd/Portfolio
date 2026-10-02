import { useState } from "react"; 
import testimonialPhoto from "./testimonial.png";
const testimonials = [ 
    { 
        name: "John Frankin", 
        position: "Founder, Double Bunch", 
        text: "Jade helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design.", 
        image: testimonialPhoto, 
    }, 
    { 
        name: "Sarah Miller", 
        position: "Founder, Fresh Studio", 
        text: "The experience was amazing. Everything was modern, simple and easy to use.", 
        image: testimonialPhoto, 
    }, 
    { 
        name: "Alex Brown", 
        position: "Creative Director, Design Lab", 
        text: "The design process was smooth and the final product looked clean, modern and professional.", 
        image: testimonialPhoto, 
    }, 
];
export default function Testimonials() { 
    const [current, setCurrent] = useState(0);
const next = () => { 
    setCurrent((prev) => 
        prev === testimonials.length - 1 ? 0 : 
    prev + 1 
); 
};
const previous = () => { 
    setCurrent((prev) => prev === 0 ? 
    testimonials.length - 1 : prev - 1 
); 
};
const testimonial = testimonials[current];
return ( 
<section className="bg-white px-6 py-20 text-black sm:px-10 lg:px-20 lg:py-28"> 
    <div className="mx-auto max-w-6xl">

    {/* TITLE */}
    <div className="mb-16">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
        Testimonials
      </p>

      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        Word on the street
      </h2>
    </div>

    {/* CONTENT */}
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

      {/* PHOTO */}
      <div className="overflow-hidden">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-[400px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[500px]"
        />
      </div>

      {/* REVIEW */}
      <div>

        <div className="mb-6 text-7xl font-black leading-none">
          <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            “
          </span>
        </div>

        <p className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
          {testimonial.text}
        </p>

        <div className="mt-10">
          <p className="font-bold">
            {testimonial.name}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            {testimonial.position}
          </p>
        </div>

        {/* ARROWS */}
        <div className="mt-10 flex">
          <button
            onClick={previous}
            className="flex h-12 w-14 items-center justify-center bg-black text-xl text-white transition hover:bg-gray-800"
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <button
            onClick={next}
            className="flex h-12 w-14 items-center justify-center bg-black text-xl text-white transition hover:bg-gray-800"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

      </div>
    </div>
  </div>
</section>
); 
}