import React, { Component } from 'react';
import Appnav from './Appnav'
import conference from '../images/conference.webp';
import  '../styles/Home.css';
import {FormControl,Form,Button} from 'react-bootstrap';
import doctor1 from '../images/doctor1.jpeg';
import doctor2 from '../images/doctor2.jpeg';
import pimples from '../images/pimples.jpeg';
import depression from '../images/depression.jpeg';
import cough from '../images/cough.jpeg';
import child from '../images/child.jpeg';
import dentist from '../images/dentist.webp';
import gynecologist from '../images/gynecologist.webp';
import surgeon from '../images/surgeon.webp';
import nutrition from '../images/nutrition.jpeg';
import Slider from './Slider';
import Footer from './Footer'
import { GeoAlt,Search } from 'react-bootstrap-icons';


class Home extends Component {

    render() { 
        return (
            
            <div >
                <Appnav/>
                <div className="center ">
                    <Form inline>
                    
                    <FormControl type="text" placeholder="Search Doctors,clinics,hospitals etc" className="mr-sm-2" />
                    <Button variant="primary"><GeoAlt /> Delhi</Button>
                    </Form>
                </div>

{/* ----------------------------------         first section     ------------------------------------------- */}
                
                <div className="first-sec">
                    <div className="row offset-1">
                        <div className="col-md-5 ">
                            <h3>Goodbye doubts,</h3><br/>
                            <h1>Say Hello Doctor.</h1><br/>
                            <hr/>
                            <h3>24/7 Video Consultation</h3>
                        </div>
                        <div className="col-md-5 ">
                        <img src={conference} alt="conference"  />
                        </div>
                    </div>
                </div>
                
{/* ---------------------------------         Second Section             --------------------- */}
                
                
                <div className="second-sec container">
                    <div className="row">
                        <div className="col-md-3 doc1">
                            <img src={doctor1} alt="doctor" />    
                        </div>
                        <div className="col-md-3 doc-text">
                            <h3>Find Doctors Near you</h3>
                            <p>Select prefered doctor and time slot to book an inclinic or video consultation
                            </p>
                            <Button variant="primary">Find Doctor Now</Button>
                        </div>
                        <div className="col-md-3 doc1">
                            <img src={doctor2} alt="doctor" />    
                        </div>
                        <div className="col-md-3 doc-text">
                            <h3>Doctors Online Now</h3>
                            <p>Tell Us your health concern and we will assign you a doctor in 60secs.
                            </p>
                            <Button variant="info">Start Consulting</Button>
                        </div>
                    </div>
                </div>

            {/*--------------------- third Section------------------- */}

                <div className="third-sec-text-one container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Consult top doctors online for any health concern</h3><br></br>
                            <p>Private online consultations with verified doctors in all specialists</p>
                        </div>
                        <div className="col-md-6">
                            <Button variant="primary">View All Specialities</Button>
                        </div>
                    </div>
                </div>
                <div className="third-sec container">
                    <div className="row">
                        <div className="col">
                            <img src={pimples} alt="doctor" />  
                            <h5>Acne,Pimples</h5><h5>or skin issue</h5>
                            <a href="#"><b>Consult Now</b></a>
                        </div>
                        <div className="col">
                            <img src={child} alt="doctor" /> 
                            <h5>Child not feeling</h5><h5>well</h5>
                            <a href="#"><b>Consult Now</b></a>
                        </div>
                        <div className="col">
                            <img src={cough} alt="doctor" />  
                            <h5>Cough,Cold</h5><h5>or fever</h5>
                            <a href="#"><b>Consult Now</b></a>
                        </div>
                        <div className="col">
                            <img src={depression} alt="doctor" />
                            <h5>Depression or</h5><h5>Anxiety</h5>
                            <a href="#"><b>Consult Now</b></a>
                        </div>
                    </div>
                </div>
            
{/* -=---------------------------              Fourth Section           ------------------------------------ */}
            <div className="fourth-sec container-fluid">
                <h2>Book an appointment for an in-clinic consultation</h2>
                <h5>Find experienced doctors across all specialties</h5>
            </div>
            <div className="fourth-sec container-fluid">
                <div className="row">
                    
                    <div className="col-md-3">
                    <img src={dentist} alt="doctor" />
                    <a href="#"><h4>Dentist</h4></a>
                    <p>Theeting troubles? Schedule a dental checkup</p>
                    </div>

                    <div className="col-md-3">
                    <img src={gynecologist} alt="doctor" />
                    <a href="#"><h4>Gynecologist/Obstetrician</h4></a>
                    <p>Explore for women's health,pregnancy and infertility treatments</p>
                    </div>

                    <div className="col-md-3">
                    <img src={surgeon} alt="doctor" />
                    <a href="#"><h4>Surgeon</h4></a>
                    <p>Need to get operated? find the right surgeon</p>
                    </div>

                    <div className="col-md-3">
                    <img src={nutrition} alt="doctor" />
                    <a href="#"><h4>Nutrition</h4></a>
                    <p>Get guidance on eating right, weight management and sports nutrition</p>
                    </div>
                </div>
            </div>

{/* -----------------------------                 Fifth Section         ------------------------- */}

            <div className="fifth-sec container-fluid">
                <h1>What our Users have to say</h1>
                <Slider/>
            </div>
{/* ------------------            Sixth Section                --------------------- */}

            <Footer/>
            </div>
        );
    }
}
 
export default Home;