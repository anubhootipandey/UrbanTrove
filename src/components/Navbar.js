import React from 'react';
import './Navbar.css';

const cardData = [
    {
        title:'Men Lightweight Blade Running Shoes',
        price:"₹ 99.00 INR",
        imageUrl:"https://webmerx.sgp1.cdn.digitaloceanspaces.com/sweetylifestyle/product_images/1661165529jpg"
    },
]

const page = () => {
  return (
    <>
    <nav className='main-nav'>
    <input type="checkbox" id="icon" />
    <label for="icon"  class="iconbtn">
      <i class="" id="closebtn"></i>
      <i class="" id="openbtn"></i>
    </label>
    <div class="sidenav">
      <div class="logo">
        <a href="#"></a>
      </div>
      <ul class="mainNav">
        <li class="single-nav">
          <a href="#">
            <i class=""></i>
            <span>Womens</span>
          </a>
        </li>
        <li class="single-nav">
          <a href="#">
            <i class=""></i>
            <span>Dresses</span>
          </a>
        </li>
        <li class="single-nav">
          <a href="#">
            <i class=""></i>
            <span>Shoes</span>
          </a>
        </li>
        <li class="single-nav">
          <a href="#">
            <i class=""></i>
            <span>Kids</span>
          </a>
        </li><li class="single-nav">
          <a href="#">
            <i class=""></i>
            <span>Mens</span>
          </a>
        </li>
        <li class="single-nav">
          <a href="#">
            <i class=""></i>
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
    <div class="main">
    {cardData.map((item) => {
                return(
                    <div class="cards">
                        <div class="image">
                            <img src={item.imageUrl} alt="" />
                        </div>
                        <div class="title">
                            <h1>{item.title}</h1>
                        </div>
                        <div class="description">
                            <p>{item.description}</p>
                        </div>
                        <div class="price">
                            <h3>{item.price}</h3>
                        </div>
                        <button class="cart-btn">Add to Cart</button>
                        <button class="buy-btn">Buy Now</button>
                    </div>
                    );
            })};
            
        </div>
    </>
  )
}

export default page;