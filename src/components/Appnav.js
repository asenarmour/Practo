import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import "../styles/Appnav.css";
import { useHistory } from "react-router-dom";
import React,{useState,useEffect} from "react";
import logo from "../images/logo.PNG";
const Appnav = () => {
  const history = useHistory();
  const [isLog,setIsLog]=useState(false)

  useEffect(()=>{
    const user=localStorage.getItem("user")
  if(user!==null){
    setIsLog(true)
  }
  },[])

  function handleClick() {
    history.push("/login");
  }

  const dispatch=(e)=>{
    localStorage.removeItem("user");
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
            <Nav.Link href="/conference">Conference</Nav.Link>
          </Nav>
          <img src={logo} className="logo" alt='' />
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
          {!isLog ? (
            <Button onClick={handleClick} variant="outline-success">
              Login/SignUp
            </Button>
          ) : (
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/appointments">
                My Appointments
              </NavDropdown.Item>
              <NavDropdown.Item href="/medicine-orders">
                My Medicine Order
              </NavDropdown.Item>
              <NavDropdown.Item href="/feedback">My Feedback</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" onClick={(e) => dispatch(e)}>
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
