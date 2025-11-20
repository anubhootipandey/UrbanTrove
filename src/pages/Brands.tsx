import React from "react";
import { motion } from "framer-motion";

const brands = [
  { id: 1, name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
  { id: 2, name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
  { id: 3, name: "Puma", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Puma_logo.svg" },
  { id: 4, name: "Reebok", logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Reebok_2019_logo.svg" },
  { id: 5, name: "Zara", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg" },
  { id: 6, name: "H&M", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" }
];

const Brands: React.FC = () => {
  return (
    <div className="bg-gray-100 max-w-7xl mx-auto px-4 my-8 md:px-8 py-8 md:py-24">
      <h2 className="text-3xl font-bold text-center mb-8">Shop by Brands</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 px-6">
        {brands.map((brand) => (
          <motion.div
            key={brand.id}
            whileHover={{ scale: 1.1 }}
            className="flex justify-center items-center p-4 bg-white rounded-xl cursor-pointer shadow-sm hover:shadow-md transition"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-12 object-contain opacity-80 hover:opacity-100 transition"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
