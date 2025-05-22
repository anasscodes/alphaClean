import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div 
      className="relative bg-cover bg-center h-screen flex items-center" 
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Cleaning Excellence, Every Time
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Professional cleaning services tailored to your needs. Experience spotless homes and workplaces with AlphaClean.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors duration-300 text-center cursor-pointer"
            >
              Our Services
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="inline-block px-6 py-3 bg-white hover:bg-gray-100 text-primary-700 font-medium rounded-md transition-colors duration-300 text-center cursor-pointer"
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;