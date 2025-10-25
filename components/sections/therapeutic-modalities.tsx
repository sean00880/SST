
"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Eye, 
  Brain, 
  Flower2, 
  Target, 
  Heart,
  Users2,
  Shield,
  Puzzle,
  CheckCircle,
  Star
} from "lucide-react";

const therapeuticModalities = [
  {
    icon: Eye,
    title: "EMDR (Eye Movement Desensitization and Reprocessing)",
    certification: "Part II Certified",
    category: "Trauma Therapy",
    description: "A specialized therapy for trauma and PTSD that helps the brain process traumatic memories naturally. EMDR uses bilateral stimulation to help reduce the emotional intensity of difficult memories.",
    conditions: ["PTSD", "Complex Trauma", "Childhood Trauma", "Accident Trauma", "Military Trauma", "Sexual Trauma"],
    benefits: ["Reduces trauma symptoms", "Processes difficult memories", "Decreases emotional distress", "Improves daily functioning"],
    duration: "Typically 6-12 sessions, depending on trauma complexity",
    research: "Extensively researched and recommended by WHO, APA, and VA for PTSD treatment"
  },
  {
    icon: Brain,
    title: "Dialectical Behavior Therapy (DBT)",
    certification: "Certified Provider",
    category: "Skills-Based Therapy",
    description: "A skills-based therapy that teaches practical tools for managing emotions, tolerating distress, and improving relationships. Particularly effective for emotional regulation challenges.",
    conditions: ["Emotional Dysregulation", "Borderline Personality Disorder", "Self-Harm Behaviors", "Chronic Suicidal Thoughts", "Relationship Difficulties"],
    benefits: ["Emotion regulation skills", "Distress tolerance", "Interpersonal effectiveness", "Crisis management tools"],
    duration: "Skills training typically 16-24 weeks with ongoing individual therapy",
    research: "Gold standard treatment for borderline personality disorder with strong evidence base"
  },
  {
    icon: Flower2,
    title: "Mindfulness-Based Interventions",
    certification: "Certified Practitioner",
    category: "Holistic Approach",
    description: "Evidence-based mindfulness practices that help develop present-moment awareness, reduce reactivity, and improve emotional regulation through meditation and mindful living.",
    conditions: ["Anxiety Disorders", "Depression", "Chronic Stress", "Chronic Pain", "Sleep Issues", "Burnout"],
    benefits: ["Reduced anxiety and stress", "Improved focus", "Better emotional regulation", "Enhanced self-awareness"],
    duration: "8-week programs or integrated into ongoing therapy",
    research: "Extensive research showing effectiveness for anxiety, depression, and stress reduction"
  },
  {
    icon: Target,
    title: "Cognitive Behavioral Therapy (CBT)",
    certification: "Trained Practitioner",
    category: "Evidence-Based",
    description: "A goal-oriented therapy that helps identify and change negative thought patterns and behaviors. Focuses on the connection between thoughts, feelings, and actions.",
    conditions: ["Depression", "Anxiety Disorders", "Panic Disorder", "OCD", "Phobias", "Eating Disorders"],
    benefits: ["Thought pattern awareness", "Behavioral changes", "Problem-solving skills", "Relapse prevention strategies"],
    duration: "Typically 12-20 sessions for most conditions",
    research: "Most researched form of psychotherapy with proven effectiveness for numerous conditions"
  },
  {
    icon: Heart,
    title: "Person-Centered Therapy",
    certification: "Core Training",
    category: "Humanistic Approach",
    description: "A collaborative, non-directive approach that emphasizes your inherent capacity for growth and self-direction. Creates a supportive environment for self-exploration.",
    conditions: ["Self-Esteem Issues", "Identity Exploration", "Personal Growth", "Life Transitions", "Relationship Issues"],
    benefits: ["Increased self-awareness", "Improved self-acceptance", "Enhanced personal growth", "Greater autonomy"],
    duration: "Variable length based on individual goals and preferences",
    research: "Strong evidence for effectiveness, particularly for building therapeutic relationship"
  },
  {
    icon: Users2,
    title: "Family Systems Therapy",
    certification: "Systems Training",
    category: "Systemic Approach",
    description: "Views problems within the context of family relationships and dynamics. Focuses on improving communication patterns and changing dysfunctional family interactions.",
    conditions: ["Family Conflict", "Parent-Child Issues", "Marital Problems", "Adolescent Behavioral Issues", "Addiction Impact on Family"],
    benefits: ["Improved family communication", "Healthier boundaries", "Better problem-solving", "Stronger family relationships"],
    duration: "Typically 8-16 sessions involving family members",
    research: "Proven effective for family-based problems and adolescent issues"
  },
  {
    icon: Shield,
    title: "Trauma-Focused Therapy",
    certification: "Specialized Training",
    category: "Trauma Treatment",
    description: "Comprehensive approach to trauma treatment using multiple evidence-based techniques. Emphasizes safety, stabilization, and gradual trauma processing.",
    conditions: ["Acute Trauma", "Complex PTSD", "Childhood Abuse", "Domestic Violence", "Accident Trauma", "Medical Trauma"],
    benefits: ["Trauma symptom reduction", "Improved safety and stability", "Enhanced coping skills", "Post-traumatic growth"],
    duration: "Varies widely based on trauma complexity, typically 12-24+ sessions",
    research: "Trauma-specific approaches show superior outcomes to general therapy for trauma survivors"
  },
  {
    icon: Puzzle,
    title: "Solution-Focused Brief Therapy (SFBT)",
    certification: "Brief Therapy Training",
    category: "Goal-Oriented",
    description: "A practical, strengths-based approach that focuses on solutions and future goals rather than past problems. Emphasizes what's already working well.",
    conditions: ["Goal Achievement", "Relationship Issues", "Academic/Work Problems", "Behavioral Changes", "Motivation Enhancement"],
    benefits: ["Clear goal achievement", "Increased motivation", "Practical problem-solving", "Faster results"],
    duration: "Typically 3-8 sessions for specific goals",
    research: "Effective for goal-oriented change with good client satisfaction rates"
  }
];

