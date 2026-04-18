import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/ui/section-heading";

const outcomes = [
  "Abstract planning for ACG-focused submission goals",
  "Topic refinement and research positioning",
  "Writing discipline, timelines, and review structure",
  "Advisory guidance around conference readiness and academic presentation",
];

export function ResearchPage() {
  return (
    <div className="shell pb-8 pt-8">
      <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="surface p-8 md:p-12">
          <SectionHeading
            eyebrow="Inaugural Batch"
            title="An early research cohort built around abstracts planned for the American College of Gastroenterology."
            copy="Matchify is preparing a founding student batch to help shape research abstracts with stronger structure, cleaner execution, and a better sense of submission readiness."
          />
          <div className="mt-8 grid gap-4">
            {outcomes.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-[22px] border border-brand-blue/10 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                <CheckCircle2 className="mt-1 text-brand-red" size={18} />
                <p className="text-base leading-7 text-slate-600 dark:text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="surface flex flex-col justify-between p-8 md:p-12">
          <div>
            <img
              src="/assets/acg-logo.png"
              alt="American College of Gastroenterology logo"
              className="h-28 w-28 rounded-[24px] border border-brand-blue/10 bg-white p-4 object-contain"
            />
            <h2 className="mt-8 font-display text-4xl leading-tight text-brand-ink dark:text-white">
              Built for applicants who want research to look intentional, not accidental.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-white">
              This page is positioned as a strong recruitment surface for the
              inaugural batch. Once dates, fees, or deadlines are finalized,
              they can drop into this layout without redesigning the page.
            </p>
          </div>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.14em] text-brand-blue hover:text-brand-red dark:text-[#73C0FE]"
          >
            Join The Interest List <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
