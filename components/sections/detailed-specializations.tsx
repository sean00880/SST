
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
  Sun,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const detailedSpecializations = [
  {
    icon: Brain,
    title: "Anxiety & Stress Management",
    shortDescription: "Comprehensive treatment for all forms of anxiety and chronic stress",
    symptoms: [
      "Persistent worry and racing thoughts",
      "Panic attacks and physical symptoms",
      "Social anxiety and avoidance behaviors",
      "Performance anxiety and fear of judgment",
      "Chronic stress and workplace burnout",
      "Obsessive thoughts or compulsive behaviors"
    ],
    approaches: [
      "Cognitive Behavioral Therapy (CBT)",
      "Mindfulness-Based Stress Reduction",
      "Dialectical Behavior Therapy (DBT) skills",
      "Relaxation and breathing techniques",
      "Exposure therapy (when appropriate)",
      "Lifestyle and coping strategy development"
    ],
    description: "If anxiety feels overwhelming or stress is taking a toll on your daily life, you don't have to face it alone. I provide evidence-based treatment that helps you understand the root causes of your anxiety and develop practical tools to manage symptoms effectively. Together, we'll work on breaking the cycle of worry and fear that may be limiting your life.",
    outcome: "Learn to manage anxiety symptoms, reduce stress levels, and regain confidence in daily activities."
  },
  {
    icon: Sun,
    title: "Depression & Mood Disorders",
    shortDescription: "Evidence-based treatment for depression, seasonal affective disorder, and mood challenges",
    symptoms: [
      "Persistent sadness or hopelessness",
      "Loss of interest in previously enjoyed activities",
      "Low energy and motivation",
      "Sleep disturbances (too much or too little)",
      "Changes in appetite or weight",
      "Feelings of worthlessness or guilt",
      "Difficulty concentrating or making decisions"
    ],
    approaches: [
      "Cognitive Behavioral Therapy (CBT)",
      "Behavioral Activation techniques",
      "Mindfulness-Based Cognitive Therapy",
      "Solution-Focused Brief Therapy",
      "Person-centered therapeutic approaches",
      "Activity scheduling and mood monitoring"
    ],
    description: "Depression can feel isolating and exhausting, making even simple tasks seem insurmountable. Together, we'll work toward rediscovering hope, purpose, and joy in your life. I use a combination of therapeutic approaches to help you understand depression patterns, develop coping strategies, and create sustainable changes that support your mental health.",
    outcome: "Reduce depressive symptoms, improve mood stability, and reconnect with sources of meaning and joy."
  },
  {
    icon: Shield,
    title: "Trauma & PTSD (EMDR PT-II Certified)",
    shortDescription: "Specialized EMDR therapy for trauma, PTSD, and complex trauma recovery",
    symptoms: [
      "Intrusive memories or flashbacks",
      "Nightmares or sleep disturbances",
      "Avoidance of trauma-related triggers",
      "Hypervigilance or feeling constantly on edge",
      "Emotional numbing or detachment",
      "Difficulty trusting others",
      "Physical symptoms without medical cause"
    ],
    approaches: [
      "EMDR (Eye Movement Desensitization and Reprocessing)",
      "Trauma-Focused Cognitive Behavioral Therapy",
      "Somatic experiencing techniques",
      "Grounding and stabilization exercises",
      "Narrative therapy approaches",
      "Safety and trust building interventions"
    ],
    description: "Trauma can leave lasting impacts on your mind and body, but healing is possible. As an EMDR Part II certified therapist, I specialize in helping individuals process traumatic experiences safely and effectively. EMDR is a research-backed approach that helps your brain process traumatic memories in a way that reduces their emotional intensity and impact.",
    outcome: "Process traumatic memories, reduce PTSD symptoms, and develop resilience and post-traumatic growth."
  },
  {
    icon: CloudRain,
    title: "Grief, Loss & Bereavement",
    shortDescription: "Compassionate support through all forms of loss and life transitions",
    symptoms: [
      "Overwhelming sadness or emotional numbness",
      "Difficulty accepting the reality of loss",
      "Anger, guilt, or regret related to the loss",
      "Physical symptoms like fatigue or appetite changes",
      "Social withdrawal or isolation",
      "Difficulty finding meaning after loss",
      "Complicated or prolonged grieving process"
    ],
    approaches: [
      "Grief-focused therapy",
      "Meaning-making and narrative approaches",
      "Cognitive processing of loss",
      "Behavioral activation for depression",
      "Mindfulness and acceptance-based interventions",
      "Support for continuing bonds with deceased"
    ],
    description: "Grief is a natural response to loss, but it doesn't follow a predictable timeline or pattern. Whether you're mourning the death of a loved one, the end of a relationship, job loss, or other significant changes, I provide compassionate support that honors your unique grieving process while helping you navigate this difficult journey.",
    outcome: "Process grief in a healthy way, find meaning in loss, and gradually rebuild life while honoring memories."
  },
  {
    icon: Users,
    title: "Relationship Issues",
    shortDescription: "Improve communication and strengthen connections in all types of relationships",
    symptoms: [
      "Frequent arguments or conflicts",
      "Poor communication patterns",
      "Intimacy or trust issues",
      "Boundary problems",
      "Family dynamics and dysfunction",
      "Codependency patterns",
      "Social isolation or difficulty forming relationships"
    ],
    approaches: [
      "Gottman Method relationship techniques",
      "Communication skills training",
      "Conflict resolution strategies",
      "Boundary-setting interventions",
      "Family systems approaches",
      "Attachment-based therapy techniques"
    ],
    description: "Healthy relationships are fundamental to our well-being, but they require skills that many of us never learned. I help individuals and couples improve communication, resolve conflicts constructively, and create stronger, more satisfying connections with partners, family members, and friends.",
    outcome: "Develop healthier communication patterns, strengthen relationships, and create more fulfilling connections."
  },
  {
    icon: Compass,
    title: "Life Transitions & Adjustment",
    shortDescription: "Navigate major life changes with confidence and resilience",
    symptoms: [
      "Feeling overwhelmed by change",
      "Uncertainty about the future",
      "Loss of identity or direction",
      "Difficulty adapting to new circumstances",
      "Anxiety about new responsibilities",
      "Grief for what was left behind",
      "Decision-making paralysis"
    ],
    approaches: [
      "Solution-focused brief therapy",
      "Cognitive restructuring techniques",
      "Goal-setting and planning interventions",
      "Stress management strategies",
      "Identity exploration work",
      "Resilience-building exercises"
    ],
    description: "Life transitions—whether chosen or unexpected—can be challenging even when they're positive changes. I support individuals navigating major life changes including career transitions, relocation, retirement, parenthood, divorce, empty nest syndrome, and other significant adjustments.",
    outcome: "Successfully navigate life transitions, develop adaptation skills, and embrace new opportunities for growth."
  },
  {
    icon: Heart,
    title: "Adolescent & Family Issues",
    shortDescription: "Specialized support for teenagers and families navigating developmental challenges",
    symptoms: [
      "Parent-teen conflicts and communication breakdowns",
      "Behavioral problems or acting out",
      "Academic stress and performance anxiety",
      "Peer pressure and social difficulties",
      "Identity formation struggles",
      "Technology and social media issues",
      "Family dysfunction or crisis"
    ],
    approaches: [
      "Family systems therapy",
      "Adolescent-focused CBT",
      "Parent-child interaction therapy techniques",
      "Communication skills training for families",
      "Behavioral interventions",
      "Crisis intervention and safety planning"
    ],
    description: "Adolescence is a time of significant change and development that can create challenges for both teens and their families. I provide specialized support for teenagers struggling with identity, peer relationships, academic pressure, and emotional regulation, while also helping parents navigate this complex developmental stage.",
    outcome: "Improve family communication, support healthy adolescent development, and strengthen family relationships."
  },
  {
    icon: Zap,
    title: "Cultural Identity & Immigration Experiences",
    shortDescription: "Understanding the unique challenges of multicultural identity and cross-cultural navigation",
    symptoms: [
      "Identity confusion or cultural conflict",
      "Intergenerational family tensions",
      "Discrimination or prejudice experiences",
      "Language barriers affecting relationships",
      "Isolation from cultural community",
      "Pressure to assimilate vs. maintain culture",
      "Immigration-related stress and trauma"
    ],
    approaches: [
      "Culturally adapted therapy approaches",
      "Narrative therapy for identity exploration",
      "Family therapy for intergenerational issues",
      "Stress management for acculturation",
      "Trauma-informed care for immigration experiences",
      "Multilingual therapy sessions (English, Hindi, Urdu)"
    ],
    description: "Navigating multiple cultural identities can be both enriching and challenging. Drawing from my own experience as someone who has lived and practiced in both India and the United States, I understand the complexities of maintaining cultural roots while adapting to new environments.",
    outcome: "Develop a healthy sense of multicultural identity, improve family relationships, and successfully navigate cultural transitions."
  }
];

