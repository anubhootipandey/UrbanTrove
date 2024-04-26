import React from 'react';
import Header from '../components/Navbar/Header';

const About = ({ searchInput, handleSearchInput }) => {
  return (
    <>
        <Header searchInput={searchInput} handleSearchInput={handleSearchInput} />
        <h2>Welcome to About section</h2>
    </>
  )
}

export default About;