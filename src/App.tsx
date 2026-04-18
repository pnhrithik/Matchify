import { Route, Routes } from "react-router-dom";
import { SiteShell } from "@/components/layout/site-shell";
import { BlogPage } from "@/pages/blog-page";
import { ContactPage } from "@/pages/contact-page";
import { HomePage } from "@/pages/home-page";
import { PricingPage } from "@/pages/pricing-page";
import { ResearchPage } from "@/pages/research-page";
import { ServicesPage } from "@/pages/services-page";

export default function App() {
  return (
    <SiteShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </SiteShell>
  );
}
