import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Card, Form } from 'react-bootstrap';
import "../Styles/login.css";

export default function Login() {
  
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const changeEmail = (e) =>{
        const value = e.target.value;
        setEmail(value);
    }

    const changePassword = (e) => {
        const value = e.target.value;
        setPassword(value)
    }

    const handleSubmit = () =>{
        console.log('di klik');
    }


  return (
    <div className='bg-login'>
        <Card className='card-login' border='secondary' style={{ width: '23rem'}}>
            <Card.Body className='card-body'>
                <Card.Title className='title'>Welcome to Tokopelia</Card.Title>
                <Form>
                    <Form.Group id='email' className="mb-3" controlId="formBasicEmail">
                        <p className='label'>Email address</p>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={changeEmail}/>
                    </Form.Group>

                    <Form.Group id='password' className="mb-3" controlId="formBasicPassword">
                        <p className='label' >Password</p>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={changePassword}/>
                    </Form.Group>
                    <Button id='bt-login' variant="" onClick={handleSubmit}>
                        login
                    </Button>
                </Form>
            </Card.Body>
        </Card>
  </div>
  )
}
