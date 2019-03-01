import React, { Component } from 'react';
import Title from './SubCompThree.js/Title';

class BandThree extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Galeng'
    }
  }

  changeTitle(title) {
    this.setState({ title });
  }
  render() {
    return (
      <div>
        <Title changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
      </div>
    )
  }

}
export default BandThree;