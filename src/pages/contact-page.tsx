import { LeadForm } from "@/components/ui/lead-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContact } from "@/lib/data";

export function ContactPage() {
  return (
    <div className="shell pb-8 pt-8">
      <section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="surface p-8 md:p-12">
          <SectionHeading
            eyebrow="Contact"
            title="Tell Matchify where you are now and where you want to be by Match season."
            copy="Use the form to start the conversation. It opens a prefilled email draft so Matchify can review your stage, research goals, and application priorities quickly."
          />
          <div className="mt-8 grid gap-4 text-base leading-8 text-slate-600 dark:text-white">
            <p>General inquiries: {siteContact.email}</p>
            <p>Call or WhatsApp: {siteContact.phones.join(" | ")}</p>
            <p>Instagram: @matchify_org</p>
          </div>
        </div>

        <LeadForm />
      </section>
    </div>
  );
}
