
import { PageHero } from "@/components/sections/page-hero";
import { DetailedSpecializations } from "@/components/sections/detailed-specializations";
import { TherapeuticModalities } from "@/components/sections/therapeutic-modalities";
import { TreatmentProcess } from "@/components/sections/treatment-process";
import { ServiceAreas } from "@/components/sections/service-areas";
import { InsuranceInformation } from "@/components/sections/insurance-information";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata = {
  title: "Therapy Services | EMDR, DBT, Anxiety, Depression Treatment | Virginia",
  description: "Professional therapy services in Virginia. EMDR for trauma, DBT skills, anxiety and depression treatment. Telehealth and in-person sessions available.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Services & Specializations"
        subtitle="Comprehensive, Evidence-Based Therapy Services"
        description="Personalized treatment approaches tailored to your unique needs and goals"
        backgroundImage="https://thumbs.dreamstime.com/b/new-seedlings-sprouting-fertile-soil-sunrise-tranquil-landscape-young-green-emerge-dark-against-beautiful-377940328.jpg"
      />
      <DetailedSpecializations />
      <TherapeuticModalities />
      <TreatmentProcess />
      <ServiceAreas />
      <InsuranceInformation />
      <CtaSection />
    </div>
  );
}
