import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Navbar/Header";
import Footer from "../components/Footer/Footer";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    setUsername("");
    setPassword("");
    navigate('/products');
  };

  return (
    <>
      <Header />
      <div className="bg-blue-50 h-auto w-full flex flex-wrap flex-col items-center p-10">
        <div className="w-full h-auto flex flex-wrap flex-col items-center">
          <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
            Sign In
          </p>
          <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
        </div>
        <div className="w-full max-w-2xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
          <div className="px-6 py-4">
            <form action="#" method="POST" onSubmit={handleSubmit}>
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
                  onChange={handleUsernameChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="mb-2">
                Don't have a account?
                <span className="text-blue-500"><Link to="/signup">Create account</Link></span>
               </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                >
                  Sign In
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

export default Signin;