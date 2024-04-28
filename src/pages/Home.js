import React from "react";
import Header from "../components/Navbar/Header";

const Home = ({ searchInput, handleSearchInput }) => {
  return (
    <>
      <Header searchInput={searchInput} handleSearchInput={handleSearchInput} />
      <div className="banner">
        <h2>Welcome to our Online Store!</h2>
        <p>Discover amazing deals on a wide range of products.</p>
      </div>
      <div className="home-content"> 
      <h2>Featured Products</h2>
        <div className="card-container">
          <div className="card">
            <h3>Lorem Ipsum Product 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et maximus massa.</p>
          </div>
          <div className="card">
            <h3>Lorem Ipsum Product 2</h3>
            <p>Integer consequat lorem eget velit ultrices, eu commodo nisl tempus.</p>
          </div>
          <div className="card">
            <h3>Lorem Ipsum Product 3</h3>
            <p>Phasellus sagittis mi eget neque volutpat, vitae suscipit orci ultrices.</p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Your Online Store</p>
      </footer>
    </>
  );
};

export default Home;