
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Languages, 
  Globe, 
  Users, 
  Heart,
  Link,
  HomeIcon,
  Puzzle,
  Star
} from "lucide-react";

const languageServices = [
  {
    language: "English",
    proficiency: "Native/Fluent",
    description: "Primary therapeutic language for comprehensive counseling services"
  },
  {
    language: "Hindi",
    proficiency: "Native/Fluent",
    description: "Full therapy services available for Hindi-speaking individuals and families"
  },
  {
    language: "Urdu",
    proficiency: "Fluent",
    description: "Culturally competent therapy for Urdu-speaking communities"
  }
];

const specializations = [
  {
    icon: Globe,
    title: "South Asian Communities",
    description: "Deep understanding of South Asian cultural values, family dynamics, and community expectations. Specialized support for navigating traditional and modern cultural elements."
  },
  {
    icon: Users,
    title: "Immigrant & First-Generation Families",
    description: "Personal and professional experience with immigration challenges, acculturation stress, and the unique pressures faced by first-generation individuals and families."
  },
  {
    icon: Puzzle,
    title: "Cultural Identity Navigation",
    description: "Support for individuals struggling with questions of cultural identity, belonging, and the challenge of maintaining cultural roots while adapting to new environments."
  },
  {
    icon: Heart,
    title: "Interfaith & Intercultural Relationships",
    description: "Guidance for couples and families navigating the complexities of relationships that cross cultural, religious, or traditional boundaries."
  },
  {
    icon: Link,
    title: "Intergenerational Conflicts",
    description: "Mediation and therapy for families experiencing tension between traditional cultural values and contemporary Western perspectives."
  },
  {
    icon: HomeIcon,
    title: "Acculturation Challenges",
    description: "Support for the psychological and emotional aspects of adapting to a new culture while maintaining connection to one's heritage."
  }
];

export function CulturalCompetency() {
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
            Multilingual & Culturally Sensitive Services
          </h2>
          <div className="w-20 h-1 rounded-full theme-accent-1 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            As someone who has lived and practiced in both India and the United States, I bring 
            deep understanding of cross-cultural experiences and the unique challenges of 
            navigating multiple cultural identities.
          </p>
        </motion.div>

        {/* Language Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              Languages Spoken
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Therapy services available in multiple languages to ensure comfortable and effective communication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {languageServices?.map((service, index) => (
              <Card key={index} className="bg-white shadow-lg card-hover text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <Languages className="h-12 w-12" style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <h4 className="text-xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                    {service?.language}
                  </h4>
                  <div 
                    className="inline-flex px-3 py-1 rounded-full text-sm font-medium mb-4"
                    style={{ 
                      backgroundColor: 'var(--color-accent-2)', 
                      color: 'white' 
                    }}
                  >
                    {service?.proficiency}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {service?.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Cultural Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              Cultural Specializations
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              I specialize in working with individuals and families navigating the unique challenges 
              of multicultural identity and cross-cultural experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations?.map((specialization, index) => (
              <Card key={index} className="bg-white shadow-lg card-hover h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 theme-secondary rounded-xl flex-shrink-0">
                      <specialization.icon className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                    </div>
                    <h4 className="font-bold text-gray-900">
                      {specialization?.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {specialization?.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Personal Experience Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-br from-white to-gray-50 shadow-lg">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <Star className="h-12 w-12 mx-auto mb-4" style={{ color: 'var(--color-accent-1)' }} />
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                  My Cultural Journey
                </h3>
              </div>

              <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  My own journey as someone who has lived, studied, and practiced in both India and 
                  the United States gives me firsthand understanding of the challenges and opportunities 
                  that come with navigating multiple cultural contexts.
                </p>

                <p>
                  I understand the complexity of maintaining cultural roots while adapting to new 
                  environments, the pressure of family expectations versus personal aspirations, 
                  and the sometimes isolating experience of feeling caught between worlds. These 
                  experiences inform my therapeutic approach with deep empathy and authentic understanding.
                </p>

                <p>
                  Whether you're a first-generation immigrant struggling with identity questions, 
                  a family dealing with intergenerational conflicts, or an individual seeking 
                  therapy in your native language, I'm here to provide culturally sensitive, 
                  linguistically appropriate care that honors your unique background and experiences.
                </p>
              </div>

              <div className="mt-8 text-center">
                <div className="inline-block p-6 bg-white rounded-2xl shadow-md">
                  <p className="text-lg font-medium italic" style={{ color: 'var(--color-primary)' }}>
                    "Culture is not just background—it's the lens through which we understand ourselves 
                    and our place in the world. Therapy should honor and integrate this reality."
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
