import React, { useEffect, useState } from "react";
import Logo from "../Image/logo_fix.png";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../Styles/Home.css";
import axios from "axios";

function Homepage() {
  const navigate = useNavigate();

  const [productList, setProductList] = useState([]);

  const clickImage = () => {
    navigate("/DetailProduct");
  };

  const clickTitle = (item) => {
    console.log(item.title);
    navigate("/DetailProduct", { item });
  };

  const clickCart = () => {
    navigate("/Cart");
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(({ data }) => {
      setProductList(data);
    });
  }, []);

  return (
    <div className="HomePage">
      {/* kategori */}
      <div className="background-category">
        <div className="back">
          <div className=" category">
            <span className="span-category"> Books </span>
            <span className=" span-category"> Computer </span>
            <span className="span-category"> Kitchen </span>
            <span className="span-category"> Gadget </span>
            <span className=" span-category"> Style </span>
          </div>
        </div>
      </div>

      {/* isi konten */}

      <div className="background">
        <div className=" row">
          {productList.map((el, i) => {
            return (
              <div id="div-home" className="col-lg-3 col-md-3 sol-sm-3 col-3">
                <Card className="card-home" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={Logo} onClick={clickImage} />
                  <Card.Body className="body-home">
                    <Card.Title
                      className="card-title"
                      onClick={() => clickTitle(el)}
                    >
                      {el.title}
                    </Card.Title>
                    <Card.Text className="card-text">$45</Card.Text>
                    <Button
                      id="btn-home"
                      className="button-style"
                      onClick={clickCart}
                    >
                      Add to cart
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* footer */}
      <div className="bg-footer-home">
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
