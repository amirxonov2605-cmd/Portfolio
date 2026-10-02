import { ArrowRight } from "lucide-react";
import image from "./IMAGE.png";

export default function HeroSection() {
  return (
    <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 pb-16 pt-16 sm:px-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14 md:pb-24 md:pt-20">
      <div className="max-w-xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#ef8060]">
          Independent product designer
        </p>
        <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
          <span className="text-[#ef8060]">I design products</span> that delight
          and inspire people.
        </h1>
        <p className="mt-6 max-w-lg text-base leading-7 text-neutral-600">
          Hi! I’m Jake, a product designer based in Berlin. I create user-friendly
          interfaces for fast-growing startups.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
          <a
            href="mailto:hello@jake.design"
            className="inline-flex min-h-12 items-center bg-neutral-950 px-6 text-sm font-semibold text-white transition-colors hover:bg-[#ef8060] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
          >
            Book a call
          </a>
          <a
            href="mailto:hello@jake.design?subject=CV%20request"
            className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-neutral-900 transition-colors hover:text-[#ef8060] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
          >
            Download CV <ArrowRight aria-hidden="true" size={17} />
          </a>
        </div>
      </div>

      <div className="relative mx-auto flex aspect-[4/3] w-full max-w-md items-end justify-center overflow-hidden bg-[#f6f3f0] md:aspect-[5/4]">
        <img
          src={image}
          alt="Jake, product designer"
          className="h-full w-full object-cover object-top grayscale"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white/80 to-transparent" />
      </div>
    </section>
  );
}