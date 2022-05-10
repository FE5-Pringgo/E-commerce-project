import React from "react";
import Logo from "../Image/logo_fix.png";
import cart from "../Image/shopping-cart.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, NavDropdown, Button, Form, FormControl } from "react-bootstrap";
import "../Styles/Navbar.css";

function NavbarComponent() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="background-navbar">
        <Container className="container-navbar">
          <img style={{ width: "70px" }} src={Logo} alt="" />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Form className="d-flex ms-5 me-3 w-75">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="light">Search</Button>
            </Form>
            <img style={{ width: "50px" }} src={cart} alt="" />
            <Nav className="me-auto">
              <NavDropdown className="ms-5 w-25 dropdown-style" title="User" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Add To product</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Log out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;