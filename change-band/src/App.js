import React, { Component } from 'react';
import './App.css';
import BandOne from './BandOne';
import BandTwo from './BandTwo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BandOne />
        <BandTwo />
      </div>
    );
  }
}

export default App;
