
"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Eye, 
  Lightbulb, 
  Flower2, 
  Target, 
  Puzzle, 
  Heart,
  Users2,
  Brain
} from "lucide-react";

const approaches = [
  {
    icon: Eye,
    title: "EMDR PT-II (Certified)",
    category: "Trauma Therapy",
    description: "Eye Movement Desensitization and Reprocessing therapy for trauma and PTSD. Helps process difficult memories and reduce trauma symptoms effectively.",
    benefits: ["Reduces trauma symptoms", "Processes difficult memories", "Evidence-based for PTSD", "Accelerated healing"]
  },
  {
    icon: Lightbulb,
    title: "Dialectical Behavior Therapy (Certified)",
    category: "Skills-Based Therapy",
    description: "DBT focuses on teaching practical skills for emotional regulation, distress tolerance, and interpersonal effectiveness.",
    benefits: ["Emotion regulation skills", "Crisis management tools", "Mindfulness techniques", "Relationship skills"]
  },
  {
    icon: Flower2,
    title: "Mindfulness-Based (Certified)",
    category: "Holistic Approach",
    description: "Mindfulness-based interventions that help you stay present, reduce anxiety, and develop self-awareness and acceptance.",
    benefits: ["Present moment awareness", "Anxiety reduction", "Self-compassion", "Stress management"]
  },
  {
    icon: Brain,
    title: "Cognitive Behavioral Therapy",
    category: "Evidence-Based",
    description: "CBT helps identify and change negative thought patterns and behaviors that contribute to emotional distress.",
    benefits: ["Thought pattern awareness", "Behavioral changes", "Problem-solving skills", "Relapse prevention"]
  },
  {
    icon: Target,
    title: "Solution-Focused Brief Therapy",
    category: "Goal-Oriented",
    description: "A practical, goal-oriented approach that focuses on solutions and strengths rather than problems and pathology.",
    benefits: ["Goal achievement", "Strength-based focus", "Practical solutions", "Efficient treatment"]
  },
  {
    icon: Heart,
    title: "Person-Centered Therapy",
    category: "Humanistic Approach",
    description: "A collaborative approach that honors your expertise about your own life while providing empathetic support.",
    benefits: ["Non-judgmental support", "Self-directed growth", "Authentic self-expression", "Empowering process"]
  },
  {
    icon: Users2,
    title: "Family Systems Therapy",
    category: "Systemic Approach",
    description: "Understanding and improving family dynamics and relationships through systemic interventions.",
    benefits: ["Improved communication", "Healthy boundaries", "Family healing", "Relationship repair"]
  },
  {
    icon: Puzzle,
    title: "Trauma-Focused Therapy",
    category: "Specialized Treatment",
    description: "Comprehensive trauma treatment using multiple evidence-based approaches tailored to your specific needs.",
    benefits: ["Trauma processing", "Safety building", "Resilience development", "Recovery support"]
  }
];

export function TherapeuticApproaches() {
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
            Evidence-Based Therapeutic Approaches
          </h2>
          <div className="w-20 h-1 rounded-full theme-accent-1 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Utilizing proven therapeutic modalities tailored to your unique needs and goals. 
            Each approach is selected based on current research and your individual preferences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {approaches?.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="card-hover h-full bg-white border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex items-center justify-center w-16 h-16 theme-primary rounded-2xl flex-shrink-0">
                      <approach.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-card-title mb-2" style={{ color: 'var(--color-primary)' }}>
                        {approach?.title}
                      </CardTitle>
                      <div 
                        className="inline-flex px-3 py-1 rounded-full text-xs font-medium"
                        style={{ 
                          backgroundColor: 'var(--color-accent-1)', 
                          color: 'var(--color-text-primary)' 
                        }}
                      >
                        {approach?.category}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {approach?.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                      Key Benefits:
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {approach?.benefits?.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-3">
                          <div 
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: 'var(--color-accent-2)' }}
                          />
                          <span className="text-sm text-gray-600">{benefit}</span>
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
