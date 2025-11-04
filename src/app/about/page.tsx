// app/about/page.tsx
const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'General Manager',
    image: '/images/team/team-1.jpg',
    bio: 'With over 15 years in hospitality management, Sarah ensures exceptional guest experiences.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Head of Operations',
    image: '/images/team/team-2.jpg',
    bio: 'Michael oversees all hotel operations with a focus on efficiency and quality service.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Guest Experience Director',
    image: '/images/team/team-3.jpg',
    bio: 'Emily specializes in creating memorable stays and personalized guest services.'
  }
];

const milestones = [
  { year: '2018', event: 'Fikira1 Hotel Founded', description: 'Started with a vision to redefine luxury hospitality' },
  { year: '2019', event: 'Digital Transformation Initiative', description: 'Implemented cutting-edge technology solutions' },
  { year: '2020', event: 'Award-Winning Service', description: 'Received Luxury Hotel of the Year award' },
  { year: '2022', event: 'Expansion Complete', description: 'Added 50 new luxury suites and facilities' },
  { year: '2023', event: 'Sustainability Certification', description: 'Achieved Green Hotel certification' }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Where luxury meets innovation in the heart of hospitality
          </p>
        </div>
      </section>

      {/* Hotel Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Redefining Luxury Hospitality
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Founded in 2018, Fikira1 emerged from a simple vision: to create a hotel experience 
                that seamlessly blends traditional luxury with cutting-edge digital innovation.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Our journey began with a commitment to exceptional service, and has evolved into 
                a comprehensive digital transformation that enhances every aspect of the guest experience.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">85%</div>
                  <div className="text-gray-600">Guest Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">5★</div>
                  <div className="text-gray-600">Luxury Rating</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-500 to-primary h-96 rounded-2xl flex items-center justify-center text-white text-xl">
              Hotel Building Image
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start mb-12">
                <div className="flex-shrink-0 w-24">
                  <div className="bg-secondary text-primary rounded-lg px-4 py-2 text-center font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="ml-8 flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {milestone.event}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <div className="w-48 h-48 bg-gradient-to-r from-teal-400 to-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white text-lg">
                  Team Photo
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-secondary font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}