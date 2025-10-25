
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Clock,
  MapPin,
  CheckCircle
} from "lucide-react";

const educationTimeline = [
  {
    period: "2019 - 2021",
    degree: "Master of Arts in Clinical Mental Health Counseling",
    institution: "Liberty University, Virginia",
    details: {
      accreditation: "CACREP-accredited program",
      credits: "60 credit hours",
      specializations: ["Trauma Therapy", "DBT Training", "EMDR Training"],
      practicum: "600+ hour internship",
      thesis: "Completed comprehensive clinical training"
    },
    icon: GraduationCap,
    color: "primary"
  },
  {
    period: "2014 - 2016",
    degree: "Master of Arts in Clinical Psychology",
    institution: "Indira Gandhi National Open University, New Delhi, India",
    details: {
      grade: "A Grade",
      thesis: "Effect of Art Therapy on Aggression in Middle School Students",
      focus: "Clinical psychology principles and research",
      specialization: ["Developmental Psychology", "Abnormal Psychology", "Research Methods"]
    },
    icon: BookOpen,
    color: "secondary"
  },
  {
    period: "Ongoing",
    degree: "Continuing Education & Professional Development",
    institution: "Various Accredited Institutions",
    details: {
      emdr: "EMDR Part II Certification Training",
      dbt: "DBT Certification Program",
      mindfulness: "Mindfulness-Based Interventions Training",
      annual: "20+ hours annually as required by Virginia Board"
    },
    icon: Award,
    color: "accent"
  }
];

export function EducationalJourney() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-centered">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title mb-4" style={{ color: 'var(--color-primary)' }}>
            Educational Background
          </h2>
          <div className="w-20 h-1 rounded-full theme-accent-1 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            A comprehensive educational foundation spanning two countries and multiple 
            specialized training programs in evidence-based therapeutic approaches.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 theme-secondary" />

            <div className="space-y-12">
              {educationTimeline?.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex items-start space-x-8"
                >
                  {/* Timeline Icon */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 theme-primary rounded-full shadow-lg">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <Card className="shadow-lg card-hover">
                      <CardContent className="p-8">
                        <div className="mb-6">
                          <div 
                            className="inline-flex px-3 py-1 rounded-full text-xs font-bold text-white mb-4"
                            style={{ backgroundColor: 'var(--color-accent-2)' }}
                          >
                            {item?.period}
                          </div>
                          <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                            {item?.degree}
                          </h3>
                          <div className="flex items-center space-x-2 text-gray-600 mb-4">
                            <MapPin className="h-4 w-4" />
                            <span className="font-medium">{item?.institution}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {item?.details && Object.entries(item.details).map(([key, value]) => (
                            <div key={key} className="flex items-start space-x-3">
                              <CheckCircle className="h-4 w-4 mt-1 flex-shrink-0" 
                                         style={{ color: 'var(--color-primary)' }} />
                              <div>
                                <div className="font-medium text-gray-900 capitalize">
                                  {key?.replace(/([A-Z])/g, ' $1').trim()}:
                                </div>
                                <div className="text-gray-600 text-sm">
                                  {Array.isArray(value) ? (
                                    <ul className="list-disc list-inside">
                                      {value?.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                      ))}
                                    </ul>
                                  ) : (
                                    value
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-br from-white to-gray-50 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                  Educational Excellence
                </h3>
                <p className="text-gray-600">
                  Comprehensive training combining international perspectives with specialized expertise
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                    2
                  </div>
                  <div className="text-gray-600">Master's Degrees</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                    60+
                  </div>
                  <div className="text-gray-600">Credit Hours</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                    600+
                  </div>
                  <div className="text-gray-600">Clinical Hours</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                    20+
                  </div>
                  <div className="text-gray-600">Annual CE Hours</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
