import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../components/CartContext/CartContext";
import Header from "../components/Navbar/Header";
import Header2 from "../components/Navbar/Header2";
import ProductCard from "../components/ProductCard/ProductCard";
import '../App.css';

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
    axios.get("https://fakestoreapi.com/products/categories").then((response) => {
      setState((prevState) => ({
        ...prevState,
        categories: response.data,
      }));
    });
  }, []);

  const filterFunction = (item) => {
    axios.get("https://fakestoreapi.com/products/category/" + item).then((response) => {
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
      filteredProducts: value === "" ? state.products : state.products.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      ),
    }));
  };

  return (
    <>
      <Header searchInput={state.searchInput} handleSearchInput={handleSearchInput} />
      <Header2 categories={state.categories} filterFunction={filterFunction} />
      <div className="main">
        {state.filteredProducts.map((item, index) => (
          <ProductCard key={index} product={item} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
};

export default Products;
