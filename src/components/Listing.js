import React, { useEffect, useState } from 'react';
import './Listing.css';
import axios from 'axios';

const Page = () => {
  const[product, setProduct] = useState([]);
  const[category, setCategory] = useState([]);

  const filterFunction = (item) => {
    axios.get("https://fakestoreapi.com/products/category/" + item).then((response) => {
      setProduct(response.data);
      console.log(response.data);
    });
  }
               
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProduct(response.data);
    });
    axios.get("https://fakestoreapi.com/products/categories").then((response) => {
      setCategory(response.data);
    });
  }, []);
  return (
    <>
    <nav className='main-nav'>
    <div className="sidenav">
      <div className="logo">
        <a href="#"></a>
      </div>
      <ul className="mainNav">
        <li className="single-nav" onClick={() => filterFunction(category[0])}>
          <a href="#">
            <i className=""></i>
            <span className='text' >{category[0]}</span>
          </a>
        </li>
        <li className="single-nav" onClick={() => filterFunction(category[1])}>
          <a href="#">
            <i className=""></i>
            <span className='text'>{category[1]}</span>
          </a>
        </li>
        <li className="single-nav" onClick={() => filterFunction(category[2])}>
          <a href="#">
            <i className=""></i>
            <span className='text'>{category[2]}</span>
          </a>
        </li>
        <li className="single-nav" onClick={() => filterFunction(category[3])}>
          <a href="#">
            <i className=""></i>
            <span className='text'>{category[3]}</span>
          </a>
        </li>
      </ul>
  </div>

        <div className='logo'>
            <h2>
                <span>online</span>
                <span>store</span>
            </h2>
        </div>
    </nav>
    <div className="main">
    {product.map((item) => {
                return(
                    
                    <div className="cards">
                      <div className="image">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="title">
                          <h1>{item.title}</h1>
                      </div>
                      <div className="price">
                          <h3>{item.price}</h3>
                      </div>
                        <button className="cart-btn">Add to Cart</button>
                        <button className="buy-btn">Buy Now</button>
                    </div>
                    
                    );
            })};
    </div>

  </>  )
}

export default Page;