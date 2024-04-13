import React from 'react';

const ProductCard = ({ product }) => {
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
      <button className="cart-btn">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
