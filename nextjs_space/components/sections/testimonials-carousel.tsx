
"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    id: 1,
    text: "Working with Annie has been transformative. Her compassionate approach and evidence-based techniques helped me navigate through anxiety and trauma. I finally feel like I have the tools to handle life's challenges with confidence.",
    author: "Former Client",
    location: "Northern Virginia",
    rating: 5,
    focus: "Anxiety & Trauma Recovery"
  },
  {
    id: 2,
    text: "Annie's EMDR therapy was life-changing. After struggling with PTSD for years, I finally found healing. Her patience, expertise, and cultural sensitivity made all the difference in my recovery journey.",
    author: "Former Client",
    location: "Richmond Area",
    rating: 5,
    focus: "PTSD & EMDR Therapy"
  },
  {
    id: 3,
    text: "As a first-generation immigrant, finding a therapist who understood my cultural background was crucial. Annie's multilingual abilities and cultural competence helped me work through identity issues and family conflicts.",
    author: "Former Client",
    location: "Ashburn, VA",
    rating: 5,
    focus: "Cultural Identity & Family Issues"
  },
  {
    id: 4,
    text: "The DBT skills I learned from Annie have been invaluable. Her structured approach to teaching emotional regulation and distress tolerance has helped me build healthier relationships and manage my emotions better.",
    author: "Former Client",
    location: "Virginia Beach",
    rating: 5,
    focus: "DBT Skills & Emotional Regulation"
  },
  {
    id: 5,
    text: "Annie's telehealth sessions were convenient and just as effective as in-person therapy. Her warm presence comes through even on video calls, and I felt heard and supported throughout my healing process.",
    author: "Former Client",
    location: "Loudoun County",
    rating: 5,
    focus: "Depression & Life Transitions"
  }
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (!isAutoPlaying || !inView) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials?.length ?? 0);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, inView]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? (testimonials?.length ?? 1) - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials?.length ?? 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials?.[currentIndex];

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
            What Clients Say
          </h2>
          <div className="w-20 h-1 rounded-full theme-accent-1 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from individuals who have found healing and growth through our therapeutic work together.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-gradient-to-br from-white to-gray-50 border-0 shadow-xl">
                  <CardContent className="p-12">
                    <div className="text-center">
                      <div className="flex justify-center mb-6">
                        <Quote 
                          className="h-12 w-12" 
                          style={{ color: 'var(--color-accent-2)' }}
                        />
                      </div>

                      <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 font-medium italic">
                        "{currentTestimonial?.text}"
                      </blockquote>

                      {/* Star Rating */}
                      <div className="flex justify-center mb-4">
                        {[...Array(currentTestimonial?.rating ?? 5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="h-5 w-5 fill-current" 
                            style={{ color: 'var(--color-accent-1)' }}
                          />
                        ))}
                      </div>

                      <div className="space-y-2">
                        <div className="font-semibold" style={{ color: 'var(--color-primary)' }}>
                          {currentTestimonial?.author}
                        </div>
                        <div className="text-gray-600">
                          {currentTestimonial?.location}
                        </div>
                        <div 
                          className="inline-flex px-3 py-1 rounded-full text-xs font-medium"
                          style={{ 
                            backgroundColor: 'var(--color-secondary)', 
                            color: 'var(--color-text-primary)' 
                          }}
                        >
                          {currentTestimonial?.focus}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg -ml-6"
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg -mr-6"
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'scale-125 shadow-lg'
                    : 'opacity-60 hover:opacity-80'
                }`}
                style={{
                  backgroundColor: 
                    index === currentIndex 
                      ? 'var(--color-primary)' 
                      : 'var(--color-secondary)'
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
