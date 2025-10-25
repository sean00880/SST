
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  MapPin, 
  Monitor, 
  Globe, 
  Home,
  Building,
  Users,
  Shield,
  CheckCircle
} from "lucide-react";

const serviceAreas = [
  {
    icon: Monitor,
    title: "Telehealth Services",
    coverage: "Statewide Virginia",
    description: "Secure, HIPAA-compliant video therapy sessions available to all Virginia residents.",
    benefits: [
      "Convenience of home sessions",
      "No travel time required",
      "Flexible scheduling options",
      "Same quality of care as in-person",
      "Secure, encrypted platform"
    ],
    requirements: [
      "Must be Virginia resident",
      "Reliable internet connection",
      "Private, confidential space",
      "Computer/tablet with camera"
    ]
  },
  {
    icon: Building,
    title: "In-Person Sessions",
    coverage: "Northern Virginia",
    description: "Traditional face-to-face therapy in comfortable, confidential office settings.",
    benefits: [
      "Direct personal connection",
      "Professional office environment",
      "Non-verbal communication",
      "Established therapeutic space"
    ],
    requirements: [
      "Located in Northern Virginia area",
      "Able to travel to office location",
      "Appointment scheduling required"
    ]
  }
];

const specificAreas = [
  { name: "Ashburn", type: "Primary Location" },
  { name: "Sterling", type: "Served Area" },
  { name: "Dulles", type: "Served Area" },
  { name: "McLean", type: "Served Area" },
  { name: "Great Falls", type: "Served Area" },
  { name: "Reston", type: "Served Area" },
  { name: "Leesburg", type: "Served Area" },
  { name: "Herndon", type: "Served Area" },
  { name: "Vienna", type: "Served Area" },
  { name: "Fairfax", type: "Served Area" },
  { name: "Alexandria", type: "Served Area" },
  { name: "Arlington", type: "Served Area" }
];

export function ServiceAreas() {
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
            Service Areas & Session Options
          </h2>
          <div className="w-20 h-1 rounded-full theme-primary mx-auto mb-6" />
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            I offer flexible therapy options to meet your needs, whether you prefer the convenience 
            of telehealth sessions or the traditional in-person experience.
          </p>
        </motion.div>

        {/* Service Formats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {serviceAreas?.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full bg-white shadow-lg card-hover">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 theme-primary rounded-2xl">
                      <area.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>
                        {area?.title}
                      </h3>
                      <div 
                        className="text-sm font-medium"
                        style={{ color: 'var(--color-accent-2)' }}
                      >
                        {area?.coverage}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {area?.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-3">
                        Benefits:
                      </h4>
                      <ul className="space-y-2">
                        {area?.benefits?.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" 
                                       style={{ color: 'var(--color-primary)' }} />
                            <span className="text-gray-600 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-3">
                        Requirements:
                      </h4>
                      <ul className="space-y-2">
                        {area?.requirements?.map((requirement, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-2">
                            <Shield className="h-4 w-4 mt-0.5 flex-shrink-0" 
                                   style={{ color: 'var(--color-accent-2)' }} />
                            <span className="text-gray-600 text-sm">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Specific Areas Served */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                  Northern Virginia Areas Served
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  In-person sessions available in the Northern Virginia region. Telehealth available 
                  statewide to all Virginia residents.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {specificAreas?.map((location, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="font-medium text-gray-900">{location?.name}</span>
                    </div>
                    {location?.type === "Primary Location" && (
                      <div 
                        className="px-2 py-1 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: 'var(--color-accent-2)' }}
                      >
                        Primary
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-br from-white to-gray-50 shadow-lg">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
                <div className="flex items-center justify-center space-x-3">
                  <Home className="h-8 w-8" style={{ color: 'var(--color-primary)' }} />
                  <div className="text-left">
                    <div className="font-semibold" style={{ color: 'var(--color-primary)' }}>
                      Base Location
                    </div>
                    <div className="text-gray-600">Ashburn, Virginia</div>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-3">
                  <Globe className="h-8 w-8" style={{ color: 'var(--color-primary)' }} />
                  <div className="text-left">
                    <div className="font-semibold" style={{ color: 'var(--color-primary)' }}>
                      Telehealth Coverage
                    </div>
                    <div className="text-gray-600">All of Virginia</div>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-3">
                  <Users className="h-8 w-8" style={{ color: 'var(--color-primary)' }} />
                  <div className="text-left">
                    <div className="font-semibold" style={{ color: 'var(--color-primary)' }}>
                      Languages
                    </div>
                    <div className="text-gray-600">English, Hindi, Urdu</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 leading-relaxed">
                  <strong>Note:</strong> Due to licensing requirements, I can only provide services 
                  to individuals who are physically located in Virginia at the time of the session, 
                  regardless of your permanent address. This applies to both telehealth and in-person sessions.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
