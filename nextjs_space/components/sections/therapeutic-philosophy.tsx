
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Sprout, 
  Heart, 
  Globe, 
  Target,
  Users,
  BarChart3,
  Scale,
  Star
} from "lucide-react";

const coreBeliefs = [
  {
    icon: Sprout,
    title: "Growth-Oriented",
    description: "Every person has the inherent capacity for healing and transformation. My role is to create the conditions where your natural resilience can flourish."
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "I provide a non-judgmental, warm, and empathetic space where you can authentically explore your experiences without fear of criticism or shame."
  },
  {
    icon: Globe,
    title: "Culturally Sensitive",
    description: "Honoring diverse backgrounds, beliefs, and cultural identities. I understand the complexities of navigating multiple cultural contexts and identities."
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "While respecting your pace and process, I maintain a focus on practical, achievable goals that align with your values and desired outcomes."
  }
];

const practicePrinciples = [
  {
    icon: Users,
    title: "Collaborative Partnership",
    description: "You are the expert of your own experience. Together, we'll create your personalized path to healing, with your goals and preferences guiding our work."
  },
  {
    icon: BarChart3,
    title: "Evidence-Based Practice",
    description: "I utilize proven therapeutic modalities supported by research, while adapting each approach to honor your unique needs, preferences, and circumstances."
  },
  {
    icon: Scale,
    title: "Holistic Approach",
    description: "Addressing the whole person—mind, body, spirit, and social context—recognizing that healing happens on multiple levels simultaneously."
  },
  {
    icon: Star,
    title: "Strengths-Based Focus",
    description: "Building on your inherent resilience, capabilities, and wisdom, while developing new skills and perspectives that support your continued growth."
  }
];

export function TherapeuticPhilosophy() {
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
            My Therapeutic Approach
          </h2>
          <div className="w-20 h-1 rounded-full theme-accent-1 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            My therapeutic philosophy centers on the belief that every person has the capacity for healing, 
            growth, and transformation when provided with the right support, tools, and environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Core Beliefs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                Core Beliefs
              </h3>
              <div className="w-16 h-1 rounded-full theme-accent-2 mb-6" />
            </div>

            <div className="space-y-6">
              {coreBeliefs?.map((belief, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 theme-secondary rounded-xl flex-shrink-0">
                    <belief.icon className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {belief?.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {belief?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Practice Principles */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                Practice Principles
              </h3>
              <div className="w-16 h-1 rounded-full theme-accent-2 mb-6" />
            </div>

            <div className="space-y-6">
              {practicePrinciples?.map((principle, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 theme-secondary rounded-xl flex-shrink-0">
                    <principle.icon className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {principle?.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {principle?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="bg-gradient-to-br from-gray-50 to-white shadow-lg">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                  My Commitment to You
                </h3>
              </div>

              <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  I believe that therapy is most effective when it occurs within a genuine, collaborative relationship 
                  built on trust, respect, and mutual understanding. My approach integrates the best of evidence-based 
                  practices with deep respect for your individual story, cultural background, and personal values.
                </p>

                <p>
                  Drawing from my experience across two countries and diverse clinical settings, I understand that 
                  healing doesn't follow a one-size-fits-all approach. Whether you're dealing with anxiety, depression, 
                  trauma, relationship challenges, or life transitions, I tailor my therapeutic interventions to match 
                  your unique needs, learning style, and goals.
                </p>

                <p>
                  I'm particularly passionate about working with individuals navigating cultural identity issues, 
                  immigrants adjusting to new environments, and those who may have struggled to find culturally 
                  competent mental health care. My multilingual abilities and cross-cultural experience allow me 
                  to provide therapy that honors the complexity of multicultural identities.
                </p>

                <p>
                  My ultimate goal is to help you develop the insights, skills, and resilience needed not just 
                  to overcome current challenges, but to thrive in all areas of your life. I'm honored to walk 
                  alongside you on this journey of discovery, healing, and growth.
                </p>
              </div>

              <div className="mt-8 text-center">
                <div className="inline-block p-6 bg-white rounded-2xl shadow-md">
                  <p className="text-lg font-medium italic" style={{ color: 'var(--color-primary)' }}>
                    "Every person has the capacity for healing and transformation. 
                    My job is to create the conditions where your natural resilience can flourish."
                  </p>
                  <p className="text-gray-600 mt-3">
                    — Anindita Dwivedi, LPC
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
