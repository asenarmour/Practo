import React from "react";
import Appnav from "./Appnav";
import "../styles/profile.css";
import person_square from "../svg/person-square.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShowProfile from "./ShowProfile";
import EditProfile from "./EditProfile";
import MedicalRecords from "./MedicalRecords";
import Appointments from "./Appointments";
import LabTests from "./LabTests";
import MedicineOrders from "./MedicineOrders";
import OnlineConsultations from "./OnlineConsultations";
import Articles from "./Articles";
import Feedback from "./Feedback";
import Payments from "./Payments";

const Profile = () => {
  return (
    <div>
      <Appnav />

      <Router>
        <div className="container-fluid">
          <div class="row navbar">
            <nav class="navbar navbar-light bg-light col">
              <a class="navbar-brand">Your Drive</a>

              <div className="row">
                <div className="col center">
                  <img src={person_square} className="person-square" />
                </div>
                <div className="col contact-details">
                  <div class="row">Bareet Singh</div>
                  <div class="row">+917055126883</div>
                </div>
              </div>
            </nav>
          </div>

          {/* -------------------------side menu bar----------------------- */}
          <div class="row">
            <div className="col-2 side-bar table">
              <tr>
                <td>
                  <Link to="/profile" tag="a">
                    Profile
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/edit-profile" tag="a">
                    Edit Profile
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/medical-records" tag="a">
                    Medical Records
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/appointments" tag="a">
                    Appointments
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/lab-tests" tag="a">
                    Lab Tests
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/medicine-orders" tag="a">
                    Medicine Orders
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/online-consultations" tag="a">
                    Online Consultations
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/articles" tag="a">
                    Articles
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/feedback" tag="a">
                    Feedback
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/payments" tag="a">
                    Payments
                  </Link>
                </td>
              </tr>
            </div>

            {/* -------------------content box------------------- */}

            <div className="col-10 content-box">
              <Route path="/profile" exact={true} component={ShowProfile} />
              <Route
                path="/edit-profile"
                exact={true}
                component={EditProfile}
              />
              <Route
                path="/medical-records"
                exact={true}
                component={MedicalRecords}
              />
              <Route path="/appointments" component={Appointments} exact />
              <Route path="/lab-tests" exact={true} component={LabTests} />
              <Route
                path="/medicine-orders"
                exact={true}
                component={MedicineOrders}
              />
              <Route
                path="/online-consultations"
                exact={true}
                component={OnlineConsultations}
              />
              <Route path="/articles" exact={true} component={Articles} />
              <Route path="/feedback" exact={true} component={Feedback} />
              <Route path="/payments" exact={true} component={Payments} />
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Profile;
