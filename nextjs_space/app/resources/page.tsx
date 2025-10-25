
import { PageHero } from "@/components/sections/page-hero";
import { MentalHealthResources } from "@/components/sections/mental-health-resources";
import { TherapyFaqs } from "@/components/sections/therapy-faqs";
import { SelfCareResources } from "@/components/sections/self-care-resources";
import { CrisisResources } from "@/components/sections/crisis-resources";

export const metadata = {
  title: "Mental Health Resources | Therapy FAQs | Self-Care Tips | Virginia LPC",
  description: "Helpful mental health resources, therapy FAQs, self-care tips, and crisis resources from Licensed Professional Counselor Anindita Dwivedi in Virginia.",
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Mental Health Resources"
        subtitle="Tools and Information to Support Your Wellness Journey"
        description="Evidence-based resources, FAQs, and self-care guidance"
      />
      <TherapyFaqs />
      <MentalHealthResources />
      <SelfCareResources />
      <CrisisResources />
    </div>
  );
}
