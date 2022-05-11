import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Form,Row,Col,Container } from "react-bootstrap";
import Logo from "../Image/logo_fix.png";
import "../Styles/detail.css";
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";

export default function Detail() {


  const navigate = useNavigate()

  const clickBack = () => {
    navigate('/Home');
  }

  const clickCart = () => {
    navigate('/Cart');
  }

  return (
    <div className="body">
      <div className="background-detail">
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

    <Container className='container1'>
            <Row className='row-detail'>
                <Col className='column1' sm={1}>
                    <Icon className='back-icon' icon="uil:arrow-circle-left" onClick={clickBack}/>
                </Col>

                <Col className='column2' sm={6}>
                    <img className='picture-detail' src={Logo} alt="" />
                </Col>

                <Col className='column3' sm={5}>
                    <p className='prod-title'>Product Title</p>
                    <p className='prod-price'>Rp 80.000</p>
                    <p className='desc-detail' > Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod at architecto reiciendis facilis. Autem molestias, architecto fugit illum tenetur perspiciatis 
                        alias earum asperiores laboriosam pariatur, ipsa non eos quis nostrum!</p>
                        <Button className='btn-detail' variant='outline-dark' onClick={clickCart}>Add to Cart</Button>
                </Col>
            </Row>
        </Container>
      

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
