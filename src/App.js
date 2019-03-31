import React, { Component } from 'react';
import './App.css';
import Login from './Pages/Login/Login';
import Main from './Pages/Main/Main';
import EventForm from './Pages/EventForm/EventForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
      </div>
    );
  }
}

export default App;
