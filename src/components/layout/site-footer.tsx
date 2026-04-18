import { Link } from "react-router-dom";
import { navigation } from "@/lib/data";

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
              <p className="max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
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
                    className="text-sm font-bold uppercase tracking-[0.08em] text-brand-blue hover:text-brand-red dark:text-slate-100"
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
              <div className="grid gap-3 text-base text-slate-600 dark:text-slate-300">
                <a href="mailto:hrithik@matchify.org" className="hover:text-brand-blue">
                  hrithik@matchify.org
                </a>
                <a
                  href="https://www.linkedin.com/in/hrithik-dakssesh-putta-nagarajan-0a62b6144/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-blue"
                >
                  LinkedIn
                </a>
                <a
                  href="https://scholar.google.com/citations?user=5VYEUtIAAAAJ&hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-blue"
                >
                  Google Scholar
                </a>
                <a
                  href="https://matchify.org"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-blue"
                >
                  matchify.org
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-brand-blue/10/60 pt-5 text-sm text-slate-500 dark:text-slate-400">
            <p>Built to Get You Matched.</p>
            <p>{new Date().getFullYear()} Matchify.org. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
