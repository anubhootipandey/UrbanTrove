import { useParams, useNavigate } from "react-router-dom";
import products, { type Product } from "../data/products";
import { Heart, Star, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams<{ id?: string }>();
  const product = products.find((p) => p.id === Number(id));
  const [favorites, setFavorites] = useState<number[]>([]);
  const navigate = useNavigate();

  if (!product)
    return <div className="text-center py-8">Product not found.</div>;

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleBack = () => {
    void navigate(-1);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <button
        onClick={handleBack}
        className="flex items-center gap-2 text-purple-700 font-semibold mb-6 hover:underline"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="bg-gray-100 w-full md:w-1/2 h-80 flex items-center justify-center text-gray-400">
          Image
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-purple-700">{product.name}</h1>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-gray-600">{product.review}</span>
          </div>
          <p className="text-gray-600">{product.detailedDescription}</p>
          <div className="flex items-center gap-4">
            <span className="text-green-400 font-semibold text-xl">
              ${product.price}
            </span>
            {product.sale && (
              <span className="text-red-500 font-semibold text-sm px-2 py-1 bg-red-100 rounded">
                {product.sale}
              </span>
            )}
          </div>

          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() => toggleFavorite(product.id)}
              className={`p-2 rounded-full border ${
                favorites.includes(product.id)
                  ? "bg-purple-700 text-white"
                  : "text-gray-700 border-gray-300"
              }`}
            >
              <Heart className="w-5 h-5" />
            </button>
            <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-purple-700 mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p: Product) => (
              <div
                key={p.id}
                className="border border-gray-200 rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col cursor-pointer"
                onClick={() => navigate(`/product/${p.id}`)}
              >
                <div className="bg-gray-100 h-32 rounded mb-2 flex items-center justify-center text-gray-400">
                  Image
                </div>
                <h3 className="text-purple-700 font-semibold truncate">
                  {p.name}
                </h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-600 text-sm">{p.review}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
