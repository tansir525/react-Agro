import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../Assets/Asset 16.png'
import { BsPersonCircle } from "react-icons/bs";
import './Header.css'


const Header = () => {
    return (
        <div>
        <Navbar className='px-3 py-2'collapseOnSelect expand="lg , md"  fixed="top"    bg="light">
        <Container >

  <Navbar.Brand className='custom-logo' href="#home">       <img
        src={logo}
        width="130"
        height="32"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav  className="mx-auto">
      
      <Nav.Link className='custom-nav active' href="#home" >Home</Nav.Link>
      <Nav.Link className='custom-nav' href="#about">About</Nav.Link>
      <Nav.Link className='custom-nav' href="#career">Career</Nav.Link>
      <Nav.Link className='custom-nav' href="#contact">Contact Us</Nav.Link>
    
    </Nav>
    <Nav>
      <Nav.Link href="#profile"> <BsPersonCircle/></Nav.Link>      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    );
};

export default Header;