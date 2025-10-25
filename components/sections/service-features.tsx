
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Video, 
  Languages, 
  CreditCard, 
  Calendar,
  Clock,
  MapPin,
  Shield,
  Globe
} from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Online & In-Person Sessions",
    description: "Flexible therapy options including secure telehealth sessions and traditional in-person appointments.",
    highlight: "HIPAA Compliant"
  },
  {
    icon: Languages,
    title: "Multilingual Services",
    description: "Therapy sessions available in English, Hindi, and Urdu to serve diverse communities.",
    highlight: "3 Languages"
  },
  {
    icon: CreditCard,
    title: "Insurance Accepted",
    description: "Accepting most major insurance plans including Aetna, Anthem, Cigna, and UnitedHealthcare.",
    highlight: "Most Plans Accepted"
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Evening and weekend appointments available to accommodate your busy schedule.",
    highlight: "7 Days a Week"
  },
  {
    icon: Clock,
    title: "20+ Years Experience",
    description: "Extensive experience in mental health care across diverse settings and populations.",
    highlight: "Proven Expertise"
  },
  {
    icon: MapPin,
    title: "Licensed in Virginia",
    description: "Fully licensed Professional Counselor serving clients throughout the Commonwealth of Virginia.",
    highlight: "License #0701013384"
  }
];

export function ServiceFeatures() {
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
            Why Choose Seek, Strive & Thrive?
          </h2>
          <div className="w-20 h-1 rounded-full theme-primary mx-auto mb-6" />
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Comprehensive mental health services designed with your comfort, convenience, 
            and healing journey in mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features?.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg card-hover h-full">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="flex items-center justify-center w-20 h-20 theme-primary rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-10 w-10 text-white" />
                    </div>
                    <div 
                      className="absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: 'var(--color-accent-2)' }}
                    >
                      {feature?.highlight}
                    </div>
                  </div>
                </div>

                <h3 className="text-card-title mb-4" style={{ color: 'var(--color-primary)' }}>
                  {feature?.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature?.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="flex items-center justify-center space-x-3">
                <Shield className="h-8 w-8" style={{ color: 'var(--color-primary)' }} />
                <div className="text-left">
                  <div className="font-semibold" style={{ color: 'var(--color-primary)' }}>
                    HIPAA Compliant
                  </div>
                  <div className="text-sm text-gray-600">Secure & Confidential</div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <Globe className="h-8 w-8" style={{ color: 'var(--color-primary)' }} />
                <div className="text-left">
                  <div className="font-semibold" style={{ color: 'var(--color-primary)' }}>
                    Telehealth Available
                  </div>
                  <div className="text-sm text-gray-600">Statewide Virginia</div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <Calendar className="h-8 w-8" style={{ color: 'var(--color-primary)' }} />
                <div className="text-left">
                  <div className="font-semibold" style={{ color: 'var(--color-primary)' }}>
                    Free Consultation
                  </div>
                  <div className="text-sm text-gray-600">15-Minute Session</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
