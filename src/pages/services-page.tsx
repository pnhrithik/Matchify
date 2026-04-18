import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/data";

export function ServicesPage() {
  return (
    <div className="shell pb-8 pt-8">
      <section className="surface p-8 md:p-12">
        <SectionHeading
          eyebrow="Services"
          title="Every major stage of the residency pathway, planned inside one advisory system."
          copy="Matchify is designed as a full-spectrum consultancy so applicants can work from one coherent plan instead of jumping between disconnected advisors."
        />
      </section>

      <section className="grid gap-5 pt-8 lg:grid-cols-2">
        {services.map((service, index) => (
          <article key={service.title} className="surface p-8">
            <div className="flex items-center justify-between">
              <service.icon className="text-brand-red" size={30} />
              <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-blue/40 dark:text-[#73C0FE]/70">
                0{index + 1}
              </span>
            </div>
            <h2 className="mt-6 font-display text-4xl leading-tight text-brand-ink dark:text-white">
              {service.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-white">{service.summary}</p>
          </article>
        ))}
      </section>

      <section className="surface mt-8 flex flex-col gap-5 p-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="eyebrow">Need a custom package?</p>
          <h2 className="section-title max-w-2xl">
            We can combine these services into one application roadmap.
          </h2>
        </div>
        <Link
          to="/contact"
          className="pill-button bg-brand-blue text-white hover:-translate-y-0.5"
        >
          Contact Matchify
        </Link>
      </section>
    </div>
  );
}
