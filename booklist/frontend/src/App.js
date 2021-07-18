import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Login from './screens/Login';
import Register from './screens/Register';
import Profile from './screens/Profile';
import EditProfile from './screens/EditProfile';
import Createbook from './screens/Createbook';
import Viewbooklist from './screens/Viewbooklist';
import Singlebook from './screens/Singlebook';
import Editsinglebook from './screens/Editsinglebook';


 class App extends Component {
  render() {
    return (
      <Router>
          <Route path="/" exact component={Login} />
          <Route path="/Login"  component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/Profile" component={Profile} />
          <Route path="/EditProfile" component={EditProfile} />
          <Route path="/Createbook" component={Createbook} />
          <Route path="/Viewbooklist" component={Viewbooklist} />
          <Route path="/Singlebook" component={Singlebook} />
          <Route path="/Editsinglebook" component={Editsinglebook} />
      </Router>
   
    )
  }
}


export default App;
