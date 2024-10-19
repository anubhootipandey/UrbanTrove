import React, { useState } from 'react';

const SignInSignUpModal = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (newValue) => {
    setActiveTab(newValue);
  };

  const handleSignIn = () => {
    alert('Sign In');
  };

  const handleSignUp = () => {
    alert('Sign Up');
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-full max-w-lg mx-auto p-6 sm:max-w-md sm:p-8 shadow-lg">

            <div className="flex justify-center mb-6">
              <button
                onClick={() => handleTabChange(0)}
                className={`text-lg font-semibold px-4 py-2 rounded-t-md transition-colors ${
                  activeTab === 0
                    ? 'border-b-2 border-[#A68DAD] text-[#A68DAD]'
                    : 'text-gray-500'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => handleTabChange(1)}
                className={`text-lg font-semibold px-4 py-2 rounded-t-md transition-colors ${
                  activeTab === 1
                    ? 'border-b-2 border-[#A68DAD] text-[#A68DAD]'
                    : 'text-gray-500'
                }`}
              >
                Sign Up
              </button>
            </div>

            <div className="space-y-4">
              {activeTab === 0 ? (
                <>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A68DAD]"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A68DAD]"
                  />
                </>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A68DAD]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A68DAD]"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A68DAD]"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A68DAD]"
                  />
                </>
              )}
            </div>

            <div className="mt-6 flex justify-between items-center">
              {activeTab === 0 ? (
                <button
                  onClick={handleSignIn}
                  className="bg-[#A68DAD] text-white px-4 py-2 rounded-md hover:bg-purple-500 transition"
                >
                  Sign In
                </button>
              ) : (
                <button
                  onClick={handleSignUp}
                  className="bg-[#A68DAD] text-white px-4 py-2 rounded-md hover:bg-purple-500 transition"
                >
                  Sign Up
                </button>
              )}
              <button
                onClick={onClose}
                className="text-[#A68DAD] border border-[#A68DAD] px-4 py-2 rounded-md hover:bg-purple-50 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignInSignUpModal;
