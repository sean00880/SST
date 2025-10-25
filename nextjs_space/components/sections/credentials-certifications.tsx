
"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Shield, 
  Award, 
  Eye, 
  Brain, 
  Flower2, 
  GraduationCap,
  CheckCircle,
  Star
} from "lucide-react";

const credentials = [
  {
    icon: Shield,
    title: "Licensed Professional Counselor",
    category: "State License",
    details: "Virginia License #0701013384",
    status: "Active Since March 2024",
    description: "Full licensure by the Virginia Department of Health Professions to provide independent professional counseling services.",
    verification: "Virginia Board of Counseling"
  },
  {
    icon: Award,
    title: "National Certified Counselor",
    category: "National Certification",
    details: "NBCC Certification",
    status: "Active Status",
    description: "National Board for Certified Counselors (NBCC) certification demonstrating adherence to national professional standards.",
    verification: "NBCC National Board"
  },
  {
    icon: Eye,
    title: "EMDR PT-II Certified",
    category: "Trauma Therapy Certification",
    details: "Eye Movement Desensitization and Reprocessing",
    status: "Part II Certification",
    description: "Advanced EMDR training for treating trauma and PTSD. Certified to provide comprehensive EMDR therapy services.",
    verification: "EMDR International Association"
  },
  {
    icon: Brain,
    title: "Certified DBT Provider",
    category: "Specialized Therapy Certification",
    details: "Dialectical Behavior Therapy",
    status: "Full Certification",
    description: "Comprehensive training in DBT skills and interventions for emotional regulation and distress tolerance.",
    verification: "DBT Training Institute"
  },
  {
    icon: Flower2,
    title: "Certified Mindfulness Practitioner",
    category: "Holistic Therapy Certification",
    details: "Mindfulness-Based Interventions",
    status: "Active Certification",
    description: "Training in mindfulness-based approaches for anxiety, depression, and stress management.",
    verification: "Mindfulness Training Institute"
  },
  {
    icon: GraduationCap,
    title: "Graduate Degrees",
    category: "Educational Credentials",
    details: "MA Clinical Mental Health Counseling & MA Clinical Psychology",
    status: "Liberty University & IGNOU",
    description: "Advanced graduate education in both Clinical Mental Health Counseling and Clinical Psychology.",
    verification: "CACREP Accredited Programs"
  }
];

export function CredentialsCertifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-padding theme-neutral">
      <div className="container-centered">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title mb-4" style={{ color: 'var(--color-primary)' }}>
            Professional Credentials & Certifications
          </h2>
          <div className="w-20 h-1 rounded-full theme-accent-1 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive professional qualifications ensuring the highest standards of care 
            and evidence-based therapeutic interventions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {credentials?.map((credential, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="card-hover h-full bg-white shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="flex items-center justify-center w-20 h-20 theme-primary rounded-2xl">
                      <credential.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  <CardTitle className="text-center text-lg mb-2" style={{ color: 'var(--color-primary)' }}>
                    {credential?.title}
                  </CardTitle>

                  <div className="text-center">
                    <div 
                      className="inline-flex px-3 py-1 rounded-full text-xs font-medium mb-2"
                      style={{ 
                        backgroundColor: 'var(--color-accent-1)', 
                        color: 'var(--color-text-primary)' 
                      }}
                    >
                      {credential?.category}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="text-center space-y-4">
                  <div className="space-y-2">
                    <div className="font-semibold text-gray-900">
                      {credential?.details}
                    </div>
                    <div 
                      className="text-sm font-medium"
                      style={{ color: 'var(--color-accent-2)' }}
                    >
                      {credential?.status}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {credential?.description}
                  </p>

                  <div className="pt-2 border-t border-gray-100">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4" style={{ color: 'var(--color-primary)' }} />
                      <span className="text-xs text-gray-500">
                        {credential?.verification}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Verification Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-white to-gray-50 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <Star className="h-8 w-8" style={{ color: 'var(--color-accent-1)' }} />
              </div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>
                Verified Professional Standing
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                All credentials and certifications are current and verified through their respective 
                professional organizations. You can verify my Virginia LPC license through the 
                Virginia Department of Health Professions license lookup system using license number 0701013384.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                Last verified: October 2025 • No disciplinary actions on record
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
