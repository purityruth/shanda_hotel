// components/AboutSectionWithImage.tsx
'use client';

import { useRef, useEffect, useState } from 'react';
import { Users, Utensils, Heart, Briefcase } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Users className="w-6 h-6" />,
    title: "Personalized Guest Services",
    description: "Tailored concierge support, bespoke itineraries, 24/7 assistance — every guest receives an elevated, individual experience."
  },
  {
    id: 2,
    icon: <Utensils className="w-6 h-6" />,
    title: "Fine Dining & Culinary Artistry",
    description: "Discover intentionally crafted cuisine, premium wine lists, and intimate dining atmospheres that redefine taste."
  },
  {
    id: 3,
    icon: <Heart className="w-6 h-6" />,
    title: "Holistic Wellness & Spa Rituals",
    description: "Immerse in world-class treatments, therapeutic massages, aromatherapy journeys, and peaceful spaces curated for renewal."
  },
  {
    id: 4,
    icon: <Briefcase className="w-6 h-6" />,
    title: "Exclusive Business & Event Experiences",
    description: "Executive boardrooms, modern meeting spaces, and seamless event hosting — created with productivity, privacy, and comfort in mind."
  }
];

export default function FeaturesSection() {
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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header and Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image Side */}
            <div className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="aspect-[5/5] rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src="/images/hammocks-umbrella-placed-near-large-pool.webp"
                  alt="Hotel Ambiance"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/20 rounded-2xl -z-10"></div>
            </div>

            {/* Content Side */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
                Where Luxury Meets
                <span className="block text-secondary font-normal mt-2">Meaningful Hospitality</span>
              </h2>
              
              <div className="w-20 h-0.5 bg-secondary mb-8"></div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At Shanda Hotel, we are more than a destination — we are a curated experience.
                  Every detail, from architecture to service rituals, is crafted to create presence, 
                  calm, and immersion.
                </p>
                <p>
                  Inspired by the elegance of African sophistication and the intimacy of boutique luxury, 
                  we blend modern comfort with the warmth of personalized hospitality.
                </p>
                <p className="text-gray-700 font-light">
                  Whether you are here for business, leisure, wellness or celebration — 
                  this is a space designed for the lifestyle you deserve.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`group p-8 rounded-xl border border-gray-100 hover:border-secondary/30 bg-white transition-all duration-500 hover:shadow-lg ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
                }}
              >
                {/* Icon Container */}
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Subtle Hover Indicator */}
                <div className="w-0 group-hover:w-10 h-0.5 bg-secondary mt-6 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}