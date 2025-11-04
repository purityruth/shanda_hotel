// app/rooms/page.tsx
'use client';

import { useState } from 'react';
import { rooms } from '@/lib/data';

export default function RoomsPage() {
  const [selectedRoom, setSelectedRoom] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Rooms & Suites</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Experience luxury and comfort in our carefully designed accommodations
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedRoom(room)}
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${room.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {room.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {room.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-secondary">
                      {room.price}
                    </span>
                    <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-accent transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center z-10"
              >
                ✕
              </button>
              <div
                className="h-96 bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedRoom.image})` }}
              />
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-4">
                {selectedRoom.name}
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                {selectedRoom.description}
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Amenities
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {selectedRoom.amenities.map((amenity: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t">
                <div>
                  <span className="text-2xl font-bold text-secondary">
                    {selectedRoom.price}
                  </span>
                  <p className="text-gray-600 text-sm">per night</p>
                </div>
                <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-accent transition-colors">
                  Book This Room
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}