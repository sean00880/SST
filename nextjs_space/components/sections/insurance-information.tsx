
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  CreditCard, 
  Shield, 
  DollarSign, 
  FileText,
  Phone,
  CheckCircle,
  AlertTriangle,
  Info
} from "lucide-react";

const insurancePlans = [
  { name: "Aetna", status: "Commonly Accepted" },
  { name: "Anthem Blue Cross Blue Shield", status: "Commonly Accepted" },
  { name: "Cigna", status: "Commonly Accepted" },
  { name: "UnitedHealthcare / United Behavioral Health", status: "Commonly Accepted" },
  { name: "Tricare", status: "Commonly Accepted" },
  { name: "Medicare", status: "Accepted" },
  { name: "Virginia Medicaid", status: "Accepted" },
  { name: "Sentara", status: "Regional" },
  { name: "Optum", status: "Network Provider" }
];

const paymentOptions = [
  {
    icon: CreditCard,
    title: "Insurance Billing",
    description: "Direct billing to your insurance company for covered services",
    benefits: [
      "Lower out-of-pocket costs",
      "Handled directly with insurance",
      "Verification of benefits provided",
      "Copay/deductible information given upfront"
    ]
  },
  {
    icon: DollarSign,
    title: "Self-Pay Options",
    description: "Private pay rates for those preferring not to use insurance",
    benefits: [
      "Complete privacy (no insurance records)",
      "Flexible scheduling",
      "No need for diagnosis requirements",
      "Superbill provided for potential reimbursement"
    ]
  },
  {
    icon: Shield,
    title: "Sliding Scale Available",
    description: "Reduced rates available based on financial need",
    benefits: [
      "Income-based fee adjustments",
      "Maintains quality of care",
      "Limited slots available",
      "Confidential financial assessment"
    ]
  }
];

export function InsuranceInformation() {
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
            Insurance & Payment Information
          </h2>
          <div className="w-20 h-1 rounded-full theme-accent-1 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            I strive to make therapy accessible through various payment options and insurance acceptance. 
            Please contact me directly to verify your specific insurance coverage.
          </p>
        </motion.div>

        {/* Payment Options */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {paymentOptions?.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 theme-secondary rounded-2xl">
                      <option.icon className="h-8 w-8" style={{ color: 'var(--color-primary)' }} />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
                      {option?.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {option?.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-3">
                      Benefits:
                    </h4>
                    <ul className="space-y-2">
                      {option?.benefits?.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" 
                                     style={{ color: 'var(--color-primary)' }} />
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Insurance Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <Card className="shadow-lg bg-white">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                  Insurance Plans
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  I work with most major insurance providers in Virginia. Please verify your specific 
                  plan coverage by contacting me directly.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {insurancePlans?.map((plan, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5" style={{ color: 'var(--color-primary)' }} />
                      <span className="font-medium text-gray-900">{plan?.name}</span>
                    </div>
                    <div 
                      className="px-2 py-1 rounded-full text-xs font-medium"
                      style={{ 
                        backgroundColor: plan?.status === 'Commonly Accepted' 
                          ? 'var(--color-accent-1)' 
                          : 'var(--color-secondary)',
                        color: 'var(--color-text-primary)'
                      }}
                    >
                      {plan?.status}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Important Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Verification Process */}
            <Card className="bg-gradient-to-br from-blue-50 to-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Info className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                  <h3 className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
                    Insurance Verification Process
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-6 h-6 theme-primary rounded-full text-white text-xs font-bold flex-shrink-0">
                      1
                    </div>
                    <p className="text-gray-600 text-sm">
                      Contact me with your insurance information
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-6 h-6 theme-primary rounded-full text-white text-xs font-bold flex-shrink-0">
                      2
                    </div>
                    <p className="text-gray-600 text-sm">
                      I'll verify your benefits and coverage details
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-6 h-6 theme-primary rounded-full text-white text-xs font-bold flex-shrink-0">
                      3
                    </div>
                    <p className="text-gray-600 text-sm">
                      You'll receive information about copays, deductibles, and coverage limits
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-6 h-6 theme-primary rounded-full text-white text-xs font-bold flex-shrink-0">
                      4
                    </div>
                    <p className="text-gray-600 text-sm">
                      Schedule your first appointment with clear cost understanding
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Notes */}
            <Card className="bg-gradient-to-br from-amber-50 to-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <AlertTriangle className="h-6 w-6" style={{ color: 'var(--color-accent-2)' }} />
                  <h3 className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
                    Important Notes
                  </h3>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" 
                               style={{ color: 'var(--color-accent-2)' }} />
                    <div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>Insurance changes frequently:</strong> Please verify your current 
                        coverage and benefits before scheduling.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" 
                               style={{ color: 'var(--color-accent-2)' }} />
                    <div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>Superbills provided:</strong> For out-of-network benefits, 
                        I can provide superbills for potential reimbursement.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" 
                               style={{ color: 'var(--color-accent-2)' }} />
                    <div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>Sliding scale limited:</strong> Reduced rate slots are limited 
                        and based on financial need assessment.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" 
                               style={{ color: 'var(--color-accent-2)' }} />
                    <div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>Payment due at service:</strong> Copays and deductibles 
                        are due at the time of service unless other arrangements are made.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Contact for Verification */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-br from-white to-gray-50 shadow-lg">
            <CardContent className="p-8 text-center">
              <Phone className="h-12 w-12 mx-auto mb-4" style={{ color: 'var(--color-primary)' }} />
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                Questions About Insurance or Payment?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
                I understand that insurance and payment questions can be complex. Please don't 
                hesitate to call me directly to discuss your specific situation and verify coverage.
              </p>
              <div className="text-2xl font-bold mb-2" style={{ color: 'var(--color-accent-2)' }}>
                (804) 207-8414
              </div>
              <div className="text-gray-600">
                I'm happy to help clarify costs and coverage before your first appointment.
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
