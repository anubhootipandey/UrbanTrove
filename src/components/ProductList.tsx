import { useNavigate } from "react-router-dom";
import products, { type Product } from "../data/products";
import { Heart, Star } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import { toggleWishlist } from "../redux/wishlistSlice";
import { addToCart, removeFromCart } from "../redux/cartSlice";

export default function ProductList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart.items);
  const wishlist = useSelector((state: RootState) => state.wishlist.items);

  const featuredProducts = products.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-[#f20089] mb-6 text-center">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {featuredProducts.map((product: Product) => {
          const isLiked = wishlist.some((item) => item.id === product.id);
          const inCart = cart.some((item) => item.id === product.id);

          return (
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
                    className="text-gray-900 hover:text-[#f20089] font-semibold text-lg truncate cursor-pointer hover:underline"
                    onClick={() => navigate(`/product/${product.id}`)}
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

              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => dispatch(toggleWishlist(product))}
                  className={`p-2 rounded-full border ${
                    isLiked ? "bg-[#f20089] text-white" : "text-gray-700 border-gray-300"
                  }`}
                >
                  <Heart className="w-5 h-5" />
                </button>

                <button
                  onClick={() =>
                    inCart
                      ? dispatch(removeFromCart(product.id))
                      : dispatch(addToCart(product))
                  }
                  className={`px-3 py-1 rounded text-sm transition ${
                    inCart
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "bg-[#f20089] hover:bg-[#df0681] text-white"
                  }`}
                >
                  {inCart ? "Remove from Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
