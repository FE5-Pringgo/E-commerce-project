import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Form } from "react-bootstrap";
import Logo from "../Image/logo_fix.png";
import "../Styles/detail.css";

export default function detail() {
  return (
    <div className="body">
      <div className="background">
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

      <div className="bg-detail">
        <div className="back-detail">
          <Card className="card-detail" style={{ width: "20rem", height: "500px" }}>
            <Card.Img className="picture" variant="top" src={Logo} />
            <Card.Body>
              <Card.Title>Buku </Card.Title>
              <Card.Text className="text-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card.Text>
              <Button className="btn-detail">Add To Chart</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="background-desc">
        <div className="back-desc">
          <h2 className="desc-product">Product Description</h2>
          <p className="desc-detail">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam asperiores explicabo earum quaerat pariatur sint voluptates modi magnam, facilis sapiente assumenda, reprehenderit obcaecati veritatis labore? At odit vel quos unde!
          </p>
        </div>
      </div>

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
