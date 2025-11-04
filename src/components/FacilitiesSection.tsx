// components/FacilitiesSection.tsx
import { facilities } from '@/lib/data';

export default function FacilitiesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Hotel Facilities
          </h2>
          <p className="text-xl text-gray-600">
            World-class amenities for an unforgettable stay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="text-5xl mb-4">{facility.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {facility.name}
              </h3>
              <p className="text-gray-600">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}