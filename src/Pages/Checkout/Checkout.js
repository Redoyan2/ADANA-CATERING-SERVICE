import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Checkout = () => {
    return (
        <div className='m-5'>
            <Form className='w-50'>
            <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                    
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Address:</Form.Label>
                    <Form.Control type="password" placeholder='Your address' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Terms and Condition" />
                </Form.Group>
                <Button variant="info" type="submit">
                    Place Order
                </Button>
            </Form>
        </div>
    );
};

export default Checkout;