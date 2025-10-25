
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Calendar, 
  MessageCircle, 
  Target, 
  TrendingUp,
  Phone,
  ClipboardCheck,
  HeartHandshake,
  CheckCircle
} from "lucide-react";

const treatmentSteps = [
  {
    step: 1,
    icon: Phone,
    title: "Free Consultation",
    duration: "15 minutes",
    description: "We'll start with a brief phone consultation to discuss your concerns and determine if we're a good fit for working together.",
    whatHappens: [
      "Discuss your main concerns and goals",
      "Learn about my approach and experience",
      "Ask any questions about therapy process",
      "Determine if we're a good therapeutic match"
    ]
  },
  {
    step: 2,
    icon: ClipboardCheck,
    title: "Initial Assessment",
    duration: "90 minutes",
    description: "A comprehensive intake session where we'll explore your history, current concerns, and goals for therapy in depth.",
    whatHappens: [
      "Complete detailed intake and assessment",
      "Discuss your mental health history",
      "Explore current symptoms and challenges",
      "Begin building our therapeutic relationship"
    ]
  },
  {
    step: 3,
    icon: Target,
    title: "Treatment Planning",
    duration: "Session 2-3",
    description: "Together, we'll develop a personalized treatment plan that outlines your goals and the approaches we'll use to achieve them.",
    whatHappens: [
      "Collaboratively set specific therapy goals",
      "Choose appropriate therapeutic approaches",
      "Discuss frequency and duration of treatment",
      "Establish measures for tracking progress"
    ]
  },
  {
    step: 4,
    icon: HeartHandshake,
    title: "Active Treatment",
    duration: "Ongoing",
    description: "The heart of our work together, where we'll use evidence-based techniques to address your concerns and work toward your goals.",
    whatHappens: [
      "Regular therapy sessions (weekly or bi-weekly)",
      "Practice new skills and coping strategies",
      "Process experiences and emotions",
      "Regular check-ins on progress and goals"
    ]
  },
  {
    step: 5,
    icon: TrendingUp,
    title: "Progress Review",
    duration: "Regular intervals",
    description: "We'll regularly assess your progress and adjust our approach as needed to ensure you're moving toward your goals effectively.",
    whatHappens: [
      "Review progress toward treatment goals",
      "Adjust treatment plan as needed",
      "Celebrate achievements and breakthroughs",
      "Address any concerns or challenges"
    ]
  },
  {
    step: 6,
    icon: CheckCircle,
    title: "Maintenance & Completion",
    duration: "As appropriate",
    description: "As you achieve your goals, we'll focus on maintaining progress and preparing for the completion of therapy when appropriate.",
    whatHappens: [
      "Reduce session frequency gradually",
      "Focus on relapse prevention",
      "Plan for future challenges",
      "Schedule follow-up sessions if needed"
    ]
  }
];

const sessionFormats = [
  {
    icon: MessageCircle,
    title: "In-Person Sessions",
    description: "Traditional face-to-face therapy in a comfortable, confidential office setting.",
    benefits: ["Direct personal connection", "Non-verbal communication", "Private office environment"]
  },
  {
    icon: Calendar,
    title: "Telehealth Sessions",
    description: "Secure video sessions that allow you to receive therapy from the comfort of your own space.",
    benefits: ["Convenience and flexibility", "No travel required", "HIPAA-compliant platform", "Statewide availability in Virginia"]
  }
];

export function TreatmentProcess() {
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
            What to Expect: The Treatment Process
          </h2>
          <div className="w-20 h-1 rounded-full theme-accent-1 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Understanding what to expect can help ease anxiety about starting therapy. 
            Here's a step-by-step overview of our typical treatment process.
          </p>
        </motion.div>

        {/* Treatment Steps */}
        <div className="mb-16">
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 theme-secondary" />
            
            <div className="space-y-8">
              {treatmentSteps?.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
                    {/* Step Icon */}
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 theme-primary rounded-full shadow-lg flex-shrink-0">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <Card className="shadow-lg card-hover">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div 
                                className="px-3 py-1 rounded-full text-sm font-bold text-white"
                                style={{ backgroundColor: 'var(--color-accent-2)' }}
                              >
                                Step {step?.step}
                              </div>
                              <h3 className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
                                {step?.title}
                              </h3>
                            </div>
                            <div 
                              className="px-3 py-1 rounded-full text-sm font-medium"
                              style={{ 
                                backgroundColor: 'var(--color-secondary)', 
                                color: 'var(--color-text-primary)' 
                              }}
                            >
                              {step?.duration}
                            </div>
                          </div>

                          <p className="text-gray-600 leading-relaxed mb-6">
                            {step?.description}
                          </p>

                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-3">
                              What Happens:
                            </h4>
                            <ul className="space-y-2">
                              {step?.whatHappens?.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start space-x-3">
                                  <CheckCircle className="h-4 w-4 mt-1 flex-shrink-0" 
                                             style={{ color: 'var(--color-primary)' }} />
                                  <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Session Formats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              Session Formats Available
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I offer flexible session formats to meet your needs and preferences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sessionFormats?.map((format, index) => (
              <Card key={index} className="shadow-lg card-hover bg-white">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="flex items-center justify-center w-16 h-16 theme-secondary rounded-2xl">
                      <format.icon className="h-8 w-8" style={{ color: 'var(--color-primary)' }} />
                    </div>
                  </div>

                  <h4 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                    {format?.title}
                  </h4>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {format?.description}
                  </p>

                  <div>
                    <h5 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-3">
                      Benefits:
                    </h5>
                    <ul className="space-y-2">
                      {format?.benefits?.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-4 w-4 flex-shrink-0" 
                                     style={{ color: 'var(--color-accent-2)' }} />
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-br from-white to-gray-50 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">How long are sessions?</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Individual therapy sessions are typically 50-60 minutes. Initial intake sessions 
                    may be longer (90 minutes) to allow for comprehensive assessment.
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">How often should I attend sessions?</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Most clients benefit from weekly sessions initially. As progress is made, 
                    we may adjust to bi-weekly or monthly sessions based on your needs and goals.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">How long does therapy take?</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    The length of therapy varies greatly depending on your goals and concerns. 
                    Some clients see improvement in a few sessions, while others benefit from 
                    longer-term work. We'll regularly assess progress together.
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">What if I need to cancel a session?</h4>
                  <p className="text-gray-600 text-sm">
                    Please provide 24-hour notice for cancellations when possible. Late cancellations 
                    may be subject to a fee. We'll discuss the specific cancellation policy during intake.
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
