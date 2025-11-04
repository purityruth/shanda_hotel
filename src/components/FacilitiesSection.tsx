// components/FacilitiesSection.tsx
'use client';

import { useRef, useEffect, useState } from 'react';
import { facilities } from '@/lib/data';

export default function FacilitiesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Minimal Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Hotel Facilities
          </h2>
          <div className="w-24 h-0.5 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Premium amenities for your comfort
          </p>
        </div>

        {/* Clean Facilities Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={facility.id}
                className={`group bg-white p-6 rounded-xl border border-gray-100 hover:border-secondary/30 transition-all duration-500 hover:shadow-lg ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                }}
              >
                {/* Elegant Icon */}
                <div className="text-3xl mb-4 text-secondary group-hover:scale-110 transition-transform duration-300">
                  {facility.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {facility.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {facility.description}
                </p>

                {/* Subtle Hover Line */}
                <div className="w-0 group-hover:w-8 h-0.5 bg-secondary mt-4 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}