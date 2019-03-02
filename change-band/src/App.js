import React, { Component } from 'react';
import './App.css';
import BandOne from './BandOne';
import BandTwo from './BandTwo';
import BandThree from './BandThree';
import BandFour from './BandFour';
import BandFive from './BandFive';
import BandSix from './BandSix';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container my-5">
          <div className="jsumbotron py-5">
            <h1>My First React App</h1>
          </div>
          <br />
          <hr />
          <div className="row">
            <div className="col-md-6">
              <div className="card my-3">
                <BandOne />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card my-3">
                <div className="card-header"></div>
                <div className="card-body"><BandTwo />
                </div>
              </div>
            </div>
          </div>
          <br />
          <hr />
          <div className="row">
            <div className="col-md-6">
              <div className="card my-3">
                <div className="card-header" />
                <div className="card-body">
                  <BandThree />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card my-3">
                <div className="card-header" />
                <div className="card-body">
                  <BandFour />
                </div>
              </div>
            </div>
          </div>
          <br />
          <hr />
          <div className="row">
            <div className="col-md-6 py-3">
              <div className="card">
                <BandFive />
              </div>
            </div>
            <div className="col-md-6 py-3">
              <div className="card">
                <BandSix />
              </div>
            </div>
          </div>
          <br />
          <hr />
        </div>
      </div>
    );
  }
}

export default App;
