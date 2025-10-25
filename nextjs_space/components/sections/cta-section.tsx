
"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function CtaSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-padding theme-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='https://i.ytimg.com/vi/qmHLUP5ZoLs/hqdefault.jpg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-centered relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h2 className="text-section-title mb-6 text-white font-bold drop-shadow-sm">
            Ready to Begin Your Journey?
          </h2>
          
          <p className="text-xl mb-12 max-w-3xl mx-auto text-white font-medium leading-relaxed drop-shadow-sm">
            Take the first step toward healing and growth. Schedule your free 15-minute 
            consultation today to see if we're a good fit for your therapeutic journey.
          </p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-100 text-gray-900 font-semibold text-lg px-12 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <Calendar className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                Schedule Free Consultation
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="text-lg text-white font-semibold mb-8 drop-shadow-sm">
              Or contact directly:
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <Link 
                href="tel:(804) 207-8414"
                className="flex items-center justify-center space-x-3 bg-white/15 backdrop-blur-sm rounded-xl p-6 hover:bg-white/25 transition-all duration-300 group border border-white/20"
              >
                <Phone className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-sm text-white/90 font-medium">Call Now</div>
                  <div className="text-lg font-bold text-white">(804) 207-8414</div>
                </div>
              </Link>

              <Link 
                href="/contact"
                className="flex items-center justify-center space-x-3 bg-white/15 backdrop-blur-sm rounded-xl p-6 hover:bg-white/25 transition-all duration-300 group border border-white/20"
              >
                <Mail className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-sm text-white/90 font-medium">Send Message</div>
                  <div className="text-lg font-bold text-white">Contact Form</div>
                </div>
              </Link>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8 border-t border-white/30"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="font-bold mb-2 text-white drop-shadow-sm">Location</div>
                  <div className="text-sm text-white/95 font-medium">Ashburn, Virginia</div>
                </div>
                <div>
                  <div className="font-bold mb-2 text-white drop-shadow-sm">Services</div>
                  <div className="text-sm text-white/95 font-medium">Telehealth Statewide</div>
                </div>
                <div>
                  <div className="font-bold mb-2 text-white drop-shadow-sm">Languages</div>
                  <div className="text-sm text-white/95 font-medium">English, Hindi, Urdu</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
