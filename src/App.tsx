import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import CartPage from "./pages/Cart";
import WishlistPage from "./pages/Wishlist";
import NewProducts from "./pages/NewProducts";
import NewProductDetail from "./components/NewProductDetail";
import Men from "./components/category/men";
import Women from "./components/category/women";
import Kids from "./components/category/kids";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path='/new' element={<NewProducts />} />
        <Route path="/new-products/:id" element={<NewProductDetail />} />
        <Route path="/newproducts/:id"  element={<NewProductDetail />} />
        <Route path='/category/men' element={<Men />} />
        <Route path='/category/women' element={<Women />} />
        <Route path='/category/kids' element={<Kids />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
