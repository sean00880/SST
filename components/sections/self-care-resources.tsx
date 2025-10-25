
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Heart, 
  Activity, 
  Moon, 
  Utensils,
  Users2,
  TreePine,
  Book,
  Smile
} from "lucide-react";

const selfCareCategories = [
  {
    icon: Heart,
    title: "Emotional Self-Care",
    color: "var(--color-accent-2)",
    tips: [
      "Practice self-compassion by treating yourself with the same kindness you'd show a friend",
      "Keep a gratitude journal, writing down 3 things you're grateful for each day",
      "Set healthy boundaries with others and honor your emotional needs",
      "Allow yourself to feel emotions without judgment",
      "Practice saying 'no' to commitments that drain your energy"
    ]
  },
  {
    icon: Activity,
    title: "Physical Self-Care",
    color: "var(--color-primary)",
    tips: [
      "Engage in regular movement that you enjoy, even if it's just a 10-minute walk",
      "Prioritize getting 7-9 hours of quality sleep each night",
      "Stay hydrated by drinking water throughout the day",
      "Take breaks from screens and spend time outdoors",
      "Practice deep breathing exercises for 5 minutes daily"
    ]
  },
  {
    icon: Moon,
    title: "Mental Self-Care",
    color: "var(--color-accent-1)",
    tips: [
      "Practice mindfulness or meditation for even 5-10 minutes daily",
      "Limit news consumption and social media if it increases anxiety",
      "Engage in activities that challenge and stimulate your mind",
      "Practice positive self-talk and challenge negative thought patterns",
      "Take regular breaks from work and responsibilities"
    ]
  },
  {
    icon: Users2,
    title: "Social Self-Care",
    color: "var(--color-secondary)",
    tips: [
      "Nurture relationships with people who support and uplift you",
      "Communicate your needs clearly and honestly with others",
      "Schedule regular check-ins with friends or family",
      "Join groups or communities that align with your interests",
      "Practice active listening in your relationships"
    ]
  }
];

const dailyPractices = [
  {
    icon: Book,
    title: "Morning Routine",
    practices: [
      "Start with 5 minutes of mindful breathing or meditation",
      "Write down 3 intentions for the day",
      "Drink a full glass of water",
      "Avoid checking phone/email for the first 30 minutes"
    ]
  },
  {
    icon: TreePine,
    title: "Throughout the Day",
    practices: [
      "Take micro-breaks every hour to stretch or breathe deeply",
      "Practice the 5-4-3-2-1 grounding technique when stressed",
      "Notice and appreciate small moments of beauty or joy",
      "Check in with your emotions without trying to fix them"
    ]
  },
  {
    icon: Smile,
    title: "Evening Routine",
    practices: [
      "Reflect on one thing that went well during the day",
      "Practice gentle stretching or relaxation exercises",
      "Limit screen time 1 hour before bed",
      "Write down worries to 'put them away' for the night"
    ]
  }
];

export function SelfCareResources() {
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
            Self-Care Resources & Tips
          </h2>
          <div className="w-20 h-1 rounded-full theme-accent-1 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Self-care is not selfish—it's essential for your mental health and well-being. 
            These evidence-based practices can complement your therapy work and support ongoing wellness.
          </p>
        </motion.div>

        {/* Self-Care Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {selfCareCategories?.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div 
                      className="flex items-center justify-center w-12 h-12 rounded-xl"
                      style={{ backgroundColor: category?.color }}
                    >
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
                      {category?.title}
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {category?.tips?.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start space-x-3">
                        <div 
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: category?.color }}
                        />
                        <span className="text-gray-600 leading-relaxed text-sm">
                          {tip}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Daily Practices */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              Daily Self-Care Practices
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Small, consistent actions throughout the day can have a significant impact on your mental health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dailyPractices?.map((practice, index) => (
              <Card key={index} className="shadow-lg bg-gradient-to-br from-white to-gray-50 card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="flex items-center justify-center w-10 h-10 theme-primary rounded-xl">
                      <practice.icon className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>
                      {practice?.title}
                    </h4>
                  </div>

                  <ul className="space-y-3">
                    {practice?.practices?.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div 
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: 'var(--color-accent-2)' }}
                        />
                        <span className="text-gray-600 text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Quick Techniques */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-white to-gray-50 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--color-primary)' }}>
                Quick Stress-Relief Techniques
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 theme-primary rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">5</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">5-4-3-2-1 Grounding</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 theme-primary rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">4-7-8</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Box Breathing</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Inhale for 4, hold for 7, exhale for 8. Repeat 4 times for instant calm
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 theme-primary rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">PMR</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Progressive Muscle Relaxation</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Tense and release each muscle group for 5 seconds, starting with your toes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Reminder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-teal-50 shadow-lg">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 mx-auto mb-4" style={{ color: 'var(--color-accent-2)' }} />
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                Remember: Self-Care is Not One-Size-Fits-All
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                What works for others may not work for you, and that's perfectly okay. 
                Experiment with different practices and find what feels good for your body, 
                mind, and schedule. Even small acts of self-care can make a meaningful difference 
                in your mental health and overall well-being.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
