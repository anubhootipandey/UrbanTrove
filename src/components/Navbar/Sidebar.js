import React from "react";

const Sidebar = ({ categories, filterFunction }) => {
  return (
      <div className="sidenav">
        <div className="logo">
          <a href="#"></a>
        </div>
        <ul className="mainNav">
          {categories.map((category, index) => (
            <li
              key={index}
              className="single-nav"
              onClick={() => filterFunction(category)}
            >
              <a href="#">
                <span className="text">{category}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default Sidebar;
