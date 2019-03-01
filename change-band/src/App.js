import React, { Component } from 'react';
import './App.css';
import BandOne from './BandOne';
import BandTwo from './BandTwo';
import BandThree from './BandThree';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BandOne />
        <BandTwo />
        <BandThree />
      </div>
    );
  }
}

export default App;
