import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 font-sans">
      {/* Contact Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Information</h1>
        <p className="text-gray-600">Say something to start a live chat!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <FaPhone className="text-blue-500 mt-1" />
            <span className="text-gray-700">+012 3456 789</span>
          </div>
          
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-blue-500 mt-1" />
            <span className="text-gray-700">dermog@gmail.com</span>
          </div>
          
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-blue-500 mt-1" />
            <address className="text-gray-700 not-italic">
              152 Dartmouth Street Boston, Massachusetts 02195 United States
            </address>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 mb-2">First Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="1"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Last Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Doc"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input 
              type="tel" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+1 012 3456 789"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Select Subject?</label>
            <div className="flex flex-wrap gap-2">
              {[...Array(4)].map((_, i) => (
                <button 
                  key={i}
                  className="px-4 py-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 text-sm"
                >
                  General inquiry
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Write your message..</label>
            <textarea 
              className="w-full px-4 py-2 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Versioga:"
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
