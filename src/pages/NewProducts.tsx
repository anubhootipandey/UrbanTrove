import { useState, useEffect, type ChangeEvent, useRef } from "react";
import axios from "axios";
import { Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: number;
}

const NewProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [searchVisible, setSearchVisible] = useState<boolean>(false);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState<boolean>(false);

  const filterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get<Omit<Product, "rating">[]>("https://fakestoreapi.com/products")
      .then((res) => {
        const data: Product[] = res.data.map((p) => ({
          ...p,
          rating: Math.floor(Math.random() * 5) + 1,
        }));

        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      });

    axios
      .get<string[]>("https://fakestoreapi.com/products/categories")
      .then((res) => setCategories(res.data));
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value.toLowerCase();

    setFilteredProducts(
      products.filter((p) => p.title.toLowerCase().includes(keyword))
    );
  };

  const applyCategory = (cat: string) => {
    setSelectedCategory(cat);
    setFilterDropdownOpen(false);

    setFilteredProducts(
      cat === "" ? products : products.filter((p) => p.category === cat)
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin border-4 border-gray-300 border-t-[#f20089] rounded-full w-16 h-16" />
      </div>
    );
  }

  return (
    <div className="p-6">

      {/* Search + Filter */}
      <div className="mb-6 flex items-center gap-4 relative">

        {/* Mobile search toggle */}
        <button
          onClick={() => setSearchVisible(!searchVisible)}
          className="md:hidden p-2 bg-gray-200 rounded-lg"
        >
          <Search className="w-5 h-5 text-gray-600" />
        </button>

        {/* Mobile search input */}
        {searchVisible && (
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Search products..."
            className="border p-2 rounded-lg w-full mt-2"
          />
        )}

        {/* Desktop search */}
        <div className="hidden md:flex items-center w-full relative">
          <Search className="absolute left-3 text-gray-500" />
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Search products..."
            className="border pl-10 py-2 rounded-lg w-full"
          />
        </div>

        {/* Filter Button Wrapper */}
        <div className="relative" ref={filterRef}>
          <button
            onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
            className="p-2 bg-gray-200 rounded-lg flex items-center"
          >
            <Filter className="w-5 h-5 mr-1 text-gray-600" />
            <span className="hidden md:block">Filter</span>
          </button>

          {/* Dropdown appears exactly BELOW the button */}
          {filterDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow z-20">
              <button
                onClick={() => applyCategory("")}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                All
              </button>

              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => applyCategory(cat)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 capitalize"
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition relative"
          >
            {/* NEW TAG */}
            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-3xl">
              NEW!
            </span>

            <img
              src={product.image}
              className="h-60 w-full object-contain bg-gray-100 p-4"
            />

            <div className="p-4 flex flex-col h-full">
              <Link to={`/new-products/${product.id}`}>
              <h2 className="font-semibold mb-2 truncate">{product.title}</h2>
              </Link>

              <p className="text-gray-700 mb-2 font-medium">${product.price}</p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: product.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">★</span>
                ))}
                {Array.from({ length: 5 - product.rating }).map((_, i) => (
                  <span key={i} className="text-gray-400 text-lg">★</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default NewProducts;
