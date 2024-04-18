import React, { useState, useContext } from "react";
import SearchBox from "../SearchBox/SearchBox";
import { CartContext } from "../CartContext/CartContext";

const Header = ({ searchInput, handleSearchInput }) => {
  const { cart } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const buyItem = (item) => {
    // Implement the buy functionality here
    console.log("Buying item:", item);
  };

  const removeItem = (item) => {
    // Implement the remove functionality here
    console.log("Removing item:", item);
  };

  //Todo: 1-To show the cart title and cart price in the dropdown 
  //2- Fix CSS in this code
  //3-Write buy and remove item functionality

  return (
    <div className="header">
      <h2>
        <span>E-</span>
        <span>Shopping</span>
      </h2>
      <SearchBox value={searchInput} onChange={handleSearchInput} />
      <div className="cart-count" onClick={toggleCart}>
        You added {cart.length} items
      </div>
      {isCartOpen && (
        <div className="cart-dropdown">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} /> 
              <div>{item.title}</div>
              <div>${item.price}</div>
              <div>
                <button onClick={() => buyItem(item)}>Buy</button>
                <button onClick={() => removeItem(item)}>Cancel</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
