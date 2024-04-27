import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox";
import { CartContext } from "../CartContext/CartContext";

const Header = ({ searchInput, handleSearchInput }) => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [showCartModal, setShowCartModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Load cart count from local storage on component mount
  useEffect(() => {
    const storedCartCount = localStorage.getItem("cartCount");
    if (storedCartCount) {
      setCartCount(parseInt(storedCartCount));
    }
  }, []);

  // Update cart count and items whenever cart changes
  useEffect(() => {
    const count = cart.length;
    setCartCount(count);
    localStorage.setItem("cartCount", count.toString()); // Store as string
    setCartItems(cart);
  }, [cart]);

  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  const handleLogoClick = () => {
    // Reload the page
    window.location.reload();
  };

  const handleRemoveFromCart = (itemToRemove) => {
    // Remove item from cart
    // Implement your logic here
  };

  const handleBuyNow = () => {
    // Implement buy now functionality
  };

  return (
    <div className="header">
      <h2 onClick={handleLogoClick}>
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
      <div className="cart-count" onClick={toggleCartModal}>
        You added {cartCount} items
      </div>
      <div className={`cart-modal ${showCartModal ? "show" : ""}`}>
      <div className="cart-actions">
          <button onClick={toggleCartModal}>Close</button>
        </div>
        <h3>Cart Items</h3>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <span>{item.title}</span>
                <span>Price: ${item.price}</span>
              </div>
              <div className="buttons">
                <button onClick={() => handleRemoveFromCart(item)}>
                  Remove
                </button>
                <button onClick={handleBuyNow}>Buy</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="navigation-links">
        <Link to="/signin">Sign In</Link>
      </div>
    </div>
  );
};

export default Header;
