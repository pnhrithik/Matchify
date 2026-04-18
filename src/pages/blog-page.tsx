import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function BlogPage() {
  return (
    <div className="shell pb-8 pt-8">
      <section className="surface p-8 md:p-12">
        <SectionHeading
          eyebrow="Blog"
          title="A professional content surface for Matchify insights, applicant education, and search visibility."
          copy="These starter posts give the site a more complete editorial presence and can later expand into full articles, newsletters, or downloadable guides."
        />
      </section>

      <section className="grid gap-5 pt-8 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.title} className="surface p-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-brand-red">
              {post.category}
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-brand-ink">
              {post.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">{post.description}</p>
            <button className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-brand-blue hover:text-brand-red">
              Article layout ready <ArrowRight size={16} />
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}
