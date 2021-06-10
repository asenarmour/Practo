import React from "react";
import "../styles/Specialist.css";
import doc1 from "../images/doc1.jpg";
import Appnav from "./Appnav";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "bootstrap";
import Footer from "./Footer";

const Specialist = (props) => {
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
            </div>
            <div className="special container-fluid">
                <h1>hi,{props.speciality}</h1>
            </div>
            <Footer />
        </div>
    );
};

export default Specialist;
