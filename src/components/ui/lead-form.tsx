import { FormEvent, useState } from "react";
import { siteContact } from "@/lib/data";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const stage = String(form.get("stage") ?? "");
    const note = String(form.get("note") ?? "");
    const subject = encodeURIComponent(`Matchify Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nStage: ${stage}\n\nGoals:\n${note}`,
    );

    window.location.href = `mailto:${siteContact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="editorial-card grid gap-5 p-6 md:p-8">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-extrabold uppercase tracking-[0.12em] text-brand-blue dark:text-[#73C0FE]">
          Full name
        </label>
        <input
          id="name"
          name="name"
          required
          className="rounded-2xl border border-brand-blue/10 bg-white/92 px-4 py-4 outline-none ring-0 transition focus:border-brand-red dark:border-white/10 dark:bg-white/5 dark:text-white"
          placeholder="Your name"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-extrabold uppercase tracking-[0.12em] text-brand-blue dark:text-[#73C0FE]">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="rounded-2xl border border-brand-blue/10 bg-white/92 px-4 py-4 outline-none ring-0 transition focus:border-brand-red dark:border-white/10 dark:bg-white/5 dark:text-white"
          placeholder="you@example.com"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="stage" className="text-sm font-extrabold uppercase tracking-[0.12em] text-brand-blue dark:text-[#73C0FE]">
          Current stage
        </label>
        <select
          id="stage"
          name="stage"
          className="rounded-2xl border border-brand-blue/10 bg-white/92 px-4 py-4 outline-none transition focus:border-brand-red dark:border-white/10 dark:bg-white/5 dark:text-white"
          defaultValue="Planning"
        >
          <option>Planning</option>
          <option>USMLE preparation</option>
          <option>Research and publications</option>
          <option>Clinical rotations</option>
          <option>ERAS preparation</option>
          <option>Interview season</option>
        </select>
      </div>
      <div className="grid gap-2">
        <label htmlFor="note" className="text-sm font-extrabold uppercase tracking-[0.12em] text-brand-blue dark:text-[#73C0FE]">
          What do you need help with?
        </label>
        <textarea
          id="note"
          name="note"
          rows={5}
          className="rounded-2xl border border-brand-blue/10 bg-white/92 px-4 py-4 outline-none transition focus:border-brand-red dark:border-white/10 dark:bg-white/5 dark:text-white"
          placeholder="Tell us about your goals, timeline, specialty interests, or where you feel stuck."
        />
      </div>
      <button
        type="submit"
        className="pill-button bg-brand-red text-white shadow-lg shadow-brand-red/25 transition hover:-translate-y-0.5 hover:bg-[#a7161f]"
      >
        Send Inquiry
      </button>
      {submitted ? (
        <p className="text-sm leading-7 text-slate-600 dark:text-white">
          Your email app should open with the inquiry details prefilled. If it
          does not, you can also write directly to {siteContact.email}.
        </p>
      ) : null}
    </form>
  );
}
