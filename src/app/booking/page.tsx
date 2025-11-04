// app/booking/page.tsx
'use client';

import { useState } from 'react';

export default function BookingPage() {
  const [step, setStep] = useState(1);
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
    { id: 'standard', name: 'Standard Room', price: 'Ksh 12,500' },
    { id: 'deluxe', name: 'Deluxe Suite', price: 'Ksh 18,900' },
    { id: 'executive', name: 'Executive Suite', price: 'Ksh 25,000' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Book Your Stay</h1>
          <p className="text-xl">Experience luxury with our seamless booking process</p>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Progress Bar */}
          <div className="flex justify-between mb-12 relative">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex flex-col items-center z-10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                  step >= stepNumber ? 'bg-secondary text-primary' : 'bg-gray-300 text-gray-600'
                }`}>
                  {stepNumber}
                </div>
                <span className="mt-2 text-sm text-gray-600">
                  {stepNumber === 1 && 'Dates & Rooms'}
                  {stepNumber === 2 && 'Room Selection'}
                  {stepNumber === 3 && 'Guest Details'}
                  {stepNumber === 4 && 'Confirmation'}
                </span>
              </div>
            ))}
            <div className="absolute top-6 left-0 right-0 h-1 bg-gray-300 -z-10">
              <div 
                className="h-full bg-secondary transition-all duration-300"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step 1: Dates & Rooms */}
          {step === 1 && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Select Dates & Rooms</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    value={bookingData.checkIn}
                    onChange={(e) => handleInputChange('checkIn', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    value={bookingData.checkOut}
                    onChange={(e) => handleInputChange('checkOut', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Guests
                  </label>
                  <select
                    value={bookingData.guests}
                    onChange={(e) => handleInputChange('guests', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {[1,2,3,4,5,6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rooms
                  </label>
                  <select
                    value={bookingData.rooms}
                    onChange={(e) => handleInputChange('rooms', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {[1,2,3,4].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Room' : 'Rooms'}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex justify-end mt-8">
                <button
                  onClick={nextStep}
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-accent transition-colors"
                >
                  Continue to Room Selection
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Room Selection */}
          {step === 2 && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Choose Your Room</h2>
              <div className="space-y-6">
                {roomTypes.map((room) => (
                  <div
                    key={room.id}
                    className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                      bookingData.roomType === room.id ? 'border-secondary bg-secondary/10' : 'border-gray-200 hover:border-primary'
                    }`}
                    onClick={() => handleInputChange('roomType', room.id)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-semibold text-primary">{room.name}</h3>
                        <p className="text-gray-600 mt-1">{room.price} per night</p>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 ${
                        bookingData.roomType === room.id ? 'bg-secondary border-secondary' : 'border-gray-300'
                      }`}></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  disabled={!bookingData.roomType}
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue to Guest Details
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Guest Details */}
          {step === 3 && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Guest Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={bookingData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Any special requirements or requests..."
                  />
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-accent transition-colors"
                >
                  Review Booking
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Booking Summary</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Booking Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Check-in:</span>
                      <span className="font-semibold">{bookingData.checkIn || 'Not selected'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Check-out:</span>
                      <span className="font-semibold">{bookingData.checkOut || 'Not selected'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Guests:</span>
                      <span className="font-semibold">{bookingData.guests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rooms:</span>
                      <span className="font-semibold">{bookingData.rooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Room Type:</span>
                      <span className="font-semibold">
                        {roomTypes.find(r => r.id === bookingData.roomType)?.name || 'Not selected'}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Payment Summary</h3>
                  <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span>Room Charges (3 nights)</span>
                      <span>Ksh 37,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes & Fees</span>
                      <span>Ksh 5,625</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg border-t pt-3">
                      <span>Total Amount</span>
                      <span className="text-secondary">Ksh 43,125</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button className="bg-secondary text-primary px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors font-semibold">
                  Confirm Booking
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}