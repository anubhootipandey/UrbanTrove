import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, AccountCircle, Menu as MenuIcon, Close as CloseIcon, Shop } from "@mui/icons-material";
import { useCart } from "./CartContext";
import SignInSignUpModal from "./SignInSignUpModal";
import { ThemeContext } from "./ThemeContext";
import { Switch } from "@mui/material";

const Header = () => {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerList = (
    <div className="relative h-full flex flex-col justify-between">
      <button
        className="absolute top-2 right-2 text-gray-700"
        onClick={toggleDrawer(false)}
      >
        <CloseIcon className="text-[#A68DAD]" />
      </button>

      <ul className="mt-10 space-y-4 px-4">
        <li>
          <Link
            to="/"
            className="block px-4 py-2 bg-gray-50 text-gray-700 text-center rounded-md hover:bg-gray-100"
            onClick={toggleDrawer(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="block px-4 py-2 bg-gray-50 text-gray-700 text-center rounded-md hover:bg-gray-100"
            onClick={toggleDrawer(false)}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="block px-4 py-2 bg-gray-50 text-gray-700 text-center rounded-md hover:bg-gray-100"
            onClick={toggleDrawer(false)}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="flex flex-col items-center space-y-4 mb-6">
        <Link
          to="/cart"
          className="flex items-center justify-center px-4 py-2 w-3/4 bg-[#A68DAD] text-white rounded-md hover:bg-[#8E7496]"
          onClick={toggleDrawer(false)}
        >
          <ShoppingCart className="mr-2" /> Cart {cart.length > 0 && `(${cart.length})`}
        </Link>
        <button
          onClick={handleClickOpen}
          className="flex items-center justify-center px-4 py-2 w-3/4 bg-[#A68DAD] text-white rounded-md hover:bg-[#8E7496]"
        >
          <AccountCircle className="mr-2" /> Profile
        </button>
        {/* <div className="flex items-center justify-between px-4 py-2 w-3/4 bg-[#A68DAD] rounded-md">
          <span className="text-white">Dark Mode</span>
          <Switch
            checked={theme === "dark"}
            onChange={toggleTheme}
            color="default"
            inputProps={{ "aria-label": "theme toggle switch" }}
          />
        </div> */}
      </div>
    </div>
  );

  return (
    <header
      className={`top-0 left-0 w-full bg-gradient-to-r bg-gray-100 text-[#A68DAD] shadow-md z-10 ${theme}`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
        <button className="md:hidden text-[#C7B198]" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </button>

        <Link to="/" className="text-2xl font-bold text-[#A68DAD] no-underline">
        UrbanTrove <Shop />
        </Link>

        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-[#A68DAD] hover:text-gray-700">
            Home
          </Link>
          <Link to="/products" className="text-[#A68DAD] hover:text-gray-700">
            Products
          </Link>
          <Link to="/contact" className="text-[#A68DAD] hover:text-gray-700">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <ShoppingCart className="text-[#A68DAD]" />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
          <button onClick={handleClickOpen}>
            <AccountCircle className="text-[#A68DAD]" />
          </button>
          <Switch
            checked={theme === "dark"}
            onChange={toggleTheme}
            color="default"
            inputProps={{ "aria-label": "theme toggle switch" }}
          />
        </div>
      </div>

      {drawerOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50"
          onClick={toggleDrawer(false)}
        >
          <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-4">
            {drawerList}
          </div>
        </div>
      )}

      <SignInSignUpModal open={open} onClose={handleClose} />
    </header>
  );
};

export default Header;
