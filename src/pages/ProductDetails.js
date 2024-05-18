import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer/Footer';
import Header from '../components/Navbar/Header';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error("Error fetching the product details", error);
      });
  }, [id]);

  const handleAddToCart = () => {
    // Functionality to add the product with selected quantity and size to the cart
    console.log(`Product added to cart: ${product.title}, Quantity: ${quantity}, Size: ${size}`);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <img src={product.image} alt={product.title} className="w-full md:w-1/3 h-auto object-contain p-4" />
            <div className="p-6 w-full md:w-2/3">
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <p className="text-2xl text-gray-800 mb-4">Price: ${product.price}</p>
              <div className="flex items-center mb-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="mb-4">
                <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-700">Quantity</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map(num => (
                    <button
                      key={num}
                      onClick={() => setQuantity(num)}
                      className={`px-4 py-2 ${quantity === num ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded hover:bg-blue-600 transition duration-200`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="size" className="block mb-2 text-sm font-medium text-gray-700">Size</label>
                <div className="flex space-x-2">
                  {['S', 'M', 'L', 'XL'].map(sizeOption => (
                    <button
                      key={sizeOption}
                      onClick={() => setSize(sizeOption)}
                      className={`px-4 py-2 ${size === sizeOption ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded hover:bg-blue-600 transition duration-200`}
                    >
                      {sizeOption}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
