
import { HeroSection } from "@/components/sections/hero-section";
import { CredentialsBar } from "@/components/sections/credentials-bar";
import { AboutPreview } from "@/components/sections/about-preview";
import { SpecializationsSection } from "@/components/sections/specializations-section";
import { TherapeuticApproaches } from "@/components/sections/therapeutic-approaches";
import { ServiceFeatures } from "@/components/sections/service-features";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CredentialsBar />
      <AboutPreview />
      <SpecializationsSection />
      <TherapeuticApproaches />
      <ServiceFeatures />
      <TestimonialsCarousel />
      <CtaSection />
    </div>
  );
}
