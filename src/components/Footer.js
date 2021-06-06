import React, { Component } from 'react';
import '../styles/Footer.css';
class Footer extends Component {
    render() { 
        return (  
            <div className="footer">
                <div className="row">
                    <div className="col">
                        <ul>
                            <li><h3><a href="/">AarogyaVat</a></h3></li>
                            <li><a href="#" >About</a></li>
                            <li><a href="#" >Careers</a></li>
                            <li><a href="#" >Press</a></li>
                            <li><a href="#" >Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li><h3><a href="#">For Patients</a></h3></li>
                            <li><a href="#" >Search for doctors</a></li>
                            <li><a href="#" >Search for clinics</a></li>
                            <li><a href="#" >Search for hospitals</a></li>
                            <li><a href="#" >Book daignostic Tests</a></li>
                            <li><a href="#" >Book full body checkups</a></li>
                        </ul>
                    </div>
                    <div className="col">
                    <ul>
                            <li><h3><a href="#">For Doctors</a></h3></li>
                            <li><a href="#" >AarogyaVat Profile</a></li>
                        </ul>
                    </div>
                    <div className="col">
                    <ul>
                            <li><h3><a href="#">For hospitals</a></h3></li>
                            <li><a href="#" >Insta by AarogyaVat</a></li>
                            <li><a href="#" >Qikwell by AarogyaVat</a></li>
                            <li><a href="#" >AarogyaVat Profile</a></li>
                            <li><a href="#" >AarogyaVat Reach</a></li>
                            <li><a href="#" >AarogyaVat Drive</a></li>
                        </ul>
                    </div>
                    <div className="col">
                    <ul>
                            <li><h3><a href="#">More</a></h3></li>
                            <li><a href="#" >Devlopers</a></li>
                            <li><a href="#" >Privacy Policy</a></li>
                            <li><a href="#" >Terms and conditions</a></li>
                            <li><a href="#" >HealthCare Directory</a></li>
                            <li><a href="#" >AarogyaVat Health wiki</a></li>
                            <li><a href="#" >Corporate Wellness</a></li>
                        </ul>
                    </div>
                    <div className="col">
                    <ul>
                            <li><h3><a href="#">Social</a></h3></li>
                            <li><a href="#" >Facebook</a></li>
                            <li><a href="#" >Twitter</a></li>
                            <li><a href="#" >LinkedIn</a></li>
                            <li><a href="#" >Youtube</a></li>
                            <li><a href="#" >Github</a></li>
                        </ul>
                    </div>
                </div>
                <div className="below">
                    <h1>AarogyaVat</h1>
                    <h4>Copyright &copy; , AarogyaVat,All rights reserved</h4>
                </div>
            </div>
        );
    }
}
 
export default Footer;