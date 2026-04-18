type SocialIconLinkProps = {
  href: string;
  label: string;
  icon: string;
  className?: string;
};

export function SocialIconLink({
  href,
  label,
  icon,
  className = "",
}: SocialIconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className={`inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-blue/10 bg-white/90 shadow-[0_14px_35px_rgba(9,16,55,0.08)] transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-brand-red/40 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/35 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/16 ${className}`}
    >
      <img src={icon} alt="" className="h-6 w-6 object-contain" />
      <span className="sr-only">{label}</span>
    </a>
  );
}
