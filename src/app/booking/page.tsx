// app/booking/page.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { Calendar, Users, Star, ChevronRight, CheckCircle } from 'lucide-react';

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    rooms: 1,
    roomType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const roomTypes = [
    { id: 'standard', name: 'Standard Room', price: 'Ksh 12,500', features: ['Free WiFi', 'Air Conditioning', 'Flat Screen TV'] },
    { id: 'deluxe', name: 'Deluxe Suite', price: 'Ksh 18,900', features: ['Mini Bar', 'Jacuzzi', 'City View', 'Room Service'] },
    { id: 'executive', name: 'Executive Suite', price: 'Ksh 25,000', features: ['Private Balcony', 'Kitchenette', 'Premium Toiletries', 'Concierge'] }
  ];

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

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/interior-modern-comfortable-hotel-room.webp)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/70"></div>
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
              Book Your <span className="text-secondary font-normal">Stay</span>
            </h1>
            <div className="w-24 h-0.5 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Experience luxury with our seamless booking process and personalized service
            </p>
          </div>

          {/* Quick Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {[
              { number: '4.9/5', label: 'Guest Rating' },
              { number: '24/7', label: 'Support' },
              { number: 'Best', label: 'Price Guarantee' },
              { number: 'Free', label: 'Cancellation' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-secondary mb-2">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-white/80">
            <span className="text-sm mb-2 font-light">Start Booking</span>
            <ChevronRight className="w-5 h-5 transform rotate-90" />
          </div>
        </div>
      </section>

      {/* Booking Steps */}
      <section ref={sectionRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Enhanced Progress Bar */}
          <div className={`mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex justify-between relative">
              {[
                { number: 1, label: 'Dates & Rooms', icon: <Calendar className="w-5 h-5" /> },
                { number: 2, label: 'Room Selection', icon: <Star className="w-5 h-5" /> },
                { number: 3, label: 'Guest Details', icon: <Users className="w-5 h-5" /> },
                { number: 4, label: 'Confirmation', icon: <CheckCircle className="w-5 h-5" /> }
              ].map((stepItem, index) => (
                <div key={stepItem.number} className="flex flex-col items-center z-10">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold transition-all duration-500 ${
                    step >= stepItem.number 
                      ? 'bg-secondary text-primary scale-110 shadow-lg' 
                      : 'bg-white text-gray-400 border-2 border-gray-300'
                  }`}>
                    {step >= stepItem.number ? stepItem.icon : stepItem.number}
                  </div>
                  <span className={`mt-3 text-sm font-medium transition-colors ${
                    step >= stepItem.number ? 'text-primary' : 'text-gray-500'
                  }`}>
                    {stepItem.label}
                  </span>
                </div>
              ))}
              <div className="absolute top-7 left-0 right-0 h-1 bg-gray-300 -z-10">
                <div 
                  className="h-full bg-secondary transition-all duration-500 ease-out"
                  style={{ width: `${((step - 1) / 3) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Step 1: Dates & Rooms - Enhanced */}
          {step === 1 && (
            <div className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                  Select Your <span className="text-secondary">Dates</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Choose your preferred check-in and check-out dates to see available rooms
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      value={bookingData.checkIn}
                      onChange={(e) => handleInputChange('checkIn', e.target.value)}
                      className="w-full px-4 py-4 border text-gray-500 border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Guests
                    </label>
                    <select
                      value={bookingData.guests}
                      onChange={(e) => handleInputChange('guests', e.target.value)}
                      className="w-full px-4 py-4 border border-gray-200 text-gray-500 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 bg-white"
                    >
                      {[1,2,3,4,5,6].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      value={bookingData.checkOut}
                      onChange={(e) => handleInputChange('checkOut', e.target.value)}
                      className="w-full px-4 py-4 border border-gray-200 text-gray-500 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Rooms
                    </label>
                    <select
                      value={bookingData.rooms}
                      onChange={(e) => handleInputChange('rooms', e.target.value)}
                      className="w-full px-4 py-4 border border-gray-200 text-gray-500 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 bg-white"
                    >
                      {[1,2,3,4].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Room' : 'Rooms'}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-12">
                <button
                  onClick={nextStep}
                  className="group bg-primary text-white px-10 py-4 rounded-xl hover:bg-accent transition-all duration-500 transform hover:scale-105 font-semibold text-lg"
                >
                  <span className="flex items-center gap-3">
                    Check Availability
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Room Selection - Enhanced */}
          {step === 2 && (
            <div className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                  Choose Your <span className="text-secondary">Room</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Select from our luxurious room options, each designed for your comfort
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {roomTypes.map((room) => (
                  <div
                    key={room.id}
                    className={`group border-2 rounded-2xl p-6 cursor-pointer transition-all duration-500 hover:shadow-xl ${
                      bookingData.roomType === room.id 
                        ? 'border-secondary bg-secondary/5 scale-105' 
                        : 'border-gray-200 hover:border-secondary/50'
                    }`}
                    onClick={() => handleInputChange('roomType', room.id)}
                  >
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {room.name}
                      </h3>
                      <p className="text-2xl font-bold text-secondary mt-2">{room.price}</p>
                      <p className="text-gray-500 text-sm">per night</p>
                    </div>

                    <div className="space-y-2 mb-6">
                      {room.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center">
                      <div className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                        bookingData.roomType === room.id 
                          ? 'bg-secondary border-secondary' 
                          : 'border-gray-300 group-hover:border-secondary'
                      }`}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between mt-12 max-w-2xl mx-auto">
                <button
                  onClick={prevStep}
                  className="px-8 py-4 border-2 border-gray-300 text-gray-500 rounded-xl hover:border-primary hover:bg-gray-50 transition-all duration-300 font-semibold"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  disabled={!bookingData.roomType}
                  className="group bg-primary text-white px-8 py-4 rounded-xl hover:bg-accent transition-all duration-300 transform hover:scale-105 font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span className="flex items-center gap-3">
                    Continue to Guest Details
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Guest Details - Enhanced */}
          {step === 3 && (
            <div className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                  Guest <span className="text-secondary">Information</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Please provide your details to complete the booking process
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={bookingData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 text-gray-500 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={bookingData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 text-gray-500 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={bookingData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 text-gray-500 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={bookingData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 text-gray-500 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    placeholder="+254 712 345 678"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    value={bookingData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 text-gray-500 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    placeholder="Any special requirements or requests for your stay..."
                  />
                </div>
              </div>

              <div className="flex justify-between mt-12 max-w-2xl mx-auto">
                <button
                  onClick={prevStep}
                  className="px-8 py-4 border-2 border-gray-300 text-gray-500 rounded-xl hover:border-primary hover:bg-gray-50 transition-all duration-300 font-semibold"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="group bg-primary text-white px-8 py-4 rounded-xl hover:bg-accent transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  <span className="flex items-center gap-3">
                    Review Booking
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation - Enhanced */}
          {step === 4 && (
            <div className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                  Booking <span className="text-secondary">Summary</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Review your booking details before confirmation
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-primary mb-4">Booking Details</h3>
                    <div className="space-y-3">
                      {[
                        { label: 'Check-in', value: bookingData.checkIn || 'Not selected' },
                        { label: 'Check-out', value: bookingData.checkOut || 'Not selected' },
                        { label: 'Guests', value: bookingData.guests },
                        { label: 'Rooms', value: bookingData.rooms },
                        { label: 'Room Type', value: roomTypes.find(r => r.id === bookingData.roomType)?.name || 'Not selected' }
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                          <span className="text-gray-600">{item.label}:</span>
                          <span className="font-semibold text-gray-900">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-primary mb-4">Guest Information</h3>
                    <div className="space-y-2 text-sm">
                      <div className="font-medium text-gray-900">{bookingData.firstName} {bookingData.lastName}</div>
                      <div className="text-gray-600">{bookingData.email}</div>
                      <div className="text-gray-600">{bookingData.phone}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-secondary/5 rounded-xl p-6 border border-secondary/20">
                    <h3 className="text-xl font-semibold text-primary mb-4">Payment Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-gray-700">
                        <span>Room Charges (3 nights)</span>
                        <span>Ksh 37,500</span>
                      </div>
                      <div className="flex justify-between text-gray-700">
                        <span>Taxes & Fees</span>
                        <span>Ksh 5,625</span>
                      </div>
                      <div className="flex justify-between text-gray-700">
                        <span>Service Charge</span>
                        <span>Ksh 2,500</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg border-t pt-3 text-primary">
                        <span>Total Amount</span>
                        <span className="text-secondary">Ksh 45,625</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">What's Included</h3>
                    <div className="space-y-2 text-sm text-green-700">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Free breakfast for two</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Access to all hotel facilities</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>24/7 concierge service</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-12 max-w-2xl mx-auto">
                <button
                  onClick={prevStep}
                  className="px-8 py-4 border-2 border-gray-300 text-gray-500 rounded-xl hover:border-primary hover:bg-gray-50 transition-all duration-300 font-semibold"
                >
                  Back
                </button>
                <button className="group bg-secondary text-primary px-8 py-4 rounded-xl hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
                  <span className="flex items-center gap-3">
                    Confirm Booking
                    <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}