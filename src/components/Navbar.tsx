import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  {
    name: 'Our Work',
    href: '#',
    dropdown: [
  { name: 'Work Timeline', href: '/work-timeline' },
  { name: 'Project Photos', href: '/project-photos' },
  { name: 'Project Videos', href: '/project-videos' },
    ],
  },
  {
    name: 'Resources',
    href: '#',
    dropdown: [
      { name: 'Technical Specifications', href: '/technical-specifications' },
  { name: 'Assets & Manpower', href: '/assets-manpower' },
      { name: '3D Renders', href: '/floor-plans' },
    ],
  },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [openDropdown]);

  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 -mb-20 ${
        isScrolled 
          ? 'bg-[#F5EBD7]/80 backdrop-blur-md shadow-lg' 
          : isHomePage
            ? 'bg-white/20 backdrop-blur-md'
            : 'bg-mystic-navy/80 backdrop-blur-md'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src={isScrolled ? "/SICC.png" : "/Light.svg"} 
              alt="SICC Logo" 
              className="h-16 md:h-18 lg:h-20 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navigation.map((item) => {
              if (item.dropdown) {
                const isActive = item.dropdown.some(
                  (subItem) => location.pathname === subItem.href
                );
                return (
                  <div
                    key={item.name}
                    className="relative"
                    ref={openDropdown === item.name ? dropdownRef : null}
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center space-x-1 ${
                        isActive
                          ? 'text-white bg-red-inferno'
                          : isScrolled
                            ? 'text-[#1B3A52] hover:text-white hover:bg-red-inferno/80'
                            : 'text-white hover:bg-white/20'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-1 w-56 bg-mystic-navy rounded-md shadow-lg border border-red-inferno/20 overflow-hidden z-50"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                              className={`block px-4 py-2 text-sm transition-colors ${
                                location.pathname === subItem.href
                                  ? 'text-white bg-red-inferno'
                                  : 'text-white hover:bg-red-inferno/80'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
              <Link
                key={item.name}
                to={item.href}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === item.href
                    ? 'text-white bg-red-inferno'
                    : isScrolled
                      ? 'text-[#1B3A52] hover:text-white hover:bg-red-inferno/80'
                      : 'text-white hover:bg-white/20'
                }`}
              >
                {item.name}
              </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden inline-flex items-center justify-center p-2 rounded-md transition-colors ${
              isScrolled
                ? 'text-[#1B3A52] hover:bg-red-inferno hover:text-white'
                : 'text-white hover:bg-white/20'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-cream/90 backdrop-blur-md"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => {
                  if (item.dropdown) {
                    const isDropdownOpen = openDropdown === item.name;
                    const isActive = item.dropdown.some(
                      (subItem) => location.pathname === subItem.href
                    );
                    return (
                      <div key={item.name}>
                        <button
                          onClick={() =>
                            setOpenDropdown(isDropdownOpen ? null : item.name)
                          }
                          className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium rounded-md transition-colors ${
                            isActive
                              ? 'text-white bg-red-inferno'
                              : 'text-mystic-navy hover:bg-red-inferno/10'
                          }`}
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            size={20}
                            className={`transition-transform ${
                              isDropdownOpen ? 'rotate-180' : ''
                            } ${isActive ? 'text-white' : 'text-mystic-navy'}`}
                          />
                        </button>
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden pl-4"
                            >
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  onClick={() => {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                    setIsOpen(false);
                                  }}
                                  className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                                    location.pathname === subItem.href
                                      ? 'text-white bg-red-inferno'
                                      : 'text-mystic-navy hover:bg-red-inferno/10'
                                  }`}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }
                  return (
                  <Link
                    key={item.name}
                    to={item.href}
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setIsOpen(false);
                      }}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      location.pathname === item.href
                        ? 'text-white bg-red-inferno'
                        : 'text-mystic-navy hover:bg-red-inferno/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
