import React, { Component } from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'


export default class Body extends Component {
  render() {
    return (
        <Container>
            <Navbar bg="light" expand="lg" collapseOnSelect>
                <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
        
    )
  }
}