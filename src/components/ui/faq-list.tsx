import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqListProps = {
  items: FaqItem[];
};

export function FaqList({ items }: FaqListProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const open = index === active;
        return (
          <button
            key={item.question}
            type="button"
            onClick={() => setActive(open ? -1 : index)}
            className="editorial-card w-full p-6 text-left transition duration-300 hover:-translate-y-0.5"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-2xl leading-tight text-brand-ink dark:text-white">
                {item.question}
              </h3>
              <span className="mt-2 text-brand-red">{open ? "−" : "+"}</span>
            </div>
            {open ? (
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-white">
                {item.answer}
              </p>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
