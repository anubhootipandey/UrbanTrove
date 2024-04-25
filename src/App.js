import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Signin from './pages/Signin';
import { CartProvider } from './components/CartContext/CartContext';
import Products from './pages/Products';

const App = () => {
  return (
    <CartProvider>
        <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
