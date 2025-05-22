import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="flex items-center cursor-pointer"
            >
              <Droplets className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-primary-700">
                AlphaClean
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={`text-sm font-medium transition-colors duration-300 cursor-pointer ${
                    scrolled
                      ? 'text-gray-700 hover:text-primary-600'
                      : 'text-gray-800 hover:text-primary-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="px-4 py-2 rounded-md text-white bg-primary-600 hover:bg-primary-700 text-sm font-medium transition-colors duration-300 cursor-pointer"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={toggleMenu}
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary-600 hover:bg-primary-700 cursor-pointer"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;