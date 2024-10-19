import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { Rating } from '@mui/material'; 
import "../App.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true); 
  const { cart, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    setLoading(true);
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        const productsWithRating = response.data.map(product => ({
          ...product,
          rating: generateRandomRating() 
        }));
        setProducts(productsWithRating);
        setFilteredProducts(productsWithRating);
        setLoading(false); 
      })
      .catch(error => {
        console.error(error);
        setLoading(false); 
      });

    axios.get('https://fakestoreapi.com/products/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error(error));
  }, []);

  const isInCart = (product) => {
    return cart.some(item => item.id === product.id);
  };

  const handleToggleCart = (product) => {
    if (isInCart(product)) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  const handleSearch = (event) => {
    const keyword = event.target.value.toLowerCase();
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(keyword)
    );
    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    if (category === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  const generateRandomRating = () => {
    return Math.floor(Math.random() * 5) + 1;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6 flex flex-col md:flex-row items-center">
        <input
          type="text"
          placeholder="Search Products"
          onChange={handleSearch}
          className="border-2 border-gray-300 focus:border-[#A68DAD] focus:ring-[#A68DAD] rounded-lg py-2 px-4 w-full md:w-2/3 mb-4 md:mb-0"
        />
        <label className="md:ml-4 mb-2 md:mb-0 md:mr-2">Category:</label>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border-2 border-gray-300 rounded-lg p-2 w-full md:w-1/3"
        >
          <option value="">All</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-gray-100 rounded-lg shadow-md transform transition-transform hover:scale-105 flex flex-col">
            <img src={product.image} alt={product.title} className="h-64 object-cover rounded-t-lg" />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 text-sm mb-2">${product.price}</p>
              <div className="flex items-center mb-2">
                <Rating name={`rating-${product.id}`} value={product.rating} readOnly />
                <p className="text-gray-500 text-xs ml-2">({Math.floor(Math.random() * 100) + 1})</p>
              </div>
              <div className="flex space-x-2 mt-auto">
                <Link to={`/products/${product.id}`}>
                  <button className="bg-[#A68DAD] hover:bg-[#9279A1] text-white text-sm font-semibold py-2 px-4 rounded-lg">View Details</button>
                </Link>
                <button
                  onClick={() => handleToggleCart(product)}
                  className={`text-sm font-semibold py-2 px-4 rounded-lg ${isInCart(product) ? 'bg-[#C7B198] text-white hover:bg-[#9279A1]' : 'bg-[#A68DAD] text-white hover:bg-[#9279A1]'}`}
                >
                  {isInCart(product) ? 'Remove from Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
