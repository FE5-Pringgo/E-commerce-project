import "./Styles/App.css";
import React from "react";
import Login from "./View/login.jsx";
import Register from "./View/register.jsx";
import DetailProduct from "./View/detail.jsx";
import CartDetails from "./View/cart.jsx";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <DetailProduct /> */}
      <CartDetails />
    </div>
  );
}

export default App;
