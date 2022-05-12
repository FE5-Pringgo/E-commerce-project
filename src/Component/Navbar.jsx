import React from "react";
import Logo from "../Image/logo_fix.png";
import cart from "../Image/shopping-cart.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, NavDropdown, Button, Form, FormControl, ModalBody } from "react-bootstrap";
import "../Styles/Navbar.css"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NavbarComponent() {
  const navigate = useNavigate();

  const clickProduct = () => {
    navigate('/AddProduct');
  }

  const clickImage = () => {
    navigate('/Home');
  }

  const clickRegister = () => {
    navigate('/Register');
  }

  const clickLogin = () => {
    navigate('/Login');
  }

  const authToken = localStorage.getItem('token');
  const uname = localStorage.getItem('name');

  const clickLogout = () => {
    localStorage.clear();

    navigate('/login')
  }
  





  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="background-navbar">
        <Container className="container-navbar">
          <img style={{ width: "70px" }} src={Logo} alt="" onClick={clickImage}/>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Form className="d-flex ms-5 me-3 w-75">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="light">Search</Button>
            </Form>
            <img style={{ width: "50px" }} src={cart} alt="" />
            { authToken ? null : <>
              <Nav.Link onClick={clickRegister}>Register</Nav.Link>
              <Nav.Link onClick={clickLogin}>Login</Nav.Link>
            </>
            }
            <Nav className="me-auto">
              <NavDropdown className="ms-5 w-25 dropdown-style" title={uname ? uname : "user"} id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={clickProduct} >Add To product</NavDropdown.Item>
                <NavDropdown.Item onClick= {clickLogout} >Log out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
