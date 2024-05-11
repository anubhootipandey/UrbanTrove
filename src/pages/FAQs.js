import React, { useState } from 'react';
import Header from '../components/Navbar/Header';
import Footer from '../components/Footer/Footer';

const FAQs = ({ searchInput, handleSearchInput }) => {
  // Define FAQ items with questions and answers
  const faqs = [
    { question: 'Question 1?', answer: 'Answer 1.' },
    { question: 'Question 2?', answer: 'Answer 2.' },
    { question: 'Question 3?', answer: 'Answer 3.' },
    // Add more FAQ items as needed
  ];

  // State to manage the active FAQ item
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the active FAQ item
  const toggleActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Header searchInput={searchInput} handleSearchInput={handleSearchInput} />
      <div className="container mx-auto py-8">
      <div className="w-full h-auto flex flex-wrap flex-col items-center">
        <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
        Frequently Asked Questions
        </p>
        <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
      </div>
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <button
                className="flex justify-between items-center w-full p-4 bg-gray-100 rounded-md focus:outline-none"
                onClick={() => toggleActive(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="mt-4">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQs;
