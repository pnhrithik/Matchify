import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/ui/section-heading";
import { pricingPlans } from "@/lib/data";

export function PricingPage() {
  return (
    <div className="shell pb-8 pt-8">
      <section className="surface p-8 md:p-12">
        <SectionHeading
          eyebrow="Pricing"
          title="A clean package structure for prospects who want to understand engagement depth quickly."
          copy="These tiers communicate scope, not fixed numbers. Contact Matchify for package details based on your application stage, research goals, and level of advisory support."
        />
      </section>

      <section className="grid gap-5 pt-8 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <article
            key={plan.tier}
            className={`surface p-8 ${index === 1 ? "bg-brand-blue text-white" : ""}`}
          >
            <p className={`text-sm font-extrabold uppercase tracking-[0.16em] ${index === 1 ? "text-white/70" : "text-brand-red"}`}>
              {plan.tier}
            </p>
            <h2 className={`mt-3 font-display text-5xl leading-none ${index === 1 ? "text-white" : "text-brand-ink dark:text-white"}`}>
              {plan.price}
            </h2>
            <p className={`mt-5 text-base leading-8 ${index === 1 ? "text-white/80" : "text-slate-600 dark:text-white"}`}>
              {plan.detail}
            </p>
            <ul className="mt-6 grid gap-4">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className={`flex items-center gap-3 text-sm font-bold ${index === 1 ? "text-white/90" : "text-brand-ink dark:text-white"}`}
                >
                  <CheckCircle2 size={18} className={index === 1 ? "text-white/75" : "text-brand-red"} />
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="surface mt-8 flex flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="eyebrow">Need a bespoke plan?</p>
          <p className="section-copy max-w-2xl">
            Matchify can also package services around your specialty goals,
            profile maturity, and how hands-on you want the advisory support to be. Reach out for pricing details and a more tailored recommendation.
          </p>
        </div>
        <Link
          to="/contact"
          className="pill-button bg-brand-red text-white hover:-translate-y-0.5"
        >
          Contact For Pricing
        </Link>
      </section>
    </div>
  );
}
