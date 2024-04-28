import React from 'react';
import Header from '../components/Navbar/Header';

const About = ({ searchInput, handleSearchInput }) => {
  return (
    <>
        <Header searchInput={searchInput} handleSearchInput={handleSearchInput} />
        <h2>Welcome to About section</h2>
        <footer className="footer">
        <p>&copy; 2024 Your Online Store</p>
      </footer>
    </>
  )
}

export default About;