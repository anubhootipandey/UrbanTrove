import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import { CartContext } from "../CartContext/CartContext";
import SearchBox from "../SearchBox/SearchBox";

const Header = ({ searchInput, handleSearchInput }) => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [cartCount, setCartCount] = useState(0);
  const [showCartModal, setShowCartModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showMobileMenu, setShowMobileMenu] = useState(false); // State for managing mobile menu visibility
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    const storedCartCount = localStorage.getItem("cartCount");
    if (storedCartCount) {
      setCartCount(parseInt(storedCartCount));
    }
  }, []);

  useEffect(() => {
    const count = cart.length;
    setCartCount(count);
    localStorage.setItem("cartCount", count.toString());
    setCartItems(cart);
  }, [cart]);

  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleBuyNow = () => {
    // Navigate to transaction details page and pass cart items as state
    navigate("/transaction-details", { state: { cartItems: cart } });
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="bg-blue-100">
      <nav className="w-full h-14 bg-blue-900 flex justify-between items-center px-6 py-8 md:px-4">
        <h1 className="text-2xl text-white font-bold cursor-pointer" onClick={handleLogoClick}>
          <Link to="/">FakeBazaar</Link>
        </h1>
        {/* Desktop menu */}
        <ul className="md:flex hidden text-blue-300 font-semibold">
          <li className="mx-4 cursor-pointer hover:underline hover:text-white">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-4 cursor-pointer hover:underline hover:text-white">
            <Link to="/products">Products</Link>
          </li>
          <li className="mx-4 cursor-pointer hover:underline hover:text-white">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <SearchBox value={searchInput} onChange={handleSearchInput} />
        <div className="relative">
          <button className="text-white" onClick={toggleCartModal}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.408 3.408A2 2 0 0 1 6.92 2h6.16a2 2 0 0 1 1.512.692l3.447 4.646A2 2 0 0 1 18 9.764V17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.764a2 2 0 0 1 .08-.646L4.408 3.408zM7.414 4 5.862 8h8.276l-1.553-4H7.414z"
                clipRule="evenodd"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none bg-red-500 text-white rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          {showCartModal && (
            <div className="absolute right-0 mt-12 w-64 bg-white shadow-lg rounded-lg overflow-hidden z-10">
              <div className="flex justify-between items-center px-4 py-2 bg-gray-200">
                <h2 className="text-lg font-semibold">Cart Items</h2>
                <button onClick={toggleCartModal}>Close</button>
              </div>
              <div className="px-4 py-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-2">
                    <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
                    <div className="flex flex-col ml-2">
                      <span>{item.title}</span>
                      <span>Price: ${item.price}</span>
                    </div>
                    <div>
                      <button className="text-red-500" onClick={() => handleRemoveFromCart(item.id)}>
                        Remove
                      </button>
                      <button className="text-blue-500" onClick={handleBuyNow}>
                        Buy
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Mobile menu button */}
        <button className="block md:hidden text-4xl mb-2 text-blue-200" onClick={toggleMobileMenu}>
          &#8801;
        </button>
        {/* Mobile menu */}
        {showMobileMenu && (
          <div className="md:hidden flex flex-col items-center bg-blue-900 text-white absolute top-14 left-0 right-0 px-4 py-2">
            <Link to="/about" className="my-2 hover:text-blue-300">
              About
            </Link>
            <Link to="/products" className="my-2 hover:text-blue-300">
              Products
            </Link>
            <Link to="/contact" className="my-2 hover:text-blue-300">
              Contact
            </Link>
            <Link to="/signin" className="my-2 hover:text-blue-300">
              Sign In
            </Link>
          </div>
        )}
        <button className="hidden md:block px-2 py-1.5 font-semibold bg-blue-600 text-white rounded cursor-pointer hover:text-blue-900 hover:bg-indigo-600 hover:font-semibold">
          <Link to="/signin">Sign In</Link>
        </button>
      </nav>
    </div>
  );
};

export default Header;
