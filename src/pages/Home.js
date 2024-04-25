import React from "react";
import Header from "../components/Navbar/Header";

const Home = ({ searchInput, handleSearchInput }) => {
  return (
    <div>
      <Header searchInput={searchInput} handleSearchInput={handleSearchInput} />
      <div className="banner">
        <h2>Welcome to our Online Store!</h2>
        <p>Discover amazing deals on a wide range of products.</p>
      </div>
      <h2>Home Us</h2>
      <p>This is the Home page.</p>
    </div>
  );
};

export default Home;