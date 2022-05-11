import React from "react";
import Logo from "../Image/logo_fix.png";
import { Card, Button } from "react-bootstrap";
import "../Styles/Home.css";
import { useNavigate } from "react-router-dom";

function Homepage() {

  const navigate = useNavigate();

  const clickImage = () => {
    navigate('/DetailProduct');
  }

  const clickTitle = () => {
    navigate('/DetailProduct');
  }

  const clickCart = () => {
    navigate('/Cart');
  }




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
          <div className="col-lg-3 col-md-3 sol-sm-3 col-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Logo} onClick={clickImage}/>
              <Card.Body>
                <Card.Title className="card-title" onClick={clickTitle} >Product Title</Card.Title>
                <Card.Text className="card-text">$45</Card.Text>
                <Button className="button-style" onClick={clickCart} >Add to cart</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-3 sol-sm-3 col-3">
            <Card style={{ width: "18rem" }} className="shadow-card">
              <Card.Img variant="top" src={Logo} />
              <Card.Body>
                <Card.Title className="card-title">Product Title</Card.Title>
                <Card.Text className="card-text">$45</Card.Text>
                <Button className="button-style">Add to cart</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-3 sol-sm-3 col-3">
            <Card style={{ width: "18rem" }} className="shadow-card">
              <Card.Img variant="top" src={Logo} />
              <Card.Body>
                <Card.Title className="card-title">Product Title</Card.Title>
                <Card.Text className="card-text">$45</Card.Text>
                <Button className="button-style">Add to cart</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-3 sol-sm-3 col-3">
            <Card style={{ width: "18rem" }} className="shadow-card">
              <Card.Img variant="top" src={Logo} />
              <Card.Body>
                <Card.Title className="card-title">Product Title</Card.Title>
                <Card.Text className="card-text">$45</Card.Text>
                <Button className="button-style">Add to cart</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-3 sol-sm-3 col-3 mt-5">
            <Card style={{ width: "18rem" }} className="shadow-card">
              <Card.Img variant="top" src={Logo} />
              <Card.Body>
                <Card.Title className="card-title">Product Title</Card.Title>
                <Card.Text className="card-text">$45</Card.Text>
                <Button className="button-style">Add to cart</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-3 sol-sm-3 col-3 mt-5">
            <Card style={{ width: "18rem" }} className="shadow-card">
              <Card.Img variant="top" src={Logo} />
              <Card.Body>
                <Card.Title className="card-title">Product Title</Card.Title>
                <Card.Text className="card-text">$45</Card.Text>
                <Button className="button-style">Add to cart</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-3 sol-sm-3 col-3 mt-5 ">
            <Card style={{ width: "18rem" }} className="shadow-card">
              <Card.Img variant="top" src={Logo} />
              <Card.Body>
                <Card.Title className="card-title">Product Title</Card.Title>
                <Card.Text className="card-text">$45</Card.Text>
                <Button className="button-style">Add to cart</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-3 sol-sm-3 col-3 mt-5">
            <Card style={{ width: "18rem" }} className="shadow-card">
              <Card.Img variant="top" src={Logo} />
              <Card.Body>
                <Card.Title className="card-title">Product Title</Card.Title>
                <Card.Text className="card-text">$45</Card.Text>
                <Button className="button-style">Add to cart</Button>
              </Card.Body>
            </Card>
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

export default Homepage;
