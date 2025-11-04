// app/facilities/page.tsx
const facilities = [
  {
    id: 1,
    name: 'Infinity Pool',
    description: 'Stunning infinity pool with panoramic city views and poolside service',
    image: '/images/swimming-pool.webp',
    features: ['Heated Pool', 'Pool Bar', 'Sun Loungers', 'Towels Provided']
  },
  {
    id: 2,
    name: 'Luxury Spa',
    description: 'Full-service spa offering massages, facials, and wellness treatments',
    image: '/images/attractive-african-woman-enjoying-face-massage-spa-salon.webp',
    features: ['Massage Therapy', 'Beauty Treatments', 'Steam Room', 'Relaxation Area']
  },
  {
    id: 3,
    name: 'Fitness Center',
    description: '24/7 gym with state-of-the-art equipment and personal training',
    image: '/images/health-club-without-people-with-exercise-equipment.webp',
    features: ['Cardio Machines', 'Weight Training', 'Yoga Studio', 'Personal Trainers']
  },
  {
    id: 4,
    name: 'Conference Rooms',
    description: 'Modern meeting spaces for business events and conferences',
    image: '/images/room-used-official-event.webp',
    features: ['Audio-Visual Equipment', 'Catering Service', 'High-Speed WiFi', 'Event Planning']
  },
  {
    id: 5,
    name: 'Fine Dining',
    description: 'Award-winning restaurants offering local and international cuisine',
    image: '/images/fine-cuisine-luxury-lounge-breast-duck-with-red-wine.webp',
    features: ['Chef Specials', 'Wine Selection', 'Room Service', 'Dietary Options']
  },
  {
    id: 6,
    name: 'Business Center',
    description: 'Fully equipped business center for corporate travelers',
    image: '/images/office-buildings.webp',
    features: ['Printing Services', 'Private Booths', 'High-Speed Internet', 'Office Supplies']
  }
];

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Hotel Facilities</h1>
          <p className="text-xl max-w-2xl mx-auto">
            World-class amenities designed for your comfort and convenience
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility) => (
              <div
                key={facility.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${facility.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {facility.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {facility.description}
                  </p>
                  <div className="space-y-2">
                    {facility.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">
            Premium Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: '🚗', name: 'Airport Transfer' },
              { icon: '👶', name: 'Child Care' },
              { icon: '🐾', name: 'Pet Friendly' },
              { icon: '💼', name: 'Concierge' }
            ].map((service, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-primary">
                  {service.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}