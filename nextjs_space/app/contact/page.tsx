
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { ContactInformation } from "@/components/sections/contact-information";
import { LocationsMap } from "@/components/sections/locations-map";

export const metadata = {
  title: "Contact | Schedule Free Consultation | Anindita Dwivedi, LPC Virginia",
  description: "Contact Anindita Dwivedi, Licensed Professional Counselor in Virginia. Schedule your free consultation for therapy services. Phone (804) 207-8414.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Contact & Schedule"
        subtitle="Take the First Step Toward Healing"
        description="Schedule your free 15-minute consultation to see if we're a good fit"
        backgroundImage="https://psychosynthesis.online/wp-content/uploads/2022/07/image.png"
      />
      <ContactForm />
      <ContactInformation />
      <LocationsMap />
    </div>
  );
}
