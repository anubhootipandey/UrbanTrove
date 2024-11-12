import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';
import { AddCircle, RemoveCircle } from '@mui/icons-material';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { cart, addToCart, removeFromCart } = useCart();
  const [loading, setLoading] = useState(true); 
  const [suggestedProducts, setSuggestedProducts] = useState([]); 

  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
        return axios.get(`https://fakestoreapi.com/products/category/${response.data.category}`);
      })
      .then((response) => {
        setSuggestedProducts(response.data.filter(item => item.id !== parseInt(id)));
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  const isInCart = (product) => {
    return cart.some(item => item.id === product.id);
  };

  const handleAddRemoveCart = () => {
    if (isInCart(product)) {
      removeFromCart(product);
    } else {
      addToCart({ ...product, size, quantity });
    }
  };

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8">
      {product && (
        <div className="flex flex-col md:flex-row items-start mb-4 bg-white rounded-lg shadow-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full md:w-1/3 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
          />
          <div className="flex-1 p-6">
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-xl font-semibold mb-2">${product.price}</p>
            <p className="text-gray-700 mb-4">{product.description}</p>

            <div className="flex items-center mb-4">
              <div className="mr-4">
                <label className="block text-gray-700 font-semibold mb-1">Size</label>
                <select
                  value={size}
                  onChange={handleSizeChange}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select Size</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>

              <div className="flex items-center">
                <label className="mr-2 text-gray-700 font-semibold">Quantity:</label>
                <button
                  onClick={handleDecrement}
                  className="p-1 border border-gray-300 rounded-full hover:bg-gray-100"
                >
                  <RemoveCircle className="w-5 h-5 text-gray-500" />
                </button>
                <span className="mx-2">{quantity}</span>
                <button
                  onClick={handleIncrement}
                  className="p-1 border border-gray-300 rounded-full hover:bg-gray-100"
                >
                  <AddCircle className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddRemoveCart}
              className="bg-[#A68DAD] text-white px-4 py-2 rounded-lg hover:bg-[#8a778f] transition"
            >
              {isInCart(product) ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      )}

      {suggestedProducts.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Suggested Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {suggestedProducts.map((suggestedProduct) => (
              <div key={suggestedProduct.id} className="bg-white rounded-lg shadow-lg p-4">
                <img
                  src={suggestedProduct.image}
                  alt={suggestedProduct.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold">{suggestedProduct.title}</h3>
                <p className="text-gray-700">${suggestedProduct.price}</p>
                <button
                  onClick={() => addToCart(suggestedProduct)}
                  className="mt-2 bg-[#A68DAD] text-white px-4 py-2 rounded-lg hover:bg-[#8a778f] transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
