import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Navbar/Header";

const TransactionDetails = ({ searchInput, handleSearchInput }) => {
  const location = useLocation();
  const { cartItems } = location.state;

  return (
    <>
    <Header searchInput={searchInput} handleSearchInput={handleSearchInput} />
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
      <div className="w-full h-auto flex flex-wrap flex-col items-center">
        <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
          Transaction Details
        </p>
        <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-6"></div>
      </div>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Items in Cart:</h3>
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-2 border-b">
                <div className="flex items-center">
                  <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
                  <div className="ml-4">
                    <p className="text-base font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-500">Price: ${item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold">Total Amount:</p>
            <p className="text-lg font-bold">${cartItems.reduce((acc, curr) => acc + curr.price, 0)}</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Confirm Transaction
          </button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default TransactionDetails;
