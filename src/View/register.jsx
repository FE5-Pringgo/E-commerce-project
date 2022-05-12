import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Card, Form,Alert } from 'react-bootstrap';
import "../Styles/register.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [fullname,setFullname]    = useState('');
    const [email,setEmail]          = useState(''); 
    const [phone,setPhone]          = useState('');
    const [password,setPassword]    = useState('');
    const [confirmPassword,setConfirmPassword]    = useState('');
    const [message, setMessage] = useState(null);
    const [color,setColor] = useState('success');

    const navigate = useNavigate();

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

    const changeConfirm = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
    }

    const clickRegister = () =>{
        const body ={
            name : fullname,
            email: email,
            phone: phone,
            password: password
        }
        if (password === confirmPassword) {
            axios.post('http://18.136.202.111:9001/api/v1/register',body)
            .then( result => {
                navigate("/home")
            }).catch((err => {
                setMessage(err.response.data.message);
                setColor("danger");
            }))

            
        } else {
            setMessage("Password tidak sama");
            setColor("danger")
        }
        

    }

  return (
    
    <div className='bg-register'>
        <Card className='cardbox' border='secondary' style={{ width: '30rem'}}>
            
            <Card.Body className='card-body'>
                {message && <Alert  variant={color}>
                    {message}
                </Alert>}
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
                        <Form.Control className='Control2' type="password" placeholder="Confirm Password" value= {confirmPassword} onChange= {changeConfirm}/>
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
