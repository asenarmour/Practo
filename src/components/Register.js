import Appnav from './Appnav';
import React,{useState} from 'react';
import "../styles/Login.css";
import logImg from '../images/log-img.webp';
import {Container, Col, Form,FormGroup, Label, Input,Button,} from 'reactstrap';
import Footer from './Footer'
import axios from 'axios';
const Register = () => {

    const [item,setItem] = useState({username:'',email:'',password:'',confirmPass:'',firstName:'',lastName:'',registerAs:''})
    const handleClick=(e)=>{
        e.preventDefault()
        axios.post('/register',item,{
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response=>{console.log(response.data)})
            .catch(err=>console.log(err));
    }

    return (
        <div className="login">
            <Appnav/>
            <div className="log-reg1 container-fluid">
                <h3><a href="/login">Login</a></h3>
                <h3><a href="/register">Register</a></h3>
            </div>
            <div className="row log-reg2 container-fluid">
                    <div className="col-md-6">
                        <Container className="App">
                        <h2>Registor</h2>
                            <Form className="form">
                        <Col>
                                <FormGroup>
                                <Label>Email</Label>
                                <Input
                                type="email"
                                onChange={(e)=>setItem({...item,email:e.target.value})}
                                value={item.email}
                                name="email"
                                id="exampleEmail"
                                placeholder="myemail@email.com"
                                />
                                </FormGroup>
                            </Col>
                        <Col>
                            <FormGroup>
                            <Label for="username">User Name</Label>
                            <Input
                            type="text"
                            onChange={(e)=>setItem({...item,username:e.target.value})}
                            value={item.username}
                            name="username"
                            id="username"
                            placeholder="asen armour"
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                        <FormGroup>
                            <Label for="examplePassword1">Enter Password</Label>
                            <Input
                            type="password"
                            onChange={(e)=>setItem({...item,password:e.target.value})}
                            value={item.password}
                            name="password"
                            id="examplePassword1"
                            placeholder="********"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Confirm Password</Label>
                            <Input
                            type="password"
                            onChange={(e)=>setItem({...item,confirmPass:e.target.value})}
                            value={item.confirmPass}
                            name="passwordc"
                            id="examplePassword"
                            placeholder="********"
                            />
                        </FormGroup>
                    </Col>
                    {(item.password!==item.confirmPass) ? 
                    <div className="password-not-matching">
                <h5> password does not match</h5>
                    </div> : ''}
                    <Col>
                        <div class="form-check-inline register-as">
                            <label class="form-check-label" >
                        <input type="radio" class="form-check-input" name="registerAs" 
                        onChange={(e)=>setItem({...item,registerAs:e.target.value})}
                        value="Patient"
                        />
                        Patient
                            </label>
                        </div>
                        <div class="form-check-inline register-as">
                            <label class="form-check-label" >
                        <input type="radio" class="form-check-input" name="registerAs" 
                        onChange={(e)=>setItem({...item,registerAs:e.target.value})}
                            value="Doctor"
                        />Doctor
                        </label>
                        </div>
                    </Col>
                        <Button onClick={handleClick}  type="submit">Submit</Button>
                    </Form>
                    </Container>
                </div>
                <div className="col-md-6">
                    <img src={logImg} alt="conference"  />
                </div>
            </div>
            <Footer/>         
        </div>
    )
}

export default Register