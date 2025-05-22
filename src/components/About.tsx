import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, ThumbsUp } from 'lucide-react';

const About: React.FC = () => {
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
          About <span className="text-primary-600">AlphaClean</span>
        </motion.h2>
        <motion.div 
          variants={fadeIn}
          className="w-24 h-1 bg-primary-500 mx-auto mb-6"
        ></motion.div>
        <motion.p 
          variants={fadeIn}
          className="max-w-2xl mx-auto text-gray-600"
        >
          Founded in 2012, AlphaClean has been providing exceptional cleaning services to homes and businesses. We are committed to excellence and customer satisfaction.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-lg overflow-hidden shadow-xl"
        >
          <img 
            src="https://images.pexels.com/photos/9462206/pexels-photo-9462206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="AlphaClean Team" 
            className="w-full h-auto"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Why Choose Us?</h3>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Shield className="w-6 h-6 text-primary-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold mb-2">Trusted Professionals</h4>
                <p className="text-gray-600">
                  Our team consists of highly trained and vetted cleaning experts who take pride in their work.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Award className="w-6 h-6 text-primary-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold mb-2">Quality Guaranteed</h4>
                <p className="text-gray-600">
                  We use premium eco-friendly products and industry-leading techniques for the best results.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <ThumbsUp className="w-6 h-6 text-primary-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold mb-2">Customer Satisfaction</h4>
                <p className="text-gray-600">
                  With over 5,000 happy clients, we prioritize your satisfaction with every service.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;