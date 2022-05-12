import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Styles/App.css";
import Login from "./View/login.jsx";
import Register from "./View/register.jsx";
import Home from "./View/homePage.jsx";
import DetailProduct from "./View/detail.jsx";
import NavbarComponent from "./Component/Navbar.jsx";
import Cart from "./View/cart.jsx";
import OrderPage from "./View/orderPage.jsx";
import AddProduct from "./View/addProduct.jsx";

function Testing() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/DetailProduct" element={<DetailProduct />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/OrderPage" element={<OrderPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="*" element={<Testing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
