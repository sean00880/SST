
"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useToast } from "@/hooks/use-toast";
import { 
  Send, 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  Calendar,
  CheckCircle,
  Clock,
  Shield
} from "lucide-react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContact: string;
  sessionType: string;
  concerns: string;
  urgency: string;
  message: string;
  consent: boolean;
}

const initialFormData: ContactFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  preferredContact: 'email',
  sessionType: 'not-sure',
  concerns: '',
  urgency: 'routine',
  message: '',
  consent: false
};

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: target.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          source: 'website-contact-form'
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I'll respond within 1-2 business days.",
        });
        setFormData(initialFormData);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again or call (804) 207-8414 directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.firstName && formData.lastName && formData.email && formData.message && formData.consent;

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-centered">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title mb-4 text-gray-900">
            Schedule Your Free Consultation
          </h2>
          <div className="w-20 h-1 rounded-full theme-accent-1 mx-auto mb-6" />
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Taking the first step toward healing can feel daunting. This free 15-minute consultation 
            allows us to discuss your concerns and determine if we're a good fit for working together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-3" style={{ color: 'var(--color-primary)' }}>
                  <Calendar className="h-7 w-7" />
                  <span>Contact Form</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="form-input form-input-with-icon"
                          placeholder="Enter your first name"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="form-input form-input-with-icon"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="form-input form-input-with-icon"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="form-input form-input-with-icon"
                          placeholder="(804) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Preferences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone Call</option>
                        <option value="text">Text Message</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="sessionType" className="block text-sm font-medium text-gray-700 mb-2">
                        Session Preference
                      </label>
                      <select
                        id="sessionType"
                        name="sessionType"
                        value={formData.sessionType}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        <option value="not-sure">Not Sure Yet</option>
                        <option value="telehealth">Telehealth (Video)</option>
                        <option value="in-person">In-Person</option>
                        <option value="either">Either Option</option>
                      </select>
                    </div>
                  </div>

                  {/* Concerns and Urgency */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="concerns" className="block text-sm font-medium text-gray-700 mb-2">
                        Primary Concerns
                      </label>
                      <select
                        id="concerns"
                        name="concerns"
                        value={formData.concerns}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        <option value="">Select primary concern</option>
                        <option value="anxiety">Anxiety & Stress</option>
                        <option value="depression">Depression & Mood</option>
                        <option value="trauma">Trauma & PTSD</option>
                        <option value="grief">Grief & Loss</option>
                        <option value="relationships">Relationship Issues</option>
                        <option value="life-transitions">Life Transitions</option>
                        <option value="family">Family & Adolescent Issues</option>
                        <option value="cultural">Cultural Identity Issues</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline for Starting
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        <option value="routine">Within 2-4 weeks</option>
                        <option value="soon">Within 1-2 weeks</option>
                        <option value="urgent">As soon as possible</option>
                        <option value="flexible">Flexible timeline</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="form-input form-input-with-icon"
                        placeholder="Please share what brings you to therapy and any questions you have about the process. This helps me prepare for our consultation call."
                      />
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="space-y-4">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        required
                        className="mt-1 h-4 w-4 rounded border-gray-300 focus:ring-2"
                        style={{ 
                          accentColor: 'var(--color-primary)' 
                        } as React.CSSProperties}
                      />
                      <span className="text-sm text-gray-600 leading-relaxed">
                        I consent to be contacted about therapy services. I understand this form is not for 
                        emergencies and that I should call 911 or go to the nearest emergency room for 
                        urgent mental health concerns. *
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button 
                      type="submit" 
                      disabled={!isFormValid || isSubmitting}
                      className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          Send Message & Request Consultation
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Information Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Response Time */}
            <Card className="shadow-lg bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                  <h3 className="font-bold text-lg" style={{ color: 'var(--color-primary)' }}>
                    Response Time
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  I typically respond to all messages within 1-2 business days. 
                  For urgent situations, please call directly.
                </p>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card className="shadow-lg bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                  <h3 className="font-bold text-lg" style={{ color: 'var(--color-primary)' }}>
                    What to Expect
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" 
                         style={{ backgroundColor: 'var(--color-accent-2)' }} />
                    <span className="text-sm">Free 15-minute phone consultation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" 
                         style={{ backgroundColor: 'var(--color-accent-2)' }} />
                    <span className="text-sm">Discussion of your needs and my approach</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" 
                         style={{ backgroundColor: 'var(--color-accent-2)' }} />
                    <span className="text-sm">Opportunity to ask questions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" 
                         style={{ backgroundColor: 'var(--color-accent-2)' }} />
                    <span className="text-sm">Scheduling if we're a good fit</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Privacy Notice */}
            <Card className="shadow-lg bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                  <h3 className="font-bold text-lg" style={{ color: 'var(--color-primary)' }}>
                    Privacy & Security
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your information is completely confidential and secure. This form is 
                  encrypted and only used to facilitate our initial consultation. 
                  No information is shared with third parties.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
