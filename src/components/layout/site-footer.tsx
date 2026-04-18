import { Link } from "react-router-dom";
import { SocialIconLink } from "@/components/ui/social-icon-link";
import { navigation, siteContact } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="pb-10 pt-16">
      <div className="shell">
        <div className="editorial-card bg-[#fbfaf7] px-6 py-8 dark:bg-white/5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div className="space-y-4">
              <img
                src="/assets/matchify-tagline.png"
                alt="Matchify logo with tagline"
                className="h-auto w-full max-w-[360px]"
              />
              <div className="editorial-chip">Residency Advisory Platform</div>
              <p className="max-w-xl text-base leading-8 text-slate-600 dark:text-white">
                Matchify.org is a residency consultancy built to help medical
                students and professionals navigate the US Match with stronger
                structure, sharper positioning, and trusted physician guidance.
              </p>
            </div>

            <div>
              <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-brand-red">
                Navigate
              </p>
              <div className="grid gap-3">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-sm font-bold uppercase tracking-[0.08em] text-brand-blue hover:text-brand-red dark:text-[#73C0FE]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-brand-red">
                Contact
              </p>
              <div className="grid gap-4 text-base text-slate-600 dark:text-white">
                <a
                  href={`mailto:${siteContact.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-brand-blue dark:hover:text-[#73C0FE]"
                >
                  <img src={siteContact.icons.email} alt="" className="h-5 w-5 object-contain" />
                  <span>{siteContact.email}</span>
                </a>
                <div className="flex items-start gap-3">
                  <img src={siteContact.icons.phone} alt="" className="mt-1 h-5 w-5 object-contain" />
                  <div className="grid gap-1">
                    {siteContact.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone}`}
                        className="transition-colors hover:text-brand-blue dark:hover:text-[#73C0FE]"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 pt-1">
                  {siteContact.socials.map((social) => (
                    <SocialIconLink
                      key={social.label}
                      href={social.href}
                      label={`Matchify ${social.label}`}
                      icon={social.icon}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-brand-blue/10/60 pt-5 text-sm text-slate-500 dark:text-white/80">
            <p>Built to Get You Matched.</p>
            <p>{new Date().getFullYear()} Matchify.org. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
