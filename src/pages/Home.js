import React from "react";
import Header from "../components/Navbar/Header";
import Footer from "../components/Footer/Footer";

const Home = ({ searchInput, handleSearchInput }) => {
  return (
    <>
      <Header searchInput={searchInput} handleSearchInput={handleSearchInput} />
      <div className="bg-blue-50 w-full h-auto">
      <img className="w-[1500px] h-[600px] mt-1 object-cover items-center hidden md:block" src="https://images.pexels.com/photos/953864/pexels-photo-953864.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      <img className="w-full md:hidden" src="https://images.pexels.com/photos/953864/pexels-photo-953864.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    </div>
    <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
        <div className="w-full h-auto flex flex-wrap flex-col items-center">
            <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
                "If you can't stop thinking about it, Buy it!"
            </p>
            <div className="w-36 h-1 border-b-4 border-yellow-500 rounded-2xl mt-2 md:mt-4 mb-12"></div>
        </div>
        <div className= "w-full bg-blue-900 flex flex-wrap justify-evenly">
            <div className="bg-white mt-8 w-46 flex flex-col items-center mb-12">
                <img className="p-4 w-44 h-44" src="https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <p className="text-xl font-bold text-blue-700 mb-2">Tote Bag</p>
                <p class="text-m mb-2 font-bold text-yellow-500">₹256.9</p>
            </div>
            <div className="bg-white mt-8 w-46 flex flex-col items-center mb-12">
                <img className="p-4 w-44 h-44" src="https://images.pexels.com/photos/3987245/pexels-photo-3987245.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <p className="text-xl font-bold text-blue-700 mb-2">Tote Bag</p>
                <p class="text-m mb-2 font-bold text-yellow-500">₹220.5</p>
            </div>
            <div className="bg-white mt-8 w-46 flex flex-col items-center mb-12">
                <img className="p-4 w-44 h-44" src="https://images.pexels.com/photos/4068320/pexels-photo-4068320.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <p className="text-xl font-bold text-blue-700 mb-2">Tote bag</p>
                <p class="text-m mb-2 font-bold text-yellow-500">₹234.0</p>
            </div>
        </div>
    </div>
    <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
       <div className="w-full h-auto flex flex-wrap flex-col items-center">
        <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
            Featured Products
        </p>
        <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
       </div>
       <div className="w-[90%] h-auto flex flex-wrap justify-around">
        <div className="w-64 bg-blue-900 flex flex-col items-center mb-12 border-2 p-2">
            <img className="" src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <p className="text-xl font-bold text-white">Men's T-Shirt</p>
            <p className="text-sm font-bold text-blue-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="w-64 bg-blue-900 flex flex-col items-center mb-12  p-2">
            <img className="" src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <p className="text-xl font-bold text-white">Men's Shoes</p>
            <p className="text-sm font-bold text-blue-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="w-64 bg-blue-900 flex flex-col items-center mb-12 p-2">
            <img className="" src="https://images.pexels.com/photos/1431324/pexels-photo-1431324.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <p className="text-xl font-bold text-white">Coffee Mug</p>
            <p className="text-sm font-bold text-blue-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="w-64 bg-blue-900 flex flex-col items-center mb-12 p-2">
            <img className="" src="https://images.pexels.com/photos/1204475/pexels-photo-1204475.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <p className="text-xl font-bold text-white">Women's Dresses</p>
            <p className="text-sm font-bold text-blue-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="w-64 bg-blue-900 flex flex-col items-center mb-12 p-2">
            <img className="" src="https://images.pexels.com/photos/137603/pexels-photo-137603.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <p className="text-xl font-bold text-white">Women's Shoes</p>
            <p className="text-sm font-bold text-blue-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
       </div>
    </div>
     <Footer />
    </>
  );
};

export default Home;