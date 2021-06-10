import React from "react";
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
const ShowProfile = () => {
  const data = {
    userId: "121",
    name: "Bareet Singh",
    gender: "Male",
    contactNumber: "1234567890",
    emailId: "abc@gmail.com",
    dob: "14/08/1998",
    bloodGroup: "O+",
    city: "Kashipur",
    state: "UK",
    country: "India",
    pincode: "244713",
  };
  const addressLine1 =
    data.city + ", " + data.state + ", " + data.country + ", " + data.pincode;
  const addressLine2 = addressLine1;

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
                value={data.userId}
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
                value={data.name}
                disabled
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
                value={data.gender}
                disabled
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
                value={data.bloodGroup}
                disabled
              />
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <Label for="dob">DOB</Label>
              <Input
                type="text"
                name="dob"
                id="dob"
                value={data.dob}
                disabled
              />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label for="number">Contact Number</Label>
              <Input
                type="text"
                name="number"
                id="number"
                value={data.contactNumber}
                disabled
              />
            </FormGroup>
          </Col>
          <Col md={8}>
            <FormGroup>
              <Label for="emailId">Email Id</Label>
              <Input
                type="email"
                name="emailId"
                id="emailId"
                value={data.emailId}
                disabled
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
                value={data.city}
                disabled
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
                value={data.pincode}
                disabled
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
                value={data.state}
                disabled
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
                value={data.country}
                disabled
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
                placeholder="Address Line 1"
                value={addressLine1}
                disabled
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
                placeholder="Address Line 2"
                value={addressLine2}
                disabled
              />
            </FormGroup>
          </Col>
        </Row>

        <Button type="submit" color="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ShowProfile;
