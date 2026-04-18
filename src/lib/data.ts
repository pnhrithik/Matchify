import {
  BookOpenCheck,
  ClipboardCheck,
  FileText,
  Landmark,
  Microscope,
  Stethoscope,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  summary: string;
  icon: LucideIcon;
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Research Batch", href: "/research" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    title: "USMLE Preparation",
    summary:
      "Study planning, exam sequencing, and a prep framework aligned with the wider residency timeline.",
    icon: BookOpenCheck,
  },
  {
    title: "Research & Publications",
    summary:
      "Abstracts, manuscripts, conference strategy, and a publication roadmap that strengthens academic credibility.",
    icon: Microscope,
  },
  {
    title: "US Clinical Rotations",
    summary:
      "Rotation planning, application positioning, and guidance on using experience strategically inside your Match narrative.",
    icon: Stethoscope,
  },
  {
    title: "Visa Process",
    summary:
      "Clearer planning around the US visa process so applicants can move with fewer surprises and better timing.",
    icon: Landmark,
  },
  {
    title: "ERAS Application Strategy",
    summary:
      "Support for CV framing, personal statements, experience selection, and building a stronger ERAS presentation.",
    icon: FileText,
  },
  {
    title: "Interviews & Post-Interview Process",
    summary:
      "Mock interviews, communication coaching, and post-interview strategy for ranking and follow-through.",
    icon: ClipboardCheck,
  },
];

export const faqs = [
  {
    question: "Who is Matchify built for?",
    answer:
      "Matchify is designed for medical students and professionals who want structured support through the US residency application pathway, especially applicants who want a coordinated plan instead of fragmented advice.",
  },
  {
    question: "Can you help from the early stages, not just ERAS?",
    answer:
      "Yes. Matchify is positioned as a one-stop consultancy that begins upstream with USMLE strategy, research planning, and clinical exposure, then carries that work into ERAS, interviews, and post-interview decision-making.",
  },
  {
    question: "Do you offer research guidance for conferences and publications?",
    answer:
      "Yes. Research is one of Matchify's core pillars, including publication strategy, abstract development, and help understanding how academic work can support a stronger application profile.",
  },
  {
    question: "What makes Matchify different?",
    answer:
      "The founding team's physician perspective, publication record, and end-to-end application framing make Matchify feel less like a disconnected agency and more like a strategic advisory partner.",
  },
];

export const pricingPlans = [
  {
    tier: "Foundation",
    price: "Starting at $299",
    detail: "Ideal for applicants who need a focused strategy session and roadmap.",
    features: [
      "Residency application audit",
      "Profile gap analysis",
      "Timeline and action plan",
      "One advisory session",
    ],
  },
  {
    tier: "Application Build",
    price: "Custom package",
    detail: "For applicants who want active support across preparation, positioning, and execution.",
    features: [
      "Everything in Foundation",
      "ERAS and CV strategy",
      "Interview preparation",
      "Ongoing advisory touchpoints",
    ],
  },
  {
    tier: "Full Match Concierge",
    price: "Premium",
    detail: "For applicants who want end-to-end mentorship across the full pathway.",
    features: [
      "USMLE planning",
      "Research and publication guidance",
      "Rotation and visa planning",
      "Application to post-interview strategy",
    ],
  },
];

export const blogPosts = [
  {
    title: "How To Build A Residency Profile Before ERAS Opens",
    category: "Strategy",
    description:
      "A practical look at how exam planning, research, and clinical exposure should work together long before submission season.",
  },
  {
    title: "What Program Directors Notice In Research-Heavy Applications",
    category: "Research",
    description:
      "How to make publications and abstracts signal depth instead of reading like an unstructured list.",
  },
  {
    title: "Interview Season Preparation That Goes Beyond Common Questions",
    category: "Interviews",
    description:
      "A more strategic approach to communication, storytelling, and post-interview follow-through.",
  },
];

export const testimonials = [
  {
    quote:
      "Testimonials from Matchify's founding cohorts will appear here as new applicants move through advising and the Match cycle.",
    author: "Founding cohort section",
    role: "Reserved for verified future feedback",
  },
];
