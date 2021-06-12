import React,{useState,useEffect} from "react";
import {
  Button,
  Row,
  ButtonGroup,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const EditProfile = () => {
  const history=useHistory();

  const handleClick=async(e)=>{
    e.preventDefault()
    localStorage.removeItem("user")
    localStorage.setItem("user",JSON.stringify(data))
    axios.post(`/update-patient`,data,
    {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response)=>{})
    .catch(err => console.log(err));
    history.push("/profile")
}

  const [data,setData]=useState({})
  useEffect(()=>{
    setData(JSON.parse(localStorage.getItem("user")))
  },[])

  return (
    <div>
      <Form>
        <Row>
          <Col md={3}>
            <FormGroup>
              <Label for="userID">User Id</Label>
              <Input
                type="text"
                name="userId"
                id="userId"
                value={data.id}
                disabled
              />
            </FormGroup>
          </Col>
          <Col md={9}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                onChange={e=>setData({...data,name:e.target.value})}
                value={data.name}
              />
            </FormGroup>
          </Col>

          <Col md={3}>
            <FormGroup>
              <Label for="gender">Gender</Label>
              <Input
                type="text"
                name="gender"
                id="gender"
                onChange={e=>setData({...data,gender:e.target.value})}
                value={data.gender}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="bloodGroup">Blood Group</Label>
              <Input
                type="text"
                name="bloodGroup"
                id="bloodGroup"
                onChange={e=>setData({...data,bloodGroup:e.target.value})}
                value={data.bloodGroup}
              />
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <Label for="dob">DOB</Label>
              <Input type="text" name="dob" id="dob"
              onChange={e=>setData({...data,dob:e.target.value})}
              value={data.dob} />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label for="phoneNumber">Contact Number</Label>
              <Input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                onChange={e=>setData({...data,phoneNumber:e.target.value})}
                value={data.phoneNumber}
              />
            </FormGroup>
          </Col>
          <Col md={8}>
            <FormGroup>
              <Label for="emailId">Email Id</Label>
              <Input
                type="email"
                name="email"
                id="email"
                onChange={e=>setData({...data,email:e.target.value})}
                value={data.email}
              />
            </FormGroup>
          </Col>

          <Col md={7}>
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                type="text"
                name="city"
                id="city"
                onChange={e=>setData({...data,city:e.target.value})}
                value={data.city}
              />
            </FormGroup>
          </Col>

          <Col md={5}>
            <FormGroup>
              <Label for="pincode">Pincode</Label>
              <Input
                type="text"
                name="pincode"
                id="pincode"
                onChange={e=>setData({...data,pincode:e.target.value})}
                value={data.pincode}
              />
            </FormGroup>
          </Col>
          <Col md={7}>
            <FormGroup>
              <Label for="state">State</Label>
              <Input
                type="text"
                name="state"
                id="state"
                onChange={e=>setData({...data,state:e.target.value})}
                value={data.state}
              />
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <Label for="country">Country</Label>
              <Input
                type="text"
                name="country"
                id="country"
                onChange={e=>setData({...data,country:e.target.value})}
                value={data.country}
              />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label for="addressLine1">Address Line 1</Label>
              <Input
                type="textarea"
                name="addressLine1"
                id="addressLine1"
                onChange={e=>setData({...data,addressLine1:e.target.value})}
                placeholder="Address Line 1"
                value={data.addressLine1}
              />
            </FormGroup>
          </Col>

          <Col md={12}>
            <FormGroup>
              <Label for="addressLine2">Address Line 2 </Label>
              <Input
                type="textarea"
                name="addressLine2"
                id="addressLine2"
                onChange={e=>setData({...data,addressLine2:e.target.value})}
                placeholder="Address Line 2"
                value={data.addressLine2}
              />
            </FormGroup>
          </Col>
        </Row>

        <Button  onClick={handleClick} type="submit" color="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EditProfile;
