import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { Rating } from '@mui/material';
import { Search, FilterList } from '@mui/icons-material';
import "../App.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchVisible, setSearchVisible] = useState(false);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
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

  const isInCart = (product) => cart.some(item => item.id === product.id);

  const handleToggleCart = (product) => {
    isInCart(product) ? removeFromCart(product) : addToCart(product);
  };

  const handleSearch = (event) => {
    const keyword = event.target.value.toLowerCase();
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(keyword)
    );
    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setFilteredProducts(
      category === '' ? products : products.filter(product => product.category === category)
    );
    setFilterDropdownOpen(false);
  };

  const toggleSearchVisibility = () => setSearchVisible(!searchVisible);
  const toggleFilterDropdown = () => setFilterDropdownOpen(!filterDropdownOpen);

  const generateRandomRating = () => Math.floor(Math.random() * 5) + 1;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {filterDropdownOpen && (
        <div className="absolute top-[150px] left-0 right-0 z-10 bg-white border border-gray-300 rounded-lg shadow-lg mx-auto max-w-xs">
          <button
            onClick={() => handleCategoryChange('')}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="mb-6 flex items-center relative gap-4">
        <div className="flex space-x-4 items-center">
          <button
            onClick={toggleSearchVisibility}
            className="flex items-center bg-gray-200 p-2 rounded-lg text-gray-700 md:hidden"
          >
            <Search className="text-gray-500" />
          </button>
          {searchVisible && (
            <input
              type="text"
              placeholder="Search Products"
              onChange={handleSearch}
              className="border-2 border-gray-300 focus:border-[#A68DAD] focus:ring-[#A68DAD] rounded-lg py-2 px-10 w-full md:w-2/3 mt-2 md:mt-0 md:block"
            />
          )}
          
          <button
            onClick={toggleFilterDropdown}
            className="flex items-center bg-gray-200 p-2 rounded-lg text-gray-700 md:hidden"
          >
            <FilterList className="text-gray-500" />
          </button>
        </div>

        <div className="hidden md:flex items-center w-full md:w-2/3 relative">
          <Search className="absolute left-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search Products"
            onChange={handleSearch}
            className="border-2 border-gray-300 focus:border-[#A68DAD] focus:ring-[#A68DAD] rounded-lg py-2 px-10 w-full"
          />
        </div>

        <div className="hidden md:flex items-center">
          <button
            onClick={toggleFilterDropdown}
            className="flex items-center bg-gray-200 p-2 rounded-lg text-gray-700"
          >
            <FilterList className="mr-1" /> Filter by Category
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
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
              <div className="flex justify-between space-x-2 mt-auto">
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
