// components/HeroSection.tsx
'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      image: '/images/luxury-hotel-reception-hall-lounge-restaurant-with-high-ceiling.webp',
      title: 'Luxury Redefined',
      subtitle: 'Experience Unparalleled Comfort',
      description: 'Where elegance meets modern sophistication in the heart of the city',
      buttonText: 'Explore Suites',
      overlay: 'from-blue-900/30 to-purple-900/40'
    },
    {
      image: '/images/fine-cuisine-luxury-lounge-breast-duck-with-red-wine.webp',
      title: 'Exquisite Dining',
      subtitle: 'Culinary Excellence Awaits',
      description: 'Award-winning restaurants with breathtaking views and exceptional service',
      buttonText: 'View Menus',
      overlay: 'from-amber-900/60 to-orange-900/40'
    },
    {
      image: '/images/attractive-african-woman-enjoying-face-massage-spa-salon.webp',
      title: 'Tranquil Spa',
      subtitle: 'Revitalize Your Senses',
      description: 'World-class wellness treatments in an oasis of peace and relaxation',
      buttonText: 'Book Treatment',
      overlay: 'from-emerald-900/60 to-teal-900/40'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 800);
  };

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 800);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides with Zoom Effect */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-110'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 10s ease-out, opacity 1s ease-out'
            }}
          />
        ))}
        
        {/* Animated Gradient Overlays */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-gradient-to-br ${slide.overlay} transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4">
        <div className="text-center text-white max-w-6xl w-full">
          {/* Animated Title */}
          <div className="mb-8 overflow-hidden">
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transform transition-all duration-1000 ease-out ${
              isTransitioning 
                ? 'translate-y-20 opacity-0' 
                : 'translate-y-0 opacity-100'
            }`}>
              <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                {slides[currentSlide].title}
              </span>
            </h1>
          </div>

          {/* Animated Subtitle */}
          <div className="mb-6 overflow-hidden">
            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-light mb-4 transform transition-all duration-1000 delay-300 ease-out ${
              isTransitioning 
                ? 'translate-y-10 opacity-0' 
                : 'translate-y-0 opacity-100'
            }`}>
              {slides[currentSlide].subtitle}
            </h2>
          </div>

          {/* Animated Description */}
          <div className="mb-12 overflow-hidden">
            <p className={`text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto font-light leading-relaxed transform transition-all duration-1000 delay-500 ease-out ${
              isTransitioning 
                ? 'translate-y-8 opacity-0' 
                : 'translate-y-0 opacity-100'
            }`}>
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Animated CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transform transition-all duration-1000 delay-700 ease-out ${
            isTransitioning 
              ? 'translate-y-6 opacity-0' 
              : 'translate-y-0 opacity-100'
          }`}>
            <button className="group relative bg-secondary text-primary px-10 py-5 rounded-full font-semibold text-lg hover:bg-yellow-600 transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl shadow-lg overflow-hidden">
              <span className="relative z-10">{slides[currentSlide].buttonText}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
            
            <button className="group border-2 border-white text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-500 ease-out transform hover:scale-105 backdrop-blur-sm">
              <span className="flex items-center gap-3">
                Virtual Tour
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`group relative transition-all duration-500 ${
                index === currentSlide ? 'scale-125' : 'scale-100'
              }`}
            >
              <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                index === currentSlide 
                  ? 'bg-secondary scale-125' 
                  : 'bg-white/60 hover:bg-white'
              }`} />
              <div className={`absolute -inset-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-secondary/30 animate-pulse' 
                  : 'group-hover:bg-white/20'
              }`} />
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 group p-4"
      >
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
          <svg className="w-6 h-6 text-white transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </button>

      <button
        onClick={handleNextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 group p-4"
      >
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
          <svg className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-30">
        <div className="animate-bounce-slow">
          <div className="flex flex-col items-center text-white/80">
            <span className="text-sm mb-2 font-light">Scroll</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/20 z-30">
        <div 
          className="h-full bg-secondary transition-all duration-5000 ease-linear"
          style={{ 
            width: isTransitioning ? '100%' : '0%',
            transition: isTransitioning ? 'width 5s linear' : 'none'
          }}
          key={currentSlide}
        />
      </div>
    </section>
  );
}