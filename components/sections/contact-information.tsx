
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Video,
  Languages,
  Shield,
  Calendar,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    primary: "(804) 207-8414",
    secondary: "Call or text for quickest response",
    action: "Call Now",
    link: "tel:(804) 207-8414",
    available: "Monday - Friday, 9 AM - 6 PM"
  },
  {
    icon: Mail,
    title: "Email",
    primary: "Use contact form",
    secondary: "Professional inquiry and scheduling",
    action: "Send Email",
    link: "#contact-form",
    available: "Responses within 1-2 business days"
  },
  {
    icon: Video,
    title: "Telehealth",
    primary: "Secure Video Sessions",
    secondary: "Available statewide in Virginia",
    action: "Learn More",
    link: "/services#telehealth",
    available: "HIPAA-compliant platform"
  }
];

const officeInfo = [
  {
    icon: MapPin,
    title: "Primary Location",
    detail: "Ashburn, Virginia",
    description: "Serving Northern Virginia area"
  },
  {
    icon: Languages,
    title: "Languages Spoken",
    detail: "English, Hindi, Urdu",
    description: "Culturally sensitive care"
  },
  {
    icon: Shield,
    title: "License",
    detail: "Virginia LPC #0701013384",
    description: "Fully licensed and insured"
  },
  {
    icon: CheckCircle,
    title: "Insurance",
    detail: "Most major plans accepted",
    description: "Verification provided"
  }
];

const officeHours = [
  { day: "Monday - Thursday", hours: "9:00 AM - 7:00 PM" },
  { day: "Friday", hours: "9:00 AM - 5:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" }
];

export function ContactInformation() {
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
            Get in Touch
          </h2>
          <div className="w-20 h-1 rounded-full theme-accent-1 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            I'm here to support you on your journey toward healing and growth. 
            Choose the contact method that feels most comfortable for you.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods?.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover bg-white shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="flex items-center justify-center w-16 h-16 theme-primary rounded-2xl">
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                    {method?.title}
                  </h3>

                  <div className="text-lg font-semibold mb-2 text-gray-900">
                    {method?.primary}
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {method?.secondary}
                  </p>

                  <div className="text-sm text-gray-500 mb-6">
                    {method?.available}
                  </div>

                  <a href={method?.link}>
                    <Button className="btn-secondary group w-full">
                      {method?.action}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Office Information and Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Office Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
                  Practice Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {officeInfo?.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 theme-secondary rounded-xl flex-shrink-0">
                        <info.icon className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {info?.title}
                        </h4>
                        <div className="text-lg font-medium mb-1" style={{ color: 'var(--color-primary)' }}>
                          {info?.detail}
                        </div>
                        <p className="text-gray-600 text-sm">
                          {info?.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Office Hours */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Card className="shadow-lg bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                  <h3 className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
                    Office Hours
                  </h3>
                </div>

                <div className="space-y-4">
                  {officeHours?.map((schedule, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-900">
                        {schedule?.day}
                      </span>
                      <span className="text-gray-600">
                        {schedule?.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg border">
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 mt-0.5" style={{ color: 'var(--color-accent-2)' }} />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        Flexible Scheduling Available
                      </div>
                      <p className="text-gray-600 text-sm mt-1">
                        Evening and weekend appointments may be available 
                        based on availability and need.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Emergency Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200 shadow-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-4 text-red-800">
                Crisis Resources & Emergency Information
              </h3>
              <p className="text-red-700 mb-6 leading-relaxed max-w-3xl mx-auto">
                If you are experiencing a mental health emergency, please contact emergency services 
                immediately. This website and contact form are not monitored 24/7 and should not be 
                used for urgent situations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="font-bold text-red-800 mb-1">Emergency</div>
                  <div className="text-red-700">Call 911</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="font-bold text-red-800 mb-1">Crisis Text Line</div>
                  <div className="text-red-700">Text HOME to 741741</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="font-bold text-red-800 mb-1">Suicide Prevention</div>
                  <div className="text-red-700">Call 988</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
