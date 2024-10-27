import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); 

  const faqData = [
    {
      question: "What is the return policy?",
      answer: "Our return policy allows you to return products within 30 days of purchase. Please ensure the items are in their original condition."
    },
    {
      question: "How do I track my order?",
      answer: "You can track your order using the tracking number provided in your confirmation email. Visit our order tracking page and enter your tracking number."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept various payment methods including credit/debit cards, PayPal, and bank transfers."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can contact our customer support via email at support@ecommerce.com or call us at (123) 456-7890. Our support team is available 24/7."
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    <div className="p-6 mt-4">
      <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={index} className="mb-4 bg-gray-100 rounded-lg">
          <div
            onClick={() => toggleFAQ(index)}
            className="cursor-pointer p-4 bg-gray-200 rounded-t-lg flex justify-between items-center"
          >
            <h4 className="text-xl font-medium">{faq.question}</h4>
            <span className="text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition-transform duration-200 ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
          {openIndex === index && (
            <div className="p-4 bg-white">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
