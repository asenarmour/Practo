import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import "../styles/Appnav.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { updateLog } from "../actions/index";
import logo from "../images/logo.PNG";
const Appnav = () => {
  const history = useHistory();

  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  function handleClick() {
    history.push("/login");
  }
  return (
    <div className="nav-bar">
      <Navbar bg="light" expand="lg" variant="light">
        <Navbar.Brand href="/">AarogyaVat</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/doctors">Doctors</Nav.Link>
            <Nav.Link href="/consult">Consult</Nav.Link>
            <Nav.Link href="/pharmacy">Pharmacy</Nav.Link>
            <Nav.Link href="/diagnostics">Diagnostics</Nav.Link>
          </Nav>
          <img src={logo} className="logo" />
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
          {isLogged ? (
            <Button onClick={handleClick} variant="outline-success">
              Login/SignUp
            </Button>
          ) : (
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/lab-tests">My Test</NavDropdown.Item>
              <NavDropdown.Item href="/appointments">
                My Appointments
              </NavDropdown.Item>
              <NavDropdown.Item href="/medical-records">
                My Medical Records
              </NavDropdown.Item>
              <NavDropdown.Item href="/feedback">My Feedback</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" onClick={() => dispatch(updateLog())}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Appnav;
