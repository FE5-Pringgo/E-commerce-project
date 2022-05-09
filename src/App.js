import "./Styles/App.css";
import React from "react";
import Login from "./View/login.jsx";
import Register from "./View/register.jsx";
import Home from "./View/homePage";
import DetailProduct from "./View/detail.jsx";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Register /> */}
      <Home />
      {/* <DetailProduct /> */}
    </div>
  );
}

export default App;
