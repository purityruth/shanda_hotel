// app/rooms/page.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { rooms } from '@/lib/data';
import { Star, Users, Wifi, Coffee, Car, Utensils, Heart, X } from 'lucide-react';

const amenityIcons: any = {
  'Free WiFi': <Wifi className="w-4 h-4" />,
  'Air Conditioning': <Users className="w-4 h-4" />,
  'Flat Screen TV': <div className="w-4 h-4">📺</div>,
  'Coffee Maker': <Coffee className="w-4 h-4" />,
  'Mini Bar': <div className="w-4 h-4">🍷</div>,
  'Jacuzzi': <div className="w-4 h-4">🛁</div>,
  'City View': <div className="w-4 h-4">🏙️</div>,
  'Room Service': <Utensils className="w-4 h-4" />,
  'Private Balcony': <div className="w-4 h-4">🌅</div>,
  'Kitchenette': <div className="w-4 h-4">👨‍🍳</div>,
  'Premium Toiletries': <Heart className="w-4 h-4" />,
  'Concierge Service': <Users className="w-4 h-4" />,
};

export default function RoomsPage() {
  const [selectedRoom, setSelectedRoom] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/pillow-bed-with-light-lamp.webp)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-white/30 rounded-full animate-bounce"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <div className={`mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Rooms & <span className="text-secondary font-normal">Suites</span>
            </h1>
            <div className="w-24 h-0.5 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Curated accommodations where luxury meets comfort, designed for your perfect stay
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-white/80">
            <span className="text-sm mb-2 font-light">Explore</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Rooms Grid Section */}
      <section ref={sectionRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Curated Accommodations
            </h2>
            <div className="w-20 h-0.5 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each space is thoughtfully designed to provide the perfect balance of luxury, comfort, and functionality
            </p>
          </div>

          {/* Enhanced Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {rooms.map((room, index) => (
              <div
                key={room.id}
                className={`group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-secondary/30 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                }}
                onClick={() => setSelectedRoom(room)}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${room.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  
                  {/* Room Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-gray-900">
                      {room.name}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-primary font-semibold">
                      View Details
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {room.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Key Amenities */}
                  <div className="flex gap-2 mb-4">
                    {room.amenities.slice(0, 3).map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-gray-500">
                        {amenityIcons[amenity] || <Star className="w-3 h-3" />}
                      </div>
                    ))}
                    {room.amenities.length > 3 && (
                      <span className="text-xs text-gray-400">
                        +{room.amenities.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-2xl font-light text-secondary">
                        {room.price.split(' ')[2]}
                      </span>
                      <span className="text-gray-500 text-sm ml-1">/ night</span>
                    </div>
                    <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors duration-300 text-sm font-medium">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Room Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center z-10 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
              
              {/* Image Gallery */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
                <div
                  className="h-80 lg:h-full rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedRoom.image})` }}
                />
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-36 rounded-xl bg-gray-200 flex items-center justify-center text-gray-400"
                    >
                      Room Photo {i}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Room Details */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-light text-gray-900 mb-2">
                    {selectedRoom.name}
                  </h2>
                  <p className="text-xl text-secondary font-semibold">
                    {selectedRoom.price}
                  </p>
                </div>
                <button className="bg-secondary text-primary px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors duration-300 font-semibold">
                  Book This Room
                </button>
              </div>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {selectedRoom.description}
              </p>
              
              {/* Amenities Grid */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Room Amenities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedRoom.amenities.map((amenity: string, index: number) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary">
                        {amenityIcons[amenity] || <Star className="w-4 h-4" />}
                      </div>
                      <span className="text-gray-700 font-medium">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-2">24/7</div>
                  <div className="text-gray-600">Room Service</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-2">Free</div>
                  <div className="text-gray-600">WiFi Included</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-2">Flexible</div>
                  <div className="text-gray-600">Check-in/out</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}