import React, { Component } from 'react';
import './App.css';
import MeetUp from './components/MeetUp/MeetUp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="nav-title"><i className="fab fa-meetup" /> ReactJS Dallas</h1>
        <MeetUp />
      </div >
    );
  }
}

export default App;