
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function AboutPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="about-preview"
      ref={ref} 
      className="section-padding bg-white"
    >
      <div className="container-centered">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto aspect-[4/5] bg-muted rounded-3xl overflow-hidden">
              <Image
                src="/anindita-dwivedi.png"
                alt="Anindita Dwivedi, Licensed Professional Counselor"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-section-title mb-4" style={{ color: 'var(--color-primary)' }}>
                Meet Your Therapist
              </h2>
              <div className="w-20 h-1 rounded-full theme-accent-1 mb-6" />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm Anindita (Annie) Dwivedi, and I'm honored to support you on your journey 
                toward healing and growth. With over 20 years of experience in mental health care, 
                I bring both professional expertise and genuine compassion to our therapeutic work together.
              </p>

              <p className="text-gray-600 leading-relaxed">
                My approach integrates evidence-based therapeutic modalities including EMDR, DBT, 
                and mindfulness-based interventions. I believe in creating a safe, non-judgmental 
                space where you can explore your experiences, develop coping strategies, and 
                discover your innate capacity for healing.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Having practiced in both India and the United States, I bring cultural sensitivity 
                and multilingual capabilities (English, Hindi, Urdu) to serve diverse communities. 
                I specialize in anxiety, depression, trauma recovery, and life transitions.
              </p>
            </div>

            <div className="pt-6">
              <Link href="/about">
                <Button className="btn-primary group">
                  Read Full Bio
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
