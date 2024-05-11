import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/CartContext/CartContext';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import TransactionDetails from './pages/TransactionDetails';
import FAQs from './pages/FAQs';
import PrivacyPolicy from './pages/PrivacyPolicy';

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
          <Route exact path="/transaction-details" element={<TransactionDetails />} />
          <Route exact path="/faqs" element={<FAQs />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;