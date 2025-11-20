import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const New: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  const newProducts: Product[] = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 19.99,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 24.99,
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 29.99,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
    }
  ];

  useEffect(() => {
    // Fake loading delay
    setTimeout(() => {
      setFeaturedProducts(newProducts);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-14 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-[#f20089] mb-6 text-center">
        New Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading
          ? Array(3)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-white animate-pulse h-80 rounded-lg shadow-md"
                />
              ))
          : featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-100  rounded-lg shadow-lg p-4 flex flex-col cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-64 w-full object-cover mb-4 rounded-md"
                />
                <h3 className="text-lg font-semibold mb-2">
                  {product.title}
                </h3>
                <p className="text-green-600 mb-4">${product.price}</p>
              </motion.div>
            ))}
      </div>
    </div>
  );
};

export default New;
