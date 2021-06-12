import React from "react";
import "../styles/Consult.css";
import doc1 from "../images/doc1.jpg";
import pregnant_woman from "../images/pregnant_woman.jpg";
import general_physician from "../images/general_physician.png";
import stomach_digestion from "../images/stomach_digestion.jpg";
import pediatrics from "../images/pediatrics.png";
import doctor_static from "../images/doctor_static.jpeg";
import offer1 from "../images/offer1.jpg";
import offer2 from "../images/offer2.jpg";
import offer3 from "../images/offer3.jpg";
import Appnav from "./Appnav";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "bootstrap";
import Footer from "./Footer";

const Consult = () => {
  return (
    <div>
      <Appnav />
      <div>
        {/*---------------------------Top {Carousel type} ------------------------------Start */}
        <img src={doc1} alt="response 1" className="main-pic" />

        <div className="temp">
          <div className="row">
            <div className="col">
              <p>
                <h1>Skip the travel!</h1>
                <h1> Take Online Doctor Consultation</h1>
                <h4>
                  Private consultation + Audio call · Starts at just ₹ 199
                </h4>
                <p>
                  +150 Doctors are online
                  <div
                    className="spinner-grow text-primary spinner-border"
                    role="status"
                  >
                    <span className="visually-hidden"></span>
                  </div>
                </p>
              </p>
              <button className="btn-lg btn-primary">Consult Now!</button>
            </div>
          </div>
        </div>

        {/*---------------------------Card for types of consultation -----------------------------Start */}

        <div className="row consult-types" style={{ paddingTop: "200px" }}>
          <div className="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src={pregnant_woman} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Gynaecology</h5>

                <a href="/gynacologyProducts" class="btn btn-primary">
                  Consult Now!
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src={general_physician} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">General Physician</h5>

                <a href="/general-physian" className="btn btn-primary">
                  Consult Now!
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src={stomach_digestion} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  Stomach and Digestion
                  <br />
                  
                </h5>

                <a href="#" className="btn btn-primary">
                  Consult Now!
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src={pediatrics} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Pediatrics</h5>

                <a href="/pediatricianProducts" class="btn btn-primary">
                  Consult Now!
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*---------------------------Carousel------------------------------Start */}

        <h1 style={{ margin: "25px 0px 10px 40px" }}>Offers</h1>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <a href="#">
                <img class="d-block w-100" src={offer1} alt="First slide" />
              </a>
            </div>
            <div class="carousel-item">
              <a href="#">
                <img
                  class="d-block w-100 carousel-img"
                  src={offer2}
                  alt="Second slide"
                />
              </a>
            </div>
            <div class="carousel-item">
              <a href="#">
                <img class="d-block w-100" src={offer3} alt="Third slide" />
              </a>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      {/* --------------------------------- */}

      <Footer />
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

export default Consult;
