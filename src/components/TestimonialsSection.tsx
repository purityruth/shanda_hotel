// components/TestimonialsSection.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { testimonials } from '@/lib/data';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-secondary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}

        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Voices of <span className="text-secondary font-normal">Excellence</span>
          </h2>
          <div className="w-24 h-0.5 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Discover how luxury hospitality leaders are transforming their guest experiences
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-7xl mx-auto">
          <div className={`relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Decorative Quote Icon */}
            <div className="absolute top-4 left-4 text-secondary/10">
              <Quote className="w-20 h-20" />
            </div>

            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Testimonial Content */}
                <div className="space-y-8">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < testimonials[currentTestimonial].rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-lg font-light text-gray-800 leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold text-lg">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-lg">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[currentTestimonial].role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="relative">
                  <div className="aspect-3/2 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-4">⭐</div>
                      <div className="text-xl font-light text-gray-700">Guest Experience</div>
                      <div className="text-secondary font-semibold mt-2">Transformed</div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between p-6 bg-gray-50 border-t border-gray-100">
              <div className="flex items-center gap-4">
                {/* Progress Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-secondary w-6' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Counter */}
                <div className="text-sm text-gray-500 font-medium">
                  {currentTestimonial + 1} / {testimonials.length}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full border border-gray-200 hover:border-secondary hover:bg-white transition-all duration-300 group"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-secondary" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full border border-gray-200 hover:border-secondary hover:bg-white transition-all duration-300 group"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-secondary" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}