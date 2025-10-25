
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award, Shield, Star, Clock, CheckCircle } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "Licensed Professional Counselor (LPC)",
    subtitle: "Virginia License #0701013384",
  },
  {
    icon: Award,
    title: "National Certified Counselor (NCC)",
    subtitle: "NBCC Certified",
  },
  {
    icon: Shield,
    title: "EMDR PT-II Certified",
    subtitle: "Trauma Therapy Specialist",
  },
  {
    icon: CheckCircle,
    title: "Certified DBT Provider",
    subtitle: "Dialectical Behavior Therapy",
  },
  {
    icon: Star,
    title: "Certified Mindfulness Practitioner",
    subtitle: "Evidence-Based Approach",
  },
  {
    icon: Clock,
    title: "20+ Years Experience",
    subtitle: "Mental Health Expertise",
  },
];

export function CredentialsBar() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref}
      className="py-8 theme-secondary border-b"
    >
      <div className="container-centered">
        <div className="overflow-hidden">
          <motion.div
            initial={{ x: "100%" }}
            animate={inView ? { x: "-100%" } : { x: "100%" }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex items-center space-x-16 whitespace-nowrap"
          >
            {[...credentials, ...credentials].map((credential, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 min-w-max"
              >
                <div className="flex items-center justify-center w-12 h-12 theme-primary rounded-full">
                  <credential.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {credential?.title}
                  </div>
                  <div className="text-sm text-gray-600">
                    {credential?.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