export function DetailedSpecializations() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedCard, setExpandedCard] = React.useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-centered">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title mb-4 text-gray-900 font-bold">
            Detailed Specializations
          </h2>
          <div className="w-20 h-1 rounded-full theme-accent-1 mx-auto mb-6" />
          <p className="text-xl text-gray-700 max-w-4xl mx-auto font-normal">
            Comprehensive treatment approaches for a wide range of mental health concerns. 
            Click on any specialization to learn more about symptoms, treatment approaches, and expected outcomes.
          </p>
        </motion.div>

        <div className="space-y-8">
          {detailedSpecializations?.map((specialization, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="shadow-lg card-hover overflow-hidden">
                {/* Header */}
                <CardHeader 
                  className="cursor-pointer bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-gray-100 transition-all duration-300"
                  onClick={() => toggleCard(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-16 h-16 theme-primary rounded-2xl">
                        <specialization.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-left">
                        <CardTitle className="text-xl mb-2" style={{ color: 'var(--color-primary)' }}>
                          {specialization?.title}
                        </CardTitle>
                        <p className="text-gray-600">
                          {specialization?.shortDescription}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500 hidden sm:block">
                        {expandedCard === index ? 'Click to collapse' : 'Click to expand'}
                      </span>
                      <ArrowRight 
                        className={`h-6 w-6 text-gray-400 transition-transform duration-300 ${
                          expandedCard === index ? 'transform rotate-90' : ''
                        }`} 
                      />
                    </div>
                  </div>
                </CardHeader>

                {/* Expanded Content */}
                {expandedCard === index && (
                  <CardContent className="p-8 bg-white border-t">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Description */}
                      <div className="lg:col-span-3 mb-8">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {specialization?.description}
                        </p>
                      </div>

                      {/* Symptoms */}
                      <div className="space-y-4">
                        <h4 className="font-bold text-lg mb-4" style={{ color: 'var(--color-primary)' }}>
                          Symptoms I Can Help With:
                        </h4>
                        <ul className="space-y-3">
                          {specialization?.symptoms?.map((symptom, symptomIndex) => (
                            <li key={symptomIndex} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" 
                                         style={{ color: 'var(--color-accent-2)' }} />
                              <span className="text-gray-600 leading-relaxed">{symptom}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Treatment Approaches */}
                      <div className="space-y-4">
                        <h4 className="font-bold text-lg mb-4" style={{ color: 'var(--color-primary)' }}>
                          Treatment Approaches:
                        </h4>
                        <ul className="space-y-3">
                          {specialization?.approaches?.map((approach, approachIndex) => (
                            <li key={approachIndex} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" 
                                         style={{ color: 'var(--color-primary)' }} />
                              <span className="text-gray-600 leading-relaxed">{approach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Expected Outcome */}
                      <div className="space-y-4">
                        <h4 className="font-bold text-lg mb-4" style={{ color: 'var(--color-primary)' }}>
                          Expected Outcomes:
                        </h4>
                        <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border-l-4" 
                             style={{ borderLeftColor: 'var(--color-accent-1)' }}>
                          <p className="text-gray-700 leading-relaxed font-medium">
                            {specialization?.outcome}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-br from-white to-gray-50 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                Don't See Your Concern Listed?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
                I work with a wide range of mental health concerns beyond those listed above. 
                If you're unsure whether I can help with your specific situation, please don't 
                hesitate to reach out for a free consultation.
              </p>
              <div className="text-lg font-medium" style={{ color: 'var(--color-accent-2)' }}>
                Every journey toward healing is unique, and I'm here to support yours.
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
