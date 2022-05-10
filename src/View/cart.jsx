import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Row, Container, Col,Badge,Form } from 'react-bootstrap';
import Andrea from "../Image/andrea.jpeg"
import "../Styles/cart.css";


export default function cart() {
  return (
    <div>
            <div className='background'>
                <div className='back'>
                    <div className='category'>
                        <span className='span-category'>  Books </span>
                        <span className='span-category'> Computer </span>
                        <span className='span-category'> Kitchen </span>
                        <span className='span-category'> Gadget </span>
                        <span className='span-category'> Style </span>
                    </div>
                </div>
            </div>

                <div className='shopping'> 
                    <Container className='container'>
                        <Row className='row'>
                            <Col className='column-0' xs= {1}>
                                <Form className='check-form'>
                                    <Form.Check 
                                        id='check'
                                    />
                                </Form>
                            </Col>
                            <Col className='column-1'md="auto">
                                <p className='shopping-cart'> Shopping Cart</p>
                                <img className='product' src={Andrea} alt="" />
                            </Col>

                            <Col className='column-2' xs lg="2">
                                <p className='title-product'> Orang-orang biasa </p>
                                <p className='price'     >Rp 90.000</p>
                            </Col>

                            <Col className='column-3' >
                                <div className='quantity-bg'>
                                    <Form className='quantity'>
                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextQuantity">
                                            <Form.Label column sm="3" className='cart-label'>
                                            Quantity
                                            </Form.Label>
                                            <Col sm="10">
                                                <Form.Control className='form-control' type="integer"  />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextSubtotal">
                                            <Form.Label column sm="3" className='cart-label'>
                                            Subtotal
                                            </Form.Label>
                                            <Col sm="10">
                                                <Form.Control className='form-control' type="total"  />
                                            </Col>
                                        </Form.Group>
                                    </Form>
                                    <div className='btn'>
                                        <Button className='btn-cart1' variant="secondary">Remove</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className='row'>
                            <Col className='column-0' xs= {1}>
                                <Form className='check-form'>
                                    <Form.Check 
                                        id='check'
                                    />
                                </Form>
                            </Col>
                            <Col className='column-1'md="auto">
                                <p className='shopping-cart'> Shopping Cart</p>
                                <img className='product' src={Andrea} alt="" />
                            </Col>

                            <Col className='column-2' xs lg="2">
                                <p className='title-product'> Orang-orang biasa </p>
                                <p className='price'     >Rp 90.000</p>
                            </Col>

                            <Col className='column-3' >
                                <div className='quantity-bg'>
                                    <Form className='quantity'>
                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextQuantity">
                                            <Form.Label column sm="3" className='cart-label'>
                                            Quantity
                                            </Form.Label>
                                            <Col sm="10">
                                                <Form.Control className='form-control' type="integer"  />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextSubtotal">
                                            <Form.Label column sm="3" className='cart-label'>
                                            Subtotal
                                            </Form.Label>
                                            <Col sm="10">
                                                <Form.Control className='form-control' type="total"  />
                                            </Col>
                                        </Form.Group>
                                    </Form>
                                    <div className='btn'>
                                        <Button className='btn-cart1' variant="secondary">Remove</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        
                    </Container>
                </div>

            <div className='background-total'>    
                <div className='bg-total'>
                    <Form className='total'>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextQuantity">
                            <Form.Label column sm="2">
                                Quantity
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control className='Control1' type="integer"  />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextSubtotal">
                            <Form.Label column sm="2">
                                Shipping
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control className='Control1' type="Shipping"  />
                            </Col>
                        </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextSubtotal">
                            <Form.Label column sm="2">
                                Subtotal
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control className='Control1' type="total"  />
                            </Col>
                        </Form.Group>
                    </Form>
                        <div className='button-total'>
                            <Button className='btn-total' variant="secondary">Order</Button>{' '}
                        </div>
                </div>
            </div>

            <div className='bg-footer' >
            <div className='back-footer'>
                <span className='span-footer'>About</span>
                <span className='span-footer'>Contact Us</span>
                <span className='span-footer'>Help</span>
            </div>
        </div>




    </div>
  )
}
