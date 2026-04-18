type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  center?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {copy ? <p className="section-copy mt-4">{copy}</p> : null}
    </div>
  );
}
