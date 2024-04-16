import React, { useContext } from "react";
import SearchBox from "../SearchBox/SearchBox";
import { CartContext } from "../CartContext/CartContext";

const Header = ({ searchInput, handleSearchInput }) => {
  const { cart } = useContext(CartContext);

  return (
    <div className="header">
      <h2>
        <span>E-</span>
        <span>Shopping</span>
      </h2>
      <SearchBox value={searchInput} onChange={handleSearchInput} />
      <div className="cart-count">
        You added {cart.length} items
      </div>
    </div>
  );
};

export default Header;
