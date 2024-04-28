import React, { useState } from "react";
import Header from "../components/Navbar/Header";
import { Link, useNavigate } from "react-router-dom";
import './styles.css';

const Signin = ({ searchInput, handleSearchInput }) => {
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
    // Reset form fields
    setUsername("");
    setPassword("");
    navigate('/products');
  };

  return (
    <>
      <Header searchInput={searchInput} handleSearchInput={handleSearchInput} />
      <div className="signin-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            Don't have a account?
            <Link to="/signup">Create account</Link>
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Your Online Store</p>
      </footer>
    </>
  );
};

export default Signin;
