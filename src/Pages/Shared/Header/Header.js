import React from 'react';
import { Container, Nav, Navbar, Collapse } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div>
            <>
                <Navbar bg="info" variant="dark" expand={true}>
                    <Container>
                        <Navbar.Brand href="/">ADANA CATERING SERVICE</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    
                        <Nav className="ms-auto">
                            <Nav.Link href="home"  >Home</Nav.Link>
                            <Nav.Link href="services">Services</Nav.Link>
                            <Nav.Link href="about">About</Nav.Link>
                            <Nav.Link href="blog">Blogs</Nav.Link>
                            <Nav.Link href="contact">Contact Us</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="login"  >Login</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header; <h1>This is header </h1>