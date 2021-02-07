import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function Navibar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
                <Navbar.Brand>stepGT Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                        <Nav.Link><Link to="/about">About</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="primary" className="mr-2">Log In</Button>
                        <Button variant="primary">Sigh Out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}