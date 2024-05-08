import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-blue-900 px-4 text-white pt-8 pb-4 md:pt-12 md:px-12">
    <div className="flex flex-col md:flex-row md:justify-between">
        <div className="mb-8 md:mb-0 md:mr-8">
            <img className="w-40 h-16 mb-4" src="https://images.pexels.com/photos/953864/pexels-photo-953864.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <p className="my-2">Email us: fakebazaar123@gan.cim</p>
            <img className="w-40 h-32" src="https://images.pexels.com/photos/953864/pexels-photo-953864.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="font-bold text-xl mt-4 mb-2">Important Links</h2>
            <div className="border-b-2 border-yellow-400 rounded-2xl">
                <p className="my-2">About</p>
                <p className="my-2">FAQs</p>
                <p className="my-2">Privacy Policy</p>
            </div>
        </div>
        <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="font-bold text-xl mt-4 mb-2">Category</h2>
            <div className="border-b-2 border-yellow-400 rounded-2xl">
                <p className="my-2">Men's Wear</p>
                <p className="my-2">Women's Wear</p>
                <p className="my-2">Accessories</p>
                <p className="my-2">Electronics</p>
                <p className="my-2">Kid's Wear</p>
            </div>
        </div>
        <div>
            <h2 className="font-bold text-xl mt-4 mb-2">Products</h2>
            <div className="border-b-2 border-yellow-400 rounded-2xl">
                <p className="my-2">Shoes</p>
                <p className="my-2">Cups & Mugs</p>
                <p className="my-2">Shirts</p>
                <p className="my-2">Dresses</p>
                <p className="my-2">Books</p>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer;