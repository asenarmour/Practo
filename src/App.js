import React, { Component } from 'react';
import './styles/App.css';
import { Route, BrowserRouter as Router,Switch} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login'
import Register from './components/Register';
class App extends Component {
  state = {  }
  render() { 
    return (
        <Router>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/login" exact={true} component={Login}/>
            <Route path="/register" exact={true} component={Register}/>
          </Switch>
        </Router>
      );
  }
}
 
export default App;
