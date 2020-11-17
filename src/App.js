import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

function App() {
  return (
    <div className="App">
      Hello React!
    </div>
  );
}

export default App;

import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <h1>Learning React</h1>
      Hello World!
    </div>
  );
}

export default App;

<div className="App">
      <Navbar />
    </div>

