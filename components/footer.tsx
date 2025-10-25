

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Globe, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="theme-neutral border-t">
      <div className="container-centered py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                <Image
                  src="/sst-logo.png"
                  alt="Seek, Strive & Thrive Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-lg" style={{ color: 'var(--color-primary)' }}>
                  Seek, Strive & Thrive
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Compassionate therapy for anxiety, depression, trauma, and life changes. 
              Supporting your journey toward healing and growth.
            </p>
            
            {/* Psychology Today Link */}
            <div className="pt-2">
              <a 
                href="https://www.psychologytoday.com/us/therapists/va/ashburn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors group"
              >
                <span>View Profile on Psychology Today</span>
                <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg" style={{ color: 'var(--color-primary)' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg" style={{ color: 'var(--color-primary)' }}>
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-500" />
                <Link 
                  href="tel:(804) 207-8414" 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  (804) 207-8414
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">Ashburn, VA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">Telehealth Available</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-600">
              © 2025 Seek, Strive & Thrive, LLC. All Rights Reserved.
            </div>
            <div className="text-sm text-gray-600">
              Licensed Professional Counselor | Virginia License #0701013384
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

