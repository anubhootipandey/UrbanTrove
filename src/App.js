import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Signin from './pages/Signin';
import { CartProvider } from './components/CartContext/CartContext';
import Products from './pages/Products';
import Signup from './pages/Signup';
import About from './pages/About';

const App = () => {
  return (
    <CartProvider>
        <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
