import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox";
import { CartContext } from "../CartContext/CartContext";

const Header = ({ searchInput, handleSearchInput }) => {
    const { cart } = useContext(CartContext);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
      };

    const handleLogoClick = () => {
        // Reload the page
        window.location.reload();
      };

  return (
    <div className="header">
      <h2  onClick={handleLogoClick}>
        <Link to="/">
          <span>E-</span>
          <span>Shopping</span>
        </Link>
      </h2>
      <div className="navigation-links">
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <SearchBox value={searchInput} onChange={handleSearchInput} />
      <div className="cart-count" onClick={toggleCart}>
        You added {cart.length} items
      </div>
      <div className="navigation-links">
        <Link to="/signin">Sign In</Link>
      </div>
    </div>
  );
};

export default Header;
