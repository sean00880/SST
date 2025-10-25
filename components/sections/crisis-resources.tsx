
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Phone, 
  MessageSquare, 
  Heart,
  AlertTriangle,
  Shield,
  Clock,
  Users,
  Globe
} from "lucide-react";

const crisisResources = [
  {
    icon: Phone,
    title: "National Suicide Prevention Lifeline",
    number: "988",
    description: "24/7 crisis support for people in suicidal crisis or emotional distress",
    availability: "24/7 - Free and confidential",
    action: "Call 988",
    link: "tel:988",
    type: "immediate"
  },
  {
    icon: MessageSquare,
    title: "Crisis Text Line",
    number: "Text HOME to 741741",
    description: "24/7 crisis support via text message with trained crisis counselors",
    availability: "24/7 - Free and confidential",
    action: "Text HOME to 741741",
    link: "sms:741741?&body=HOME",
    type: "immediate"
  },
  {
    icon: Heart,
    title: "National Domestic Violence Hotline",
    number: "1-800-799-7233",
    description: "Support for domestic violence survivors and those in abusive relationships",
    availability: "24/7 - Free and confidential",
    action: "Call 1-800-799-7233",
    link: "tel:1-800-799-7233",
    type: "safety"
  },
  {
    icon: Shield,
    title: "Emergency Services",
    number: "911",
    description: "For immediate medical emergencies or when someone is in imminent danger",
    availability: "24/7 - Emergency response",
    action: "Call 911",
    link: "tel:911",
    type: "emergency"
  }
];

const localCrisisResources = [
  {
    name: "Virginia Crisis Line",
    number: "1-877-276-7474",
    description: "State-wide 24/7 mental health crisis support",
    website: "https://vacrisisline.org/"
  },
  {
    name: "Loudoun County Mobile Crisis Team",
    number: "(703) 771-5870",
    description: "Local mobile crisis response for Loudoun County residents",
    website: "https://www.loudoun.gov/mentalhealth"
  },
  {
    name: "Northern Virginia Mental Health Crisis Services",
    number: "(703) 573-5679",
    description: "Regional crisis intervention and emergency mental health services",
    website: "https://www.fairfaxcounty.gov/community-services-board"
  }
];

const warningSignsData = [
  {
    category: "Suicide Warning Signs",
    signs: [
      "Talking about wanting to die or hurt themselves",
      "Looking for ways to kill themselves",
      "Talking about feeling hopeless or having no purpose",
      "Talking about feeling trapped or in unbearable pain",
      "Talking about being a burden to others",
      "Increasing use of alcohol or drugs",
      "Acting anxious, agitated, or reckless",
      "Sleeping too little or too much",
      "Withdrawing or feeling isolated",
      "Showing rage or talking about seeking revenge",
      "Displaying extreme mood swings"
    ]
  },
  {
    category: "When to Seek Help",
    signs: [
      "You're having thoughts of harming yourself or others",
      "You're feeling hopeless or like things will never get better",
      "You're unable to take care of basic daily activities",
      "You're experiencing severe panic attacks or anxiety",
      "You're hearing voices or seeing things others don't",
      "You're using alcohol or drugs to cope with emotions",
      "Friends or family have expressed concern about you",
      "You're engaging in risky or dangerous behaviors"
    ]
  }
];

