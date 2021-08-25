import React, { Component } from 'react';
import Mail from './components/Mail';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import History from './components/History';
import Landing from './components/Landing';
import Schedule from './components/Schedule';
import ForgotPassword from './components/ForgotPassword'

import {
  BrowserRouter as Router,
  Route,
  // Link,
  Switch
} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
              <Route exact path='/' component={Landing}></Route>
              <Route exact path='/mail' component={Mail}></Route>
              <Route exact path='/login' component={Login}></Route>
              <Route exact path='/signup' component={Signup}></Route>
              <Route exact path='/Home' component={Home}></Route>
              <Route exact path='/history' component={History}></Route>
              <Route exact path='/schedule' component={Schedule}></Route>
              <Route exact path='/forgotpassword' component={ForgotPassword}></Route>
            </Switch>
        </Router>
    );
  }
}

export default App;