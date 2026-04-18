import { LeadForm } from "@/components/ui/lead-form";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactPage() {
  return (
    <div className="shell pb-8 pt-8">
      <section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="surface p-8 md:p-12">
          <SectionHeading
            eyebrow="Contact"
            title="Tell Matchify where you are now and where you want to be by Match season."
            copy="Use the form to start the conversation. It opens a prefilled email draft, which keeps the first-touch workflow lightweight while the site is still in its early launch phase."
          />
          <div className="mt-8 grid gap-4 text-base leading-8 text-slate-600">
            <p>Email: hrithik@matchify.org</p>
            <p>Domain: matchify.org</p>
            <p>
              Founder: Dr Hrithik Dakssesh, incoming Internal Medicine Resident
              at Macon and Joan Brock Virginia Health Sciences at Old Dominion University
            </p>
          </div>
        </div>

        <LeadForm />
      </section>
    </div>
  );
}
