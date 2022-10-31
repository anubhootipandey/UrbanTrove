import React, { useEffect, useState } from 'react';
//import { useState } from 'react';
import './Navbar.css';
import axios from 'axios';

const cardData = [
    {
        title:"Men Lightweight Blade Running Shoes",
        price:"₹ 99.00 INR",
        imageUrl:"https://m.media-amazon.com/images/I/71vB8ayd17L._UY625_.jpg"
    },
    {
        title:"Faisonable Chunky High-top Men's Sneakers",
        price:"₹ 274.00 INR",
        imageUrl:"https://fashionmasters.in/wp-content/uploads/2022/07/product-image-1592744425_1024x1024_2x_dbf0994f-69b3-4fca-a9eb-b1330808d694.jpg"
    },
    {
      title:"OZJI Men's Basketball Casual Boots",
      price:"₹ 563.00 INR",
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8n3hnmp-bIAlX8gfdNsE0G4mHoeePypSZRg&usqp=CAU"
    },
    {
      title:"Woakers Men Blue Colourblocked Sneakers",
      price:"₹ 99.00 INR",
      imageUrl:"https://m.media-amazon.com/images/I/71vB8ayd17L._UY625_.jpg"
    },
    {
      title:"OZJI Men's Basketball Casual Boots",
      price:"₹ 563.00 INR",
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeFcSYSybr8kXsZYJu8MMZQNx33DPmgXaL0w&usqp=CAU"
    },
    {
      title:"OZJI Men's Basketball Casual Boots",
      price:"₹ 563.00 INR",
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfqjXRqlwK3WW8srx4sPLQK3XsdY6bXuHwpw&usqp=CAU"
    },
    {
      title:"OZJI Men's Basketball Casual Boots",
      price:"₹ 563.00 INR",
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW2XWLEN7keEACy-eezv22tZhGNnTExzE_7Q&usqp=CAU"
    },
    {
      title:"OZJI Men's Basketball Casual Boots",
      price:"₹ 563.00 INR",
      imageUrl:"https://m.media-amazon.com/images/I/71vB8ayd17L._UY625_.jpg"
    },
]

const Page = () => {
  const[product, setProduct] = useState([]);
  const[category, setCategory] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response.data);
      setProduct(response.data);
    });
    axios.get("https://fakestoreapi.com/products/categories").then((response) => {
      console.log(response.status);
      setCategory(response.status);
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
        <li className="single-nav">
          <a href="#">
            <i className=""></i>
            <span>Womens</span>
          </a>
        </li>
        <li className="single-nav">
          <a href="#">
            <i className=""></i>
            <span>Dresses</span>
          </a>
        </li>
        <li className="single-nav">
          <a href="#">
            <i className=""></i>
            <span>Shoes</span>
          </a>
        </li>
        <li className="single-nav">
          <a href="#">
            <i className=""></i>
            <span>Kids</span>
          </a>
        </li><li className="single-nav">
          <a href="#">
            <i className=""></i>
            <span>Mens</span>
          </a>
        </li>
        <li className="single-nav">
          <a href="#">
            <i className=""></i>
            <span>Shirts</span>
          </a>
        </li>

      </ul>
    <button>Shop All</button>  
  </div>

        <div className='logo'>
            <h2>
                <span>online</span>
                <span>store</span>
            </h2>
        </div>

        <div className='menu-link'>
            <ul>
                <li>
                    <a href="#">New</a>
                </li>
                <li>
                    <a href="#">Women</a>
                </li>
                <li>
                    <a href="#">Mens</a>
                </li>
                <li>
                    <a href="#">Kids</a>
                </li>
            </ul>
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