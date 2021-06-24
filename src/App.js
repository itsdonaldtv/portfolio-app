import React, { Component } from 'react';
import logo from './favicon.ico';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <img src={logo} className="content" alt="logo" />
          <h1>Don Ta</h1>
          <h3>Curious in emerging technologies and how it affects the world we live in</h3>
        </div>
        <p className="App-intro">
          Stay a while... have a chat 
        </p>
      </div>
    );
  }
}

export default App;
