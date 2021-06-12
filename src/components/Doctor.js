import React from "react";
import Appnav from "./Appnav";
import Slider from "./Slider";
import { FormControl, Form, Button } from "react-bootstrap";
import { GeoAlt, Sliders } from "react-bootstrap-icons";
import "../styles/Doctor.css";

import chat_svg from "../svg/chat.svg";
import cart_svg from "../svg/cart.svg";
import records_svg from "../svg/records.svg";
import book_test from "../svg/book_test.svg";
import health from "../svg/health.svg";
import read from "../svg/read.svg";
import certified from "../svg/certified.svg";
import Security from "../images/security.webp";
import encrypt from "../svg/encrypt.svg";
import data from "../svg/data.svg";
import shield_lock from "../svg/shield-lock.svg";
import Video1 from "../video/video1.mp4";
import fortune_logo from "../images/fortune_logo.jpg";
import tech_crunch_logo from "../images/tech_crunch_logo.jpg";
import forbes_logo from "../images/forbes_logo.jpg";
import The_Economic_Times_logo from "../images/The_Economic_Times_logo.jpg";
import the_wall_st_journal_logo from "../images/the_wall_st_journal_logo.png";
import the_times_of_india_logo from "../images/the_times_of_india_logo.jpg";
import medicine_box from "../svg/medicine_box.svg";
import Footer from "./Footer";
const Doctor = () => {
    return (
        <div>
            <Appnav />
            <div className="top">
                <div className="row">
                    <div className="col">
                        <h1 className="center" style={{ fontWeight: "bold" }}>
                            Your home for health
            </h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h2 className="center">Find and Book</h2>
                    </div>
                </div>

                {/* -------------------------Search Input------------------------------------- */}
                <div className="row justify-content-center search">
                    <div className="col-6">
                        <Form>
                            <FormControl
                                type="text"
                                placeholder="Search Doctors,clinics,hospitals etc."
                                id="search-bar"
                            />
                        </Form>
                    </div>

                    {/* -------------------------Search Button------------------------------------- */}
                    <div className="col-1">
                        <Button variant="primary" id="search-btn">
                            {/* <GeoAlt /> */}
              Search
            </Button>
                    </div>
                </div>

                {/* --------Popular Searches-------- */}
                <div className=" row popular-searches justify-content-center">
                    <div className="col-1.2" style={{ fontWeight: "bold" }}>
                        Popular searches:
          </div>
                    <div className="col-1">Dermatologist</div>
                    <div className="col-1">Pediatrician</div>
                    <div className="col-1">Gynecologist /Obstetrician</div>
                    <div className="col-1">Others</div>
                    <div className="col-1"></div>
                </div>
            </div>
            <div className="row suggestion center">
                <div className="col-2 text-center">
                    <div className="row">
                        <img src={chat_svg} className="suggestion-img" />
                    </div>
                    <div className="row">Consult with a doctor</div>
                </div>
                <div className="col-2 text-center">
                    <div className="row">
                        <img src={cart_svg} className="suggestion-img" />
                    </div>
                    <div className="row">Order medicines</div>
                </div>
                <div className="col-2 text-center">
                    <div className="row">
                        <img src={records_svg} className="suggestion-img" />
                    </div>
                    <div className="row">View medical records</div>
                </div>
                <div className="col-2 text-center">
                    <div className="row">
                        <img src={book_test} className="suggestion-img" />
                    </div>
                    <div className="row">Book test</div>
                </div>
                <div className="col-2 text-center">
                    <div className="row">
                        <img src={read} className="suggestion-img" />
                    </div>
                    <div className="row">Articles</div>
                </div>
                <div className="col-2 text-center">
                    <div className="row">
                        <img src={health} className="suggestion-img" />
                    </div>
                    <div className="row">For healthcare providers</div>
                </div>
            </div>
            {/* ------------------------------------------Security-------------------------- */}
            <div className="row security container-fluid">
                <div className="col-9 security-text">
                    <h1>Safety of your data is our</h1>
                    <h1>
                        <strong>top priority.</strong>
                    </h1>

                    <ul className="list-for-security">
                        <li>Multi-level security checks</li>
                        <li>Multiple data backups</li>
                        <li>Stringent data privacy policies</li>
                    </ul>
                    <Button>Read more...</Button>

                    <div className="row" style={{ marginTop: "20px" }}>
                        <div className="col">
                            <div className="row">
                                <img src={encrypt} className="security-bottom-img" />
                            </div>
                            <div className="row">
                                <h5>256 bit encryption</h5>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <img src={certified} className="security-bottom-img" />
                            </div>
                            <div className="row">
                                <h5>ISO 27001 certified</h5>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <img src={data} className="security-bottom-img" />
                            </div>
                            <div className="row">
                                <h5>HIPAA compliant data centers</h5>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <img src={shield_lock} className="security-bottom-img" />
                            </div>
                            <div className="row">
                                <h5>DSCI member</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <img src={Security} className="security-img"></img>
                </div>
            </div>
            {/* -------------------------------------------Ads--------------------------------------- */}
            <div className="row add-bar container-fluid">
                <div className="col-9 security-text">
                    <h1>Instant appointment with</h1>
                    <h1>doctors.Guaranteed.</h1>

                    <h5>
                        <ul className="list-for-security">
                            <li>100,000 Verified doctors</li>
                            <li>3M+ Patient recommendations</li>
                            <li>25M Patients/year</li>
                        </ul>
                    </h5>

                    <Button>Find me the right Doctor</Button>
                </div>

                <div className="col-3">
                    <video
                        className="vid"
                        src={Video1}
                        type="video/mp4"
                        autoPlay
                        muted
                        loop
                    ></video>
                </div>
                {/* -----------------------------------Magazines------- */}
                <div className="row magazines">
                    <div className="col">
                        <img src={fortune_logo} className="magazine-logo" />
                    </div>
                    <div className="col">
                        <img src={tech_crunch_logo} className="magazine-logo" />
                    </div>
                    <div className="col">
                        <img src={forbes_logo} className="magazine-logo" />
                    </div>
                    <div className="col">
                        <img src={The_Economic_Times_logo} className="magazine-logo" />
                    </div>
                    <div className="col">
                        <img src={the_wall_st_journal_logo} className="magazine-logo" />
                    </div>
                    <div className="col">
                        <img src={the_times_of_india_logo} className="magazine-logo" />
                    </div>
                </div>
            </div>

            {/* -------------------------About medicines-------------------------- */}

            <div class="row medicine-ads">
                <div class="col-6" style={{ paddingLeft: "100px" }}>
                    <div>
                        <div class="row">
                            <div className="col">
                                <h1>
                                    Get all your medicines.
                  <strong>Everytime. On time.</strong>
                                </h1>
                            </div>
                        </div>

                        <div class="row">
                            <div className="col">
                                <ul className="list-for-security">
                                    <li>Guaranteed availability</li>
                                    <li>Over 130,000+ genuine medicines</li>
                                    <li>Home delivery in 24hrs</li>
                                </ul>
                            </div>
                        </div>

                        {/* --------------------------- */}
                        <div class="row justify-content-start">
                            <div className="col-3.5">
                            <a href="/pharmacy" class="btn btn-primary">
                            Order Medicines
                </a>
                            </div>

                            <div class="col-1">
                                <div class="spinner-border text-secondary" role="status">
                                    <span class="visually-hidden"></span>
                                </div>
                            </div>

                            <div className="col-5">
                                Last order delivered <b>6 hours 3 mins </b>ago in shivshakti
                chowk, Pune
              </div>
                        </div>
                        {/* ---------------------------------- */}
                    </div>
                </div>
                <div class="col-6 box">
                    <img src={medicine_box} className="medicine-box-img" />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Doctor;
