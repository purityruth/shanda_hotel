// components/RoomsSection.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { rooms } from '@/lib/data';

export default function RoomsSection() {
  const [currentRoom, setCurrentRoom] = useState(0);
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
            Rooms & Suites
          </h2>
          <div className="w-24 h-0.5 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Curated spaces designed for comfort
          </p>
        </div>

        {/* Elegant Room Showcase */}
        <div className="max-w-5xl mx-auto">
          <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Image and Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-80 lg:h-auto">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                  style={{ backgroundImage: `url(${rooms[currentRoom].image})` }}
                />
                <div className="absolute inset-0 bg-black/10"></div>
                
                {/* Room Type Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-900">
                    {rooms[currentRoom].name}
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-2xl font-light text-gray-900 mb-4">
                    {rooms[currentRoom].name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {rooms[currentRoom].description}
                  </p>
                  
                  {/* Amenities */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wide">
                      Amenities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {rooms[currentRoom].amenities.map((amenity, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div>
                    <span className="text-2xl font-light text-secondary">
                      {rooms[currentRoom].price.split(' ')[2]}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">/ night</span>
                  </div>
                  <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-primary transition-colors duration-300 text-sm font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Minimal Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {rooms.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentRoom(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentRoom ? 'bg-secondary scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}