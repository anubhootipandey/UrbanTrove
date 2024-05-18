import React, { useState } from "react";
import Header from "../components/Navbar/Header";
import Footer from "../components/Footer/Footer";

const PrivacyPolicy = () => {
  // State to manage the visibility of the privacy policy text
  const [showPolicy, setShowPolicy] = useState(false);

  // Function to toggle the visibility of the privacy policy text
  const togglePolicy = () => {
    setShowPolicy(!showPolicy);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto py-8">
        <div className="w-full h-auto flex flex-wrap flex-col items-center">
          <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
            Privacy Policy
          </p>
          <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
        </div>
        <button
          onClick={togglePolicy}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {showPolicy ? "Hide Policy" : "Show Policy"}
        </button>
        {showPolicy && (
          <div className="mt-4">
            <p>
              This is the privacy policy text. It contains important information
              about how we handle your data. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nulla nec ipsum at justo cursus
              dignissim.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
