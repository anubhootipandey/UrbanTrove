import { useState, useEffect, useRef } from "react";
import { Heart, List, X, Menu, Search, ShoppingCart, User } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Link } from "react-router-dom";

export default function Header() {
  const [showPromo, setShowPromo] = useState(true);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  const [desktopCategoriesOpen, setDesktopCategoriesOpen] = useState(false);

  const navItems = ["SHOP CATEGORIES", "NEW", "PRODUCTS"];
  const categories = ["Men", "Women", "Kids"];

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDesktopCategoriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollingDown(currentScroll > lastScroll && currentScroll > 100);
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  const wishlistCount = useSelector((state: RootState) => state.wishlist.items.length);

  return (
    <div className="w-full">
      {showPromo && (
        <div className="bg-pink-50 text-[#f20089] text-center py-2 text-sm flex flex-col md:flex-row justify-around items-center gap-2 px-4 md:px-8 relative">
          <div className="flex flex-col md:flex-row items-center gap-2 truncate">
            <span>⭐ ⭐ FLAT Rs. 100 OFF on your first order! ⭐ ⭐</span>
            <span className="border border-[#f20089] px-2 py-0.5 rounded">Use Code: BLINKFYNK</span>
          </div>
          <button
            className="absolute top-1 right-2 md:static md:ml-4 font-bold text-[#f20089]"
            onClick={() => setShowPromo(false)}
          >
            ✕
          </button>
        </div>
      )}

      <div className={`bg-white w-full transition-transform duration-300 ${scrollingDown ? "-translate-y-full" : "translate-y-0"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-8">
          <div className="flex items-center gap-2 md:hidden">
            {!mobileSearchOpen && (
              <button onClick={() => setMobileMenuOpen(true)}>
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
            )}
            <button onClick={() => setMobileSearchOpen(!mobileSearchOpen)}>
              <Search className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {(!mobileSearchOpen || isDesktop) && (
            <input
              type="text"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`border-b-2 border-[#f20089] focus:outline-none px-2 py-1 text-sm ${
                mobileSearchOpen ? "flex-1 w-full md:w-96" : "hidden md:flex md:w-96"
              }`}
            />
          )}

          {mobileSearchOpen && !isDesktop && (
            <div className="flex items-center flex-1 gap-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-b-2 border-[#f20089] focus:outline-none flex-1 px-2 py-1 text-sm"
                autoFocus
              />
              <button onClick={() => setMobileSearchOpen(false)}>
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          )}

          {!mobileSearchOpen && (
            <Link to="/" className="text-[#f20089] text-3xl font-bold mr-4 flex-1 md:flex-none justify-center md:justify-start flex items-center gap-1">
              fynk <span className="text-xs flex items-center">✨</span>
            </Link>
          )}

          {!mobileSearchOpen && (
            <div className="hidden md:flex items-center gap-6 text-gray-700">
              <div className="relative cursor-pointer" onClick={() => (window.location.href = "/wishlist")}>
                <Heart className="w-6 h-6" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#f20089] text-white text-xs px-1 rounded-full">{wishlistCount}</span>
                )}
              </div>
              <div className="relative cursor-pointer" onClick={() => (window.location.href = "/cart")}>
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#f20089] text-white text-xs px-1 rounded-full">{cartCount}</span>
                )}
              </div>
              <Link to="/profile" className="relative">
                <User className="w-5 h-5 cursor-pointer" />
                </Link>
            </div>
          )}
        </div>
      </div>

      {!mobileSearchOpen && (
        <div className="bg-white sticky top-0 shadow z-50">
          <div className="max-w-7xl mx-auto flex justify-center py-2 px-4 md:px-8 text-gray-800 font-semibold text-sm relative">
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => {
                if (item === "SHOP CATEGORIES") {
                  return (
                    <div key={item} className="relative" ref={dropdownRef}>
                      <button onClick={() => setDesktopCategoriesOpen((prev) => !prev)} className="flex items-center gap-1 hover:text-[#f20089] transition">
                        <List className="w-4 h-4" /> SHOP CATEGORIES
                      </button>
                      {desktopCategoriesOpen && (
                        <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 p-3 z-50">
                          {categories.map((cat) => (
                            <Link
                              key={cat}
                              to={`/category/${cat.toLowerCase()}`}
                              className="block px-3 py-2 rounded hover:bg-purple-50 cursor-pointer"
                            >
                              {cat}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (item === "PRODUCTS") {
                  return (
                    <Link key={item} to="/products" className="cursor-pointer hover:text-[#f20089]">
                      {item}
                    </Link>
                  );
                }

                if (item === "NEW") {
                  return (
                    <Link key={item} to="/new" className="cursor-pointer hover:text-[#f20089]">
                      NEW
                    </Link>
                  );
                }

                return (
                  <span key={item} className="cursor-pointer hover:text-[#f20089]">
                    {item}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`fixed top-0 left-0 h-full w-64 bg-white text-gray-800 z-50 transform transition-transform duration-300 shadow-lg ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="p-6 flex flex-col h-full">
              <button className="self-end mb-6 text-gray-800" onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>

              <nav className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => {
                  if (item === "SHOP CATEGORIES") {
                    return (
                      <div key={item} className="flex flex-col">
                        <button
                          onClick={() => setMobileCategoriesOpen((prev) => !prev)}
                          className="flex items-center justify-between font-semibold"
                        >
                          <span className="flex items-center gap-2">
                            <List className="w-5 h-5" />
                            SHOP CATEGORIES
                          </span>
                        </button>

                        {mobileCategoriesOpen && (
                          <div className="mt-2 ml-6 flex flex-col gap-2">
                            {categories.map((cat) => (
                              <Link
                                key={cat}
                                to={`/category/${cat.toLowerCase()}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-sm py-1 hover:text-[#f20089] cursor-pointer"
                              >
                                {cat}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  if (item === "PRODUCTS") {
                    return (
                      <Link key={item} to="/products" onClick={() => setMobileMenuOpen(false)} className="font-semibold hover:text-[#f20089] text-left">
                        PRODUCTS
                      </Link>
                    );
                  }

                  if (item === "NEW") {
                    return (
                      <Link key={item} to="/new" onClick={() => setMobileMenuOpen(false)} className="font-semibold hover:text-[#f20089]">
                        NEW
                      </Link>
                    );
                  }

                  return (
                    <span key={item} className="font-semibold hover:text-[#f20089]">
                      {item}
                    </span>
                  );
                })}
              </nav>

              <div className="mt-auto flex gap-6 text-gray-800">
                <div className="relative cursor-pointer" onClick={() => (window.location.href = "/wishlist")}>
                  <Heart className="w-5 h-5" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#f20089] text-white text-xs px-1 rounded-full">{wishlistCount}</span>
                  )}
                </div>

                <div className="relative cursor-pointer" onClick={() => (window.location.href = "/cart")}>
                  <ShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#f20089] text-white text-xs px-1 rounded-full">{cartCount}</span>
                  )}
                </div>

                <Link to="/profile" className="relative">
                <User className="w-6 h-6 cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>

          {mobileMenuOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setMobileMenuOpen(false)} />}
        </div>
      )}
    </div>
  );
}
