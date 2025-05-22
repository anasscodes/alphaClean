import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
    
  //   if (validateForm()) {
  //     // In a real application, you would submit the form data to a server here
  //     console.log('Form submitted:', formData);
  //     setSubmitted(true);
  //     // Reset form
  //     setFormData({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       service: '',
  //       message: ''
  //     });
  //   }
  // };
  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (validateForm()) {
    emailjs.send(
      'service_mzlhn37',       // from EmailJS dashboard
      'template_if6co1f',      // from EmailJS dashboard
      formData,
      'OhsncIpq9V4hhrDk-'           // or public key (starts with 'public_')
    )
    .then((result) => {
      console.log(result.text);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, (error) => {
      console.error(error.text);
    });
  }
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
          Get In <span className="text-primary-600">Touch</span>
        </motion.h2>
        <motion.div 
          variants={fadeIn}
          className="w-24 h-1 bg-primary-500 mx-auto mb-6"
        ></motion.div>
        <motion.p 
          variants={fadeIn}
          className="max-w-2xl mx-auto text-gray-600"
        >
          Ready to experience the best cleaning service? Contact us today for a free quote or to schedule your first cleaning.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Phone className="w-6 h-6 text-primary-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold mb-1">Phone</h4>
                <p className="text-gray-600">(123) 456-7890</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Mail className="w-6 h-6 text-primary-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold mb-1">Email</h4>
                <p className="text-gray-600">info@alphaclean.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <MapPin className="w-6 h-6 text-primary-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold mb-1">Address</h4>
                <p className="text-gray-600">123 Cleaning Street, Suite 100<br />Sparkle City, SC 12345</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Business Hours</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-2 gap-2">
              <div className="text-gray-700">Monday - Friday:</div>
              <div className="text-gray-900 font-medium">8:00 AM - 6:00 PM</div>
              
              <div className="text-gray-700">Saturday:</div>
              <div className="text-gray-900 font-medium">9:00 AM - 4:00 PM</div>
              
              <div className="text-gray-700">Sunday:</div>
              <div className="text-gray-900 font-medium">Closed</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {submitted ? (
            <div className="bg-success-50 border border-success-200 rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center">
                  <Send className="w-8 h-8 text-success-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-success-700 mb-2">Message Sent!</h3>
              <p className="text-success-600 mb-4">Thank you for contacting AlphaClean. We'll get back to you shortly.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 bg-success-600 text-white rounded-md hover:bg-success-700 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Request a Quote</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                        errors.name ? 'border-error-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.name && <p className="mt-1 text-sm text-error-600">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                        errors.email ? 'border-error-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-sm text-error-600">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                        errors.phone ? 'border-error-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.phone && <p className="mt-1 text-sm text-error-600">{errors.phone}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                        errors.service ? 'border-error-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select a service</option>
                      <option value="home">Home Cleaning</option>
                      <option value="office">Office Cleaning</option>
                      <option value="commercial">Commercial Cleaning</option>
                      <option value="kitchen">Deep Kitchen Cleaning</option>
                      <option value="outdoor">Garden & Outdoor</option>
                      <option value="regular">Regular Maintenance</option>
                    </select>
                    {errors.service && <p className="mt-1 text-sm text-error-600">{errors.service}</p>}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors duration-300"
                >
                  Submit Request
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;