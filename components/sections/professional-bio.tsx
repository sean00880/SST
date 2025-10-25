
"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Languages, 
  Phone, 
  Globe,
  Award,
  Clock
} from "lucide-react";

export function ProfessionalBio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-centered">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Left Column - Image and Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Professional Image */}
            <div className="relative w-full max-w-lg mx-auto aspect-square bg-muted rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="https://capturely.com/wp-content/uploads/Therapist-Gallery-3.webp"
                alt="Anindita (Annie) Dwivedi, Licensed Professional Counselor"
                fill
                className="object-cover"
              />
            </div>

            {/* Quick Facts Box */}
            <Card className="bg-gradient-to-br from-white to-gray-50 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <div>
                      <div className="font-medium text-gray-900">Location</div>
                      <div className="text-gray-600">Ashburn, Virginia</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <GraduationCap className="h-5 w-5 text-gray-500 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Education</div>
                      <div className="text-sm text-gray-600">
                        MA Clinical Mental Health Counseling<br />
                        MA Clinical Psychology
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <div>
                      <div className="font-medium text-gray-900">Experience</div>
                      <div className="text-gray-600">20+ Years</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Languages className="h-5 w-5 text-gray-500 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Languages</div>
                      <div className="text-gray-600">English, Hindi, Urdu</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-gray-500" />
                    <div>
                      <div className="font-medium text-gray-900">License</div>
                      <div className="text-gray-600">Virginia #0701013384</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-500" />
                    <div>
                      <div className="font-medium text-gray-900">Contact</div>
                      <div className="text-gray-600">(804) 207-8414</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 space-y-8"
          >
            <div>
              <h2 className="text-section-title mb-4 text-gray-900 font-bold">
                Welcome and Introduction
              </h2>
              <div className="w-20 h-1 rounded-full theme-accent-1 mb-6" />
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm Anindita (Annie) Dwivedi, and I'm honored to support you on your journey 
                toward healing and growth. With over 20 years of experience in the mental health field, 
                I bring both professional expertise and genuine compassion to our therapeutic work together.
              </p>

              <p className="text-gray-700 leading-relaxed">
                My journey in mental health began in India, where I earned my first Master's degree 
                in Clinical Psychology from Indira Gandhi National Open University. This foundation 
                led me to work across diverse settings including schools, neurological clinics, 
                hospitals, and community-based services. The experience taught me that healing 
                happens in relationship, and every person's story deserves to be heard with respect and understanding.
              </p>

              <p className="text-gray-700 leading-relaxed">
                When I moved to the United States, I pursued further education at Liberty University, 
                earning my Master of Arts in Clinical Mental Health Counseling from their 
                CACREP-accredited program. This additional training deepened my expertise in 
                evidence-based therapeutic approaches while honoring the wisdom I gained from 
                working with diverse communities across two countries.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Today, as a Licensed Professional Counselor in Virginia and the owner of 
                Seek, Strive & Thrive, LLC, I specialize in helping individuals navigate 
                anxiety, depression, trauma, relationship challenges, and life transitions. 
                My approach integrates multiple evidence-based modalities including EMDR (Part II Certified), 
                Dialectical Behavior Therapy (Certified), and mindfulness-based interventions.
              </p>

              <p className="text-gray-700 leading-relaxed">
                What makes my practice unique is the blend of professional training with cultural 
                sensitivity and lived experience. Being fluent in English, Hindi, and Urdu allows 
                me to serve diverse communities, and my own journey as an immigrant helps me 
                understand the complexities of navigating multiple cultural identities.
              </p>

              <p className="text-gray-700 leading-relaxed">
                I believe deeply in your inherent capacity for healing and growth. My role is to 
                provide a safe, non-judgmental space where you can explore your experiences, 
                develop practical coping strategies, and reconnect with your own strength and resilience. 
                Whether you're working through anxiety, processing trauma, navigating relationship 
                challenges, or simply seeking personal growth, I'm here to support you with 
                compassion, expertise, and genuine care.
              </p>

              <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-l-4" 
                   style={{ borderLeftColor: 'var(--color-primary)' }}>
                <p className="text-gray-700 leading-relaxed italic">
                  "Every person has the capacity for healing and transformation. My job is to 
                  create the conditions where your natural resilience can flourish, and to walk 
                  alongside you as you discover your path to wellness and fulfillment."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
