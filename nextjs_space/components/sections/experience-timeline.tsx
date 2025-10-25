
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Briefcase, 
  Building, 
  Users, 
  Heart,
  School,
  Hospital,
  Home,
  Globe
} from "lucide-react";

const experienceData = [
  {
    period: "2024 - Present",
    role: "Therapist/Owner",
    organization: "Seek, Strive & Thrive, LLC",
    location: "Loudoun County, Virginia",
    type: "Private Practice",
    description: "Primary therapist and owner providing professional counseling and psychotherapy services.",
    responsibilities: [
      "Individual counseling for anxiety, depression, trauma",
      "EMDR therapy for PTSD and complex trauma",
      "DBT skills training and mindfulness interventions",
      "Telehealth and in-person therapy sessions",
      "Treatment planning and clinical documentation"
    ],
    icon: Home,
    highlight: "Current Position"
  },
  {
    period: "2022 - Present",
    role: "Outpatient Therapist",
    organization: "Youth For Tomorrow",
    location: "Virginia",
    type: "Part-time",
    description: "Behavioral health services for youth and families in residential and community settings.",
    responsibilities: [
      "Individual and group therapy for adolescents",
      "Family counseling and parent consultation",
      "Crisis intervention and safety planning",
      "Treatment team collaboration",
      "Behavioral health assessments"
    ],
    icon: Users,
    highlight: "3+ Years"
  },
  {
    period: "2021 - 2022",
    role: "Internship Trainee",
    organization: "Lindsey Hoskins & Associates",
    location: "Sterling, Virginia",
    type: "Clinical Training",
    description: "Advanced clinical training with supervision in private practice setting.",
    responsibilities: [
      "Individual therapy with diverse populations",
      "Anxiety and stress management interventions",
      "Grief and loss counseling",
      "Parent-child relationship therapy",
      "Cultural competency in clinical practice"
    ],
    icon: School,
    highlight: "Clinical Training"
  },
  {
    period: "2020",
    role: "Intern",
    organization: "EMMAUS Family Counseling Center, LLC",
    location: "Ashburn, Virginia",
    type: "Internship",
    description: "Foundational clinical experience in individual and family counseling.",
    responsibilities: [
      "Individual counseling sessions",
      "Family therapy interventions",
      "Clinical documentation and case notes",
      "Supervision and professional development",
      "Client intake and assessments"
    ],
    icon: Heart,
    highlight: "Foundation"
  },
  {
    period: "2019 - 2020",
    role: "Mental Health Specialist",
    organization: "North Spring Behavioral Healthcare",
    location: "Leesburg, Virginia",
    type: "Residential Care",
    description: "Residential behavioral health services for individuals with mental health challenges.",
    responsibilities: [
      "Crisis intervention and de-escalation",
      "Group therapy facilitation",
      "Treatment planning and implementation",
      "Behavioral assessment and monitoring",
      "Multidisciplinary team collaboration"
    ],
    icon: Building,
    highlight: "Residential Care"
  },
  {
    period: "2000 - 2019",
    role: "Mental Health Professional",
    organization: "Various Settings (India & USA)",
    location: "Multiple Locations",
    type: "Diverse Experience",
    description: "Extensive experience across schools, hospitals, neurological clinics, and community services.",
    responsibilities: [
      "School-based mental health services",
      "Hospital and neurological clinic settings",
      "Community-based outpatient services",
      "Cross-cultural therapy provision",
      "Program development and implementation"
    ],
    icon: Globe,
    highlight: "20+ Years Foundation"
  }
];

export function ExperienceTimeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-padding theme-accent-1">
      <div className="container-centered">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title mb-4" style={{ color: 'var(--color-primary)' }}>
            Professional Experience
          </h2>
          <div className="text-lg font-medium mb-4" style={{ color: 'var(--color-accent-2)' }}>
            20+ Years in Mental Health
          </div>
          <div className="w-20 h-1 rounded-full theme-primary mx-auto mb-6" />
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Comprehensive experience across diverse clinical settings, populations, and therapeutic modalities, 
            spanning two countries and multiple care environments.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experienceData?.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white shadow-lg card-hover">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="flex items-center justify-center w-16 h-16 theme-primary rounded-xl flex-shrink-0">
                        <experience.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <div 
                            className="px-3 py-1 rounded-full text-xs font-bold text-white"
                            style={{ backgroundColor: 'var(--color-accent-2)' }}
                          >
                            {experience?.period}
                          </div>
                          <div 
                            className="px-2 py-1 rounded text-xs font-medium"
                            style={{ 
                              backgroundColor: 'var(--color-secondary)', 
                              color: 'var(--color-text-primary)' 
                            }}
                          >
                            {experience?.highlight}
                          </div>
                        </div>
                        <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--color-primary)' }}>
                          {experience?.role}
                        </h3>
                        <div className="font-semibold text-gray-900">
                          {experience?.organization}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {experience?.location} • {experience?.type}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {experience?.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {experience?.responsibilities?.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start space-x-3">
                            <div 
                              className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: 'var(--color-primary)' }}
                            />
                            <span className="text-gray-600 text-sm leading-relaxed">
                              {responsibility}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                  Diverse Clinical Experience
                </h3>
                <p className="text-gray-600">
                  Comprehensive background across multiple settings and populations
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <Hospital className="h-8 w-8 mx-auto mb-3" style={{ color: 'var(--color-primary)' }} />
                  <div className="font-semibold text-gray-900">Hospitals</div>
                  <div className="text-gray-600 text-sm">Medical Settings</div>
                </div>
                <div>
                  <School className="h-8 w-8 mx-auto mb-3" style={{ color: 'var(--color-primary)' }} />
                  <div className="font-semibold text-gray-900">Schools</div>
                  <div className="text-gray-600 text-sm">Educational Settings</div>
                </div>
                <div>
                  <Building className="h-8 w-8 mx-auto mb-3" style={{ color: 'var(--color-primary)' }} />
                  <div className="font-semibold text-gray-900">Clinics</div>
                  <div className="text-gray-600 text-sm">Outpatient Care</div>
                </div>
                <div>
                  <Home className="h-8 w-8 mx-auto mb-3" style={{ color: 'var(--color-primary)' }} />
                  <div className="font-semibold text-gray-900">Private Practice</div>
                  <div className="text-gray-600 text-sm">Individual Care</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
