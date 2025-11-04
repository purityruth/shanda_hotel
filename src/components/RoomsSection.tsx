// components/RoomsSection.tsx
'use client';

import { useState } from 'react';
import { rooms } from '@/lib/data';

export default function RoomsSection() {
  const [currentRoom, setCurrentRoom] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Our Rooms & Suites
          </h2>
          <p className="text-xl text-gray-600">
            Experience luxury and comfort in every room
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Room Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentRoom * 100}%)` }}
              >
                {rooms.map((room, index) => (
                  <div key={room.id} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div
                        className="h-96 lg:h-full bg-cover bg-center rounded-l-2xl"
                        style={{ backgroundImage: `url(${room.image})` }}
                      />
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <h3 className="text-3xl font-bold text-primary mb-4">
                          {room.name}
                        </h3>
                        <p className="text-gray-600 mb-6 text-lg">
                          {room.description}
                        </p>
                        <div className="mb-6">
                          <h4 className="font-semibold text-primary mb-3">
                            Amenities:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {room.amenities.map((amenity, idx) => (
                              <span
                                key={idx}
                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                              >
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-secondary">
                            {room.price}
                          </span>
                          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-accent transition-colors">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center mt-8 space-x-4">
              {rooms.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentRoom(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentRoom ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}