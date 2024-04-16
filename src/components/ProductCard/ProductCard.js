import React, { useContext }  from 'react';
import { CartContext } from '../CartContext/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, cart  } = useContext(CartContext);

  const isInCart = cart.some(item => item.id === product.id);

  return (
    <div className="cards">
      <div className="image">
        <img src={product.image} alt="" />
      </div>
      <div className="title">
        <h1>{product.title}</h1>
      </div>
      <div className="price">
        <h3>${product.price}</h3>
      </div>
      {isInCart ? (
        <button className="cart-btn" onClick={() => removeFromCart(product.id)}>
          Remove from Cart
        </button>
      ) : (
        <button className="cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;
