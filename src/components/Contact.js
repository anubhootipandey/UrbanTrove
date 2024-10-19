import React from 'react';

const Contact = () => {
  return (
    <div className="p-6 max-w-screen-md mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name">
          Name
        </label>
        <input 
          type="text" 
          id="name" 
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A68DAD] focus:border-transparent"
          placeholder="Enter your name"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">
          Email
        </label>
        <input 
          type="email" 
          id="email" 
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A68DAD] focus:border-transparent"
          placeholder="Enter your email"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="message">
          Message
        </label>
        <textarea 
          id="message" 
          rows="4" 
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A68DAD] focus:border-transparent"
          placeholder="Enter your message"
        />
      </div>

      <button className="bg-[#A68DAD] text-white px-6 py-2 rounded hover:bg-[#9279A1] text-sm transition">
        Submit
      </button>
    </div>
  );
};

export default Contact;
