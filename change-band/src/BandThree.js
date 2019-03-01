import React, { Component } from 'react';
import Title from './SubCompThree.js/Title';

class BandThree extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Galeng'
    }
  }
  render() {
    return (
      <div>
        <Title title={this.state.title} />
        <p>Instructions: Add your super awesome band name!</p>
        <input />
      </div>
    )
  }
}
export default BandThree;