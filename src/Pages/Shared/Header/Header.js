import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div>
            <>
                <Navbar bg="info" variant="dark" expand={true}>
                    <Container>
                        <Navbar.Brand href="home">ADANA CATERING SERVICE</Navbar.Brand>
                        <Nav className="ms-auto">
                            <Nav.Link href="home"  >Home</Nav.Link>
                            <Nav.Link href="services">Services</Nav.Link>
                            <Nav.Link href="about">About</Nav.Link>
                            <Nav.Link href="blog">Blogs</Nav.Link>
                            <Nav.Link href="contact">Contact Us</Nav.Link>
                            
                        </Nav>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header; <h1>This is header </h1>