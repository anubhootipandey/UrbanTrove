import React, { useState } from "react";

const Header1 = ({ categories, filterFunction }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-blue-100">
      <nav className="w-full h-14 bg-blue-300 flex justify-between items-center px-4 py-4 md:px-4">
        {/* Small Screen Dropdown */}
        <div className="md:hidden">
          <button
            className="text-blue-900 font-semibold"
            onClick={toggleDropdown}
          >
            Categories
          </button>
          {dropdownOpen && (
            <ul className="absolute top-14 left-0 w-full bg-white border border-gray-200 z-10">
              {categories.map((category, index) => (
                <li
                  className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                  key={index}
                  onClick={() => {
                    filterFunction(category);
                    toggleDropdown(); 
                  }}
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Desktop */}
        <ul className="md:flex hidden text-blue-900 font-semibold">
          {categories.map((category, index) => (
            <li
              className="mx-[10px] cursor-pointer hover:text-indigo-500"
              key={index}
              onClick={() => filterFunction(category)}
            >
              <a href="#">
                <span className="text">{category}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header1;
