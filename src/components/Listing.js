import React, { useEffect, useState } from 'react';
import './Listing.css';
import axios from 'axios';

const Page = () => {
  const [state, setState] = useState({
    products: [],
    categories: [],
    searchInput: '',
    filteredProducts: []
  });

  const filterFunction = (item) => {
    axios.get("https://fakestoreapi.com/products/category/" + item)
      .then((response) => {
        setState(prevState => ({
          ...prevState,
          products: response.data,
          filteredProducts: response.data
        }));
      });
  }

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setState(prevState => ({
          ...prevState,
          products: response.data,
          filteredProducts: response.data
        }));
      });
    axios.get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setState(prevState => ({
          ...prevState,
          categories: response.data
        }));
      });
  }, []);

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setState(prevState => ({
      ...prevState,
      searchInput: value,
      filteredProducts: value === '' ? state.products : state.products.filter(product =>
        product.title.toLowerCase().includes(value.toLowerCase())
      )
    }));
  }

  return (
    <>
      <nav className='main-nav'>
        <div className="sidenav">
          <div className="logo">
            <a href="#"></a>
          </div>
          <ul className="mainNav">
            {state.categories.map((category, index) => (
              <li key={index} className="single-nav" onClick={() => filterFunction(category)}>
                <a href="#">
                  <span className='text'>{category}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className='logo'>
          <h2>
            <span>online</span>
            <span>store</span>
          </h2>
        </div>
        <div className='search-box'>
          <input
            type="text"
            placeholder="Search Products"
            value={state.searchInput}
            onChange={handleSearchInput}
          />
          <button type="button" className='search-btn'>Search</button>
        </div>
      </nav>
      <div className="main">
        {state.filteredProducts.map((item, index) => (
          <div key={index} className="cards">
            <div className="image">
              <img src={item.image} alt="" />
            </div>
            <div className="title">
              <h1>{item.title}</h1>
            </div>
            <div className="price">
              <h3>${item.price}</h3>
            </div>
            <button className="cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Page;
