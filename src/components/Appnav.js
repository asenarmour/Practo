// import React, { Component } from 'react';
import {Nav,Navbar,NavDropdown,Button} from 'react-bootstrap';
import  '../styles/Appnav.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import React from 'react'

const Appnav = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/login");
  }
  return (
    <div className="nav-bar">
                <Navbar bg="light" expand="lg" variant="light">
  <Navbar.Brand href="/">Practo</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#">Doctors</Nav.Link>
      <Nav.Link href="#">consult</Nav.Link>
      <Nav.Link href="#">Pharmacy</Nav.Link>
      <Nav.Link href="#">Diagnostics</Nav.Link>
      
    </Nav>
    <Nav className="ml-auto">
    <NavDropdown title="For-Provider" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Action</NavDropdown.Item>
        <NavDropdown.Item href="#">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Security-help" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Action</NavDropdown.Item>
        <NavDropdown.Item href="#">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
      <Button onClick={handleClick} variant="outline-success">Login/SignUp</Button>
  </Navbar.Collapse>
</Navbar>
            </div>
  )
}

export default Appnav
