import React from "react";
import Logo from "../Image/logo_fix.png";
import { Card, Button } from "react-bootstrap";
import "../Styles/Home.css";

function Homepage() {
  return (
    <div className="HomePage">
      {/* kategori */}
      <div className="background-category">
        <div className="back">
          <div className="category">
            <span className="span-category"> Books </span>
            <span className="span-category"> Computer </span>
            <span className="span-category"> Kitchen </span>
            <span className="span-category"> Gadget </span>
            <span className="span-category"> Style </span>
          </div>
        </div>
      </div>

      {/* isi konten */}
      <div className=" d-flex justify-content-center align-items-center mt-3 ">
        <div className="background">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Logo} />
            <Card.Body>
              <Card.Title className="card-title">Product Title</Card.Title>
              <Card.Text className="card-text">$45</Card.Text>
              <Button>Add to cart</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      

      {/* footer */}
      <div className="bg-footer">
        <div className="back-footer">
          <span className="span-footer">About</span>
          <span className="span-footer">Contact Us</span>
          <span className="span-footer">Help</span>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
