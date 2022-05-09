import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Card, Form } from 'react-bootstrap';
import "../Styles/register.css";

export default function login() {
  return (
    <div className='bg-login'>
        <Card className='cardbox' border='secondary' style={{ width: '30rem'}}>
            <Card.Body className='card-body'>
                <Card.Title className='title'>Welcome to Tokopelia</Card.Title>
                <Form>
                <Form.Group id='fullname' className="mb-3" controlId="formBasicEmail">
                        <p className='label'>Fullname</p>
                        <Form.Control type="name" placeholder="Enter fullname" />
                    </Form.Group>
                    <Form.Group id='email' className="mb-3" controlId="formBasicEmail">
                        <p className='label'>Email address</p>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group id='phone' className="mb-3" controlId="formBasicEmail">
                        <p className='label'>Phone Number</p>
                        <Form.Control type="number" placeholder="Enter phone number" />
                    </Form.Group>

                    <Form.Group id='address' className="mb-3" controlId="formBasicEmail">
                        <p className='label'> Address</p>
                        <Form.Control type="address" placeholder="Enter Address" />
                    </Form.Group>

                    <Form.Group id='password' className="mb-3" controlId="formBasicPassword">
                        <p className='label' >Password</p>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button id='bt-login' variant="" type="submit">
                        Register
                    </Button>
                    </Form>
            </Card.Body>
        </Card>
  </div>
  )
}
