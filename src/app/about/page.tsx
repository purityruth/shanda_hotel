// app/about/page.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { Star, Award, Users, Target, Heart, ChevronRight } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'General Manager',
    image: '/images/team/team-1.jpg',
    bio: 'With over 15 years in hospitality management, Sarah ensures exceptional guest experiences and oversees all hotel operations with precision and care.',
    expertise: ['Luxury Hospitality', 'Operations Management', 'Guest Experience']
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Head of Operations',
    image: '/images/team/team-2.jpg',
    bio: 'Michael brings 12 years of operational excellence, focusing on efficiency, quality service, and innovative hospitality solutions.',
    expertise: ['Process Optimization', 'Quality Assurance', 'Team Leadership']
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Guest Experience Director',
    image: '/images/team/team-3.jpg',
    bio: 'Emily specializes in creating memorable stays and personalized guest services, with a passion for exceeding expectations.',
    expertise: ['Guest Relations', 'Service Design', 'Personalization']
  }
];

const milestones = [
  { 
    year: '2018', 
    event: 'Shanda Hotel Founded', 
    description: 'Started with a vision to redefine luxury hospitality in the heart of the city',
    icon: '🏨'
  },
  { 
    year: '2019', 
    event: 'Digital Transformation Initiative', 
    description: 'Implemented cutting-edge technology solutions to enhance guest experiences',
    icon: '💻'
  },
  { 
    year: '2020', 
    event: 'Award-Winning Service', 
    description: 'Received Luxury Hotel of the Year award for exceptional service excellence',
    icon: '🏆'
  },
  { 
    year: '2022', 
    event: 'Expansion Complete', 
    description: 'Added 50 new luxury suites and premium facilities to accommodate growing demand',
    icon: '📈'
  },
  { 
    year: '2023', 
    event: 'Sustainability Certification', 
    description: 'Achieved Green Hotel certification for eco-friendly practices and operations',
    icon: '🌿'
  }
];

export default function AboutPage() {
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
            backgroundImage: 'url(/images/hammocks-umbrella-placed-near-large-pool.webp)',
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
              Our <span className="text-secondary font-normal">Story</span>
            </h1>
            <div className="w-24 h-0.5 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Where luxury meets innovation in the heart of meaningful hospitality
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-white/80">
            <span className="text-sm mb-2 font-light">Discover More</span>
            <ChevronRight className="w-5 h-5 transform rotate-90" />
          </div>
        </div>
      </section>

      {/* Hotel Story Section */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content Side */}
              <div className={`space-y-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                <div>
                  <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                    Redefining <span className="text-secondary font-normal">Luxury Hospitality</span>
                  </h2>
                  <div className="w-20 h-0.5 bg-secondary mb-8"></div>
                </div>
                
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2018, Shanda Hotel emerged from a simple yet powerful vision: to create 
                    a hotel experience that seamlessly blends traditional luxury with cutting-edge innovation, 
                    while maintaining the warmth of personalized hospitality.
                  </p>
                  <p>
                    Our journey began with a commitment to exceptional service, and has evolved into 
                    a comprehensive approach that enhances every aspect of the guest experience through 
                    thoughtful design, advanced technology, and genuine care.
                  </p>
                  <p className="text-gray-700 font-light">
                    Inspired by African sophistication and global luxury standards, we've created a space 
                    where every detail matters and every guest feels truly valued.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-8 pt-8">
                  {[
                    { number: '4.9/5', label: 'Guest Rating', icon: <Star className="w-6 h-6" /> },
                    { number: '98%', label: 'Satisfaction', icon: <Heart className="w-6 h-6" /> },
                    { number: '5000+', label: 'Happy Guests', icon: <Users className="w-6 h-6" /> },
                    { number: '15+', label: 'Awards', icon: <Award className="w-6 h-6" /> }
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-xl text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900 group-hover:text-secondary transition-colors">
                          {stat.number}
                        </div>
                        <div className="text-gray-600 text-sm">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className={`relative transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>
                <div className="aspect-[5/5] rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden shadow-2xl">
                    <div className="aspect-[5/5] rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                        <img
                            src="/images/vacation-resort-mountain-with-beautiful-color-morning-san-juan-puerto-rico.webp"
                            alt="Hotel Ambiance"
                            className="w-full h-full object-cover"
                            />
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-2xl -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Our Journey
            </h2>
            <div className="w-20 h-0.5 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Milestones that shaped our commitment to excellence and innovation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-secondary/30"></div>
              
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start mb-16 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
                  }`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                      {/* Year Badge */}
                      <div className={`inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                        index % 2 === 0 ? 'md:float-right' : ''
                      }`}>
                        <span className="text-2xl">{milestone.icon}</span>
                        <span>{milestone.year}</span>
                      </div>
                      
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Leadership Team
            </h2>
            <div className="w-20 h-0.5 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the passionate professionals dedicated to creating exceptional experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`group text-center bg-white rounded-2xl p-8 border border-gray-100 hover:border-secondary/30 transition-all duration-500 hover:shadow-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
                }}
              >
                {/* Team Member Photo */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto flex items-center justify-center text-white text-2xl font-semibold group-hover:scale-110 transition-transform duration-500">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-full bg-secondary/20 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                </div>

                {/* Member Info */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-secondary font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium group-hover:bg-secondary/10 group-hover:text-secondary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      {/* <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center text-white transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              Our Commitment to Excellence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: '💫', title: 'Luxury', description: 'Uncompromising quality in every detail' },
                { icon: '❤️', title: 'Care', description: 'Genuine warmth and personalized service' },
                { icon: '🚀', title: 'Innovation', description: 'Continuous improvement and modern solutions' }
              ].map((value, index) => (
                <div key={index} className="text-center p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">{value.title}</h3>
                  <p className="text-white/90">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}