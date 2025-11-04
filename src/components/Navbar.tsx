// components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Rooms', href: '/rooms' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'About', href: '/about' },
    { name: 'Booking', href: '/booking' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">SH</span>
            </div>
            <span className="text-2xl font-bold text-primary">Shanda</span><span className='text-2xl font-bold text-secondary'>Hotel</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-secondary text-primary px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`w-6 h-0.5 bg-primary transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-primary transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-primary transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary font-medium py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors w-full">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}