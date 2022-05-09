import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Card, Form } from 'react-bootstrap';
import "../Styles/login.css";

export default function login() {
  return (
    <div className='bg-login'>
        <Card className='card' border='secondary' style={{ width: '23rem'}}>
            <Card.Body className='card-body'>
                <Card.Title className='title'>Welcome to Tokopelia</Card.Title>
                <Form>
                    <Form.Group id='email' className="mb-3" controlId="formBasicEmail">
                        <p className='label'>Email address</p>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group id='password' className="mb-3" controlId="formBasicPassword">
                        <p className='label' >Password</p>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button id='bt-login' variant="" type="submit">
                        login
                    </Button>
                </Form>
            </Card.Body>
        </Card>
  </div>
  )
}
