import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Card, Form } from 'react-bootstrap';
import "../Styles/register.css";
import axios from 'axios';

export default function Register() {
    const [fullname,setFullname]    = useState('');
    const [email,setEmail]          = useState(''); 
    const [phone,setPhone]          = useState('');
    const [password,setPassword]    = useState('');

    const changeFullname = (e) => {
        const value = e.target.value;
        setFullname(value);
    }

    const changeEmail = (e) =>{
        const value = e.target.value;
        setEmail(value);
    }

    const changePhone = (e) => {
        const value = e.target.value;
        setPhone(value);
    }

    const changePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    }

    const clickRegister = () =>{
        const body ={
            fullname : fullname,
            email: email,
            phone: phone,
            password: password
        }
        axios.post('http://localhost:8000/api/v1/register',body)
        .then(result => {
            console.log(result);
        })

    }




  return (
    <div className='bg-register'>
        <Card className='cardbox' border='secondary' style={{ width: '30rem'}}>
            <Card.Body className='card-body'>
                <Card.Title className='title'>Welcome to Tokopelia</Card.Title>
                <Form>
                <Form.Group id='fullname' className="mb-3" controlId="formBasicEmail">
                        <p className='label'>Fullname<span className='required'>*</span> </p>
                        <Form.Control className='Control2' type="text" placeholder="Enter fullname" value={fullname} onChange={changeFullname} />
                    </Form.Group>

                    <Form.Group id='email' className="mb-3" controlId="formBasicEmail">
                        <p className='label'>Email address<span className='required'>*</span> </p>
                        <Form.Control className='Control2' type="text" placeholder="Enter email" value={email} onChange={changeEmail} />
                    </Form.Group>

                    <Form.Group id='phone' className="mb-3" controlId="formBasicEmail">
                        <p className='label'> Phone Number </p>
                        <Form.Control className='Control2' type="text" placeholder="Enter phone number"  value={phone} onChange={changePhone}/>
                    </Form.Group>

                    <Form.Group id='password' className="mb-3" controlId="formBasicEmail">
                        <p className='label'> Password<span className='required'>*</span></p>
                        <Form.Control className='Control2' type="password" placeholder="Enter password"  value={password} onChange={changePassword}/>
                    </Form.Group>

                    <Form.Group id='password' className="mb-3" controlId="formBasicPassword">
                        <p className='label'> Confirm Password<span className='required'>*</span></p>
                        <Form.Control className='Control2' type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Button id='bt-register' variant="" onClick={clickRegister}>
                        Register
                    </Button>
                    </Form>
            </Card.Body>
        </Card>
  </div>
  )
}
