import React from 'react';
import './Navbar.css';

const cardData = [
    {
        title:"Men Lightweight Blade Running Shoes",
        price:"₹ 99.00 INR",
        imageUrl:"https://webmerx.sgp1.cdn.digitaloceanspaces.com/sweetylifestyle/product_images/1661165529jpg"
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