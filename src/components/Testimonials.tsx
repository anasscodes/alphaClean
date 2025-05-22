import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: "AlphaClean transformed my home! Their attention to detail is amazing. I've been using their services monthly, and my house has never looked better.",
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Office Manager',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'As an office manager, I needed reliable cleaning services for our workspace. AlphaClean exceeded my expectations with their professionalism and thorough cleaning.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Restaurant Owner',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'Running a restaurant requires impeccable cleanliness. AlphaClean helps us maintain our high standards. Their deep kitchen cleaning service is exceptional.',
      rating: 4
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

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
          What Our <span className="text-primary-600">Clients Say</span>
        </motion.h2>
        <motion.div 
          variants={fadeIn}
          className="w-24 h-1 bg-primary-500 mx-auto mb-6"
        ></motion.div>
        <motion.p 
          variants={fadeIn}
          className="max-w-2xl mx-auto text-gray-600"
        >
          We take pride in our work and the satisfaction of our clients. Here's what some of them have to say about our services.
        </motion.p>
      </motion.div>

      <div className="max-w-4xl mx-auto relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center mb-6">
              <img 
                src={testimonials[current].image} 
                alt={testimonials[current].name} 
                className="w-20 h-20 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800">{testimonials[current].name}</h3>
                <p className="text-gray-600">{testimonials[current].role}</p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-4 h-4 ${i < testimonials[current].rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 italic text-lg mb-6">"{testimonials[current].quote}"</p>
          </motion.div>
        </AnimatePresence>
        
        <div className="flex justify-center mt-8 space-x-4">
          <button 
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-white shadow-md text-primary-600 hover:bg-primary-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex space-x-2 items-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  current === index ? 'bg-primary-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-white shadow-md text-primary-600 hover:bg-primary-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;