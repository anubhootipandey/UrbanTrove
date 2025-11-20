import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import products, { type Product } from "../data/products";
import { Heart, Star, Search, SlidersHorizontal, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { toggleWishlist } from "../redux/wishlistSlice";
import { addToCart, removeFromCart } from "../redux/cartSlice";

export default function Products() {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(5000);
  const [sortOption, setSortOption] = useState("none");
  const [filterOpen, setFilterOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);


  const wishlist = useSelector((state: RootState) => state.wishlist.items);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filtered = useMemo(() => {
    let data = [...products];

    if (searchText.trim() !== "") {
      data = data.filter(
        (p) =>
          p.name.toLowerCase().includes(searchText.toLowerCase()) ||
          p.category.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      data = data.filter((p) => p.category === selectedCategory);
    }

    data = data.filter((p) => p.price <= priceRange);

    if (sortOption === "low-high") data.sort((a, b) => a.price - b.price);
    if (sortOption === "high-low") data.sort((a, b) => b.price - a.price);
    if (sortOption === "rating") data.sort((a, b) => b.review - a.review);

    return data;
  }, [searchText, selectedCategory, priceRange, sortOption]);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-[#f20089] mb-6">
         Products
      </h2>

      {/* -------- TOP BAR -------- */}
      <div className="flex items-center gap-3 mb-6">

        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search name or category..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full border pl-10 pr-3 py-2 rounded-lg focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Mobile filter button */}
        <button
          onClick={() => setFilterOpen(true)}
          className="md:hidden p-3 border rounded-lg"
        >
          <SlidersHorizontal className="w-5 h-5" />
        </button>

        {/* Desktop filter */}
        <div className="hidden md:flex items-center gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border px-3 py-2 rounded-lg"
          >
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border px-3 py-2 rounded-lg"
          >
            <option value="none">Sort</option>
            <option value="low-high">Price: Low → High</option>
            <option value="high-low">Price: High → Low</option>
            <option value="rating">Rating</option>
          </select>

          <div className="flex items-center gap-2">
            <span className="text-sm">₹{priceRange}</span>
            <input
              type="range"
              min={50}
              max={5000}
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
            />
          </div>
        </div>
      </div>

      {/* -------- MOBILE FILTER MODAL -------- */}
      {filterOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-end z-50">
          <div className="bg-white w-72 h-full p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Filters</h2>
              <button onClick={() => setFilterOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <label className="font-medium">Category</label>
            <select
              className="border px-3 py-2 rounded-lg w-full mb-4"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <label className="font-medium">Sort</label>
            <select
              className="border px-3 py-2 rounded-lg w-full mb-4"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="none">None</option>
              <option value="low-high">Price: Low → High</option>
              <option value="high-low">Price: High → Low</option>
              <option value="rating">Rating</option>
            </select>

            <label className="font-medium">Max Price: ₹{priceRange}</label>
            <input
              type="range"
              min={50}
              max={5000}
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full"
            />

            <button
              onClick={() => setFilterOpen(false)}
              className="w-full py-2 mt-6 bg-[#f20089] text-white rounded-lg"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

      {/* -------- PRODUCT GRID -------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filtered.length === 0 ? (
          <p className="text-gray-500 text-lg">No matching products found.</p>
        ) : (
          filtered.map((product: Product) => {
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

                  <p className="text-gray-600 text-sm mb-2 truncate">
                    {product.description}
                  </p>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-500 font-semibold">₹{product.price}</span>
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
  className={`px-3 py-1 rounded text-sm transition
    ${inCart ? "bg-red-600 hover:bg-red-700 text-white" : "bg-[#f20089] hover:bg-[#df0681] text-white"}
  `}
>
  {inCart ? "Remove from Cart" : "Add to Cart"}
</button>

                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
