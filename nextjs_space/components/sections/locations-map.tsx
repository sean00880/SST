
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  MapPin, 
  Navigation, 
  Car,
  Train,
  Plane,
  Globe,
  CheckCircle
} from "lucide-react";

const serviceLocations = [
  {
    area: "Northern Virginia",
    cities: ["Ashburn", "Sterling", "Dulles", "Leesburg", "Herndon", "Reston", "Vienna", "McLean", "Great Falls"],
    type: "In-Person & Telehealth",
    description: "Full range of services including traditional office visits"
  },
  {
    area: "Virginia Statewide",
    cities: ["Richmond", "Virginia Beach", "Norfolk", "Newport News", "Alexandria", "Arlington", "All VA Cities"],
    type: "Telehealth Only",
    description: "Secure video sessions available to all Virginia residents"
  }
];

const accessibilityInfo = [
  {
    icon: Car,
    title: "Parking Available",
    description: "Free parking available at office location"
  },
  {
    icon: Navigation,
    title: "Easy Access",
    description: "Convenient location with clear directions provided"
  },
  {
    icon: Globe,
    title: "Telehealth Option",
    description: "No travel required for video sessions"
  }
];

export function LocationsMap() {
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
            Service Areas & Locations
          </h2>
          <div className="w-20 h-1 rounded-full theme-accent-1 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            I provide therapy services throughout Virginia with flexible options 
            for both in-person and telehealth sessions.
          </p>
        </motion.div>

        {/* Service Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {serviceLocations?.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full card-hover bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 theme-primary rounded-2xl">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>
                        {location?.area}
                      </h3>
                      <div 
                        className="text-sm font-medium px-3 py-1 rounded-full inline-block"
                        style={{ 
                          backgroundColor: 'var(--color-accent-2)', 
                          color: 'white' 
                        }}
                      >
                        {location?.type}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {location?.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-3">
                      Areas Served:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {location?.cities?.map((city, cityIndex) => (
                        <div key={cityIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 flex-shrink-0" 
                                     style={{ color: 'var(--color-primary)' }} />
                          <span className="text-gray-600 text-sm">{city}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Accessibility Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              Accessibility & Transportation
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I strive to make therapy accessible and convenient for all clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accessibilityInfo?.map((info, index) => (
              <Card key={index} className="shadow-lg bg-white card-hover text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 theme-secondary rounded-xl">
                      <info.icon className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {info?.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {info?.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-white to-gray-50 shadow-lg">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                    Important Notes for Virginia Residents
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" 
                                 style={{ color: 'var(--color-accent-2)' }} />
                      <span className="text-sm leading-relaxed">
                        You must be physically located in Virginia during telehealth sessions
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" 
                                 style={{ color: 'var(--color-accent-2)' }} />
                      <span className="text-sm leading-relaxed">
                        In-person sessions available in Northern Virginia area
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" 
                                 style={{ color: 'var(--color-accent-2)' }} />
                      <span className="text-sm leading-relaxed">
                        Flexible scheduling including evening and weekend options
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                    Getting Directions
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Specific office address and detailed directions will be provided 
                    when you schedule your appointment. This ensures privacy and security 
                    for all clients.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Train className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Accessible by public transit</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Plane className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Near Dulles International Airport</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
