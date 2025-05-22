import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/212600414949?text=Hello%20AlphaClean%21%20I%27m%20interested%20in%20your%20cleaning%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-white" />
    </motion.a>
  );
};

export default WhatsAppButton;