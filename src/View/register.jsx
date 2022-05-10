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
                        <p className='label'>Fullname<span className='required'>*</span> </p>
                        <Form.Control className='form-control' type="name" placeholder="Enter fullname" />
                    </Form.Group>

                    <Form.Group id='email' className="mb-3" controlId="formBasicEmail">
                        <p className='label'>Email address<span className='required'>*</span> </p>
                        <Form.Control className='form-control' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group id='phone' className="mb-3" controlId="formBasicEmail">
                        <p className='label'> Phone Number </p>
                        <Form.Control className='form-control' type="number" placeholder="Enter phone number" />
                    </Form.Group>

                    <Form.Group id='password' className="mb-3" controlId="formBasicEmail">
                        <p className='label'> Password<span className='required'>*</span></p>
                        <Form.Control className='form-control' type="password" placeholder="Enter password" />
                    </Form.Group>

                    <Form.Group id='password' className="mb-3" controlId="formBasicPassword">
                        <p className='label'> Confirm Password<span className='required'>*</span></p>
                        <Form.Control className='form-control' type="password" placeholder="Confirm Password" />
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
