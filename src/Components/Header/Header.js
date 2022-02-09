import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../Assets/Asset 16.png'
import { BsPersonCircle } from "react-icons/bs";
import './Header.css'


const Header = () => {
    return (
        <div>
        <Navbar  className='mb-5 p-2 ' collapseOnSelect expand="lg" fixed="top" bg="light">
        <Container >

  <Navbar.Brand className='custom-logo' href="/"><img
        src={logo}
        width="120"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> </Navbar.Brand>
  <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse  id="responsive-navbar-nav">
    <Nav  className="mx-auto" >
      
      <Nav.Link className='custom-nav' href="#home" >Home</Nav.Link>
      <Nav.Link className='custom-nav' href="#about">About</Nav.Link>
      <Nav.Link className='custom-nav' href="#career">Career</Nav.Link>
      <Nav.Link className='custom-nav' href="#contact">Contact Us</Nav.Link>
    
    </Nav>
    <Nav>
      <Nav.Link className='active' href="#profile"> <p><BsPersonCircle/></p> </Nav.Link>      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    );
};

export default Header;