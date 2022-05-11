import "./Styles/App.css";
import React from "react";
import Login from "./View/login.jsx";
import Register from "./View/register.jsx";
import Home from "./View/homePage.jsx";
import DetailProduct from "./View/detail.jsx";
import NavbarComponent from "./Component/Navbar.jsx";
import Cart from "./View/cart.jsx";
import OrderPage from "./View/orderPage.jsx";
import AddPage from "./View/addProduct.jsx";

function App() {
  return (
    <div className="App">
      {/* <NavbarComponent /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Home /> */}
      {/* <DetailProduct /> */}
      {/* <Cart /> */}
      {/* <OrderPage /> */}
      <AddPage />
    </div>
  );
}

export default App;
