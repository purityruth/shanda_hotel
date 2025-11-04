// app/facilities/page.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { Star, Clock, Users, Wifi, Coffee, Car, Utensils, Heart, ChevronRight } from 'lucide-react';

const facilities = [
  {
    id: 1,
    name: 'Infinity Pool',
    description: 'Stunning infinity pool with panoramic city views and premium poolside service in a serene environment',
    image: '/images/swimming-pool.webp',
    features: ['Heated Pool', 'Pool Bar', 'Sun Loungers', 'Towels Provided', 'Poolside Service'],
    hours: '6:00 AM - 10:00 PM',
    capacity: '50 guests'
  },
  {
    id: 2,
    name: 'Luxury Spa',
    description: 'Full-service wellness sanctuary offering therapeutic massages, rejuvenating facials, and holistic treatments',
    image: '/images/attractive-african-woman-enjoying-face-massage-spa-salon.webp',
    features: ['Massage Therapy', 'Beauty Treatments', 'Steam Room', 'Relaxation Area', 'Private Suites'],
    hours: '8:00 AM - 9:00 PM',
    capacity: '15 guests'
  },
  {
    id: 3,
    name: 'Fitness Center',
    description: '24/7 state-of-the-art gym with premium equipment, personal training, and wellness programs',
    image: '/images/health-club-without-people-with-exercise-equipment.webp',
    features: ['Cardio Machines', 'Weight Training', 'Yoga Studio', 'Personal Trainers', 'Fitness Classes'],
    hours: '24 Hours',
    capacity: '25 guests'
  },
  {
    id: 4,
    name: 'Conference Rooms',
    description: 'Modern meeting spaces equipped with advanced technology for business events and conferences',
    image: '/images/room-used-official-event.webp',
    features: ['Audio-Visual Equipment', 'Catering Service', 'High-Speed WiFi', 'Event Planning', 'Breakout Areas'],
    hours: '7:00 AM - 11:00 PM',
    capacity: '200 guests'
  },
  {
    id: 5,
    name: 'Fine Dining',
    description: 'Award-winning restaurants showcasing local and international cuisine with exceptional service',
    image: '/images/fine-cuisine-luxury-lounge-breast-duck-with-red-wine.webp',
    features: ['Chef Specials', 'Wine Selection', 'Room Service', 'Dietary Options', 'Private Dining'],
    hours: '6:30 AM - 11:00 PM',
    capacity: '120 guests'
  },
  {
    id: 6,
    name: 'Business Center',
    description: 'Fully equipped professional workspace for corporate travelers with premium amenities',
    image: '/images/office-buildings.webp',
    features: ['Printing Services', 'Private Booths', 'High-Speed Internet', 'Office Supplies', 'Video Conferencing'],
    hours: '24 Hours',
    capacity: '20 guests'
  }
];

const additionalServices = [
  { 
    icon: <Car className="w-8 h-8" />, 
    name: 'Airport Transfer', 
    description: 'Complimentary luxury airport shuttle service'
  },
  { 
    icon: <Users className="w-8 h-8" />, 
    name: 'Child Care', 
    description: 'Professional babysitting and kids activities'
  },
  { 
    icon: <Heart className="w-8 h-8" />, 
    name: 'Pet Friendly', 
    description: 'Special amenities for your furry companions'
  },
  { 
    icon: <Utensils className="w-8 h-8" />, 
    name: 'Concierge', 
    description: '24/7 personalized assistance and planning'
  }
];

export default function FacilitiesPage() {
  const [selectedFacility, setSelectedFacility] = useState<any>(null);
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
            backgroundImage: 'url(/images/type-entertainment-complex-popular-resort.webp)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-1/4 w-3 h-3 bg-secondary/50 rounded-full animate-pulse delay-1000"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <div className={`mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Hotel <span className="text-secondary font-normal">Facilities</span>
            </h1>
            <div className="w-24 h-0.5 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              World-class amenities and premium services designed for your ultimate comfort and convenience
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-white/80">
            <span className="text-sm mb-2 font-light">Explore Facilities</span>
            <ChevronRight className="w-5 h-5 transform rotate-90" />
          </div>
        </div>
      </section>

      {/* Facilities Grid Section */}
      <section ref={sectionRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Premium Amenities
            </h2>
            <div className="w-20 h-0.5 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our exceptional facilities designed to enhance your stay with luxury and convenience
            </p>
          </div>

          {/* Enhanced Facilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {facilities.map((facility, index) => (
              <div
                key={facility.id}
                className={`group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-secondary/30 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                }}
                onClick={() => setSelectedFacility(facility)}
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${facility.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  
                  {/* Facility Name Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold text-white drop-shadow-lg">
                      {facility.name}
                    </h3>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-primary font-semibold flex items-center gap-2">
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Quick Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{facility.hours}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{facility.capacity}</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="flex flex-wrap gap-2">
                    {facility.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                    {facility.features.length > 3 && (
                      <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                        +{facility.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Additional Services
            </h2>
            <div className="w-20 h-0.5 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complementary services to make your stay truly exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className={`group text-center p-8 rounded-2xl border border-gray-100 hover:border-secondary/30 bg-gray-50 hover:bg-white transition-all duration-500 hover:shadow-lg ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 150 + 500}ms` : '0ms'
                }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl text-secondary mb-6 mx-auto group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <div className={`max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Experience Our Facilities
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Book your stay and enjoy access to all our premium amenities and services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary text-primary px-8 py-4 rounded-2xl font-semibold hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105">
                Book Your Stay
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105">
                Contact Concierge
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Detail Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="relative">
              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center z-10 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <span className="text-2xl">×</span>
              </button>
              
              <div
                className="h-80 bg-cover bg-center rounded-t-2xl"
                style={{ backgroundImage: `url(${selectedFacility.image})` }}
              />
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                {selectedFacility.name}
              </h2>
              
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {selectedFacility.description}
              </p>

              {/* Facility Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-secondary" />
                      <div>
                        <div className="text-sm text-gray-600">Operating Hours</div>
                        <div className="font-medium text-gray-900">{selectedFacility.hours}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-secondary" />
                      <div>
                        <div className="text-sm text-gray-600">Capacity</div>
                        <div className="font-medium text-gray-900">{selectedFacility.capacity}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedFacility.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-6 border-t border-gray-200">
                <button className="flex-1 bg-secondary text-primary py-4 rounded-xl font-semibold hover:bg-yellow-600 transition-colors duration-300">
                  Book Facility Access
                </button>
                <button className="flex-1 bg-gray-900 text-white py-4 rounded-xl font-semibold hover:bg-primary transition-colors duration-300">
                  Contact Manager
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}