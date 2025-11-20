import { Star } from "lucide-react";
import { kidsProducts } from "../../data/category";

export default function Kids() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#f20089] mb-6 text-center">
            Kids Products
          </h2>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {kidsProducts.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
              >
                <div className="bg-gray-100 h-40 rounded mb-4 flex items-center justify-center text-gray-400">
                  Image
                </div>
    
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    <h3
                      className="text-gray-900 font-semibold text-lg truncate cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-600 text-sm">{product.review}</span>
                    </div>
                  </div>
    
                  <p className="text-gray-600 text-sm mb-2 truncate">{product.description}</p>
    
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-400 font-semibold">${product.price}</span>
                    {product.sale && (
                      <span className="text-red-500 font-semibold text-xs px-1 bg-red-100 rounded">
                        {product.sale}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  );
}
