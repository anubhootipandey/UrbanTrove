import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Navbar/Header";
import Footer from "../components/Footer/Footer";
import Header1 from "../components/Navbar/Header1";
import ProductCard from "../components/ProductCard/ProductCard";
import { CartContext } from "../components/CartContext/CartContext";

const Products = () => {
  const [state, setState] = useState({
    products: [],
    categories: [],
    searchInput: "",
    filteredProducts: [],
  });
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setState((prevState) => ({
        ...prevState,
        products: response.data,
        filteredProducts: response.data,
      }));
    });
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setState((prevState) => ({
          ...prevState,
          categories: response.data,
        }));
      });
  }, []);

  const filterFunction = (item) => {
    axios
      .get("https://fakestoreapi.com/products/category/" + item)
      .then((response) => {
        setState((prevState) => ({
          ...prevState,
          products: response.data,
          filteredProducts: response.data,
        }));
      });
  };

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setState((prevState) => ({
      ...prevState,
      searchInput: value,
      filteredProducts:
        value === ""
          ? state.products
          : state.products.filter((product) =>
              product.title.toLowerCase().includes(value.toLowerCase())
            ),
    }));
  };

  return (
    <>
      <Header
        searchInput={state.searchInput}
        handleSearchInput={handleSearchInput}
      />
      <Header1 categories={state.categories} filterFunction={filterFunction} />
      <div className="container mx-auto px-4 bg-blue-50">
        <div className="py-10">
          <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
            Our Products
          </p>
          <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {state.filteredProducts.map((item, index) => (
            <ProductCard key={index} product={item} addToCart={addToCart} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
