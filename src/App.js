import "./Styles/App.css";
import React from "react";
import Login from "./View/login.jsx";
import Register from "./View/register.jsx";
import Home from "./View/homePage.jsx";
import DetailProduct from "./View/detail.jsx";
import NavbarComponent from "./Component/Navbar.jsx";


function App() {
  return (
    <div className="App">

      <NavbarComponent />
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Home /> */}
      {/* <DetailProduct /> */}
      
    </div>
  );
}

export default App;
