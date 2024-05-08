import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, cart } = useContext(CartContext);

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="bg-blue-50 h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
      <div className="w-[90%] h-auto flex flex-wrap justify-around">
        <div className="w-64 h-64 rounded-xl bg-white flex flex-col items-center mb-12 border-2 p-2">
          <img className="w-24 h-24" src={product.image} alt={product.title} />
          <h1 className="md:text-m mt-6 font-bold text-blue-500 text-xs">
            {product.title}
          </h1>
          <h3 className="text-sm font-bold mt-2 text-blue-300">${product.price}</h3>
          {isInCart ? (
            <button
              className="bg-blue-800 p-1 text-s mt-2 rounded text-blue-100"
              onClick={() => removeFromCart(product.id)}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="bg-blue-800 p-1 text-s mt-2 rounded text-blue-100"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
