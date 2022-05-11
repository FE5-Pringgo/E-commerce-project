import React from "react";
import Logo from "../Image/logo_fix.png";
import { Button, Form } from "react-bootstrap";
import "../Styles/orderPage.css";

function Order() {
  return (
    <div className="orderPage">
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
        <div className="background-content">
          {/* form shipping adress */}
          <div className="mt-5 ">
            <h6 className="label-style-order">Shipping Adress</h6>
            <div className="form-style mt-3  border border-3 rounded p-5 w-50">
              <Form.Group className="ms-5 mt-3 mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control className="control-input" type="email" placeholder="Street" />
              </Form.Group>
              <Form.Group className="ms-5 mt-3 mb-3 w-75 " controlId="exampleForm.ControlInput1">
                <Form.Control className="control-input" type="email" placeholder="City" />
              </Form.Group>
              <Form.Group className="ms-5 mt-3 mb-3 w-75 " controlId="exampleForm.ControlInput1">
                <Form.Control className="control-input" type="email" placeholder="State/Province" />
              </Form.Group>
              <Form.Group className="ms-5 mt-3 mb-3 w-75 " controlId="exampleForm.ControlInput1">
                <Form.Control className="control-input" type="email" placeholder="Zip Code" />
              </Form.Group>
            </div>
          </div>

          {/* form credit card */}
          <div className="mt-5 ">
            <h6 className="label-style-order">Credit Card</h6>
            <div className="form-style mt-3 border border-3 rounded p-5 w-50">
              <Form.Group className="ms-5 mt-3 mb-3 w-25 " controlId="exampleForm.ControlInput1">
                <Form.Control className="control-input" type="email" placeholder="" />
              </Form.Group>
              <Form.Group className="ms-5 mt-3 mb-3 w-75 " controlId="exampleForm.ControlInput1">
                <Form.Control className="control-input" type="email" placeholder="Name On Card" />
              </Form.Group>
              <Form.Group className="ms-5 mt-3 mb-3 w-75 " controlId="exampleForm.ControlInput1">
                <Form.Control className="control-input" type="email" placeholder="Card Number" />
              </Form.Group>

              <div className="d-flex justify-content-start">
                <p className="mt-3 ms-5">Expiration Data</p>
                <Form.Group className="ms-5 mt-3 mb-3 w-25 " controlId="exampleForm.ControlInput1">
                  <Form.Control type="email" placeholder="Year" />
                </Form.Group>
                <Form.Group className=" ms-2 mt-3 mb-3 w-25 " controlId="exampleForm.ControlInput1">
                  <Form.Control type="text" placeholder="Month" />
                </Form.Group>
              </div>
            </div>
          </div>

          {/* form review order */}
          <div className="mt-5 ">
            <h6 className="label-style-order">Review Order</h6>
            <div className="form-style mt-3 border border-3 rounded p-5 w-50">
              <div className="d-flex flex-column flex-start">
                <h5>Total Quantity: </h5>
                <h5>Shipping:</h5>
                <h5>Price:</h5>
              </div>
            </div>
            <Button className="button-color-order mt-3 me-0">Purchase</Button>
          </div>
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

export default Order;
