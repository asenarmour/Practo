import React from "react";
import Appnav from "./Appnav";
import "../styles/Doctor.css";
import chat_svg from '../svg/chat.svg';
import cart_svg from '../svg/cart.svg';
import records_svg from '../svg/records.svg';
import book_test from '../svg/book_test.svg';
import health from '../svg/health.svg';
import read from '../svg/read.svg';
import check from '../svg/check.svg';
import encrypt from '../svg/encrypt.svg';
import certified from '../svg/certified.svg';
import data from '../svg/data.svg';
import security from '../images/security.jpeg';
import cartoon from '../images/cartoon.webp';

import { FormControl, Form, Button } from "react-bootstrap";
import { GeoAlt } from "react-bootstrap-icons";

const Doctor = () => {
    return (
        <div>
            <Appnav />
            <div className="upside">
                <div className="container ">
                    <h1>Your home for health</h1>
                </div>
                <div className="container">
                    <h3>Find and Book</h3>
                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="Search Doctors,clinics,hospitals etc"
                            className="mr-sm-2"
                        />
                        <Button variant="primary">
                            <GeoAlt /> Delhi
                        </Button>
                    </Form>
                    <div>
                        <ul className="container doctor-list">
                            <li><a href="#">Popular Searches:</a></li>
                            <li><a href="#">Dermatologist</a></li>
                            <li><a href="#">Pediatrician</a></li>
                            <li><a href="#">Gynecologist/Obstetrician</a></li>
                            <li>Others</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* ------------          Section 2       -------------------------- */}
            <div className="below-one">
                <ul class="nav nav-pills">
                    <li >
                        <a href="#">
                            <div className="card " >
                                <div className="card-body card-below">
                                    <img src={chat_svg} />
                                    <h5 className="card-title">Chat with Doctor</h5>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li >
                        <a href="#">
                            <div className="card " >
                                <div className="card-body card-below">
                                    <img src={cart_svg} />
                                    <h5 className="card-title">Order Medicine</h5>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li >
                        <a href="#">
                            <div className="card " >
                                <div className="card-body card-below">
                                    <img src={records_svg} />
                                    <h5 className="card-title">View All Records</h5>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li >
                        <a href="#">
                            <div className="card " >
                                <div className="card-body card-below">
                                    <img src={book_test} />
                                    <h5 className="card-title">Book Test</h5>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li >
                        <a href="#">
                            <div className="card " >
                                <div className="card-body card-below">
                                    <img src={read} />
                                    <h5 className="card-title">Read All Articles</h5>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li >
                        <a href="#">
                            <div className="card " >
                                <div className="card-body card-below">
                                    <img src={health} />
                                    <h5 className="card-title">For HealthCare Providers</h5>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            {/* ----------------------               Section 3            ------------------ */}

            <div className="section-3 container-fluid">
                <div className="row">
                    <div className="col-md-6 section-3-first">
                        <img src={security} />
                    </div>
                    <div className="col-md-6 section3-second">
                        <h3>Safety of your data is our</h3><h1> top priority.</h1>
                        <h5><img src={check} /> Multilevel Security checks</h5>
                        <h5><img src={check} /> Multiple Data Backups</h5>
                        <h5><img src={check} /> Stringent data privacy policies</h5>
                        <button type="button" class="btn btn-primary">Read More</button>
                    </div>
                </div>
                <div className="row container">
                    <div className="col-md-4 section-3-third">
                        <img src={certified} />
                        <h5>ISO 27001 certified</h5>
                    </div>

                    <div className="col-md-4 section-3-third" >
                        <img src={encrypt}/>
                        <h5>256 bit encryption</h5>
                    </div>
                    
                    <div className="col-md-4 section-3-third">
                        <img src={data} />
                        <h5>HIPAA compliant data centers</h5>
                    </div>
                </div>
            </div>

            {/* -----------------------------           Section 4          -------------------- */}

            <div className="section-4 container-fluid">
                <div className="row">
                    <div className="section-4-first col-md-6">
                        <img src={cartoon} alt="" />
                    </div>
                    <div className="section-4-second col-md-6">
                        <h1>Get all your medicines.</h1>
                        <h2>Everytime. On time.</h2>
                        <h5><img src={check} /> Guaranteed availability</h5>
                        <h5><img src={check} /> Over 130,000+ genuine medicines</h5>
                        <h5><img src={check} /> Home delivery in 24hrs</h5>
                        <button type="button" class="btn btn-primary">Order Medicine</button><div class="spinner-grow text-success"></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Doctor;
