import Home from "./pages/Home";
import ProductList from "./pages/ProductList/index";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:productid" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
