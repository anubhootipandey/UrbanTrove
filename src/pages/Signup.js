import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Navbar/Header";
import Footer from "../components/Footer/Footer";

const Signup = ({ searchInput, handleSearchInput }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    setUsername("");
    setPassword("");
    navigate('/signin');
  };

  return (
    <>
      <Header searchInput={searchInput} handleSearchInput={handleSearchInput} />
      <div className="bg-blue-50 h-auto w-full flex flex-wrap flex-col items-center p-10">
        <div className="w-full h-auto flex flex-wrap flex-col items-center">
          <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
            Create Account
          </p>
          <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
        </div>
        <div className="w-full max-w-2xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
          <div className="px-6 py-4">
            <form action="#" method="POST" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  placeholder="Enter your name..."
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  placeholder="Enter your username..."
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Create Password:
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  placeholder="Create password..."
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;