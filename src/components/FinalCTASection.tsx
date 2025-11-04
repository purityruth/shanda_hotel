// components/FinalCTASection.tsx
'use client';

import { useRef, useEffect, useState } from 'react';
import { ArrowRight, Star, Shield, Zap } from 'lucide-react';

export default function FinalCTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-br from-primary via-primary/95 to-accent overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Circles */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-secondary/30 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-white/20 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-secondary/20 rounded-full animate-float delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-white/10 rounded-full animate-float delay-1500"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Header */}
          <div className={`mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-8">
              <Star className="w-4 h-4 text-secondary" />
              <span className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                Ready to Transform?
              </span>
              <Star className="w-4 h-4 text-secondary" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
              Elevate Your <span className="text-secondary font-normal">Guest Experience</span>
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Join visionary hoteliers who are redefining luxury hospitality through 
              innovative digital solutions and unparalleled guest satisfaction.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button className="group bg-secondary text-primary px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-yellow-600 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-3xl relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                Schedule Free Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
            
            <button className="group border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-500 transform hover:scale-105 backdrop-blur-sm">
              <span className="flex items-center gap-3">
                View Case Studies
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Trust Badge */}
          <div className={`mt-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-br from-secondary to-yellow-600 rounded-full border-2 border-white"></div>
                ))}
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">Trusted by 500+</div>
                <div className="text-white/70 text-sm">Join us today</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-12"
          fill="white"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>
    </section>
  );
}