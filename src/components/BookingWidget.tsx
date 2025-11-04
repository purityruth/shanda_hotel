// components/BookingWidget.tsx
'use client';

import { useState, useRef, useEffect } from 'react';

export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);
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
    <section ref={sectionRef} className="py-16 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Minimal Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-2">
              Check Availability
            </h2>
            <p className="text-gray-100">Plan your perfect stay</p>
          </div>

          {/* Clean Booking Form */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Check-in */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Check-in
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full px-4 py-3 bg-white text-gray-700 border border-gray-200 rounded-lg focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors"
                />
              </div>

              {/* Check-out */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Check-out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full px-4 py-3 bg-white text-gray-700 border border-gray-200 rounded-lg focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors"
                />
              </div>

              {/* Guests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-white text-gray-700 border border-gray-200 rounded-lg focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Rooms */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rooms
                </label>
                <select
                  value={rooms}
                  onChange={(e) => setRooms(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-white text-gray-700 border border-gray-200 rounded-lg focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors"
                >
                  {[1, 2, 3, 4].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Room' : 'Rooms'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6 text-center">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-primary transition-colors duration-300 font-medium w-full md:w-auto">
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}