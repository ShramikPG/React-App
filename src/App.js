import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path = '/login' component = {Login} />
        <Route exact path = '/sign_up' component = {SignUp} />
      </div>
    );
  }
}

export default App;
