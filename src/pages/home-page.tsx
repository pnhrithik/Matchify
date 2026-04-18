import { CheckCircle2, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Hero from "@/components/ui/animated-shader-hero";
import { FaqList } from "@/components/ui/faq-list";
import { LeadForm } from "@/components/ui/lead-form";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { SocialIconLink } from "@/components/ui/social-icon-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { brandAssets, blogPosts, faqs, founders, pricingPlans, services, siteContact, testimonials } from "@/lib/data";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="pb-8">
      <section className="shell pt-6">
        <Hero
          trustBadge={{
            text: "Physician-led residency consulting built around real application strategy.",
            icons: ["✦"],
          }}
          headline={{
            line1: "Built for ambitious",
            line2: "residency applicants.",
          }}
          subtitle="Matchify.org helps medical students and professionals move through the US residency pathway with stronger structure, sharper positioning, and end-to-end guidance."
          buttons={{
            primary: {
              text: "Book A Consultation",
              onClick: () => navigate("/contact"),
            },
            secondary: {
              text: "Explore Services",
              onClick: () => navigate("/services"),
            },
          }}
        />
      </section>

      <section className="shell grid gap-5 pt-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="editorial-card p-8">
          <p className="eyebrow">Founding Team</p>
          <h2 className="section-title max-w-3xl">
            Two co-founders, two distinct strengths, one coordinated residency strategy.
          </h2>
          <div className="mt-8 grid gap-5 xl:grid-cols-2">
            {founders.map((founder) => (
              <article
                key={founder.name}
                className="rounded-[26px] border border-brand-blue/10 bg-white/80 p-5 shadow-[0_16px_40px_rgba(9,16,55,0.08)] dark:border-white/10 dark:bg-white/5"
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className={`h-[320px] w-full rounded-[22px] object-cover ${founder.imagePosition ?? "object-center"}`}
                />
                <div className="mt-5 space-y-4">
                  <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-red">
                    {founder.role}
                  </p>
                  <h3 className="font-display text-3xl text-brand-ink dark:text-white">
                    {founder.name}
                  </h3>
                  <p className="section-copy">{founder.bio}</p>
                  <div className="rounded-[22px] border border-brand-blue/10 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
                    <div className="flex items-center gap-3 text-sm font-semibold text-brand-ink dark:text-white">
                      <img src={siteContact.icons.email} alt="" className="h-5 w-5 object-contain" />
                      <a href={`mailto:${founder.email}`} className="transition-colors hover:text-brand-red">
                        {founder.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-1">
                    {founder.socials.map((social) => (
                      <SocialIconLink
                        key={`${founder.name}-${social.label}`}
                        href={social.href}
                        label={`${founder.name} ${social.label}`}
                        icon={social.icon}
                      />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="editorial-card grid gap-5 p-8">
          <div>
            <p className="eyebrow">What Matchify Covers</p>
            <ul className="grid gap-4">
              {services.slice(0, 6).map((service) => (
                <li key={service.title} className="rounded-[22px] border border-brand-blue/10 bg-white/72 p-4 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 text-brand-red" size={20} />
                  <div>
                    <p className="text-lg font-extrabold text-brand-ink dark:text-white">{service.title}</p>
                    <p className="text-sm leading-7 text-slate-600 dark:text-white">{service.summary}</p>
                  </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="shell pt-20">
        <SectionHeading
          eyebrow="Services"
          title="One consultancy for the full residency application journey."
          copy="We designed Matchify as a complete advisory ecosystem so applicants do not need separate mentors for each stage."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="editorial-card p-7 transition duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/5 dark:bg-white/5">
                <service.icon className="text-brand-red" size={28} />
              </div>
              <h3 className="mt-5 font-display text-3xl leading-tight text-brand-ink dark:text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-white">{service.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell pt-20">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="editorial-card p-8 md:p-10">
            <SectionHeading
              eyebrow="Research Batch"
              title="Launching an inaugural abstract-support cohort for the American College of Gastroenterology."
              copy="We are preparing a founding batch of students for research abstracts planned for submission to the American College of Gastroenterology."
            />
            <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center">
              <img
                src={brandAssets.acgLogo}
                alt="American College of Gastroenterology logo"
                className="h-28 w-28 rounded-[26px] border border-brand-blue/10 bg-white p-4 object-contain shadow-[0_16px_36px_rgba(9,16,55,0.08)] dark:border-white/10 dark:bg-white"
              />
              <div className="space-y-3">
                <div className="editorial-chip">ACG-focused inaugural cohort</div>
                <p className="text-base leading-8 text-slate-600 dark:text-white">
                  This upcoming cohort is designed for applicants who want early
                  mentorship in research ideation, abstract readiness, authorship
                  discipline, and stronger academic storytelling.
                </p>
                <LiquidButton size="lg" onClick={() => navigate("/research")}>
                  Learn About The Batch
                </LiquidButton>
              </div>
            </div>
          </div>

          <div className="editorial-card p-8 md:p-10">
            <SectionHeading
              eyebrow="Testimonials"
              title="A transparent section reserved for verified feedback."
              copy="We are intentionally not fabricating testimonials. This space is prepared for verified feedback from Matchify's first cohorts."
            />
            {testimonials.map((item) => (
              <article key={item.author} className="mt-8 rounded-[26px] bg-brand-blue px-6 py-7 text-white dark:bg-white/10">
                <Quote size={28} className="text-white/60" />
                <p className="mt-4 text-lg leading-8 text-white/88">{item.quote}</p>
                <p className="mt-6 font-display text-2xl">{item.author}</p>
                <p className="text-sm uppercase tracking-[0.16em] text-white/60">{item.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell pt-20">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple tiers now, custom advisory depth as your application grows."
          copy="Use these tiers as a guide to engagement depth. Matchify shares detailed pricing after understanding your timeline, goals, and advisory needs."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <article
              key={plan.tier}
              className={`editorial-card p-8 ${index === 1 ? "border-brand-red/20 bg-brand-blue text-white" : ""}`}
            >
              <p className={`text-sm font-extrabold uppercase tracking-[0.16em] ${index === 1 ? "text-white/70" : "text-brand-red"}`}>
                {plan.tier}
              </p>
              <h3 className={`mt-3 font-display text-4xl ${index === 1 ? "text-white" : "text-brand-ink dark:text-white"}`}>
                {plan.price}
              </h3>
              <p className={`mt-4 text-base leading-8 ${index === 1 ? "text-white/78" : "text-slate-600 dark:text-white"}`}>
                {plan.detail}
              </p>
              <ul className="mt-6 grid gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-3 text-sm font-bold ${index === 1 ? "text-white/90" : "text-brand-ink dark:text-white"}`}
                  >
                    <CheckCircle2 size={18} className={index === 1 ? "text-white/80" : "text-brand-red"} />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="shell pt-20">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions applicants usually need answered before they commit."
            />
            <div className="mt-8">
              <FaqList items={faqs} />
            </div>
          </div>

          <div className="editorial-card p-8 md:p-10">
            <SectionHeading
              eyebrow="Lead Form"
              title="Tell us where you are in the process."
              copy="This form opens a prefilled email to Matchify so we can review your stage and goals quickly."
            />
            <div className="mt-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <section className="shell pt-20">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Blog"
            title="Early editorial content for applicants who want sharper strategy."
          />
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="editorial-card p-7 transition duration-300 hover:-translate-y-1">
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-brand-red">
                {post.category}
              </p>
              <h3 className="mt-4 font-display text-3xl leading-tight text-brand-ink dark:text-white">
                {post.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-white">{post.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
