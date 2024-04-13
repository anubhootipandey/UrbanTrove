import React from "react";
import SearchBox from "../SearchBox/SearchBox";

const Header = ({ searchInput, handleSearchInput }) => {
  return (
    <div className="header">
      <h2>
        <span>Online</span>
        <span>Store</span>
      </h2>
      <SearchBox value={searchInput} onChange={handleSearchInput} />
    </div>
  );
};

export default Header;
