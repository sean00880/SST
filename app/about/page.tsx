
import { PageHero } from "@/components/sections/page-hero";
import { ProfessionalBio } from "@/components/sections/professional-bio";
import { CredentialsCertifications } from "@/components/sections/credentials-certifications";
import { EducationalJourney } from "@/components/sections/educational-journey";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { TherapeuticPhilosophy } from "@/components/sections/therapeutic-philosophy";
import { CulturalCompetency } from "@/components/sections/cultural-competency";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata = {
  title: "About Anindita Dwivedi, LPC | Licensed Professional Counselor Virginia",
  description: "Learn about Anindita Dwivedi, Licensed Professional Counselor with 20+ years experience. EMDR, DBT, and mindfulness certified. Serving Virginia with multilingual therapy services.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="About Anindita Dwivedi, LPC"
        subtitle="Your Partner in Growth and Healing"
        description="Learn about my journey, qualifications, and therapeutic approach"
      />
      <ProfessionalBio />
      <CredentialsCertifications />
      <EducationalJourney />
      <ExperienceTimeline />
      <TherapeuticPhilosophy />
      <CulturalCompetency />
      <CtaSection />
    </div>
  );
}
