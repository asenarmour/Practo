import React, { Component } from 'react';
import './styles/App.css';
import { Route, BrowserRouter as Router,Switch} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login'
import Register from './components/Register';
import Doctor from './components/Doctor';
class App extends Component {
  state = {  }
  render() { 
    return (
        <Router>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/login" exact={true} component={Login}/>
            <Route path="/register" exact={true} component={Register}/>
            <Route path="/doctor" exact={true} component={Doctor}/>
          </Switch>
        </Router>
      );
  }
}
 
export default App;
