import React from "react";
import "../styles/Pharmacy.css";

import { FormControl, Form, Button } from "react-bootstrap";

import { Border, CartPlus } from "react-bootstrap-icons";

import pharmacy_carousel_1 from "../images/pharmacy_carousel_1.webp";
import pharmacy_carousel_2 from "../images/pharmacy_carousel_2.webp";
import pharmacy_carousel_3 from "../images/pharmacy_carousel_3.webp";
import pharmacy_carousel_4 from "../images/pharmacy_carousel_4.webp";
import chat_with_doctor from "../images/chat_with_doctor.png";
import home_delivery from "../images/home_delivery.png";
import pain_relief from "../images/pain_relief.png";
import skin_care from "../images/skin_care.png";
import weight_management from "../images/weight_management.png";
import heart_health from "../images/heart_health.png";
import baby_care from "../images/baby_care.png";
import fitness_and_wellcare from "../images/fitness_and_wellcare.png";
import family_care from "../images/family_care.png";
import personal_care from "../images/personal_care.png";
import know_your_medicine from "../images/know_your_medicine.webp";
import doctor_static from "../images/doctor_static.jpeg";

import Appnav from "./Appnav";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./Slider";
const Pharmacy = () => {
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

      {/* -------------------------For Carousel------------------------------------- */}

      <div className="row div-for-carousel">
        <div>
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100 carousel-img"
                  src={pharmacy_carousel_1}
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100 carousel-img"
                  src={pharmacy_carousel_2}
                  alt="Second slide"
                />
              </div>

              <div class="carousel-item">
                <img
                  class="d-block w-100 carousel-img"
                  src={pharmacy_carousel_3}
                  alt="Third slide"
                />
              </div>

              <div class="carousel-item">
                <img
                  class="d-block w-100 carousel-img"
                  src={pharmacy_carousel_4}
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------- */}

      <div className="row">
        <div className="col" style={{ padding: "20px 60px" }}>
          <h2>Browse medicines & health products</h2>
        </div>
      </div>

      {/* -------------------Carousel for health condition----------------- */}

      <div className="row consult-types">
        <div className="row">
          <h5>Health condition</h5>
        </div>
        <div className="row">
          <div className="col">
            <div className="row ">
              <div className="col">
                <div>
                  <img src={skin_care} class="card-img" alt="..." />
                </div>
              </div>

              <div className="col">
                <div>
                  <img src={weight_management} class="card-img" alt="..." />
                </div>
              </div>

              <div className="col">
                <div>
                  <img src={pain_relief} class="card-img" alt="..." />
                </div>
              </div>

              <div className="col">
                <div>
                  <img src={heart_health} class="card-img" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------Carousel for Categories----------------- */}

      <div className="row consult-types">
        <div className="row">
          <h5>Categories</h5>
        </div>
        <div className="row">
          <div className="col">
            <div className="row ">
              <div className="col">
                <div>
                  <img src={baby_care} class="card-img" alt="..." />
                </div>
              </div>

              <div className="col">
                <div>
                  <img src={fitness_and_wellcare} class="card-img" alt="..." />
                </div>
              </div>

              <div className="col">
                <div>
                  <img src={family_care} class="card-img" alt="..." />
                </div>
              </div>

              <div className="col">
                <div>
                  <img src={personal_care} class="card-img" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr style={{ margin: "50px 40px" }} />
      {/* ----------------------------------------------------------- */}
      <div className="row" style={{ margin: "60px 30px" }}>
        <div className="col">
          <p style={{ color: "blue" }}>Introducing to consultation desk</p>
          <h4>
            Don't self medicate. Talk to an expert. Consult a doctor in less
            than 2 minutes
          </h4>
          <img src={chat_with_doctor} style={{ width: "100%" }}></img>
        </div>
        <div className="col">
          <p style={{ color: "blue" }}>Introducing to consultation desk</p>
          <h4>
            Tired of waiting in a queue? Too weak to go down and buy medicines?
          </h4>
          <img src={home_delivery} style={{ width: "100%" }}></img>
        </div>
      </div>
      {/* ------------------------------------------------------------------------- */}

      <div className="row">
        <div className="col">
          <img src={know_your_medicine} className="know-your-medicine"></img>
        </div>
      </div>

      {/* -------------------------------------------- */}

      <div className="row" style={{ margin: "20px" }}>
        <div className="col">
          <Slider />
        </div>
      </div>

      {/* ----------------------------------------- */}

      <div className="row">
        <div className="col">
          <Footer />
        </div>
      </div>

      {/*---------------------------For Static Card -----------------------------Start */}

      <div className="position-fixed">
        <div className="position-fixed-text">
          <h3>Thank You!</h3>
          <p>
            Your Response to India
            <br /> Health Hour was overwhelming
          </p>
          <button className="btn btn-primary">Know More</button>
        </div>
        <img src={doctor_static} className="card-img-static" alt="..." />
      </div>
    </div>
  );
};

export default Pharmacy;
