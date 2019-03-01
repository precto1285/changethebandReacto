import React, { Component } from 'react';
import Header from './SubCompThree.js/Header';



class BandThree extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Galeng'
    }
  }

  changeTitle(title) {
    this.setState({ title })
  }

  render() {
    return (
      <div>
        <Header
          changeTitle={this.changeTitle.bind(this)}
          title={this.state.title}
        />
      </div>
    )
  }


}
export default BandThree;