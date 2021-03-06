import React, { Component } from "react";
import "./styles/App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Consult from "./components/Consult";
import Pharmacy from "./components/Pharmacy";
import Diagnostics from "./components/Diagnostics";
import Doctor from "./components/Doctor";
import Profile from "./components/Profile";
import BabyCare from "./components/Baby_Care";
import Conference from "./components/Conference";
import GynacologyProducts from "./components/GynacologyProducts";
import DermatologistProduct from "./components/DermatologistProduct";
import PhysiatristProducts from "./components/PhysiatristProducts";
import PediatricianProducts from "./components/PediatricianProducts";
import GeneralPhysianProduct from "./components/GeneralPhysianProduct";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" exact={true} component={Login} />
          <Route path="/register" exact={true} component={Register} />
          <Route path="/consult" exact={true} component={Consult} />
          <Route path="/pharmacy" exact={true} component={Pharmacy} />
          <Route path="/diagnostics" exact={true} component={Diagnostics} />
          <Route path="/doctors" exact={true} component={Doctor} />

          <Route path="/profile" exact={true} component={Profile} />
          <Route path="/edit-profile" exact={true} component={Profile} />
          <Route path="/medical-records" exact={true} component={Profile} />

          <Route path="/appointments" component={Profile} exact />
          <Route path="/medicine-orders" exact={true} component={Profile} />
          <Route path="/general-physian" exact={true} component={GeneralPhysianProduct} />
          
          <Route
            path="/online-consultations"
            exact={true}
            component={Profile}
          />

          <Route path="/articles" exact={true} component={Profile} />
          <Route path="/feedback" exact={true} component={Profile} />
          <Route path="/baby-care" exact={true} component={BabyCare} />
          <Route
            path="/fitness-and-wellness"
            exact={true}
            component={BabyCare}
          />
          <Route path="/family-care" exact={true} component={BabyCare} />
          <Route path="/personal-care" exact={true} component={BabyCare} />
          <Route path="/conference" exact={true} component={Conference} />
          <Route path="/gynacologyProducts" exact={true} component={GynacologyProducts} />
          <Route path="/dermatologistProduct" exact={true} component={DermatologistProduct} />
          <Route path="/pediatricianProducts" exact={true} component={PediatricianProducts} />
          <Route path="/physiatristProducts" exact={true} component={PhysiatristProducts} />
        </Switch>
      </Router>
    );
  }
}

export default App;
