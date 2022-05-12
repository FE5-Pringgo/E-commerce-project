import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Form, Alert } from "react-bootstrap";
import "../Styles/login.css";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../store/actions";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [color, setColor] = useState("success");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const changePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSubmit = () => {
    const body = {
      email: email,
      password: password,
    };

    console.log(email);
    console.log(password);
    if (!email) {
      setMessage("Email tidak boleh kosong");
      setColor("danger");
      return;
    } else if (!password) {
      setMessage("Password tidak boleh kosong");
      setColor("danger");
      return;
    }
    axios
      .post("http://18.136.202.111:9001/api/v1/login", body)
      .then(({ data }) => {
        localStorage.setItem("token", data.data.Token);
        localStorage.setItem("name", data.data.Data.name);

        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-login">
      <Card
        className="card-login"
        border="secondary"
        style={{ width: "23rem" }}
      >
        {message && <Alert variant={color}>{message}</Alert>}
        <Card.Body className="card-body">
          <Card.Title className="title">Welcome to Tokopelia</Card.Title>
          <Form>
            <Form.Group id="email" className="mb-3" controlId="formBasicEmail">
              <p className="label">Email address</p>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={changeEmail}
              />
            </Form.Group>

            <Form.Group
              id="password"
              className="mb-3"
              controlId="formBasicPassword"
            >
              <p className="label">Password</p>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={changePassword}
              />
            </Form.Group>
            <Button id="bt-login" variant="" onClick={handleSubmit}>
              login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
