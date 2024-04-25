import React from "react";
import Header from "../components/Navbar/Header";

const Contact = ({ searchInput, handleSearchInput }) => {
  return (
    <div>
        <Header searchInput={searchInput} handleSearchInput={handleSearchInput} />
      <h2>Contact Us</h2>
      <p>This is the contact page.</p>
    </div>
  );
};

export default Contact;
