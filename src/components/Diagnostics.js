import React from "react";
import { FormControl, Form, Button } from "react-bootstrap";
import {
  CartPlus,
  Search,
  Person,
  FileCheck,
  PeopleFill,
  FileMedical,
  Map,
  ArrowRight,
} from "react-bootstrap-icons";
import Slider from "./Slider";
import Footer from "./Footer";
import diagnostics_top_banner from "../images/diagnostics_top_banner.jpg";
import partner_lab_1 from "../images/partner_lab_1.png";
import partner_lab_2 from "../images/partner_lab_2.png";
import partner_lab_3 from "../images/partner_lab_3.png";
import partner_lab_4 from "../images/partner_lab_4.png";

import "../styles/diagnostics.css";
import Appnav from "./Appnav";

const Diagnostics = () => {
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
                placeholder="Search for tests and Profiles"
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
            CART
          </Button>
        </div>
      </div>

      {/* ----------------------------------Top Banner----------------------------------------- */}
      <div className="row" id="for-absolute">
        <div>
          <img src={diagnostics_top_banner} id="top-banner"></img>
        </div>
      </div>

      {/* ----------------------------------Text on Banner----------------------------------------- */}
      <div className="row" id="for-relative">
        <div className="col-12">
          <h2 style={{ lineHeight: "200%" }}>
            Get lab tests and full body checkups from the comfort of your home.
          </h2>
          <h3 className="offer-line-1">Upto 45% OFF</h3>
          <p className="offer-line-2 "> +Get 10% Health Cashback* T&C</p>
        </div>
      </div>

      {/* ----------------------------------------Button on Banner---------------*/}

      <div className="row">
        <div className="col ">
          <Button className="btn-on-banner"> See all packages</Button>
        </div>
      </div>

      {/* --------------------------------Top Booked Diagnostic Tests-------------------------------- */}

      <div className="row" style={{ margin: "200px 80px 60px 80px" }}>
        <div className="row">
          <h2 style={{ padding: "12px" }}>Top Booked Diagnostic Tests</h2>
        </div>
        <div className="row">
          <div className="col">
            <div class="card">
              <div class="card-body">
                <p class="card-text">
                  <h3 className="heading-in-card">Malarial Antigen PCR</h3>
                  known as Malarial Antigen Pcr Blood
                  <h4>₹200</h4>
                </p>
                <Button>Add</Button>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{ height: "auto" }}>
              <div class="card-body">
                <p class="card-text">
                  <h3 className="heading-in-card">HbA1c Test</h3>
                  known as Glycosylated Haemoglobin Blood
                  <h4>₹270</h4>
                </p>
                <Button>Add</Button>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{ height: "auto" }}>
              <div class="card-body">
                <p class="card-text">
                  <h3 className="heading-in-card">Serum B12</h3>
                  known as Vitamin B12 Conventional Blood
                  <h4>₹200</h4>
                </p>
                <Button>Add</Button>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{ height: "auto" }}>
              <div class="card-body">
                <p class="card-text">
                  <h3 className="heading-in-card">Fasting Blood Sugar</h3>
                  known as Glucose Fasting Blood
                  <h4>₹150</h4>
                </p>
                <Button>Add</Button>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{ height: "auto" }}>
              <div class="card-body">
                <p class="card-text">
                  <h3 className="heading-in-card">Beta HCG</h3>
                  known as Beta Hcg Automated Blood
                  <h4>₹299</h4>
                </p>
                <Button>Add</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------Our Partner Labs--------------------------- */}
      <hr className="ruler" />

      <div className="row" style={{ margin: "20px 50px" }}>
        <h5>Our Partner Labs</h5>
      </div>
      <div className="row" style={{ margin: "20px 50px" }}>
        <p>
          Your tests will be conducted in one of our partner labs to ensure
          highest accuracy of your reports
        </p>
      </div>
      <div className="row" style={{ margin: "20px 50px" }}>
        <div className="col">
          <img src={partner_lab_1} className="partner-img"></img>
        </div>
        <div className="col">
          <img src={partner_lab_2} className="partner-img"></img>
        </div>
        <div className="col">
          <img src={partner_lab_3} className="partner-img"></img>
        </div>
        <div className="col">
          <img src={partner_lab_4} className="partner-img"></img>
        </div>
      </div>
      <hr className="ruler" />

      {/* ------------------------------Why US?-------------------- */}

      <div className="row" className="why-us-section">
        <div className="col">
          <h1 className="center">Why book with us?</h1>
        </div>
        <div className="row justify-content-around">
          <div className="col-5">
            <strong>Home sample collection for FREE</strong>A certified
            professional will collect your sample from your preferred location
          </div>
          <div className="col-5">
            <strong>Get digital report within a day </strong>Our labs ensure
            turn-around-time of 24 hours from specimen pickup
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-5">
            <strong> Valuable doctor's consultation </strong>Get your online
            reports and review them with one of our doctors for free.
          </div>
          <div className="col-5">
            <strong>Offers and affordable prices </strong>Get great discounts
            and offers on tests and packages.
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------- */}

      <div class="row  justify-content-around works">
        <div class="row">
          <div className="col center h1">How it works?</div>
        </div>

        <div class="row justify-content-around">
          <div className="col-2 ">
            <div className="center">
              <Search className="h1" />
            </div>
            Search for tests and packages and seamlessly book a home sample
            collection.
          </div>
          <div className="col-1">
            <h1>
              <ArrowRight />
            </h1>
          </div>
          <div className="col-2">
            <div className="center">
              <Person className="h1" />
            </div>
            We will send a certified professional to your place to assist you
            with the sample collection
          </div>
          <div className="col-1">
            <h1>
              <ArrowRight />{" "}
            </h1>
          </div>
          <div className="col-2">
            <div className="center">
              <FileCheck className="h1" />
            </div>
            We will email you the reports. You can also access your reports
            within your account on the Practo app{" "}
          </div>
        </div>
      </div>

      {/* -----------------------------We do great------------------------ */}
      <div className="we-do-great">
        <div class="row h1">
          <div className="col center">We do great</div>
        </div>
        <div class="row justify-content-around">
          <div className="col-2 ">
            <div className="center">
              <PeopleFill className="h1" />
            </div>
            <h5>15 Million users every month</h5>
          </div>
          <div className="col-2">
            <div className="center">
              <FileMedical className="h1" />
            </div>
            <h5>Trusted by 2,00,000 healthcare professionals</h5>
          </div>
          <div className="col-2">
            <div className="center">
              <Map className="h1" />
            </div>
            <h5>We serve in 40+ cities</h5>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------- */}

      <hr className="ruler" />
      <div className="container-fluid">
        <h1 className="center">Thousands of Happy Customers</h1>
        <Slider />
      </div>
      <hr className="ruler" style={{ marginTop: "40px" }} />
      {/* ----------------------------------------------------- */}
      <div class="row">
        <div className="col desc">
          <p>
            Book <strong>Diagnostic tests</strong> near you with Practo
            Associate Labs, your online lab test service provider for
            diagnostic, medical tests and health checkup packages
          </p>
          <p>
            Get all the benefits of <strong>diagnostic centre</strong> and
            <strong>pathology labs </strong> right from the comfort of your
            home. With a phlebotomy team to ensure speedy home sample
            collection, and diagnostic services ranging from individual tests to
            complete health checkup packages for Men, Women, Senior Citizens &
            Corporates. Practo Associate Labs takes care of all your diagnostic
            needs.
          </p>
          <p>
            <strong>Wide Selection of Tests:</strong> Practo Associate Labs
            covers a wide array of tests like{" "}
            <strong>blood sugar tests, thyroid tests, pregnancy tests</strong>,
            allergy tests, lipid profile, liver profile, platelet count, VDRL
            test, vitamin B12 deficiency test and more. Get details of all these
            tests such as blood test cost, when to take the tests, why it is
            required, who should take the test and what to do before taking the
            blood tests at home.
          </p>
          <p>
            <strong>Sample Collection at Home:</strong> Book blood tests online
            from your home and our expert team of Practo Associate Labs
            technicians will arrive at the pre-scheduled time to pick up your
            sample. Once you get a <strong>diagnostic test</strong> done, you
            will receive your reports online.
          </p>
          <p>
            <strong>Digital Reports:</strong> Get all your diagnostic reports
            emailed directly to you with detailed <strong>blood test</strong>{" "}
            reports & secure storage to easily access your medical records
            online.
          </p>
          <p>
            <strong>Full Body Health Checkup:</strong> Keep your health and well
            being in check with exclusive Health Checkup Packages like Men’s
            Health Package, Women’s Health Package, Vitamin Package, Health
            Package for Corporates, Diabetes Packages, Packages for Senior
            Citizens & more. Get full details of all tests available in a
            package when booking <strong>online pathology tests.</strong>
          </p>
          <p>
            <strong>
              Practo Associate Labs provides services to the following cities:
            </strong>
            Bangalore, Hyderabad, Chennai, Mumbai, Delhi, Pune, Kolkata, Navi
            Mumbai, Thane, Gurgaon, Noida, Ahmedabad, Chandigarh, Ghaziabad,
            Indore, Jaipur, Lucknow, Patna, Ernakulam, Bhubaneswar and
            Coimbatore.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Diagnostics;
