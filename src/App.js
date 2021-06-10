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
import Specialist from "./components/Specialist";
import Conference from "./components/Conference";

// import datepicker from './datepicker';
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
          <Route path="/specialist" exact={true} component={Specialist} />
          <Route path="/conference" exact={true} component={Conference} />
        </Switch>
      </Router>
    );
  }
}

export default App;
