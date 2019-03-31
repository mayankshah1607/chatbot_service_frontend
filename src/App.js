import React, { Component } from 'react';
import './App.css';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import EventForm from './Pages/EventForm/EventForm';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
              <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/addnew' component={EventForm}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
