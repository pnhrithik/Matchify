import {
  BookOpenCheck,
  ClipboardCheck,
  FileText,
  Landmark,
  Microscope,
  Stethoscope,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import balakrishnanHeadshot from "../../PHOTO-2026-04-18-19-13-47.jpg";
import hrithikHeadshot from "../../Putta Nagarajan_Photo.jpg";
import acgLogo from "../../acg-american-college-of-gastroenterology-logo-png_seeklogo-482549.png";
import emailIcon from "../../email-opened-svgrepo-com.svg";
import googleScholarIcon from "../../google-scholar-svgrepo-com.svg";
import instagramIcon from "../../instagram-color-svgrepo-com.svg";
import linkedinIcon from "../../linkedin-color-svgrepo-com.svg";
import phoneIcon from "../../phone-call-essential-svgrepo-com.svg";
import researchgateIcon from "../../researchgate-svgrepo-com.svg";

export type Service = {
  title: string;
  summary: string;
  icon: LucideIcon;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type FounderProfile = {
  name: string;
  role: string;
  bio: string;
  image: string;
  imagePosition?: string;
  email: string;
  socials: SocialLink[];
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

export const founders: FounderProfile[] = [
  {
    name: "Dr Hrithik Dakssesh",
    role: "Co-Founder | Clinical Strategy",
    bio:
      "Incoming Internal Medicine Resident at Macon and Joan Brock Virginia Health Sciences at Old Dominion University with 40+ publications in peer-reviewed journals and conference abstracts.",
    image: hrithikHeadshot,
    imagePosition: "object-top",
    email: "hrithik@matchify.org",
    socials: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/hrithik-dakssesh-putta-nagarajan-0a62b6144/",
        icon: linkedinIcon,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/hrithikdakssesh/",
        icon: instagramIcon,
      },
      {
        label: "ResearchGate",
        href: "https://www.researchgate.net/profile/Hrithik-Dakssesh-Putta-Nagarajan",
        icon: researchgateIcon,
      },
      {
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?user=5VYEUtIAAAAJ&hl=en",
        icon: googleScholarIcon,
      },
    ],
  },
  {
    name: "Balakrishnan Kamaraj",
    role: "Co-Founder | Research Strategy",
    bio:
      "Research-focused co-founder with 70+ publications in peer-reviewed journals and conference abstracts, bringing deep academic credibility to Matchify's publication, abstract, and conference advisory approach.",
    image: balakrishnanHeadshot,
    imagePosition: "object-center",
    email: "bala@matchify.org",
    socials: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/k-balakrishnan-8411b4203/",
        icon: linkedinIcon,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/balakrishnan_015/",
        icon: instagramIcon,
      },
      {
        label: "ResearchGate",
        href: "https://www.researchgate.net/profile/Balakrishnan-Kamaraj",
        icon: researchgateIcon,
      },
      {
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?hl=en&user=hQNNH2UAAAAJ",
        icon: googleScholarIcon,
      },
    ],
  },
];

export const siteContact = {
  email: "info@matchify.org",
  phones: ["+919150420706", "+917902891643"],
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/matchify_org/",
      icon: instagramIcon,
    },
  ] satisfies SocialLink[],
  icons: {
    email: emailIcon,
    phone: phoneIcon,
  },
};

export const brandAssets = {
  acgLogo,
};

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
  {
    question: "Can Matchify help if I am still building my CV and research profile?",
    answer:
      "Yes. Matchify can help applicants build an earlier-stage roadmap around exams, research, rotations, and profile positioning before the ERAS submission window becomes urgent.",
  },
  {
    question: "Do you support applicants who need publication or abstract mentorship specifically?",
    answer:
      "Yes. Publication planning, abstract development, conference readiness, and research storytelling are core parts of Matchify's advisory offering, especially for applicants who want their academic work to strengthen specialty positioning.",
  },
  {
    question: "Is pricing fixed for every applicant?",
    answer:
      "No. Engagement depth depends on where you are in the residency journey and how much hands-on support you need, so Matchify can recommend a more tailored package after the first conversation.",
  },
  {
    question: "How do I get started?",
    answer:
      "Use the contact form to share your current stage, specialty interests, and immediate goals. Matchify can then suggest the most relevant next steps, advisory scope, and research or application support options.",
  },
];

export const pricingPlans = [
  {
    tier: "Foundation",
    price: "Contact for pricing",
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
    price: "Tailored proposal",
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
    price: "Contact for details",
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
