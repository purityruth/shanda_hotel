export interface Room {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  amenities: string[];
}

export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Facility {
  id: number;
  name: string;
  icon: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: 1,
    icon: '💳',
    title: 'Direct Bookings & Revenue Growth',
    description: 'Increase direct bookings by 40% and reduce commission fees with our integrated booking engine.'
  },
  {
    id: 2,
    icon: '🤖',
    title: 'Guest Experience Automation',
    description: 'Automate check-ins, messaging, and personalized guest experiences throughout their stay.'
  },
  {
    id: 3,
    icon: '⚡',
    title: 'Operational Efficiency & PMS Integration',
    description: 'Seamlessly integrate with your existing Property Management System for streamlined operations.'
  },
  {
    id: 4,
    icon: '⭐',
    title: 'Loyalty & Repeat Guests',
    description: 'Build guest loyalty programs that increase repeat bookings by up to 60%.'
  }
];

export const rooms: Room[] = [
  {
    id: 1,
    name: 'Standard Room',
    description: 'Comfortable and elegant room with modern amenities, perfect for business or leisure travelers.',
    price: 'From Ksh 12,500 / night',
    image: '/api/placeholder/400/300',
    amenities: ['Free WiFi', 'Air Conditioning', 'Flat Screen TV', 'Coffee Maker']
  },
  {
    id: 2,
    name: 'Deluxe Suite',
    description: 'Spacious suite with separate living area, premium furnishings, and stunning city views.',
    price: 'From Ksh 18,900 / night',
    image: '/api/placeholder/400/300',
    amenities: ['Free WiFi', 'Mini Bar', 'Jacuzzi', 'City View', 'Room Service']
  },
  {
    id: 3,
    name: 'Executive Suite',
    description: 'Luxurious suite with premium amenities, perfect for extended stays and special occasions.',
    price: 'From Ksh 25,000 / night',
    image: '/api/placeholder/400/300',
    amenities: ['Free WiFi', 'Private Balcony', 'Kitchenette', 'Premium Toiletries', 'Concierge Service']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Hotel Manager',
    content: 'Fikira1 transformed our booking process. Direct bookings increased by 45% in just 3 months!',
    rating: 5,
    avatar: '/api/placeholder/100/100'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'General Manager',
    content: 'The guest experience automation has saved us countless hours and improved our guest satisfaction scores dramatically.',
    rating: 5,
    avatar: '/api/placeholder/100/100'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Operations Director',
    content: 'Seamless PMS integration and the operational tools have made our team more efficient than ever before.',
    rating: 4,
    avatar: '/api/placeholder/100/100'
  }
];

export const facilities: Facility[] = [
  {
    id: 1,
    name: 'Swimming Pool',
    icon: '🏊',
    description: 'Infinity pool with panoramic city views'
  },
  {
    id: 2,
    name: 'Luxury Spa',
    icon: '💆',
    description: 'Full-service spa with expert therapists'
  },
  {
    id: 3,
    name: 'Fitness Center',
    icon: '💪',
    description: '24/7 gym with modern equipment'
  },
  {
    id: 4,
    name: 'Conference Rooms',
    icon: '💼',
    description: 'Meeting spaces for business events'
  },
  {
    id: 5,
    name: 'Airport Transfer',
    icon: '🚗',
    description: 'Complimentary airport shuttle service'
  },
  {
    id: 6,
    name: 'Fine Dining',
    icon: '🍽️',
    description: 'Award-winning restaurants and bars'
  }
];