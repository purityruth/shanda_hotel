// components/HeroSection.tsx
'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/api/placeholder/1920/800',
    '/api/placeholder/1920/800',
    '/api/placeholder/1920/800'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Transform Your Hotel Into a Revenue-Generating Digital Experience
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Increase direct bookings, automate operations, and delight your guests
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-secondary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors">
            Book a Demo
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors">
            See How It Works
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}