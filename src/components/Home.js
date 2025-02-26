import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PosterImg from '../assets/shopping.png';
import banner from '../assets/banner.png';
import clothingBrand from "../assets/clothing-brand.jpeg";
import { Shop } from '@mui/icons-material';

const Home = () => {
  const [electronicsProducts, setElectronicsProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/electronics')
      .then(response => response.json())
      .then(data => {
        setElectronicsProducts(data);
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching electronics products:', error);
        setLoading(false); 
      });
  }, []);

  const featuredProducts = [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 19.99,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts',
      price: 24.99,
      image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    },
    {
      id: 3,
      title: 'Mens Cotton Jacket',
      price: 29.99,
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    },
  ];

  const clothingBrands = [
    {
      id: 1,
      name: 'Brand 1',
      image: clothingBrand,
    },
    {
      id: 2,
      name: 'Brand 2',
      image: clothingBrand,
    },
    {
      id: 3,
      name: 'Brand 3',
      image: clothingBrand,
    },
    {
      id: 4,
      name: 'Brand 4',
      image: clothingBrand,
    },
  ];

  const SkeletonCard = () => (
    <div className="bg-gray-200 animate-pulse rounded-lg shadow-lg p-4 flex flex-col">
      <div className="h-64 bg-gray-300 mb-4 rounded"></div>
      <div className="h-6 bg-gray-300 mb-2 rounded"></div>
      <div className="h-6 bg-gray-300 mb-2 rounded w-1/2"></div>
      <div className="h-8 bg-gray-300 rounded"></div>
    </div>
  );

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row items-center justify-center mb-8 mt-10 space-y-6 md:space-y-0">
        <motion.img 
          src={PosterImg} 
          alt="Welcome Banner" 
          className="w-full md:w-1/2"
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="md:w-1/2 text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to UrbanTrove <Shop /></h1>
          <p className="text-lg mb-6">Explore our wide range of products and find the perfect item for you.</p>
          <Link to="/products" className="bg-[#A68DAD] text-white py-2 px-4 rounded hover:bg-[#97829c] transition-colors inline-flex items-center">
            Explore Now <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>

      <div className="bg-gray-100 p-6 text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading 
            ? Array(3).fill(<SkeletonCard />) 
            : featuredProducts.map((product) => (
                <motion.div 
                  key={product.id}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-white rounded-lg shadow-lg p-4 flex flex-col"
                >
                  <img src={product.image} alt={product.title} className="h-64 w-full object-cover mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">${product.price}</p>
                  <Link to={`/products/${product.id}`} className="bg-[#A68DAD] text-white py-2 px-4 rounded hover:bg-[#97829c] transition-colors text-sm">
                    View Details
                  </Link>
                </motion.div>
              ))
          }
        </div>
      </div>

      <div className="p-6 text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Clothing Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {clothingBrands.map((brand) => (
            <motion.img 
              key={brand.id} 
              src={brand.image} 
              alt={brand.name}
              className="h-32 w-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          ))}
        </div>
      </div>

      <div className="bg-gray-100 p-6 flex items-center mb-8">
        <motion.img 
          src={banner} 
          alt="Special Collection" 
          className="w-full md:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="md:w-1/2 ml-6">
          <h2 className="text-2xl font-bold mb-4 text-[#A68DAD]">Discover Our Special Collection</h2>
          <Link to="/special-collection" className="bg-[#A68DAD] text-white py-2 px-4 rounded hover:bg-[#97829c] transition-colors inline-flex items-center">
            Explore Now <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>

      <div className="p-6 text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Popular Electronics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading 
            ? Array(3).fill(<SkeletonCard />) 
            : electronicsProducts.map((product) => (
                <motion.div 
                  key={product.id}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-white rounded-lg shadow-lg p-4 flex flex-col"
                >
                  <img src={product.image} alt={product.title} className="h-64 w-full object-cover mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">${product.price}</p>
                  <Link to={`/products/${product.id}`} className="bg-[#A68DAD] text-white py-2 px-4 rounded hover:bg-[#97829c] transition-colors text-sm">
                    View Details
                  </Link>
                </motion.div>
              ))
          }
        </div>
      </div>
      <div className="bg-gray-100 p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-lg mb-4">Subscribe to our newsletter to receive updates on new products and special offers.</p>
        <div className="flex justify-center">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="border border-gray-300 p-2 rounded mr-2"
          />
          <button className="bg-[#A68DAD] text-white py-2 px-4 rounded hover:bg-[#97829c] transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
