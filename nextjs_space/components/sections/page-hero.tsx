
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
}

export function PageHero({ 
  title, 
  subtitle, 
  description,
  backgroundImage = "https://images.squarespace-cdn.com/content/v1/61c4da8eb1b30a201b9669f2/18d9888b-4cb5-4ec9-9a80-f250ea8159b1/Green-Park.jpg"
}: PageHeroProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full bg-muted">
          <Image
            src={backgroundImage}
            alt="Peaceful nature scene"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 gradient-overlay opacity-80" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-centered text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
