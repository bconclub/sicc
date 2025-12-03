import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-mystic-navy text-white">
      {/* Orange strip at top */}
      <div className="h-1 bg-red-inferno"></div>
      
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/Light.svg" 
                alt="SICC Logo" 
                className="h-16 md:h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Building spaces for life since 1998. Your trusted partner in construction excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-red-inferno transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-inferno transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-inferno transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-inferno transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-red-inferno transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-red-inferno transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work-timeline" className="text-gray-300 hover:text-red-inferno transition-colors">
                  Work Timeline
                </Link>
              </li>
              <li>
                <Link to="/floor-plans" className="text-gray-300 hover:text-red-inferno transition-colors">
                  3D Renders
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Residential Construction</li>
              <li className="text-gray-300">Commercial Buildings</li>
              <li className="text-gray-300">High Rise Projects</li>
              <li className="text-gray-300">Renovation Work</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-300">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>
                  No 35, 1st Floor, 1st Stage, 2nd Phase<br />
                  Chandra Layout, Bangalore-560040
                </span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Phone size={20} className="flex-shrink-0" />
                <span>+91 888 111 7337</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail size={20} className="flex-shrink-0" />
                <span>info@sicc.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
          <p>&copy; {new Date().getFullYear()} South India Civil Contractors. All rights reserved.</p>
          <p className="text-cream">
            Built with <span className="text-red-inferno">❤️</span> at{' '}
            <a 
              href="https://bconclub.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cream underline hover:text-cream/80 transition-colors"
            >
              BCON Club
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
