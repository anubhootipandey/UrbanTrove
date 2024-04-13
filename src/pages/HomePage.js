import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Navbar/Sidebar";
import ProductCard from "../components/ProductCard/ProductCard";
import "./HomePage.css";
import Header from "../components/Navbar/Header";

const HomePage = () => {
  const [state, setState] = useState({
    products: [],
    categories: [],
    searchInput: "",
    filteredProducts: [],
  });

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

  const filterFunction = (item) => {
    axios.get("https://fakestoreapi.com/products/category/" + item).then((response) => {
      setState((prevState) => ({
        ...prevState,
        products: response.data,
        filteredProducts: response.data,
      }));
    });
  };

  return (
    <>
      <Header searchInput={state.searchInput} handleSearchInput={handleSearchInput} />
      <Sidebar categories={state.categories} filterFunction={filterFunction} />
      <div className="main">
        {state.filteredProducts.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
