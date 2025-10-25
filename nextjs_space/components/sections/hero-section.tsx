

"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30"
    >
      {/* Content */}
      <div className="container-centered px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight" style={{ color: 'var(--color-primary)' }}>
              Seek. Strive. Thrive.
            </h1>
            
            <div className="w-24 h-0.5 mx-auto theme-accent-1 rounded-full" />
            
            <p className="text-xl md:text-2xl font-light tracking-wide text-muted-foreground max-w-3xl mx-auto">
              Compassionate therapy for your journey toward healing and growth
            </p>
          </motion.div>

          {/* Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3"
          >
            <p className="text-lg font-medium" style={{ color: 'var(--color-primary)' }}>
              Anindita Dwivedi, LPC, NCC
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>Licensed in Virginia</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
              <span>20+ Years Experience</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
              <span>EMDR, DBT, Mindfulness</span>
            </div>
            
            {/* Psychology Today Verified Badge */}
            <div className="pt-2">
              <a 
                href="https://www.psychologytoday.com/us/therapists/va/ashburn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm font-medium hover:opacity-80 transition-opacity group"
                style={{ color: 'var(--color-primary)' }}
              >
                <span>✓ Verified on Psychology Today</span>
                <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Link href="/contact">
              <Button 
                size="lg" 
                className="btn-primary text-base px-10 py-6 group font-light tracking-wide"
              >
                <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Schedule Consultation
              </Button>
            </Link>
            <a 
              href="https://www.psychologytoday.com/us/therapists/va/ashburn" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base px-10 py-6 group font-light tracking-wide"
              >
                View Psychology Today Profile
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Button>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-12 border-t border-border/50"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="space-y-2">
                <p className="text-3xl font-light" style={{ color: 'var(--color-accent-1)' }}>20+</p>
                <p className="text-sm text-muted-foreground font-light">Years of Experience</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-light" style={{ color: 'var(--color-accent-1)' }}>500+</p>
                <p className="text-sm text-muted-foreground font-light">Clients Supported</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-light" style={{ color: 'var(--color-accent-1)' }}>3</p>
                <p className="text-sm text-muted-foreground font-light">Languages Spoken</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