export function TherapeuticModalities() {
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
            Evidence-Based Therapeutic Modalities
          </h2>
          <div className="w-20 h-1 rounded-full theme-accent-1 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            I utilize proven therapeutic approaches backed by research and tailored to your specific needs. 
            Each modality is selected based on your presenting concerns, preferences, and treatment goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {therapeuticModalities?.map((modality, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover bg-white shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex items-center justify-center w-16 h-16 theme-primary rounded-2xl flex-shrink-0">
                      <modality.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <div 
                          className="px-3 py-1 rounded-full text-xs font-bold text-white"
                          style={{ backgroundColor: 'var(--color-accent-2)' }}
                        >
                          {modality?.certification}
                        </div>
                        <div 
                          className="px-2 py-1 rounded text-xs font-medium"
                          style={{ 
                            backgroundColor: 'var(--color-secondary)', 
                            color: 'var(--color-text-primary)' 
                          }}
                        >
                          {modality?.category}
                        </div>
                      </div>
                      <CardTitle className="text-lg mb-2" style={{ color: 'var(--color-primary)' }}>
                        {modality?.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {modality?.description}
                  </p>

                  {/* Conditions Treated */}
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-3">
                      Conditions Treated:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {modality?.conditions?.map((condition, conditionIndex) => (
                        <span 
                          key={conditionIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-3">
                      Key Benefits:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {modality?.benefits?.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" 
                                     style={{ color: 'var(--color-primary)' }} />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Duration and Research */}
                  <div className="space-y-3 pt-3 border-t border-gray-100">
                    <div>
                      <span className="font-semibold text-gray-900 text-sm">Typical Duration: </span>
                      <span className="text-sm text-gray-600">{modality?.duration}</span>
                    </div>
                    <div>
                      <div className="flex items-start space-x-2">
                        <Star className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent-1)' }} />
                        <span className="text-sm text-gray-600 italic">{modality?.research}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Integration Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-br from-white to-gray-50 shadow-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                Integrated Treatment Approach
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
                I don't believe in a one-size-fits-all approach to therapy. Instead, I draw from 
                multiple therapeutic modalities to create a personalized treatment plan that 
                addresses your unique needs, preferences, and goals. We'll work together to 
                determine which approaches feel most helpful for your specific situation.
              </p>
              <div className="text-lg font-medium" style={{ color: 'var(--color-accent-2)' }}>
                Your healing journey is unique, and your treatment should be too.
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
