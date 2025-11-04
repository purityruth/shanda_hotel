// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Fikira1</h3>
            <p className="text-gray-400 mb-4">
              Transforming hotels through digital innovation and exceptional guest experiences.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <button
                  key={social}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {['Home', 'Rooms', 'Facilities', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <button className="hover:text-white transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Hotel Street, Nairobi</li>
              <li>+254 712 345 678</li>
              <li>info@fikira1.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe for updates and offers
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg flex-1 text-gray-900"
              />
              <button className="bg-secondary text-primary px-4 py-2 rounded-r-lg font-semibold hover:bg-yellow-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Fikira1 Digital Transformation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}