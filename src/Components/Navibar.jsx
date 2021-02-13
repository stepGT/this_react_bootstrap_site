import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container, Modal } from 'react-bootstrap';
import styled from 'styled-components'

const Styled = styled.div`
    a, .navbar-brand, .navbar-nav, .nav-link {
        color: #adb1b8;
        &:hover {
            color: white
        } 
    }
`
export default function Navibar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Styled>
                <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
                    <Container>
                        <Navbar.Brand>stepGT Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/users">Users</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Button onClick={handleShow} variant="primary" className="mr-2">Log In</Button>
                                <Button variant="primary">Sigh Out</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styled>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}