import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const sizes = ['S', 'M', 'L', 'XL'];

  const handleBuy = (product) => {
    navigate('/transaction', { state: { product } });
  };

  const getTotalCartAmount = () => {
    return cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-2xl md:text-3xl mb-6">Shopping Cart</h2>
      {cart.length === 0 ? (
        <h4 className="text-xl">Your cart is empty</h4>
      ) : (
        <div className="bg-white shadow-lg p-4 md:p-6">
          <div className="grid gap-4">
            {cart.map((product) => (
              <div key={product.id} className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <img src={product.image} alt={product.title} className="w-24 h-24 object-contain" />
                  <div className="sm:ml-4 text-center sm:text-left">
                    <h4 className="text-lg">{product.title}</h4>
                    <p className="text-sm">${product.price}</p>
                    <select
                      className="border rounded-md p-1 mt-2"
                      value={product.size || ''}
                      onChange={(e) => (product.size = e.target.value)}
                    >
                      {sizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                    <input
                      type="number"
                      value={product.quantity || 1}
                      min="1"
                      className="border rounded-md p-1 mt-2 w-20"
                      onChange={(e) => (product.quantity = e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-2">
                  <button
                    onClick={() => removeFromCart(product)}
                    className="bg-[#A68DAD] hover:bg-[#97829c] text-white py-2 px-4 rounded-md"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => handleBuy(product)}
                    className="bg-[#A68DAD] hover:bg-[#97829c] text-white py-2 px-4 rounded-md"
                  >
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between mt-8 gap-4">
        <div className="max-w-md bg-white p-6 shadow-lg">
          <h4 className="text-2xl mb-4">Cart Totals</h4>
          <div className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr className="mb-2" />
          <div className="flex justify-between mb-2">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <hr className="mb-2" />
          <div className="flex justify-between">
            <h4 className="text-xl">Total</h4>
            <h4 className="text-xl">${getTotalCartAmount()}</h4>
          </div>
          <button className="bg-[#A68DAD] hover:bg-[#97829c] text-white py-2 px-4 rounded-md mt-4 w-full">
            Proceed to Checkout
          </button>
        </div>

        <div className="w-full md:w-1/2 bg-white p-6 shadow-lg">
          <p className="mb-4">If you have a promo code, enter it here</p>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Promo Code"
              className="border border-purple-300 rounded-none p-2 w-full mr-2"
            />
            <button className="bg-[#A68DAD] hover:bg-[#97829c] text-white py-2 px-4 rounded-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
