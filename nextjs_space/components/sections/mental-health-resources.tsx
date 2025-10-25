
"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  BookOpen, 
  Headphones, 
  Smartphone,
  Globe,
  Heart,
  Brain,
  Users,
  ExternalLink
} from "lucide-react";

const resourceCategories = [
  {
    icon: BookOpen,
    title: "Educational Resources",
    description: "Books, articles, and guides about mental health topics",
    resources: [
      {
        name: "National Institute of Mental Health (NIMH)",
        description: "Comprehensive information about mental health conditions and treatments",
        url: "https://www.nimh.nih.gov/",
        type: "Website"
      },
      {
        name: "Anxiety and Depression Association of America",
        description: "Resources, support groups, and educational materials",
        url: "https://adaa.org/",
        type: "Website"
      },
      {
        name: "Mental Health America",
        description: "Mental health screening tools and educational resources",
        url: "https://www.mhanational.org/",
        type: "Website"
      }
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Apps for meditation, mood tracking, and mental wellness",
    resources: [
      {
        name: "Headspace",
        description: "Guided meditation and mindfulness exercises",
        url: "https://www.headspace.com/",
        type: "App"
      },
      {
        name: "Calm",
        description: "Meditation, sleep stories, and relaxation techniques",
        url: "https://www.calm.com/",
        type: "App"
      },
      {
        name: "Insight Timer",
        description: "Free meditation app with thousands of guided practices",
        url: "https://insighttimer.com/",
        type: "App"
      },
      {
        name: "Mood Meter",
        description: "Emotional awareness and regulation skills",
        url: "https://www.moodmeterapp.org/",
        type: "App"
      }
    ]
  },
  {
    icon: Users,
    title: "Support Groups",
    description: "Peer support and community resources",
    resources: [
      {
        name: "NAMI Virginia",
        description: "Support groups and advocacy for mental health",
        url: "https://namivirginia.org/",
        type: "Local"
      },
      {
        name: "Depression and Bipolar Support Alliance",
        description: "Peer support groups nationwide",
        url: "https://www.dbsalliance.org/",
        type: "National"
      },
      {
        name: "Anxiety and Depression Support Group of Northern Virginia",
        description: "Local peer support meetings",
        url: "https://www.meetup.com/anxiety-depression-support-northern-virginia/",
        type: "Local"
      }
    ]
  },
  {
    icon: Heart,
    title: "Trauma Resources",
    description: "Specialized resources for trauma survivors",
    resources: [
      {
        name: "National Center for PTSD",
        description: "PTSD information and treatment resources",
        url: "https://www.ptsd.va.gov/",
        type: "Website"
      },
      {
        name: "Sidran Institute",
        description: "Trauma education and healing resources",
        url: "https://www.sidran.org/",
        type: "Website"
      },
      {
        name: "EMDR International Association",
        description: "Information about EMDR therapy for trauma",
        url: "https://www.emdria.org/",
        type: "Website"
      }
    ]
  }
];

const localResources = [
  {
    name: "Virginia Department of Behavioral Health and Developmental Services",
    description: "State mental health services and resources",
    phone: "(804) 786-3921",
    website: "https://dbhds.virginia.gov/"
  },
  {
    name: "Northern Virginia Family Service",
    description: "Counseling and mental health services",
    phone: "(571) 748-2500",
    website: "https://www.nvfs.org/"
  },
  {
    name: "Loudoun County Mental Health Services",
    description: "Community mental health support",
    phone: "(703) 777-0353",
    website: "https://www.loudoun.gov/mentalhealth"
  }
];

export function MentalHealthResources() {
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
            Mental Health Resources
          </h2>
          <div className="w-20 h-1 rounded-full theme-accent-1 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Carefully curated resources to support your mental health journey. 
            These tools complement therapy and can be valuable for ongoing wellness and education.
          </p>
        </motion.div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {resourceCategories?.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover bg-white shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 theme-primary rounded-xl">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl" style={{ color: 'var(--color-primary)' }}>
                      {category?.title}
                    </CardTitle>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {category?.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {category?.resources?.map((resource, resourceIndex) => (
                      <div key={resourceIndex} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex-1 pr-4">
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {resource?.name}
                          </h4>
                          <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                            {resource?.description}
                          </p>
                          <div 
                            className="inline-flex px-2 py-1 rounded-full text-xs font-medium"
                            style={{ 
                              backgroundColor: 'var(--color-secondary)', 
                              color: 'var(--color-text-primary)' 
                            }}
                          >
                            {resource?.type}
                          </div>
                        </div>
                        <a 
                          href={resource?.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-shrink-0 p-2 rounded-lg hover:bg-white transition-colors"
                        >
                          <ExternalLink className="h-4 w-4 text-gray-500" />
                        </a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Local Virginia Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <Globe className="h-8 w-8" style={{ color: 'var(--color-primary)' }} />
                <CardTitle className="text-2xl" style={{ color: 'var(--color-primary)' }}>
                  Local Virginia Resources
                </CardTitle>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Mental health resources specifically available to Virginia residents
              </p>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {localResources?.map((resource, index) => (
                  <div key={index} className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <h4 className="font-bold text-gray-900 mb-3 leading-tight">
                      {resource?.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {resource?.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-700">Phone:</span>
                        <a 
                          href={`tel:${resource?.phone}`}
                          className="text-sm hover:underline"
                          style={{ color: 'var(--color-primary)' }}
                        >
                          {resource?.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-700">Website:</span>
                        <a 
                          href={resource?.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:underline flex items-center space-x-1"
                          style={{ color: 'var(--color-primary)' }}
                        >
                          <span>Visit Site</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-br from-blue-50 to-white shadow-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                Important Note About External Resources
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                While I've carefully selected these resources, I cannot guarantee the quality 
                or accuracy of external websites and apps. These resources are meant to 
                supplement, not replace, professional therapy. Always consult with a qualified 
                mental health professional for personalized advice and treatment.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
