import React from "react";

const Header1 = ({ categories, filterFunction }) => {
  return (
    <div className="bg-blue-100">
    <nav className="w-full h-14 bg-blue-300 flex justify-between items-center px-4 py-4 md:px-4">
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