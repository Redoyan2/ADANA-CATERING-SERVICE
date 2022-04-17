import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    return (
        <div>
            <div className='container w-50 mx-auto'>

                <h1 className='text-info text-center mt-3'>Please Register </h1>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Enter your name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="info w-50 mx-auto d-block mb-3" type="submit">
                        Register
                    </Button>
                </Form>

                <p>Already have an account? <Link to="/login" className='text-info pe-auto text-decoration-none' >Please Login</Link> </p>
                <p>Forget Password? <button className='btn btn-link text-info pe-auto text-decoration-none' >Reset Password</button> </p>

            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register; 