export function CrisisResources() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-padding bg-red-50">
      <div className="container-centered">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <AlertTriangle className="h-12 w-12 text-red-600" />
          </div>
          <h2 className="text-section-title mb-4 text-red-800">
            Crisis Resources & Emergency Support
          </h2>
          <div className="w-20 h-1 rounded-full bg-red-400 mx-auto mb-6" />
          <p className="text-xl text-red-700 max-w-4xl mx-auto">
            If you or someone you know is in crisis, immediate help is available. 
            These resources provide 24/7 support from trained professionals.
          </p>
        </motion.div>

        {/* Crisis Hotlines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {crisisResources?.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`h-full shadow-xl ${
                resource?.type === 'immediate' ? 'bg-red-600 text-white' :
                resource?.type === 'emergency' ? 'bg-red-700 text-white' :
                'bg-white'
              }`}>
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className={`flex items-center justify-center w-16 h-16 rounded-2xl ${
                      resource?.type === 'immediate' || resource?.type === 'emergency' 
                        ? 'bg-white/20' 
                        : 'bg-red-100'
                    }`}>
                      <resource.icon className={`h-8 w-8 ${
                        resource?.type === 'immediate' || resource?.type === 'emergency' 
                          ? 'text-white' 
                          : 'text-red-600'
                      }`} />
                    </div>
                  </div>

                  <h3 className={`text-xl font-bold mb-3 ${
                    resource?.type === 'immediate' || resource?.type === 'emergency' 
                      ? 'text-white' 
                      : 'text-red-800'
                  }`}>
                    {resource?.title}
                  </h3>

                  <div className={`text-2xl font-bold mb-4 ${
                    resource?.type === 'immediate' || resource?.type === 'emergency' 
                      ? 'text-white' 
                      : 'text-red-700'
                  }`}>
                    {resource?.number}
                  </div>

                  <p className={`leading-relaxed mb-4 ${
                    resource?.type === 'immediate' || resource?.type === 'emergency' 
                      ? 'text-white/90' 
                      : 'text-gray-700'
                  }`}>
                    {resource?.description}
                  </p>

                  <div className={`text-sm mb-6 ${
                    resource?.type === 'immediate' || resource?.type === 'emergency' 
                      ? 'text-white/80' 
                      : 'text-gray-600'
                  }`}>
                    {resource?.availability}
                  </div>

                  <a href={resource?.link}>
                    <Button 
                      className={`w-full text-lg py-3 font-bold ${
                        resource?.type === 'immediate' || resource?.type === 'emergency'
                          ? 'bg-white text-red-600 hover:bg-gray-100'
                          : 'bg-red-600 text-white hover:bg-red-700'
                      }`}
                    >
                      {resource?.action}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Local Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Globe className="h-8 w-8 mx-auto mb-4 text-red-600" />
                <h3 className="text-2xl font-bold mb-4 text-red-800">
                  Virginia Crisis Resources
                </h3>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  Local and state-specific crisis support services available to Virginia residents
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {localCrisisResources?.map((resource, index) => (
                  <div key={index} className="p-6 bg-red-50 rounded-xl">
                    <h4 className="font-bold text-red-800 mb-2 leading-tight">
                      {resource?.name}
                    </h4>
                    <div className="text-xl font-bold text-red-700 mb-3">
                      {resource?.number}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      {resource?.description}
                    </p>
                    <a 
                      href={resource?.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-800 text-sm font-medium hover:underline"
                    >
                      Visit Website →
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Warning Signs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {warningSignsData?.map((category, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-red-800">
                    {category?.category}
                  </h3>
                  <ul className="space-y-3">
                    {category?.signs?.map((sign, signIndex) => (
                      <li key={signIndex} className="flex items-start space-x-3">
                        <AlertTriangle className="h-4 w-4 mt-1 flex-shrink-0 text-red-500" />
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {sign}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Card className="bg-gradient-to-r from-red-100 to-orange-100 border-red-200 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Clock className="h-10 w-10 mx-auto mb-4 text-red-700" />
                <h3 className="text-2xl font-bold text-red-800">
                  Important Reminders
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-red-800">
                <div>
                  <h4 className="font-bold mb-3">If You're in Immediate Danger:</h4>
                  <ul className="space-y-2 text-red-700">
                    <li>• Call 911 immediately</li>
                    <li>• Go to your nearest emergency room</li>
                    <li>• Call the National Suicide Prevention Lifeline: 988</li>
                    <li>• Don't leave the person alone if they're suicidal</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-3">Remember:</h4>
                  <ul className="space-y-2 text-red-700">
                    <li>• Crisis feelings are temporary</li>
                    <li>• You are not alone - help is available</li>
                    <li>• These services are free and confidential</li>
                    <li>• You deserve support and care</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-red-700 font-medium">
                  This website is not monitored 24/7. For urgent situations, please use the crisis resources above.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
