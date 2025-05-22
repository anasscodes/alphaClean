import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Briefcase, CookingPot, TreePine, Repeat } from 'lucide-react';

const Services: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const services = [
    {
      title: 'Home Cleaning',
      description: 'Comprehensive cleaning for all rooms in your home, including bathrooms, kitchens, and living spaces.',
      icon: <Home className="w-8 h-8 text-primary-600" />,
      image: 'https://images.pexels.com/photos/4239101/pexels-photo-4239101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Office Cleaning',
      description: 'Keep your workplace pristine with our professional office cleaning services.',
      icon: <Building2 className="w-8 h-8 text-primary-600" />,
      image: 'https://images.pexels.com/photos/9198288/pexels-photo-9198288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Commercial Cleaning',
      description: 'Specialized cleaning for retail spaces, hotels, and other commercial properties.',
      icon: <Briefcase className="w-8 h-8 text-primary-600" />,
      image: 'https://images.pexels.com/photos/209271/pexels-photo-209271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Deep Kitchen Cleaning',
      description: 'Thorough cleaning of all kitchen surfaces, appliances, and hard-to-reach areas.',
      icon: <CookingPot className="w-8 h-8 text-primary-600" />,
      image: 'https://images.pexels.com/photos/6196688/pexels-photo-6196688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Garden & Outdoor',
      description: 'Cleaning and maintenance for patios, decks, and outdoor living spaces.',
      icon: <TreePine className="w-8 h-8 text-primary-600" />,
      image: 'https://images.pexels.com/photos/6196222/pexels-photo-6196222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Regular Maintenance',
      description: 'Scheduled cleaning services to keep your space consistently clean.',
      icon: <Repeat className="w-8 h-8 text-primary-600" />,
      image: 'https://images.pexels.com/photos/4107297/pexels-photo-4107297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-12"
      >
        <motion.h2 
          variants={fadeIn} 
          className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
        >
          Our <span className="text-primary-600">Services</span>
        </motion.h2>
        <motion.div 
          variants={fadeIn}
          className="w-24 h-1 bg-primary-500 mx-auto mb-6"
        ></motion.div>
        <motion.p 
          variants={fadeIn}
          className="max-w-2xl mx-auto text-gray-600"
        >
          We offer a wide range of cleaning services to meet all your needs. Our professional team is equipped to handle any cleaning challenge.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;