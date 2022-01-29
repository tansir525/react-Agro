import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../Assets/Asset 16.png'
import { BsPersonCircle } from "react-icons/bs";
import './Header.css'


const Header = () => {
    return (
        <>
<Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
  <Container>

  <Navbar.Brand href="#home">       <img
        src={logo}
        width="130"
        height="32"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link href="#home"  >Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#career">Career</Nav.Link>
      <Nav.Link href="#contact">Contact Us</Nav.Link>
      
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      <Nav.Link href="#profile"> <BsPersonCircle/></Nav.Link>      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default Header;