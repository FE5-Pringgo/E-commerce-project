import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Card, Form } from 'react-bootstrap';
import "../Styles/addProduct.css";

export default function Login() {
  
    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');
    const [price,setPrice] = useState('');
    const [quantity,setQuantity] = useState('');

    const changeTitle = (e) =>{
        const value = e.target.value;
        setTitle(value);
    }

    const changeDesc = (e) => {
        const value = e.target.value;
        setDesc(value)
    }

    const changePrice = (e) => {
        const value = e.target.value;
        setPrice(value);
    }

    const changeQuantity = (e) => {
        const value = e.target.value;
        setQuantity(value);
    }

    const handleSubmit = () =>{
        console.log('di klik');
    }


  return (
    <div className='bg-add'>
        <Card className='card-add' border='secondary' style={{ width: '30rem'}}>
            <Card.Body className='card-body'>
                <Card.Title className='title'>Add Product</Card.Title>
                <Form>
                    <Form.Group id='title' className="mb-3" controlId="formBasicEmail">
                        <p className='label'>Title</p>
                        <Form.Control type="text" placeholder="Enter Title" value={title} onChange={changeTitle}/>
                    </Form.Group>

                    <Form.Group id='description' className="mb-3" controlId="formBasicPassword">
                        <p className='label' >Description</p>
                        <Form.Control type="text" placeholder="Description" value={desc} onChange={changeDesc}/>
                    </Form.Group>

                    <Form.Group id='price' className="mb-3" controlId="formBasicPassword">
                        <p className='label' >Price</p>
                        <Form.Control type="text" placeholder="Price" value={price} onChange={changePrice}/>
                    </Form.Group>

                    <Form.Group id='Quantity' className="mb-3" controlId="formBasicPassword">
                        <p className='label' >Quantity</p>
                        <Form.Control type="text" placeholder="Quantity" value={quantity} onChange={changeQuantity}/>
                    </Form.Group>

                    <Form.Group id='image' className="mb-3" controlId="formBasicPassword">
                        <p className='label' >Image</p>
                        <Form.Control type="file" placeholder="Description"  size='sm'/>
                    </Form.Group>


                    <Button id='bt-add' variant="" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
  </div>
  )
}
