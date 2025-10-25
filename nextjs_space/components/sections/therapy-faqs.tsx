
"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What should I expect in my first therapy session?",
    answer: "Your first session is an opportunity for us to get to know each other. I'll ask about what brought you to therapy, your goals, and your background. We'll discuss my approach, answer any questions you have about the therapy process, and begin to develop a treatment plan. This session is typically 90 minutes to allow for comprehensive intake."
  },
  {
    question: "How do I know if therapy is right for me?",
    answer: "Therapy can be beneficial for anyone experiencing emotional distress, major life changes, relationship difficulties, or simply wanting personal growth. If you're wondering whether therapy might help, it's worth exploring. Our free consultation can help determine if therapy, and specifically working with me, would be beneficial for your situation."
  },
  {
    question: "How long does therapy typically take?",
    answer: "The duration of therapy varies greatly depending on your goals, the nature of your concerns, and your personal preferences. Some people see improvement in just a few sessions, while others benefit from longer-term work. We'll regularly assess your progress and adjust our approach as needed. Ultimately, the length of therapy is up to you."
  },
  {
    question: "What's the difference between telehealth and in-person therapy?",
    answer: "Both telehealth and in-person therapy are effective treatment options. Telehealth offers convenience and accessibility, allowing you to attend sessions from a comfortable, private space. In-person sessions provide face-to-face interaction and may feel more traditional. I offer both options to meet your preferences and needs."
  },
  {
    question: "Do you accept insurance?",
    answer: "I work with most major insurance providers in Virginia, including Aetna, Anthem, Cigna, and UnitedHealthcare. I also offer self-pay options and limited sliding scale rates based on financial need. I'll verify your benefits before we begin so you know your costs upfront."
  },
  {
    question: "What happens if I need to cancel or reschedule?",
    answer: "Life happens, and sometimes you need to change your appointment. I ask for 24-hour notice when possible for cancellations or rescheduling. Late cancellations may be subject to a fee, but we'll discuss the specific policy during your intake session and find arrangements that work for both of us."
  },
  {
    question: "Is therapy confidential?",
    answer: "Yes, therapy is completely confidential. I'm bound by professional and legal ethics to protect your privacy. The only exceptions are situations involving imminent danger to yourself or others, suspected abuse of a child or vulnerable adult, or if required by a court order. We'll discuss confidentiality in detail during our first session."
  },
  {
    question: "What if I've tried therapy before and it didn't help?",
    answer: "It's not uncommon for people to have had previous therapy experiences that weren't helpful. The therapeutic relationship and approach matter greatly. We might explore what worked and what didn't in your previous experience, and I'll adapt my approach to better meet your needs. Sometimes it takes finding the right therapist and approach."
  },
  {
    question: "Can you prescribe medication?",
    answer: "As a Licensed Professional Counselor, I cannot prescribe medication. However, I work collaboratively with psychiatrists and primary care physicians when medication might be beneficial. I can help you understand when a medication consultation might be appropriate and provide referrals to trusted medical professionals."
  },
  {
    question: "What therapeutic approaches do you use?",
    answer: "I'm trained in several evidence-based approaches including EMDR, DBT, CBT, mindfulness-based interventions, and trauma-focused therapy. I tailor my approach to your specific needs and preferences. We'll discuss which approaches might work best for you during our initial sessions."
  }
];

export function TherapyFaqs() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
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
          <h2 className="text-section-title mb-4" style={{ color: 'var(--color-primary)' }}>
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 rounded-full theme-accent-1 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Common questions about therapy, the therapeutic process, and what to expect 
            when working together. If you don't see your question here, please don't 
            hesitate to ask during our consultation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs?.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="shadow-lg card-hover overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left"
                >
                  <CardContent className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <HelpCircle className="h-6 w-6 mt-1 flex-shrink-0" 
                                   style={{ color: 'var(--color-primary)' }} />
                        <h3 className="text-lg font-bold text-gray-900 leading-relaxed pr-4">
                          {faq?.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        {expandedFaq === index ? (
                          <ChevronUp className="h-6 w-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </CardContent>
                </button>
                
                {expandedFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent className="px-6 pb-6 pt-0">
                      <div className="ml-10 text-gray-600 leading-relaxed">
                        {faq?.answer}
                      </div>
                    </CardContent>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-br from-white to-gray-50 shadow-lg">
            <CardContent className="p-8 text-center">
              <HelpCircle className="h-12 w-12 mx-auto mb-4" style={{ color: 'var(--color-primary)' }} />
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                Still Have Questions?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
                I'm happy to answer any additional questions you may have about therapy, 
                my approach, or the process of getting started. Please don't hesitate to 
                reach out during our free consultation or by phone.
              </p>
              <div className="text-2xl font-bold" style={{ color: 'var(--color-accent-2)' }}>
                (804) 207-8414
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
