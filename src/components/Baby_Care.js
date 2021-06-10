import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../styles/baby_care.css";
import { FormControl, Form, Button } from "react-bootstrap";
import { Border, BorderRight, CartPlus } from "react-bootstrap-icons";
import Appnav from "./Appnav";
import Side_Bar_Product_Category from "./Side_Bar_Product_Category";
import Baby_Care_Products from "./Baby_Care_Products";
import Fitness_and_Wellness_Products from "./Fitness_and_Wellness_Products";
import FamilyCareProducts from "./FamilyCareProducts";
import PersonalCareProducts from "./PersonalCareProducts";
const BabyCare = () => {
  return (
    <div>
      <Appnav />
      {/* -------------------------Search Input------------------------------------- */}
      <div className="row">
        <div className="col">
          <div>
            <Form inline className="form-for-search">
              <FormControl
                type="text"
                placeholder="Search for medicines, health products and more"
                className="mr-sm-2"
                id="temp"
              />
            </Form>
          </div>
        </div>

        {/* -------------------------Search Button------------------------------------- */}
        <div className="col">
          <Button variant="primary" className="btn-for-search">
            {/* <Search /> */}
            Search
          </Button>
        </div>

        {/* -------------------------For Cart button------------------------------------- */}
        <div className="col">
          <Button className="button-for-cart">
            <CartPlus />
            VIEW CART
          </Button>
        </div>
      </div>

      <hr />
      <div className="row ">
        <Router>
          {/* -------------------------side menu bar----------------------- */}
          <div className="col-2">
            <Side_Bar_Product_Category />
          </div>
          {/* -------------------content box------------------- */}

          <div className="col-10 ">
            <Route
              path="/baby-care"
              exact={true}
              component={Baby_Care_Products}
            />
            <Route
              path="/fitness-and-wellness"
              exact={true}
              component={Fitness_and_Wellness_Products}
            />
            <Route
              path="/family-care"
              exact={true}
              component={FamilyCareProducts}
            />
            <Route
              path="/personal-care"
              exact={true}
              component={PersonalCareProducts}
            />
          </div>
        </Router>
      </div>
    </div>
  );
};

export default BabyCare;
