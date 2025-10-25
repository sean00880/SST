
"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Brain, 
  Heart, 
  Shield, 
  Users, 
  CloudRain, 
  Compass,
  Zap,
  Sun
} from "lucide-react";

const specializations = [
  {
    icon: Brain,
    title: "Anxiety & Stress Management",
    description: "Comprehensive treatment for generalized anxiety, panic disorders, social anxiety, and chronic stress. Using CBT, mindfulness, and relaxation techniques to help you regain control.",
    features: ["Panic Attack Management", "Social Anxiety", "Performance Anxiety", "Chronic Stress", "Workplace Burnout"]
  },
  {
    icon: Sun,
    title: "Depression & Mood Disorders",
    description: "Evidence-based treatment for depression, bipolar disorder, and mood-related challenges. Helping you rediscover hope, purpose, and emotional balance.",
    features: ["Major Depression", "Seasonal Affective Disorder", "Mood Fluctuations", "Low Energy", "Motivation Issues"]
  },
  {
    icon: Shield,
    title: "Trauma & PTSD (EMDR Certified)",
    description: "Specialized EMDR Part II certified treatment for trauma, PTSD, and complex trauma. Safe, effective processing of difficult experiences to promote healing.",
    features: ["EMDR Therapy", "Complex Trauma", "PTSD Treatment", "Childhood Trauma", "Military Trauma"]
  },
  {
    icon: Heart,
    title: "Grief, Loss & Bereavement",
    description: "Compassionate support through loss of loved ones, relationship endings, job loss, or other significant life changes. Honoring your unique grieving process.",
    features: ["Loss of Loved Ones", "Relationship Endings", "Job Loss", "Pet Loss", "Complicated Grief"]
  },
  {
    icon: Users,
    title: "Relationship Issues",
    description: "Improving communication, resolving conflicts, and strengthening connections in romantic, family, and professional relationships.",
    features: ["Communication Skills", "Conflict Resolution", "Intimacy Issues", "Family Dynamics", "Boundary Setting"]
  },
  {
    icon: Compass,
    title: "Life Transitions & Adjustment",
    description: "Support through major life changes including career transitions, relocation, retirement, parenthood, and other significant adjustments.",
    features: ["Career Changes", "Relocation Stress", "Empty Nest Syndrome", "Retirement Planning", "Parenthood Transition"]
  },
  {
    icon: CloudRain,
    title: "Adolescent & Family Issues",
    description: "Specialized support for teenagers and families navigating adolescent development, behavioral challenges, and parent-child relationships.",
    features: ["Teen Counseling", "Parent-Child Conflicts", "Behavioral Issues", "Academic Stress", "Identity Formation"]
  },
  {
    icon: Zap,
    title: "Cultural Identity & Immigration",
    description: "Understanding the unique challenges of multicultural identity, immigration stress, and navigating between different cultural contexts.",
    features: ["Cultural Identity", "Immigration Stress", "Intergenerational Conflicts", "Acculturation", "Language Barriers"]
  }
];

export function SpecializationsSection() {
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
            Areas of Specialization
          </h2>
          <div className="w-20 h-1 rounded-full theme-accent-1 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive, evidence-based therapy services tailored to your unique needs and goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {specializations?.map((specialization, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="card-hover h-full bg-white border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center justify-center w-16 h-16 theme-secondary rounded-2xl">
                      <specialization.icon 
                        className="h-8 w-8" 
                        style={{ color: 'var(--color-primary)' }} 
                      />
                    </div>
                    <CardTitle className="text-card-title" style={{ color: 'var(--color-primary)' }}>
                      {specialization?.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {specialization?.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                      Treatment Areas:
                    </h4>
                    <ul className="space-y-2">
                      {specialization?.features?.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: 'var(--color-accent-2)' }}
                          />
                          <span className="text-sm text-gray-600">{feature}</span>
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
    </section>
  );
}
