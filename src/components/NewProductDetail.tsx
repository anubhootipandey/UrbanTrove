import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Star, Heart } from "lucide-react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: { rate: number };
}

const NewProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [suggestedProducts, setSuggestedProducts] = useState<Product[]>([]);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);

        return axios.get(
          `https://fakestoreapi.com/products/category/${res.data.category}`
        );
      })
      .then((res) => {
        setSuggestedProducts(
          res.data.filter((item: Product) => item.id !== Number(id))
        );
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () =>
    setQuantity((q) => (q > 1 ? q - 1 : q));

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const handleBack = () => {
    void navigate(-1);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin border-8 border-gray-200 border-t-purple-500 rounded-full w-20 h-20"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">

      {/* BACK BUTTON */}
      <button
        onClick={handleBack}
        className="flex items-center gap-2 text-purple-700 font-semibold mb-6 hover:underline"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      {/* MAIN PRODUCT CARD */}
      {product && (
        <div className="flex flex-col md:flex-row gap-8">

          {/* IMAGE AREA */}
          <div className="bg-gray-100 w-full md:w-1/2 h-80 flex items-center justify-center rounded-lg">
            <img
              src={product.image}
              alt={product.title}
              className="h-full object-contain p-4"
            />
          </div>

          {/* PRODUCT DETAILS */}
          <div className="flex-1 flex flex-col gap-4">

            <h1 className="text-3xl font-bold text-purple-700">
              {product.title}
            </h1>

            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-600">
                {product.rating?.rate ?? 4.2}
              </span>
            </div>

            <p className="text-gray-600">{product.description}</p>

            <div className="text-green-500 font-semibold text-xl">
              ${product.price}
            </div>

            {/* SIZE + QUANTITY */}
            <div className="flex items-center gap-6 mt-4">
              {/* Size */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Size
                </label>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select Size</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Quantity
                </label>
                <div className="flex items-center border rounded-full px-3 py-1 border-gray-300">
                  <button
                    onClick={handleDecrement}
                    className="px-3 text-xl hover:text-purple-700"
                  >
                    -
                  </button>
                  <span className="px-3">{quantity}</span>
                  <button
                    onClick={handleIncrement}
                    className="px-3 text-xl hover:text-purple-700"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
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
      )}

      {/* RELATED PRODUCTS */}
      {suggestedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-purple-700 mb-6">
            Related Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {suggestedProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => navigate(`/newproducts/${p.id}`)}
                className="border border-gray-200 rounded-lg shadow hover:shadow-lg transition p-4 cursor-pointer"
              >
                <div className="bg-gray-100 h-32 rounded mb-2 flex items-center justify-center">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full object-contain p-2"
                  />
                </div>

                <Link to={`/newproducts/${p.id}`}>
                <h3 className="text-purple-700 font-semibold truncate">
                  {p.title}
                </h3>
                </Link>

                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-600 text-sm">
                    {p.rating?.rate ?? 4.3}
                  </span>
                </div>

                <div className="text-green-500 font-semibold mt-2">
                  ${p.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default NewProductDetail;
