import Appnav from './Appnav';
import React,{useState} from 'react'
import "../styles/Login.css";
import logImg from '../images/log-img.webp';
import {Container, Col, Form,FormGroup, Label, Input,Button,} from 'reactstrap';
import Footer from './Footer';
import axios from 'axios';
import { updateLog } from "../actions/index";
import {  useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

const Login = () => {
    
    const history=useHistory();
    const dispatch=useDispatch();
    const [item,setItem]=useState({email:'',password:''});

    const handleClick=async(e)=>{
        e.preventDefault()
        axios.post(`/login`,item,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response)=>{
            if(response.data!==""){
                dispatch(updateLog())
                localStorage.setItem('user', JSON.stringify(response.data))
                history.push("/")
            }
            else{
                console.log(JSON.parse(localStorage.getItem("user")))
            }
        })
        .catch(err => console.log(err));
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
                    <h2>Sign In</h2>
                    <Form className="form" >
                <Col>
                    <FormGroup>
                    <Label>Email</Label>
                    <Input
                        type="email"
                        onChange={e=>setItem({...item,email:e.target.value})}
                        value={item.email}
                        name="email"
                        id="exampleEmail"
                        placeholder="myemail@email.com"
                    />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                    <Label for="examplePassword">Password</Label>
                                <Input
                                type="password"
                                onChange={e=>setItem({...item,password:e.target.value})}
                                value={item.password}
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                                />
                            </FormGroup>
                        </Col>
                        <Button onClick={handleClick} type="submit">Submit</Button>
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

export default Login
