import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { navigation } from "@/lib/data";

const navClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2 text-sm font-extrabold uppercase tracking-[0.08em] transition ${
    isActive
      ? "bg-brand-blue text-white shadow-lg"
      : "text-brand-blue hover:bg-brand-blue/10 dark:text-slate-100 dark:hover:bg-white/10"
  }`;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-transparent pt-4">
      <div className="shell">
        <div className="surface nav-shell flex items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/assets/matchify-logo.png"
              alt="Matchify logo"
              className="h-12 w-12 object-contain"
            />
            <div>
              <p className="font-display text-xl font-semibold text-brand-ink dark:text-white">
                Matchify.org
              </p>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-300">
                Built to Get You Matched
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                className={navClass}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <Link
              to="/contact"
              className="hidden min-h-12 items-center rounded-full bg-brand-red px-5 text-sm font-extrabold uppercase tracking-[0.08em] text-white shadow-lg shadow-brand-red/25 transition hover:-translate-y-0.5 hover:bg-[#a7161f] md:inline-flex"
            >
              Book Consultation
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-blue/10 text-brand-blue dark:border-white/10 dark:text-white lg:hidden"
              aria-label="Toggle navigation"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="surface nav-shell mt-3 grid gap-2 px-4 py-4 lg:hidden">
            <div className="pb-2">
              <ThemeToggle />
            </div>
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                onClick={() => setOpen(false)}
                className={navClass}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        ) : null}
      </div>
    </header>
  );
}
