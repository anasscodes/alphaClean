import React from 'react';
import { Link } from 'react-scroll';
import { Droplets, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Information */}
          <div>
            <div className="flex items-center mb-6">
              <Droplets className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-bold">AlphaClean</span>
            </div>
            <p className="text-gray-400 mb-6">
              Professional cleaning services tailored to your needs. Experience spotless homes and workplaces with AlphaClean.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="https://wa.me/212600414949" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer block"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors block">
                  Home Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors block">
                  Office Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors block">
                  Commercial Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors block">
                  Deep Kitchen Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors block">
                  Garden & Outdoor
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors block">
                  Regular Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-500"></span>
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <strong className="text-white">Address:</strong> 123 Cleaning Street, Suite 100, Sparkle City, SC 12345
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Phone:</strong> (123) 456-7890
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Email:</strong> info@alphaclean.com
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Hours:</strong> Mon-Fri 8am - 6pm, Sat 9am - 4pm
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} AlphaClean. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;