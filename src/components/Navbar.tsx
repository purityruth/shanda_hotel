// components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, Star } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Rooms', href: '/rooms' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-2' 
          : 'bg-white/90 backdrop-blur-lg shadow-lg py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 group"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105">
                  <span className="text-white font-bold text-xl">SH</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary leading-6">Shanda</span>
                <span className="text-2xl font-bold text-secondary leading-6">Hotel</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group px-4 py-2"
                  onMouseEnter={() => setActiveLink(link.href)}
                >
                  <span className={`relative z-10 font-medium transition-all duration-300 ${
                    activeLink === link.href 
                      ? 'text-secondary' 
                      : 'text-gray-700 hover:text-primary'
                  }`}>
                    {link.name}
                  </span>
                  
                  {/* Animated underline */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-500 ${
                    activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                  
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </Link>
              ))}
            </div>

            {/* Desktop CTA Section */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Phone Number */}
              <div className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+254 712 345 678</span>
              </div>
              
              {/* Divider */}
              <div className="w-px h-6 bg-gray-300"></div>
              
              {/* Book Now Button */}
              <button className="group relative bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center space-x-2">
                  <Star className="w-4 h-4" />
                  <span>Book Now</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 relative group"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className={`w-6 h-6 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
                {isOpen ? (
                  <X className="w-6 h-6 text-primary transition-all duration-500" />
                ) : (
                  <Menu className="w-6 h-6 text-primary transition-all duration-500" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}>
          <div className="container mx-auto px-4 pt-24 pb-8 h-full flex flex-col">
            {/* Mobile Navigation Links */}
            <div className="flex-1 space-y-6">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block text-2xl font-semibold py-4 transition-all duration-500 ${
                    activeLink === link.href 
                      ? 'text-secondary translate-x-4' 
                      : 'text-gray-700 hover:text-primary'
                  }`}
                  style={{ transitionDelay: isOpen ? `${index * 100}ms` : '0ms' }}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="flex items-center space-x-4">
                    <div className={`w-2 h-2 rounded-full bg-secondary transition-all duration-500 ${
                      activeLink === link.href ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                    <span>{link.name}</span>
                  </span>
                </Link>
              ))}
            </div>

            {/* Mobile CTA Section */}
            <div className="space-y-6 pt-8 border-t border-gray-200">
              {/* Phone Number */}
              <div className="flex items-center justify-center space-x-3 text-lg text-gray-700">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">+254 712 345 678</span>
              </div>
              
              {/* Book Now Button */}
              <button 
                className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                <span className="flex items-center justify-center space-x-2">
                  <Star className="w-5 h-5" />
                  <span>Book Now</span>
                </span>
              </button>
              
              {/* Additional Info */}
              <div className="text-center text-gray-500 text-sm">
                <p>24/7 Reservation Support</p>
                <p className="text-secondary font-semibold mt-1">Best Rate Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Background Blur Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}