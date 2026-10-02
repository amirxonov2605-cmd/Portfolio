
import ServiceCard from "./ServiceCard";
import { services } from "./services";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#fcfaf9] px-6 py-16 sm:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ef8060]">
            Services
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
            Design that solves problems, one product at a time.
          </h2>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 md:mt-16 md:grid-cols-3 md:gap-12">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}